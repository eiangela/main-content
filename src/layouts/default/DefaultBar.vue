<template>
  <v-app-bar :elevation="2" class="justify-end">
    <v-container fluid>
      <v-row>
        <v-col
        cols="12"
        md="1"
        v-for="(avatar, index) in avatars" 
        :key="index"
        >
          <v-btn stacked> 
            <template v-slot:prepend>
              <v-avatar :icon="avatar.icon"></v-avatar>
            </template>
            {{ avatar.title }}
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      avatars: [
        { title: "Favoritos", icon: "mdi-heart" },
        { title: "Destaque", icon: "mdi-star" },
        { title: "Perfil", icon: "mdi-account" },
        { title: "Comentários", icon: "mdi-comment" },
        { title: "Fotos", icon: "mdi-camera" },
      ],
    };
  },
};
</script>


