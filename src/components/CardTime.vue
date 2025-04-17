<script>
import ListaCategoria from "./ListaCategoria.vue";
// import ListaCategoria from "./ListaCategoria.vue";
export default {
  name: "CardTIme",
  components: {
    ListaCategoria,
  },
  props: {
    time: Object,
  },
};
</script>

<template>
  <h3>{{ time.nome }}</h3>
  <ListaCategoria />
  categorias: {{ time.categorias }}
</template>

<style></style>
