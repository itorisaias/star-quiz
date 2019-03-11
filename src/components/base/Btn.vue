<template>
  <v-btn
    large
    :style="styles"
    class="yellow--text headline"
    dark
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </v-btn>
</template>

<script>
export default {
  name: 'BaseBtn',

  inheritAttrs: false,

  props: {
    square: Boolean
  },

  computed: {
    styles () {
      return {
        borderRadius: this.square ? '2px' : undefined
      }
    }
  }
}
</script>
