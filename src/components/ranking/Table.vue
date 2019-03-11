<template>
  <v-data-table
    :headers="headers"
    :items="plays"
    :pagination.sync="pagination"
    class="elevation-1"
  >
    <template v-slot:items="props">
      <td>{{ props.item.username }}</td>
      <td>{{ props.item.email }}</td>
      <td>{{ props.item.totalPoints }}</td>
      <td>{{ props.item.countOfQuestion }}</td>
    </template>
  </v-data-table>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    pagination: {
      sortBy: 'totalPoints',
      descending: true
    },
    headers: [
      { text: 'Nome', value: 'username' },
      { text: 'Email', value: 'email' },
      { text: 'Pontos', value: 'totalPoints' },
      { text: 'Qtd. Respostas', value: 'countOfQuestion' }
    ]
  }),
  computed: {
    ...mapGetters('ranking', ['plays'])
  }
}
</script>
