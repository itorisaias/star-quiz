<template>
  <v-container>
    <v-card>

      <ranking-title />

      <ranking-table />

      <ranking-actions />

    </v-card>
  </v-container>
</template>

<script>
export default {
  components: {
    RankingActions: () => import('@/components/ranking/Actions'),
    RankingTitle: () => import('@/components/ranking/Title'),
    RankingTable: () => import('@/components/ranking/Table')
  }
}
</script>
