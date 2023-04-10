<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="12"> 
        <ContentMain />
      </v-col>
  
    </v-row>
  </v-container>
</template>

<script setup>
import ContentMain from "../components/ContentMain.vue"
import { useProductsStore } from "../stores/products"

let productsStore = useProductsStore();
let products = productsStore.products;
console.log(products.value);


</script>

<style>

</style>
