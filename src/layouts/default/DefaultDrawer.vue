<template>
  <v-navigation-drawer location="right">
    <v-list>
      <v-list-item>
        <v-list-item v-for="item in items" :key="item">
          
          <template v-slot:prepend>
            <v-list-item-content>
              {{ item }}
            </v-list-item-content>
          </template>

          <v-list-item-content class="center"> items </v-list-item-content>
          
          <template v-slot:append>
            R$0
          </template>
          
        </v-list-item>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  },
};
</script>

<style scoped>
.center {
display: flex;
justify-content: center;
}

</style>