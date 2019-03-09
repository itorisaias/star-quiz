<template>
  <v-container>
    <v-layout wrap text-xs-center>
      <v-flex text-sm-left xs12 sm6>
        <Logo />
      </v-flex>
      <v-flex text-sm-right xs12 sm6>
        <Promodoro />
      </v-flex>
      <v-flex xs12>
        <QuizList />
      </v-flex>
      <v-flex xs12>
        <Pagination />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  components: {
    Logo: () => import('@/components/quiz/Logo.vue'),
    Pagination: () => import('@/components/quiz/Pagination.vue'),
    QuizList: () => import('@/components/quiz/QuizList.vue'),
    Promodoro: () => import('@/components/quiz/Promodoro.vue')
  }
}
</script>
