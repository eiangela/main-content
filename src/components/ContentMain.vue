<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" md="4" lg="3" v-for="(product, index) in products.value" :key="index">
        <v-card height="360px">
          <v-img
            :src="product.image"
            height="170px"
            cover
            class="bg-grey-lighten-2"
          ></v-img>
          <v-card-title class="text-h6 main-title">{{ product.name }}</v-card-title>
          <div class="main-text">{{ product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }}</div>
          <v-card-actions>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useProductsStore } from "../stores/products";

export default {
  name: "ContentMain",
  setup() {
    const productsStore = useProductsStore();

    return {
      products: productsStore.products,
    };
  },
};
</script>

<style scoped>
.text-content {
  text-align: justify;
  font-family: "Roboto", sans-serif;
}
</style>