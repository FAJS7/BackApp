const connectDB = require("../config/db");

const getExamples = async () => {
  const connection = await connectDB();
  const [rows] = await connection.execute("SELECT * FROM examples");
  return rows;
};

module.exports = { getExamples };
