<template>
  <div id="app">
    <div class="container">
      <router-view />
    </div>
  </div>
</template>
<style>
*,
*:before,
*:after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: inherit;
}

body {
  font-family: 'Open Sans', sans-serif;
  background-color: gainsboro;
  font-size: 16px;
}

.container {
  max-width: 933px;
  display: flex;
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 1rem;
}

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
