// exports default
exports.connectToDatabase = (dataName) => {
    console.log("Conectando ao banco de dados " + dataName);
}

// exports default async 
exports.disconnectFromDatabase = async () => {
    console.log("Desconectando do banco de dados...");
}