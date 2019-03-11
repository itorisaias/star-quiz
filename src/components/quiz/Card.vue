<template>
  <v-card :color="colorCard">
    <v-img
      :src="person.urlImg"
      style="background-color: white"
      height="200"
    />
    <v-card-actions>
      <v-text-field
        :disabled="(person.answer ? true : false)"
        v-model="_answer"
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
    },
    _answer: {
      get () {
        if (this.person.answer) {
          this.clearAnswer()
          return this.person.answer
        }

        return this.answer
      },
      set (v) {
        this.answer = v
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
    ...mapActions('quiz', ['showDetail', 'response']),
    clearAnswer () {
      this.answer = null
    }
  }
}
</script>
