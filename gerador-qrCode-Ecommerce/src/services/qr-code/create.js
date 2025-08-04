import prompt from "prompt";
import promptQrCode from "../../prompts/prompt-qrcode.js";
import handler from "./handle.js";

async function createQRCode() {
    prompt.get(promptQrCode, handler);

    prompt.start();

}

export default createQRCode;