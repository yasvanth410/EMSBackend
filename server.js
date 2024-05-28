require("dotenv").config();
const express = require("express");
const DBConnection = require("./dbConnection");
const { expressMiddleware } = require("@apollo/server/express4");
const cors = require("cors");
const { typeDefs } = require("./models/typeDefs");
const { ApolloServer } = require("@apollo/server");
const { resolvers } = require("./resolvers");
const CustomError = require("./errorHandler/customError");
const errorHandle = require("./errorHandler/errorHandler");
const saveErrorLogs = require("./dbHandler/errorLogs");
const bodyParser = require("body-parser");
const multer = require("multer");

const app = express();
const port = process.env.PORT;

// Middlewares
app.use(bodyParser.json());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    formatError: async (error) => {
      // console.log("ErrorName: ", error.extensions.code, "ErrorStatus: ", error.status ||500, "ErrorMessage: ", error.message, "ErrorStack", error.extensions.stacktrace);
      console.log(error);
      const date = new Date();
      const sendErrors = {
        ErrorName: error.extensions.code,
        StatusCode: error.status || 500,
        Description: error.message,
        StackTrace: error.extensions.stacktrace,
        CreatedDate:
          date.toLocaleDateString() + " " + date.toLocaleTimeString(),
        IsDeleted: 0,
      };
      const errorJson = await saveErrorLogs(sendErrors);
      //    console.log(errorJson);
      return error;
    },
  });

  await server.start();
  app.use(cors());
  app.use(express.json());

  // Middleware to handle file uploads in GraphQL
  app.use("/graphql", upload.single("input.Photo"), expressMiddleware(server));

  app.get("/favicon.ico", (req, res) => res.status(204));

  app.all("*", (req, res, next) => {
    const err = new CustomError(
      `can't find ${req.originalUrl} on the server!`,
      404
    );
    next(err);
  });

  app.use(errorHandle);

  app.listen(port, () => {
    DBConnection();
    const date = new Date();

    console.log(`server started at port ${port}`);
  });
}

startServer();
