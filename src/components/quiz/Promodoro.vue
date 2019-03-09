<template>
  <span :class="textColor">{{ timeout | timestemp }}</span>
</template>

<script>
import {
  mapGetters,
  mapActions,
  mapMutations
} from 'vuex'

export default {
  created () {
    // TODO: Iniciar o promodo
    // const timeout = 120
    // const timeID = setInterval(() => this.countdown(), 1000)
    // this.startQuiz({ timeout, timeID })
  },
  methods: {
    ...mapActions('quiz', ['startQuiz', 'resetQuiz']),
    ...mapMutations('quiz', ['setTimeout']),
    countdown () {
      const { timeout } = this.$store.state.quiz
      if (timeout >= 1) {
        this.setTimeout(timeout - 1)
      } else {
        this.setTimeout(0)
        this.resetQuiz()
      }
    }
  },
  computed: {
    ...mapGetters('quiz', ['timeout']),
    textColor () {
      return this.timeout <= 10 ? 'red--text' : 'blue--text'
    }
  },
  filters: {
    // FIXME: Corrigir filter para tempo e alterar o nome
    timestemp (time) {
      const minutes = Math.floor(time / 60)
      const seconds = time - (minutes * 60)

      return `${(minutes < 10 ? '0' : '') + minutes}:${(seconds < 10 ? '0' : '') + seconds}`
    }
  }
}
</script>
