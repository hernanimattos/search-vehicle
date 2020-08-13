<template>
  <section class="search-result">
    <CardVehicle v-for="v in vehicles" :key="v.ID" />
  </section>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapActions, mapState } = createNamespacedHelpers('car');
import CardVehicle from '../../ui-components/CardVehicle/CardVehicle';
export default {
  name: 'SearchResult',
  computed: {
    ...mapState(['vehicles']),
  },
  methods: {
    ...mapActions(['getVehicles']),
  },
  mounted() {
    this.getVehicles();
  },
  components: {
    CardVehicle,
  },
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
