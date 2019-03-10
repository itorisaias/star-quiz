<template>
  <v-card>
    <v-card-title>
      Ranking
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>

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

    <v-card-actions>
      <v-btn to="/playing">JOGAR NOVAMENTE</v-btn>
      <v-btn to="/">INICIO</v-btn>
    </v-card-actions>

  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    search: null,
    pagination: {
      sortBy: 'totalPoints',
      descending: true
    },
    headers: [
      { text: 'Nome', value: 'username' },
      { text: 'Email', value: 'email' },
      { text: 'Pontos', value: 'totalPoints' },
      { text: 'Qtd. Respostas', value: 'countOfQuestion' }
      // align: 'left', sortable: false,
    ]
  }),
  computed: {
    ...mapGetters('ranking', ['plays'])
  }
}
</script>
