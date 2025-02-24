const fs = require("fs");
module.exports.paymentTest = async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    // Convert the data to a string (JSON) and append to a log file
    fs.appendFileSync("payment.log", JSON.stringify(data) + "\n", "utf8");
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
