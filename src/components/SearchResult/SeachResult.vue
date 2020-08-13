<template>
  <section class="search-result">
    <CardVehicle />
    <CardVehicle />
    <CardVehicle />
    <CardVehicle />
  </section>
</template>

<script>
import CardVehicle from "../../ui-components/CardVehicle/CardVehicle";
export default {
  name: "SearchResult",
  components: {
    CardVehicle
  }
};
</script>
<style>
.search-result {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}
</style>
