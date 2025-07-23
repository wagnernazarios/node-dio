//Assinaturas do metodos é voce criar uma função mas não implementar ela de começo, apenas o nome e só depois definir a estrutura dela.

// Oque o meu carrinho pode fazer?(casos de uso ou funcionalidades)

//Casos de uso:

//  ✅- Adicionar um item ao carrinho
async function addItemToCart(userCart, item) {
    userCart.push(item);

}

// ✅- Remover um item do carrinho
async function removeItemFromCart(userCart, indexItem) {
    const deleteIndex = indexItem - 1;
    // Ajusta o índice para corresponder ao array (começa em 0)

    if (indexItem >= 0 && indexItem < userCart.length) {
        userCart.splice(deleteIndex, 1);
    }
}

// ✅- deletar os itens do carrinho
async function deleteItemFromCart(userCart, nameItem) {
    const indexItem = userCart.findIndex(item => item.name === nameItem);
    if (indexItem !== -1) {
        userCart.splice(indexItem, 1);
    }
}

// ✅ - Calcular o total do carrinho
async function calculateTotalCart(userCart) {
    console.log(userCart.reduce((total, item) => total + item.subtotal(), 0));
}


// ✅- mostrar os itens do carrinho
async function displayCart(userCart) {
    console.log("\n\nItems in your cart:");
    userCart.forEach((item, index) => {
        console.log(`\n${index + 1} \nItem: ${item.name}, \nPrice: ${item.price}, \nQuantity: ${item.quantity}, \nSubtotal =  ${item.subtotal()}
        `)
    })
}

export {
    addItemToCart,
    removeItemFromCart,
    calculateTotalCart,
    deleteItemFromCart,
    displayCart
}

