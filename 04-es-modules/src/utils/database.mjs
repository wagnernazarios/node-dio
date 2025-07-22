const databaseType = {
    userType: "admin",
    dataType: "local",
}

async function connectToDatabase(dataName) {
    console.log(`Connecting to the database ${dataName}`);
}

async function disconnetDatabase() {
    console.log('Disconnecting from the database');
}

export { connectToDatabase, disconnetDatabase, databaseType };