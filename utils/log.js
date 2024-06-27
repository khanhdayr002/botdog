
const chalk = require('chalk');

module.exports = (data, option) => {
  switch (option) {
    case "warn":
      console.log(chalk.bold.hex("#FFFF00")('[ WARN ] > ') + data);
      break;
    case "error":
      console.log(chalk.bold.hex("#FF0000")('[ ERROR ] > ') + data);
      break;
    default:
      console.log(chalk.bold.hex("0000FF")(`${option} > `) + data);
      break;
  }
}

module.exports.loader = (data, option) => {
  switch (option) {
    case "warn":
      console.log(chalk.bold.hex("#FFFF00")('[ WARN ] > ') + data);
      break;
    case "error":
      console.log(chalk.bold.hex("#FF0000")('[ ERROR ] > ') + data);
      break;
    default:
      console.log(chalk.bold.hex("#0000FF")('[ LOADING ] > ') + data);
      break;
  }
}