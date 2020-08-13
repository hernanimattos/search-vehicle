<template>
  <section class="form-wrapper">
    <form>
      <div class="form-search_container">
        <div class="columns column-check">
          <div class="form-group column">
            <div class="form-field field-type-checkbox">
              <div class="check-box">
                <input type="checkbox" id="novos" checked="checked" />
                <label for="novos"> Novos</label>
              </div>
              <div class="check-box">
                <input type="checkbox" id="usados" />
                <label for="usados">Usados </label>
              </div>
            </div>
          </div>
        </div>
        <div class="form-group columns column-one">
          <div class="form-group column column where-and_ray">
            <div class="form-field">
              <input type="text" v-model="location" class="pd-l-70" />
              <div class="container-input_placeholder">
                <fa-icon icon="map-marker-alt" class="icon-left" />
                <span class="input_placeholder_text"> Onde:</span>
              </div>
            </div>
            <div class="form-field ray-of-search">
              <select class="pd-l-30">
                <option v-for="(r, i) in ray" :key="i">{{ r.text }}</option>
              </select>
              <div class="container-input_placeholder">
                <span class="input_placeholder_text"> Raio:</span>
              </div>
            </div>
          </div>
          <div class="form-group column">
            <div class="form-field mg-r1">
              <select class="pd-l-40">
                <option value="">marca</option>
                <option value="">aqui</option>
                <option value="">aqui</option>
              </select>
              <div class="container-input_placeholder">
                <span class="input_placeholder_text">Marca:</span>
              </div>
            </div>
            <div class="form-field mg-l1">
              <select class="pd-l-48">
                <option value="">aqui</option>
                <option value="">aqui</option>
                <option value="">aqui</option>
              </select>
              <div class="container-input_placeholder">
                <span class="input_placeholder_text">Modelo:</span>
              </div>
            </div>
          </div>
        </div>
        <div class="form-group columns column-two">
          <div class="form-group column">
            <div class="form-field mg-r1">
              <select>
                <option value="">aqui</option>
                <option value="">aqui</option>
                <option value="">aqui</option>
              </select>
            </div>
            <div class="form-field mg-l1">
              <select>
                <option value="">aqui</option>
                <option value="">aqui</option>
                <option value="">aqui</option>
              </select>
            </div>
          </div>
          <div class="form-group column">
            <div class="form-field">
              <select class="pd-l-48">
                <option value="">vesao</option>
                <option value="">aqui</option>
                <option value="">aqui</option>
              </select>
              <div class="container-input_placeholder">
                <span class="input_placeholder_text">Versão:</span>
              </div>
            </div>
          </div>
        </div>
        <div class="form-group columns column-tree">
          <div class="form-group column">
            <div class="form-field wrapper-advanced-search">
              <a
                ><fa-icon icon="chevron-right" class="icon-left" />Busca
                avançada</a
              >
            </div>
          </div>
          <div class="form-group column wrapper-reset_filter">
            <label for="limpar">Limpar filtros</label>
            <div class="form-field">
              <input type="submit" value="VER OFERTAS" id="limpar" />
            </div>
          </div>
        </div>
      </div>
    </form>
  </section>
</template>
<script>
export default {
  name: 'Form',
  data() {
    return {
      location: 'São Paulo - SP',
      ray: [
        {
          value: 100,
          text: '100 km',
        },
        {
          value: 100,
          text: '100 km',
        },
        {
          value: 100,
          text: '100 km',
        },
      ],
    };
  },
};
</script>

<style>
input[type='text'],
select {
  width: 100%;
  height: 100%;
  padding: 5px 10px;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-radius: 2px;
}

input[type='submit'] {
  width: 100%;
  background-color: red;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  font-weight: 700;
}

input[type='submit']:hover {
  background-color: #ea5254;
}

.form-wrapper {
  padding: 1rem;
  background-color: #fff;
}

.form-search_container {
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    'column-check column-check'
    'column-one column-one'
    'column-two column-two'
    'column-tree column-tree';
}

.column-check {
  grid-area: column-check;
}

.column-one {
  grid-area: column-one;
}

.column-two {
  grid-area: column-two;
}

.column-tree {
  grid-area: column-tree;
}

.columns {
  display: flex;
}

.column {
  display: flex;
  width: 50%;
  margin: 0.3rem;
}

@media (max-width: 462px) {
  .columns {
    display: initial;
  }
  .column {
    width: initial;
  }
}

.mg-l1 {
  margin-left: 0.3rem;
}

.mg-r1 {
  margin-right: 0.3rem;
}

.form-field {
  width: 100%;
  position: relative;
}

.column.where-and_ray {
  border: 1px solid #ccc;
}

.column.where-and_ray input,
.column.where-and_ray select {
  border: none;
  border-radius: 0;
}

.pd-l-30 {
  padding-left: 30px;
}

select.pd-l-20 {
  padding-left: 20px;
}

select.pd-l-40 {
  padding-left: 40px;
}
select.pd-l-48 {
  padding-left: 48px;
}

input[type='text'].pd-l-70 {
  padding-left: 70px;
}

.container-input_placeholder {
  display: flex;
  position: absolute;
  top: 0;
}

.icon-left {
  margin-left: 0.4rem;
  margin-top: 0.3rem;
  margin-right: 0.3rem;
  color: red;
  width: 0.6rem;
}

.input_placeholder_text {
  font-size: 12px;
  padding: 0.3rem;
}

.form-field.ray-of-search {
  width: 200px;
  border-left: 1px solid #ccc;
}
.wrapper-advanced-search {
  color: red;
  font-weight: 700;
}

.wrapper-advanced-search a {
  display: block;
  padding-top: 1rem;
}

.wrapper-reset_filter input ~ [type='submit'] {
  width: 80%;
}

.wrapper-reset_filter label {
  font-size: 13px;
  margin-right: 1rem;
  width: 90px;
  padding-top: 1rem;
}

.field-type-checkbox {
  display: flex;
  position: relative;
}

.form-field .check-box {
  cursor: pointer;
  padding-top: 10px;
  font-size: 12px;
  display: flex;
}

.form-field .check-box label {
  margin-right: 0.5rem;
}

.check-box label {
  position: relative;
  cursor: pointer;
}

input[type='checkbox'] {
  padding: 0;
  height: initial;
  width: initial;
  margin-bottom: 0;
  display: none;
  cursor: pointer;
}

input[type='checkbox']:checked + label:after {
  content: '';
  display: block;
  position: absolute;
  top: 3px;
  left: 5px;
  width: 5px;
  height: 9px;
  border: solid #bf002c;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.check-box label:before {
  content: '';
  -webkit-appearance: none;
  background-color: transparent;
  border: 1px solid #ccc;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
    inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
  padding: 0.4rem;
  display: inline-block;
  position: relative;
  vertical-align: middle;
  cursor: pointer;
  margin-right: 5px;
}
</style>
