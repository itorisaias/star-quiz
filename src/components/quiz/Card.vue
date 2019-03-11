<template>
  <v-card :color="colorCard">
    <v-img
      :src="person.urlImg"
      style="background-color: white"
      height="200"
    />
    <v-card-actions>
      <v-text-field
        v-model="answer"
        color="black"
        placeholder="Quem sou eu ?"
        clearable
        @blur="response({ answer, person })"
      >
        <template v-slot:append-outer>
          <v-icon title="Detalhes" @click="showDetail(person)">help_outline</v-icon>
        </template>
      </v-text-field>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'
// TODO: preciso verifica como foi tratar a variavel answer pq valor está se duplicando
export default {
  data: () => ({
    answer: null
  }),
  computed: {
    colorCard () {
      switch (this.person.rightAnswer) {
        case true:
          return 'success'
        case false:
          return 'error'
        default:
          return null
      }
    }
  },
  props: {
    person: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions('quiz', ['showDetail', 'response'])
  }
}
</script>
