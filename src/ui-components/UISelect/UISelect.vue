<template>
  <div :class="classField" class="form-field">
    <select @change="returValueInEvent($event)" :class="classStyles">
      <option selected :value="defaultValue">Todas</option>
      <option v-for="m in dataToList" :key="m.ID" :value="m.ID">
        {{ m.Name }}
      </option>
    </select>
    <div class="container-input_placeholder">
      <span class="input_placeholder_text">{{ textName }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UISelect',
  props: {
    dataToList: {
      type: Array,
      required: true,
    },
    classField: {
      type: String,
    },
    classStyles: {
      type: String,
    },
    defaultValue: {
      type: [String, Number],
    },
    textName: {
      type: String,
    },
  },
  methods: {
    returValueInEvent(event) {
      return this.$emit('change', event.target.value);
    },
  },
};
</script>
<style scoped>
select.pd-l-20 {
  padding-left: 20px;
}

select.pd-l-40 {
  padding-left: 40px;
}
select.pd-l-48 {
  padding-left: 48px;
}
.container-input_placeholder {
  display: flex;
  position: absolute;
  top: 0;
}
.input_placeholder_text {
  font-size: 12px;
  padding: 0.3rem;
}
</style>
