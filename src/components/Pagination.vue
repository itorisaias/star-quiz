<template>
  <div class="text-xs-center">
    <v-pagination
      dark
      v-model="page"
      :length="length"
      :total-visible="totalVisible"
      color="yellow"
    ></v-pagination>
  </div>
</template>

<script>
export default {
  data () {
    return {
      page: 1
    }
  },
  props: {
    length: {
      type: Number,
      required: true
    },
    totalVisible: {
      type: Number,
      default: 7
    }
  },
  watch: {
    page (value) {
      this.$emit('paginate', value)
    }
  }
}
</script>
