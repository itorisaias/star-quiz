<template>
  <v-dialog v-if="person" persistent :value="person">
    <v-card>
      <v-card-title>
        Detalhes sobre personagem
        <v-spacer></v-spacer>
        <v-btn icon @click="closeDetail">
          <v-icon>close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-layout row wrap>
          <v-flex xs6>
            <v-img
              :src="person.urlImg"
              class="my-3"
              contain
              height="200"
            />
          </v-flex>
          <v-flex xs6>
            <ul>
              <li>
                <strong>Specie: </strong>
                {{ person.species.map((specie) => specie.name).join(', ') || 'n/a' }}
              </li>
              <li>
                <strong>Height: </strong>
                {{ person.height }}
              </li>
              <li>
                <strong>Hair: </strong>
                {{ person.hair_color }}
              </li>
              <li>
                <strong>Planet: </strong>
                {{ person.homeworld }}
              </li>
            </ul>
          </v-flex>
          <v-flex xs12>
            <p>
              <strong>filmes: </strong>
              {{ person.films.map((film) => film.title).join(', ') || 'n/a' }}
            </p>
          </v-flex>
          <v-flex xs12>
            <p>
              <strong>veiculos: </strong>
              {{ person.vehicles.map((vehicle) => vehicle.name).join(', ') || 'n/a' }}
            </p>
          </v-flex>
        </v-layout>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters('quiz', {
      person: 'modalPersonHelp'
    })
  },
  methods: {
    ...mapActions('quiz', ['closeDetail'])
  }
}
</script>
