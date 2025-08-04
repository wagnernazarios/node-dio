import chalk from "chalk";
import qr from "qrcode-terminal";

async function handler(err, result) {
    if (err) {
        console.log(chalk.red("Error on application!!"));
        return;
    }
    const isSmall = result.type == 2;

    qr.generate(result.link, { small: isSmall }, (qrcode) => {
        console.log(chalk.green("QR Code gerado com sucesso:\n"));
        console.log(qrcode);
    })

}

export default handler;