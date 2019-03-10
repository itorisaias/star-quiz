<template>
  <v-container fluid grid-list-xl>
    <v-layout row wrap>
      <v-flex v-for="(people, index) in questions" :key="index" xs6 sm3>
        <quiz-card :person="people" />
      </v-flex>
    </v-layout>

    <quiz-modal-detail />
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {
    QuizCard: () => import('./Card'),
    QuizModalDetail: () => import('./ModalDetail')
  },
  computed: {
    ...mapGetters('quiz', ['questions'])
  }
}
</script>
