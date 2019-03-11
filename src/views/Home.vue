<template>
  <v-container fluid fill-height>
    <v-layout text-xs-center wrap column>

      <v-flex>
        <v-img :src="urlImg" contain height="350" />
      </v-flex>

      <v-flex>
        <About />
      </v-flex>

      <v-flex>
        <Rules />
      </v-flex>

      <v-flex>
        <base-btn to="/playing">JOGAR</base-btn>
        <base-btn to="/ranking">RANKING</base-btn>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
export default {
  components: {
    Rules: () => import('@/components/home/Rules.vue'),
    About: () => import('@/components/home/About.vue')
  },
  methods: {
    getUrlImgRandon () {
      const countUrlsImg = 5
      const indexRandon = Math.floor(Math.random() * countUrlsImg)
      return require(`@/assets/images/home/${indexRandon}.png`)
    }
  },
  computed: {
    urlImg () {
      return this.getUrlImgRandon()
    }
  }
}
</script>
