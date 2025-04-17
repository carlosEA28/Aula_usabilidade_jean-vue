<script>
export default {
  name: "CardTIme",
  props: {
    time: Object,
  },
};
</script>

<template>
  <h3>{{ time.nome }}</h3>
  categorias: {{ time.categorias }}
</template>

<style></style>
