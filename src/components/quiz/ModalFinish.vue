<template>
  <v-dialog persistent :value="!time">
    <v-card>
      <v-card-title>
        Fim de Jogo
      </v-card-title>
      <v-card-text>
        <h1>Fim do jogo XAU</h1>
        <p>
          <strong>Pontos:</strong>
          {{ finalResult.totalPoints }}
        </p>
        <p>
          <strong>Quantidade de Questoes respondidas:</strong>
          {{ finalResult.countOfQuestion }}
        </p>
      </v-card-text>
      <v-card-actions>
        <v-btn to="/ranking">OK</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('quiz', ['time', 'finalResult'])
  }
}
</script>
