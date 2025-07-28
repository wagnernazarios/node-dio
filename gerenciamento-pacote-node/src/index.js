import chalk from 'chalk';
import logSymbols from "log-symbols";

console.log(logSymbols.success, chalk.blue.bgGreenBright.italic('Hello, world!'));
console.log(logSymbols.error, chalk.red.bgRedBright.italic('ERROR!'));

console.log(logSymbols.success, "Mensagem realizada com sucesso")