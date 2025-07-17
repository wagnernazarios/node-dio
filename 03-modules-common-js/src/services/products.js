const productType = {
    version: '1.0',
    tax: 0.2,
}

async function getFullName(codeID, productName) {
    console.log('\n')
    console.log(`Produto ${codeID} - ${productName}`);
    await doBreakLine();
}

//hidden members
async function doBreakLine() {
    console.log("\n");
}

async function getProductLabel(productName) {
    console.log("\n")
    console.log(`Nome do produto: ${productName}`);
}

// multiple exports 
module.exports = {
    getFullName,
    getProductLabel,
    productType
}
