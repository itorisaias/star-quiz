<template>
  <v-img :src="pathImg" contain height="100" />
</template>

<script>
export default {
  data: () => ({
    pathImg: require('@/assets/star-wars.png'),
    title: 'star quiz'
  })
}
</script>

<style lang="scss" scoped>
h1 {
  font-family: 'Starjedi-Starjhol';
}
</style>
