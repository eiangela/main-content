import { defineStore } from 'pinia'
import { ref } from 'vue';

export const useCartStore = defineStore('cart', () => {
    let cart = [];

    /**
     * cart  = [
     * {}
     * ]
     */
    
    function addCart(productId) {
        console.log(productId);
        return true;
    }
    
    function updateQtdeCart() {}
    function deleteCart() {}

    return { cart, addCart, updateQtdeCart, deleteCart }
});