<template>
  <v-app-bar :elevation="2" class="justify-end">
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="2" v-for="category in categories" :key="category">
          <v-btn stacked @click="productsStore.filterProduct(category.id)">
            <template v-slot:prepend>
              <v-avatar :icon="category.icon"></v-avatar>
            </template>
            {{ category.title }}
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script setup>
import { useProductsStore } from '../../stores/products';
const productsStore = useProductsStore();

const categories = [
  { id: 1, title: "Category 1", icon: "mdi-heart" },
  { id: 2, title: "Category 2", icon: "mdi-star" },
  { id: 3, title: "Category 3", icon: "mdi-account" },
  { id: 4, title: "Category 4", icon: "mdi-comment" },
  { id: 5, title: "Category 5", icon: "mdi-camera" },
  { id: 6, title: "Category 6", icon: "mdi-camera" },
];




/*
function teste(value) {
  if (value.title == "Category 2") {
    return value;
  }
}


const filteredCategories = categories.filter(teste);

console.log(filteredCategories);
*/

/*array.forEach(element => {
  const response = categories.filter((product) => product.title == "Category 1");
  response.forEach((product) => {
    console.log(product);
  }); */
</script>
