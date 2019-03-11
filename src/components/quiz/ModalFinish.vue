<template>
  <v-layout row justify-center>
    <v-dialog :value="!time" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <v-spacer />
          <span class="headline">Fim do Jogo</span>
          <v-spacer />
        </v-card-title>
        <v-card-text>
          <v-form v-model="valid">
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
                  <v-text-field
                    v-model="username"
                    :rules="nameRule"
                    label="Nome*"
                    required
                  />
                </v-flex>
                <v-flex xs12 md6>
                  <v-text-field
                    v-model="email"
                    label="Email"
                    required
                  />
                </v-flex>
              </v-layout>
            </v-container>
            <small>*indica campo obrigatório</small>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" :disabled="!valid" flat @click="save">Salvar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data: () => ({
    email: '',
    username: '',
    valid: false,
    nameRule: [
      v => !!v || 'Name is required'
    ]
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
