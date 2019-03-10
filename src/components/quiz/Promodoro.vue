<template>
  <h1 :class="textColor">{{ time | timestemp }}</h1>
</template>

<script>
import {
  mapGetters,
  mapActions
} from 'vuex'

export default {
  created () {
    const time = 120
    const timeId = setInterval(() => this.countdown(), 1000)
    this.bootTime({ time, timeId })
  },
  methods: {
    ...mapActions('quiz', ['bootTime', 'finishQuiz']),
    countdown () {
      if (this.time >= 1) {
        this.$store.commit('quiz/setTime', (this.time - 1))
      } else {
        this.finishQuiz()
      }
    }
  },
  computed: {
    ...mapGetters('quiz', ['time']),
    textColor () {
      return this.time <= 10 ? 'red--text' : 'blue--text'
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
