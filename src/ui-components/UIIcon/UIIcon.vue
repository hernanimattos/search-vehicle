<template>
  <fa-icon :icon="icon" :class="`icon-${orientation}`" />
</template>

<script>
export default {
  name: 'UIIcon',
  props: {
    icon: {
      type: String,
      required: true,
    },
    orientation: {
      type: String,
    },
  },
};
</script>
<style>
.icon-left {
  margin-left: 0.4rem;
  margin-top: 0.3rem;
  margin-right: 0.3rem;
  color: red;
  width: 0.6rem;
}
</style>
