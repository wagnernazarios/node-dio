import permittedCharacters from "./utils/permitted-characters.js";

async function handler() {
    let password = "";
    let characters;

    const passwordLength = process.env.PASSWORD_LENGTH;
    characters = await permittedCharacters();

    for (let i = 0; i < passwordLength; i++) {
        let index = Math.floor(Math.random() * characters.length)
        password += characters[index]
    }

    return password;
}

export default handler 