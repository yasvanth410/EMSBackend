const certificateInfo = `
type Certificate{
    _id : String
    CertificateName: String
    Description: String
    CompletedDate: String
    CreatedBy: String
    CreatedDate: String
    UpdatedBy: String
    UpdatedDate: String
    IsActive: Int
    IsDeleted: Int
}

input CertificateInput{
    CertificateName: String
    Description: String
    CompletedDate: String
    CreatedBy: String
    CreatedDate: String
    UpdatedBy: String
    UpdatedDate: String
    IsActive: Int
    IsDeleted: Int
}
`;

const createCertificateInfo = `
createCertificate(
    CertificateName: String
    Description: String
    CompletedDate: String
    CreatedBy: String
  ): Certificate
  `;

module.exports = { certificateInfo, createCertificateInfo };
