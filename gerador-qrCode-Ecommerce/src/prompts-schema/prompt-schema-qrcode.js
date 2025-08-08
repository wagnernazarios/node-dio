import chalk from "chalk";

const promptQrCode = [
    {
        name: "link",
        description: chalk.yellow("digite o link para gerar o QR Code")
    }, {
        name: "type",
        description: chalk.yellowBright("Escolha entre os tipos de QR Code: (1 - NORMAL 2(- TERMINAL"),
        pattern: /^[1-2]+$/,
        message: chalk.red.bold("Escolha somente entre 1 e 2"),
        required: true
    }

]


export default promptQrCode;

