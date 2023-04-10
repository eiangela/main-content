import { defineStore } from 'pinia'
import { ref } from 'vue';

export const useProductsStore = defineStore('products', () => {
    let products = [];

    products.value = [
        { category: '1', name: 'product 1.1', price: 1.10, quantity: 10, image: 'https://bit.ly/3nGyLir', isAvailable: true},
        { category: '2', name: 'product 2.1', price: 2.10, quantity: 10, image: 'https://bit.ly/3nGyLir', isAvailable: true},
        { category: '4', name: 'product 4.1', price: 4.10, quantity: 10, image: 'https://bit.ly/3nGyLir', isAvailable: true},
        { category: '5', name: 'product 5.1', price: 5.10, quantity: 10, image: 'https://bit.ly/3nGyLir', isAvailable: true},
        { category: '2', name: 'product 2.1', price: 2.10, quantity: 10, image: 'https://bit.ly/3nGyLir', isAvailable: true},
        { category: '3', name: 'product 3.1', price: 3.10, quantity: 10, image: 'https://bit.ly/3nGyLir', isAvailable: true},
        { category: '5', name: 'product 5.1', price: 5.10, quantity: 10, image: 'https://bit.ly/3nGyLir', isAvailable: true},
        { category: '1', name: 'product 1.1', price: 1.10, quantity: 10, image: 'https://bit.ly/3nGyLir', isAvailable: true},
        { category: '1', name: 'product 1.1', price: 1.10, quantity: 10, image: 'https://bit.ly/3nGyLir', isAvailable: true},
        { category: '4', name: 'product 4.1', price: 4.10, quantity: 10, image: 'https://bit.ly/3nGyLir', isAvailable: true},
        { category: '5', name: 'product 5.1', price: 5.10, quantity: 10, image: 'https://bit.ly/3nGyLir', isAvailable: true},
        { category: '1', name: 'product 1.1', price: 1.10, quantity: 10, image: 'https://bit.ly/3nGyLir', isAvailable: true},
        { category: '6', name: 'product 6.1', price: 6.10, quantity: 10, image: 'https://bit.ly/3nGyLir', isAvailable: true},
        { category: '6', name: 'product 6.1', price: 6.10, quantity: 10, image: 'https://bit.ly/3nGyLir', isAvailable: true},
        { category: '1', name: 'product 1.1', price: 1.10, quantity: 10, image: 'https://bit.ly/3nGyLir', isAvailable: true},
        { category: '4', name: 'product 4.1', price: 4.10, quantity: 10, image: 'https://bit.ly/3nGyLir', isAvailable: true},
        { category: '6', name: 'product 6.1', price: 6.10, quantity: 10, image: 'https://bit.ly/3nGyLir', isAvailable: true},
        { category: '1', name: 'product 1.1', price: 1.10, quantity: 10, image: 'https://bit.ly/3nGyLir', isAvailable: true},
        { category: '2', name: 'product 2.1', price: 2.10, quantity: 10, image: 'https://bit.ly/3nGyLir', isAvailable: true},
        { category: '4', name: 'product 4.1', price: 4.10, quantity: 10, image: 'https://bit.ly/3nGyLir', isAvailable: true},
        { category: '3', name: 'product 3.1', price: 3.10, quantity: 10, image: 'https://bit.ly/3nGyLir', isAvailable: true},
        { category: '6', name: 'product 6.1', price: 6.10, quantity: 10, image: 'https://bit.ly/3nGyLir', isAvailable: true},
        { category: '1', name: 'product 1.1', price: 1.10, quantity: 10, image: 'https://bit.ly/3nGyLir', isAvailable: true},
        { category: '2', name: 'product 1.1', price: 1.10, quantity: 10, image: 'https://bit.ly/3nGyLir', isAvailable: true},
        { category: '3', name: 'product 3.1', price: 3.10, quantity: 10, image: 'https://bit.ly/3nGyLir', isAvailable: true},
    ];



    return { products }
})