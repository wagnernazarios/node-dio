//Assinaturas do metodos é voce criar uma função mas não implementar ela de começo, apenas o nome e só depois definir a estrutura dela.

// Oque o meu carrinho pode fazer?(casos de uso ou funcionalidades)

//Casos de uso:

//  ✅- Adicionar um item ao carrinho
async function addItemToCart(userCart, item) {
    userCart.push(item);
}

// - Remover um item do carrinho
async function removeItemFromCart(userCart, indexItem) { }

// - deletar os itens do carrinho
async function deleteItemFromCart(userCart, nameItem) { }

// ✅ - Calcular o total do carrinho
async function calculateTotalCart(userCart) {
    console.log(userCart.reduce((total, item) => total + item.subtotal(), 0));
}

export {
    addItemToCart,
    removeItemFromCart,
    calculateTotalCart
}

