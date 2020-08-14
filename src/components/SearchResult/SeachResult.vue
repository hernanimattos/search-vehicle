<template>
  <div>
    <section class="search-result">
      <CardVehicle v-for="car in vehicles" :key="car.ID" :car="car" />
    </section>
    <div class="buttons-container">
      <button @click="prev">prev</button>
      <button @click="next" :disabled="allow">next</button>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapActions, mapState } = createNamespacedHelpers('car');
import CardVehicle from '../../ui-components/CardVehicle/CardVehicle';
export default {
  name: 'SearchResult',
  data() {
    return {
      page: 1,
      allow: false,
    };
  },
  computed: {
    ...mapState(['vehicles']),
  },
  methods: {
    ...mapActions(['getVehicles']),
    prev() {
      this.allow = false;
      const page = (this.page -= 1);
      if (page < 1) return;
      this.getVehicles(page);
    },
    next() {
      const page = (this.page += 1);
      this.getVehicles(page).then((resp) => {
        this.allowButtonByQtdOfProducts(resp.length);
      });
    },
    allowButtonByQtdOfProducts(total) {
      this.allow = total < 10;
    },
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
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}

@media (max-width: 968px) {
  .search-result {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 768px) {
  .search-result {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
}

.buttons-container {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}
.buttons-container button {
  display: block;
  padding: 1rem;
  background-color: red;
  border: none;
  font-weight: 700;
  color: #fff;
  transition: 0.5s;
}

.buttons-container button:hover {
  background-color: black;
  transition: 0.5s;
}
.buttons-container button:disabled {
  background-color: rgb(159, 82, 82);
}
</style>
