async function connectFromDatabase(user, password) {
    if (user === process.env.USERDATABASE && password === process.env.PASSWORD) {
        console.log("Conexão com o banco de dados estabalecida")
    } else {
        console.log("Falha na conexão")
    }
}


export default connectFromDatabase;