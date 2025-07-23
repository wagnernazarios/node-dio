import createItemWithSubtotal from './services/itens.js';
import * as cartService from './services/cart.js';

const myCart = [];
const myWishList = [];

console.log("Welcome to the your Shopee Cart!");

const item1 = await createItemWithSubtotal("Macbook", 100.99, 2)
const item2 = await createItemWithSubtotal("teclado", 30.99, 4)


await cartService.addItemToCart(myCart, item1);
await cartService.addItemToCart(myCart, item2);


await cartService.removeItemFromCart(myCart, 1);

await cartService.calculateTotalCart(myCart)
await cartService.displayCart(myCart);


console.log("Shopee Cart Total Items:");
await cartService.calculateTotalCart(myCart)