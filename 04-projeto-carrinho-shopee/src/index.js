import createItemWithSubtotal from './services/itens.js';
import * as cartService from './services/cart.js';

const myCart = [];
const myWishList = [];

console.log("Welcome to the your Shopee Cart!");

const item1 = await createItemWithSubtotal("Macbook", 10900.99, 1)
const item2 = await createItemWithSubtotal("teclado", 30.99, 4)


await cartService.addItemToCart(myCart, item1);
await cartService.addItemToCart(myWishList, item2);

await

    console.log("Shopee Cart Total Items:");
cartService.calculateTotalCart(myCart)
