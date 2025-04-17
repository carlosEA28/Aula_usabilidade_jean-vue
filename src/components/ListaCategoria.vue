<!-- ARRUMAR O FOR -->

<script>
export default {
  name: "ListaCategoria",
  prosp: {
    categorias: [],
  },
};
</script>

<template>
  <h6>Categorias Ativas:</h6>
  <ul>
    <li v-for="cat in categorias" v-bind:key="cat">{{ cat }}</li>
  </ul>
</template>

<style></style>
