<script>
import services from "@/services";
import CardTime from "@/components/CardTime.vue";
// import CardTime from "@/components/CardTime.vue";

export default {
  name: "HomePage",
  components: {
    CardTime,
  },
  data() {
    return {
      times: [],
    };
  },
  // Created roda uma funcao na hora que o componente rodar(for montado)
  created() {
    services
      .getAllTimes()
      .then((dados) => {
        this.times = dados;
      })
      .catch((erro) => {
        console.log(erro);
      });
  },
};
</script>

<template>
  <h1>Brasileirasso Oficial</h1>
  {{ times }}

  <CardTime :time="times[0]" />
</template>

<style></style>
