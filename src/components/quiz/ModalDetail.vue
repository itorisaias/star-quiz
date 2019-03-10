<template>
  <v-dialog v-if="character" persistent :value="character">
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
            <v-img :src="url" contain height="300" />
          </v-flex>
          <v-flex xs6>
            <ul>
              <li>
                <strong>Specie: </strong>
                {{ character.species }}
              </li>
              <li>
                <strong>Height: </strong>
                {{ character.height }}
              </li>
              <li>
                <strong>Hair: </strong>
                {{ character.hair_color }}
              </li>
              <li>
                <strong>Planet: </strong>
                {{ character.homeworld }}
              </li>
            </ul>
          </v-flex>
          <v-flex xs12>
            <p>
              <strong>filmes: </strong>
              {{ character.films }}
            </p>
          </v-flex>
          <v-flex xs12>
            <p>
              <strong>veiculos: </strong>
              {{ character.vehicles }}
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
  data: () => ({
    url: 'https://cdn.icon-icons.com/icons2/1070/PNG/512/darth-vader_icon-icons.com_76959.png'
  }),
  computed: {
    ...mapGetters('characters', ['character'])
  },
  methods: {
    ...mapActions('characters', ['closeDetail'])
  }
}
</script>
