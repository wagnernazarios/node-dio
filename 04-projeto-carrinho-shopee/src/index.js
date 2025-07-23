import createItemWithSubtotal from './services/itens.js';
import * as cartService from './services/cart.js';

const myCart = [];
const myWishList = [];

console.log("Welcome to the your Shopee Cart!");


//criando os itens com subtotal
//O subtotal é calculado dentro do item, então não precisamos passar ele aqui
const item1 = await createItemWithSubtotal("Macbook", 100.99, 2)
const item2 = await createItemWithSubtotal("teclado", 30.99, 4)

//Adicionando os itens ao carrinho

await cartService.addItemToCart(myCart, item1);
await cartService.addItemToCart(myCart, item2);

//Removendo um item do carrinho
await cartService.removeItemFromCart(myCart, item2);


// método para mostrar os itens do carrinho
await cartService.displayCart(myCart);

// exibindo o total do carrinho
console.log("Shopee Cart Total Items:");
await cartService.calculateTotalCart(myCart)