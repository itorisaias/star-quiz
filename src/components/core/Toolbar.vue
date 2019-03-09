<template>
  <v-toolbar app dense dark>
    <v-toolbar-title>{{ title }}</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <a class="white--text" :href="urlRepository" target="blank">
        <v-icon>cloud_download</v-icon>
      </a>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  data: () => ({
    urlRepository: 'https://github.com/itorisaias/star-quiz',
    title: 'Star Quiz - Invillia'
  })
}
</script>
