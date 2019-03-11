<template>
  <v-card-actions>
    <v-spacer></v-spacer>
    <base-btn to="/">INÍCIO</base-btn>
    <base-btn v-if="showBtnPlayning" to="/playing">JOGAR NOVAMENTO</base-btn>
    <v-spacer></v-spacer>
  </v-card-actions>
</template>

<script>
export default {
  data: () => ({
    showBtnPlayning: false
  }),
  created () {
    const { finished } = this.$route.query

    if (finished !== undefined) {
      this.showBtnPlayning = true
    }
  }
}
</script>
