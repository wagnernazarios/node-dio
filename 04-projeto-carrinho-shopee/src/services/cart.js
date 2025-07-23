

//Assinaturas do metodos é voce criar uma função mas não implementar ela de começo, apenas o nome e só depois definir a estrutura dela.

// Oque o meu carrinho pode fazer?(casos de uso ou funcionalidades)

//Casos de uso:

//  ✅- Adicionar um item ao carrinho
async function addItemToCart(userCart, item) {
    userCart.push(item);

}

// ✅- Remover um item do carrinho

// A função removeItemFromCart recebe o carrinho do usuário e o índice do item a ser removido
// O índice é baseado em 1, então o usuário verá os itens numerados a partir of 1

async function removeItemFromCart(userCart, indexItem) {
    // Verifica se o índice é válido
    const indexFound = userCart.findIndex((p) => p.name == indexItem.name);


    //sair do método se o índice for inválido
    if (indexFound == -1) {
        console.log("Item not found in cart.");
        return;
    }

    // subtrair um item do carrinho se ele for maior que 1 e deletar se ele for igual a 1
    if (userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity--;
        return;
    }

    if (userCart[indexFound].quantity == 1) {
        userCart.splice(indexFound, 1);
        return;
    }

}


async function deleteItemFromCart(userCart, nameItem) {
    const indexItem = userCart.findIndex(item => item.name === nameItem);
    if (indexItem !== -1) {
        userCart.splice(indexItem, 1);
    }
}

// ✅ - Calcular o total do carrinho

// A função calculateTotalCart recebe o carrinho do usuário e calcula o total de todos os itens
// Ela usa o método reduce para somar os subtotais de cada item no carrinho

async function calculateTotalCart(userCart) {
    console.log(userCart.reduce((total, item) => total + item.subtotal(), 0));
}


// ✅- mostrar os itens do carrinho

// A função displayCart recebe o carrinho do usuário e exibe os detalhes de cada item
// Ela itera sobre o carrinho e imprime o nome, preço, quantidade e subtotal de cada item
// O subtotal é calculado chamando o método subtotal() de cada item 

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

