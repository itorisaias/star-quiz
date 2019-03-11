<template>
  <v-footer dark class="pa-3">
    <v-spacer></v-spacer>
    <p class="pt-3">
      Feito com <v-icon color="error">favorite</v-icon> por <a class="yellow--text noUnderline" :href="urlProfile" target="blank"> Itor Isaias</a>
    </p>
    <v-spacer></v-spacer>
    <div>&copy; {{ new Date().getFullYear() }}</div>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    urlProfile: 'https://github.com/itorisaias'
  })
}
</script>
