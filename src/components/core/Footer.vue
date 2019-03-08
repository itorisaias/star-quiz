<template>
  <v-footer dark class="pa-3">
    <v-spacer></v-spacer>
    <p class="pt-3">
      Feito com <a class="white--text" :href="urlVue" target="blank">VueJS</a>
    </p>
    <v-spacer></v-spacer>
    <div>&copy; {{ new Date().getFullYear() }}</div>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    urlVue: 'https://vuejs.org/'
  })
}
</script>
