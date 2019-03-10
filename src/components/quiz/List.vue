<template>
  <v-container fluid grid-list-xl>
    <v-layout row wrap>
      <v-flex v-for="(character, index) in characters" :key="index" xs6 sm3>
        <quiz-card :character="character" />
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
    ...mapGetters('characters', ['characters'])
  }
}
</script>
