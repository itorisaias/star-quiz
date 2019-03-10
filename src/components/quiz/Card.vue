<template>
  <v-card :color="colorCard" :title="character.name">
    <v-img :src="url" style="background-color: white" />
    <!-- FIXME: Remover title, apenas para teste -->
    <v-card-actions>
      <v-text-field
        v-model="answer"
        color="black"
        label="Nome"
        append-outer-icon="help_outline"
        @click:append-outer="showDetail(character)"
        clearable
        @blur="response({ character, answer })"
      />
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data: () => ({
    url: 'https://cdn.icon-icons.com/icons2/1070/PNG/512/darth-vader_icon-icons.com_76959.png',
    answer: null
  }),
  computed: {
    colorCard () {
      switch (this.character.rightAnswer) {
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
    character: {
      type: Object,
      required: true,
      validator (value) {
        // TODO: verificar se formato está correto, e iniciar busca de sub dados
        return true
      }
    }
  },
  methods: {
    ...mapActions('characters', ['showDetail', 'response'])
  }
}
</script>
