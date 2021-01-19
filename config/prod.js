module.exports = {
  mongoUrl: process.env.MONGO_URL,
  jwtSecret: process.env.JWT_SECRET,
  maxFileUpload: process.env.MAX_FILE_UPLOAD,
  fileUploadPath: process.env.FILE_UPLOAD_PATH,
  resumeFilePath: process.env.RESUME_FILE_PATH,
  cookieKey: process.env.COOKIE_KEY,
};
