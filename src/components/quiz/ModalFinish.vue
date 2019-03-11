<template>
  <v-layout row justify-center>
    <v-dialog :value="!time" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Fim de Jogo</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <p>
                  <strong>Pontos:</strong>
                  {{ finalResult.totalPoints }}
                </p>
              </v-flex>
              <v-flex xs12>
                <p>
                  <strong>Quantidade de Questoes respondidas:</strong>
                  {{ finalResult.countOfQuestion }}
                </p>
              </v-flex>

              <v-flex xs12 md6>
                <v-text-field label="Nome*" required v-model="username" />
              </v-flex>
              <v-flex xs12 md6>
                <v-text-field label="Email*" required v-model="email" />
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indica campo obrigatório</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="save">Salvar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data: () => ({
    email: null,
    username: null
  }),
  computed: {
    ...mapGetters('quiz', ['time', 'finalResult', 'finalResult'])
  },
  methods: {
    ...mapActions('ranking', ['recorderPlay']),
    save () {
      const { totalPoints, countOfQuestion } = this.finalResult
      const { username, email } = this
      this.recorderPlay({ totalPoints, countOfQuestion, email, username })
      this.$router.push('/ranking?finished')
    }
  }
}
</script>
