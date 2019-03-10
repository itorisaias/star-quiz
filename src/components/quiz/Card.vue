<template>
  <v-card :color="colorCard" :title="person.name">
    <v-img
      :src="person.urlImg"
      style="background-color: white"
      height="200"
    />
    <!-- FIXME: Remover title, apenas para teste -->
    <v-card-actions>
      <v-text-field
        v-model="answer"
        color="black"
        label="Nome"
        append-outer-icon="help_outline"
        @click:append-outer="showDetail(person)"
        clearable
      />
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'

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
      required: true,
      validator (value) {
        // TODO: verificar se formato está correto, e iniciar busca de sub dados
        return true
      }
    }
  },
  methods: {
    ...mapActions('quiz', ['showDetail'])
  }
}
</script>
