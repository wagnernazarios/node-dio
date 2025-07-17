// destructuring
const { getFullName, productType } = require('./services/products');

const config = require('./services/config');
const database = require('./services/database');

async function main() {
    // console.log("Carrino de compras iniciado.");
    // p.getFullName(1, "Camiseta");
    // p.getFullName(405, "Mausepad");
    // p.productName("Tênis Esportivo");
    getFullName(1, "Camiseta");
    database.connectToDatabase("Users");
};

main();

