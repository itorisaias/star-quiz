<template>
  <v-container>
    <v-layout wrap text-xs-center>
      <v-flex hidden-sm-and-down sm6>
        <quiz-logo />
      </v-flex>
      <v-flex text-sm-right xs12 sm6>
        <quiz-promodoro />
      </v-flex>
      <v-flex xs12>
        <quiz-list />
        <quiz-modal-finish />
      </v-flex>
      <v-flex xs12>
        <pagination :length="countPage" @paginate="onPaginate" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {
    Pagination: () => import('@/components/Pagination'),
    QuizLogo: () => import('@/components/quiz/Logo'),
    QuizList: () => import('@/components/quiz/List'),
    QuizPromodoro: () => import('@/components/quiz/Promodoro'),
    QuizModalFinish: () => import('@/components/quiz/ModalFinish')
  },
  methods: {
    onPaginate (event) {
      // TODO: alterar estado da paginação
      console.log(event)
    }
  },
  computed: {
    ...mapGetters('characters', ['countCharacter']),
    countPage () {
      return Math.ceil(this.countCharacter / 8)
    }
  },
  created () {
    this.$store.dispatch('quiz/startQuiz')
  }
}
</script>
