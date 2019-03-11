<template>
  <div>
    <h1 class="starWars">Star quiz !</h1>
    <p>
      Um quiz sobre a série de filmes de <a class="noUnderline blue--text" :href="urlStarWars">Star Wars</a> aonde você deverá acertar o maior números de nomes dos personagens.
    </p>
  </div>
</template>

<script>
export default {
  data: () => ({
    urlStarWars: 'https://www.starwars.com'
  })
}
</script>
