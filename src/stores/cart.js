/* eslint-disable no-case-declarations */
import {
  defineStore
} from 'pinia'
import {
  ref
} from 'vue'
import {
  useProductsStore
} from "../stores/products"

const productsStore = useProductsStore()

export const useCartStore = defineStore('cart', () => {
  const cartItems = ref([])

  function addCartItem(productId) {

    const products = productsStore.productsAll.value;
    const product = products.find(p => p.id === productId)

    const existingItem = cartItems.value.find(item => item.id === productId)

    if (existingItem) {
      alert('Este produto já foi adicionado!');
      return false;
    }

    product['quantity'] = 1;

    cartItems.value.push(product)
    return true
  }

  function updateCartItem(type, productId) {
    const existingItem = findCartItem(productId);
    switch (type) {
      case 'add':
        const stock = cartItems.value[existingItem]['stock'];

        if (cartItems.value[existingItem]['quantity'] < stock) {
          cartItems.value[existingItem]['quantity'] += 1;
        }
        
        break;
      case 'remove':
        if (cartItems.value[existingItem]['quantity'] > 1) {
          cartItems.value[existingItem]['quantity'] -= 1;
        }
        break;
      default:
        console.log(0);
        break;
    }
  }

  function findCartItem(productId) {
    return cartItems.value.findIndex(item => item.id === productId)
  }

  function deleteCartItem(productId) {
    const existingItem = findCartItem(productId);
    cartItems.value.splice(existingItem, 1);
  }

  return {
    cartItems,
    addCartItem,
    updateCartItem,
    deleteCartItem
  }
})
