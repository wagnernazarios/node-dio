//Assinaturas do metodos é voce criar uma função mas não implementar ela de começo, apenas o nome e só depois definir a estrutura dela.

// Oque o meus itens podem fazer?(casos de uso ou funcionalidades)

//Casos de uso:

// - criar um item com subtotal correto
export default async function createItemWithSubtotal(name, price, quantity) {
    return {
        name,
        price,
        quantity,
        subtotal: () => price * quantity
    }
}