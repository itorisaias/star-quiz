<template>
  <v-container>
    <v-layout wrap>
      <v-flex xs12>
        <h1 class="starWars-1">Regras</h1>
      </v-flex>

      <v-flex v-for="(rule, index) of rules" :key="index" xs12 offset-sm4 text-xs-left>
        <strong>{{ index + 1 }}</strong> - {{ rule }}
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    rules: [
      'Você terá dois minutos para acertar o maior número de personagens;',
      'Você pode errar quantas vezes quise;',
      'Respostas corretas sem auxílio de consulta, vale 10 pontos;',
      'Respostas corretas com auxílio de consulta, vale 5 pontos.'
    ]
  })
}
</script>
