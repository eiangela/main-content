<template>
  <v-navigation-drawer location="right" width="380">
    <v-list>
      <v-list-item :key="index" v-for="(product, index) in cartStore.cartItems">
        <template v-slot:prepend>
          <v-list-item-content>
            <v-btn @click="cartStore.updateCartItem('add', product.id)" 
            icon="mdi-plus"
             size="small"
              variant="text"
              ></v-btn>
            {{ product.quantity }}
            <v-btn @click="cartStore.updateCartItem('remove', product.id)"
            icon="mdi-minus" 
            size="small" 
            variant="text"
            ></v-btn>
          </v-list-item-content>
        </template>

        <v-list-item-content class="center">
          {{ product.name }}
        </v-list-item-content>

        <template v-slot:append>
          {{
            product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })
          }}
            <v-btn @click="cartStore.deleteCartItem(product.id)" 
            icon="mdi-trash-can-outline"
            size="small"
            variant="text">
            </v-btn>

        </template>
      </v-list-item>
    </v-list>

    <template v-slot:append> teste </template>
  </v-navigation-drawer>
</template>

<script setup>
import { useCartStore } from "../../stores/cart"; //importando a store cart

const cartStore = useCartStore(); ////importando a store cart
</script>

<style scoped>
.center {
  display: flex;
  justify-content: center;
}

.drawe {
  background-color: red;
}
</style>
