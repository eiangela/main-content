import { defineStore } from 'pinia'
import { ref } from 'vue';

export const useProductsStore = defineStore('products', () => {
    let productsAll = [];
    let productsFilter = [];

    productsAll.value = [
        { id: 1, category: '1', name: 'product 1.1', price: 1.10, quantity: 10, image: 'https://bit.ly/3nGyLir', isAvailable: true},
        { id: 2, category: '2', name: 'product 2.1', price: 2.10, quantity: 10, image: 'https://bit.ly/3nGyLir', isAvailable: true},
        { id: 3, category: '4', name: 'product 4.1', price: 4.10, quantity: 10, image: 'https://bit.ly/3nGyLir', isAvailable: true},
        { id: 4, category: '5', name: 'product 5.1', price: 5.10, quantity: 10, image: 'https://bit.ly/3nGyLir', isAvailable: true},
        { id: 5, category: '2', name: 'product 2.1', price: 2.10, quantity: 10, image: 'https://bit.ly/3nGyLir', isAvailable: true},
        { id: 6, category: '3', name: 'product 3.1', price: 3.10, quantity: 10, image: 'https://bit.ly/3nGyLir', isAvailable: true},
        { id: 7, category: '5', name: 'product 5.1', price: 5.10, quantity: 10, image: 'https://bit.ly/3nGyLir', isAvailable: true},
        { id: 8, category: '1', name: 'product 1.1', price: 1.10, quantity: 10, image: 'https://bit.ly/3nGyLir', isAvailable: true},
        { id: 9, category: '1', name: 'product 1.1', price: 1.10, quantity: 10, image: 'https://bit.ly/3nGyLir', isAvailable: true},
        { id: 10, category: '4', name: 'product 4.1', price: 4.10, quantity: 10, image: 'https://bit.ly/3nGyLir', isAvailable: true},
        { id: 11, category: '5', name: 'product 5.1', price: 5.10, quantity: 10, image: 'https://bit.ly/3nGyLir', isAvailable: true},
        { id: 12, category: '1', name: 'product 1.1', price: 1.10, quantity: 10, image: 'https://bit.ly/3nGyLir', isAvailable: true},
        { id: 13, category: '6', name: 'product 6.1', price: 6.10, quantity: 10, image: 'https://bit.ly/3nGyLir', isAvailable: true},
        { id: 14, category: '6', name: 'product 6.1', price: 6.10, quantity: 10, image: 'https://bit.ly/3nGyLir', isAvailable: true},
        { id: 15, category: '1', name: 'product 1.1', price: 1.10, quantity: 10, image: 'https://bit.ly/3nGyLir', isAvailable: true},
        { id: 16, category: '4', name: 'product 4.1', price: 4.10, quantity: 10, image: 'https://bit.ly/3nGyLir', isAvailable: true},
        { id: 17, category: '6', name: 'product 6.1', price: 6.10, quantity: 10, image: 'https://bit.ly/3nGyLir', isAvailable: true},
        { id: 18, category: '1', name: 'product 1.1', price: 1.10, quantity: 10, image: 'https://bit.ly/3nGyLir', isAvailable: true},
        { id: 19, category: '2', name: 'product 2.1', price: 2.10, quantity: 10, image: 'https://bit.ly/3nGyLir', isAvailable: true},
        { id: 20, category: '4', name: 'product 4.1', price: 4.10, quantity: 10, image: 'https://bit.ly/3nGyLir', isAvailable: true},
        { id: 21, category: '3', name: 'product 3.1', price: 3.10, quantity: 10, image: 'https://bit.ly/3nGyLir', isAvailable: true},
        { id: 22, category: '6', name: 'product 6.1', price: 6.10, quantity: 10, image: 'https://bit.ly/3nGyLir', isAvailable: true},
        { id: 23, category: '1', name: 'product 1.1', price: 1.10, quantity: 10, image: 'https://bit.ly/3nGyLir', isAvailable: true},
        { id: 24, category: '2', name: 'product 2.1', price: 1.10, quantity: 10, image: 'https://bit.ly/3nGyLir', isAvailable: true},
        { id: 25, category: '3', name: 'product 3.1', price: 3.10, quantity: 10, image: 'https://bit.ly/3nGyLir', isAvailable: true},
    ];

    productsFilter.value = productsAll.value;

    function filterCategory(value, category) {
        if (value.category == category) {
            return value;
        }
    }

    function filterProduct(category) {
        this.productsFilter.value = this.productsAll.value.filter((value) => filterCategory(value, category));
    }


    return { productsAll, productsFilter, filterCategory, filterProduct }
})


/*
funcao1(parametro)
function funcao2(parametro2_qualquer) {
    console.log(parametro2_qualquer)
}
function funcao1(parametro1_qualquer) {
    const parametro2 = parametro1_qualquer;
    funcao2(parametro2);
}



funcaoParamtro('banana', 'abacate', 'limão');
function funcaoParamtro(variavel2, variavel3,  variavel1) {
    console.log(variavel1, variavel2, variavel3);
}
*/