<template>
  <v-dialog v-if="person" persistent :value="person" max-width="900px">
    <v-card>
      <v-card-title >
        <span class="display-2">Detalhes sobre personagem</span>
        <v-spacer></v-spacer>
        <v-btn icon @click="closeDetail">
          <v-icon>close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-layout row wrap>
          <v-flex xs6>
            <v-img :src="person.urlImg" class="my-3" contain height="200" />
          </v-flex>
          <v-flex xs6>
            <v-list>
              <v-divider></v-divider>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>
                    <strong>Espécie: </strong>
                    {{ person.species.map((specie) => specie.name).join(', ') || 'n/a' }}
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>
                    <strong>Altura: </strong>
                    {{ person.height }}
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>
                    <strong>Cor de cabelo: </strong>
                    {{ person.hair_color }}
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>
                    <strong>Planeta: </strong>
                    {{ person.homeworld }}
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>
            </v-list>
          </v-flex>
          <v-flex xs12>
            <v-list>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>
                    <strong>Filmes: </strong>
                    {{ person.films.map((film) => film.title).join(', ') || 'n/a' }}
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>
                    <strong>Veículos: </strong>
                    {{ person.vehicles.map((vehicle) => vehicle.name).join(', ') || 'n/a' }}
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
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
