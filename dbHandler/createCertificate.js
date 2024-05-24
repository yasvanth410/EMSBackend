const Certificate = require("../models/certificate");

async function saveCertificate(args) {
  // console.log(args);
  try {
    const { CertificateName, Description, CompletedDate, CreatedBy } = args;

    const date = new Date();
    const saveInfo = new Certificate({
      CertificateName: CertificateName,
      Description: Description,
      CompletedDate: CompletedDate,
      CreatedBy: CreatedBy,
      CreatedDate: date.toLocaleDateString() + " " + date.toLocaleTimeString(),
    });
    // console.log(saveInfo)
    const savedDate = await saveInfo.save();
    if (!savedDate || savedDate.length === 0) {
      savedDate.Message = "";
    }
    return savedDate;
  } catch (error) {
    throw error;
  }
}

module.exports = saveCertificate;
