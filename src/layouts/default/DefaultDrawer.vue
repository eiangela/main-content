<template>
    <v-navigation-drawer location="right">
      <v-list>
        <v-list-item title="Navigation drawer">
        <ContentRight />
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
import ContentRight from "../../components/ContentRight.vue"

export default {
components: {
  ContentRight
}
}
</script>
