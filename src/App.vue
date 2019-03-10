<template>
  <v-app>
    <core-toolbar />

    <core-view />

    <core-footer />
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    CoreFooter: () => import('@/components/core/Footer'),
    CoreToolbar: () => import('@/components/core/Toolbar'),
    CoreView: () => import('@/components/core/View')
  },
  created () {
    const peopleList = localStorage.getItem('peopleList')

    if (!peopleList) {
      const { VUE_APP_BASE_URL } = process.env
      let url = `${VUE_APP_BASE_URL}/api/people/?page=1`

      this.loadData(url)
    } else {
      this.createStore(JSON.parse(peopleList))
    }
  },
  methods: {
    ...mapActions(['createStore']),
    loadData (url) {
      window.axios
        .get(url)
        .then((response) => response.data)
        .then((people) => {
          this.createStore(people.results)

          if (people.next) {
            this.loadData(people.next)
          } else {
            const peopleList = this.$store.getters.peopleList

            localStorage.clear()
            localStorage.setItem('peopleList', JSON.stringify(peopleList))
          }
        })
        .catch((err) => {
          console.log('Error:', err)
          this.$swal({
            type: 'error',
            title: 'Oops...',
            text: 'Ocorreu um erro, tente novamente mais tarde!'
          })
        })
    }
  }
}
</script>
