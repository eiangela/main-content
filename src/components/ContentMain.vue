<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3"
        v-for="(product, index) in productsStore.productsFilter.value"
        :key="index"
      >
        <v-card >
          <v-img
            :src="product.image"
            height="170px"
            cover
            class="bg-grey-lighten-2"
          ></v-img>
          <v-card-title class="text-h6 main-title">{{
            product.name
          }}</v-card-title>
          <div class="main-text text-right mr-3">
            {{
              product.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })
            }}
          </div>
          <v-card-actions>
            <v-btn @click="cartStore.addCart(product.id)"> Button </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useProductsStore } from "../stores/products";
import { useCartStore } from "../stores/cart";

const productsStore = useProductsStore();
const cartStore = useCartStore();

</script>

<style scoped>
.text-content {
  text-align: justify;
  font-family: "Roboto", sans-serif;
}
</style>
