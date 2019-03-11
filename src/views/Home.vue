<template>
  <v-container fluid fill-height>
    <v-layout text-xs-center wrap column>

      <v-flex>
        <v-img :src="urlImg" contain height="350" />
      </v-flex>

      <v-flex>
        <h1>Star Quiz !</h1>
        <About />
        <Rules />
      </v-flex>

      <v-flex>
        <v-btn large dark class="yellow--text" to="/playing">JOGAR</v-btn>
        <v-btn large dark class="yellow--text" to="/ranking">RANKING</v-btn>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    urlsImg: [
      'https://cdn.icon-icons.com/icons2/1070/PNG/512/darth-vader_icon-icons.com_76959.png',
      'https://pngimage.net/wp-content/uploads/2018/06/star-wars-icons-png-6.png',
      'https://icons-for-free.com/free-icons/png/512/2525058.png',
      'https://cdn0.iconfinder.com/data/icons/famous-character-vol-1-colored/48/JD-34-512.png',
      'https://icons-for-free.com/free-icons/png/512/2525045.png'
    ]
  }),
  components: {
    Rules: () => import('@/components/home/Rules.vue'),
    About: () => import('@/components/home/About.vue')
  },
  methods: {
    getUrlImgRandon () {
      const countUrlsImg = this.urlsImg.length
      const indexRandon = Math.floor(Math.random() * countUrlsImg)
      const urlImg = this.urlsImg[indexRandon]
      return urlImg
    }
  },
  computed: {
    urlImg () {
      return this.getUrlImgRandon()
    }
  }
}
</script>
