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
  max-width: 1220px;
  display: flex;
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
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
</style>
