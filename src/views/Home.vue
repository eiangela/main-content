<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="12"> 
        <ContentMain />
      </v-col>
  
    </v-row>
  </v-container>
</template>

<script>
import ContentMain from "../components/ContentMain.vue"
import ContentRight from "../components/ContentRight.vue"
export default {
  components: {
    ContentMain,
    ContentRight
  }
}
</script>

<style>

</style>
