<template>
  <v-app>
    <core-toolbar />

    <core-view />

    <core-footer />
  </v-app>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'App',
  components: {
    CoreFooter: () => import('@/components/core/Footer'),
    CoreToolbar: () => import('@/components/core/Toolbar'),
    CoreView: () => import('@/components/core/View')
  },
  computed: { ...mapGetters(['people', 'films', 'species', 'starships', 'vehicles', 'planets']) },
  methods: {
    ...mapMutations(['setPeople', 'setFilms', 'setSpecies', 'setStarships', 'setVehicles', 'setPlanets']),
    loadDataRecursive (url, action, oldValues, nameLocalStorage) {
      const data = localStorage.getItem(nameLocalStorage)

      if (data) {
        return action(JSON.parse(data))
      }

      window.axios.get(url)
        .then((response) => response.data)
        .then((result) => {
          const newValues = [...oldValues, ...result.results]
          action(newValues)

          if (result.next !== null) {
            this.loadDataRecursive(result.next, action, newValues, nameLocalStorage)
          } else {
            localStorage.removeItem(nameLocalStorage)
            localStorage.setItem(nameLocalStorage, JSON.stringify(newValues))
          }
        })
    }
  },
  created () {
    const { VUE_APP_BASE_URL } = process.env

    this.loadDataRecursive(`${VUE_APP_BASE_URL}/api/planets/?page=1`, this.setPlanets, this.planets, 'planets')
    this.loadDataRecursive(`${VUE_APP_BASE_URL}/api/people/?page=1`, this.setPeople, this.people, 'people')
    this.loadDataRecursive(`${VUE_APP_BASE_URL}/api/films/?page=1`, this.setFilms, this.films, 'films')
    this.loadDataRecursive(`${VUE_APP_BASE_URL}/api/species/?page=1`, this.setSpecies, this.species, 'species')
    this.loadDataRecursive(`${VUE_APP_BASE_URL}/api/starships/?page=1`, this.setStarships, this.starships, 'starships')
    this.loadDataRecursive(`${VUE_APP_BASE_URL}/api/vehicles/?page=1`, this.setVehicles, this.vehicles, 'vehicles')
  }
}
</script>

<style lang="scss">
@import url('./assets/scss/style.scss')
</style>
