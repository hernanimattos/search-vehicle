<template>
  <article class="card-car-container">
    <h2>{{ car.Model }}</h2>
    <picture class="card-car__img">
      <img :src="car.Image" alt="" />
      <div class="card-information">
        <p><strong>Cor:</strong> {{ car.Color }}</p>
      </div>
    </picture>
  </article>
</template>
<script>
export default {
  name: 'CardVehicle',
  props: {
    car: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style>
.card-car-container {
  background-color: #fff;
  padding: 1rem;
  border-radius: 3px;
  -webkit-box-shadow: 0px 0px 12px 4px rgba(0, 0, 0, 0.32);
  box-shadow: 0px 0px 12px 4px rgba(0, 0, 0, 0.32);
  transition: 0.5s;
  overflow: hidden;
}

.card-car-container:hover {
  transform: scale(1.02);
  transition: 0.5s;
  background-color: red;
  cursor: pointer;
  color: #fff;
}

.card-car__img {
  position: relative;
  overflow: hidden;
}

.card-car__img img {
  margin-top: 1rem;
  width: 100%;
  height: 400px;
  object-fit: cover;
}

.card-car-container:hover .card-information {
  transform: translateY(-4%);
  color: #000;
  height: 100px;
  transition: 0.5s;
}

.card-information {
  transform: translateY(100%);
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: #fff;
  left: 0;
  padding: 1rem;
  transition: 0.5s;
}
</style>
