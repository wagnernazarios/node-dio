import connectFromDatabase from "./database/data.js";

async function main() {
    // console.log(process.env.USERDATABASE)
    await connectFromDatabase(process.env.USERDATABASE, process.env.PASSWORDDATABASE)

}

main();