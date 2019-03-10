<template>
  <v-container>
    <v-layout wrap text-xs-center >
      <v-flex hidden-sm-and-down sm6>
        <quiz-logo />
      </v-flex>
      <v-flex text-md-right sm12 md6>
        <quiz-promodoro />
      </v-flex>
      <v-flex md12 xl6 offset-xl3>
        <quiz-list />
        <quiz-modal-finish />
      </v-flex>
      <v-flex xs12>
        <pagination :length="countPage" @paginate="paginationQuestion({ page: $event })" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    Pagination: () => import('@/components/Pagination'),
    QuizLogo: () => import('@/components/quiz/Logo'),
    QuizList: () => import('@/components/quiz/List'),
    QuizPromodoro: () => import('@/components/quiz/Promodoro'),
    QuizModalFinish: () => import('@/components/quiz/ModalFinish')
  },
  methods: {
    ...mapActions('quiz', ['paginationQuestion', 'startQuiz'])
  },
  created () {
    this.startQuiz()
  },
  computed: {
    ...mapGetters(['peopleList']),
    countPage () {
      return Math.ceil(this.peopleList.length / 8)
    }
  }
}
</script>
