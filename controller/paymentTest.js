const fs = require('fs');
module.exports.paymentTest = async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    // Convert the data to a string (JSON) and append to a log file
    fs.appendFileSync('payment.log', JSON.stringify(data) + '\n', 'utf8');
    const existingLog = JSON.parse(fs.readFileSync('payment.log.json', 'utf8'))|| [];
    existingLog.push(data);
    fs.writeFileSync('payment.log.json', JSON.stringify(existingLog, null, 2), 'utf8');
    return res.status(200).json({ message: 'success' });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
