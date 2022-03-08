<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

</script>

<template>
<div id="mainContainer">
  <div id="containerLeft"></div>
  <div id="centerContainer">
    <RouterView/>
  </div>
  <div id="containerRight"></div>
</div>
</template>

<style>
p {
  margin-bottom: 0 !important;
}
  body {
    height: 100vh;
    display: flex;
  }
  #app {
    width: 100%;
    display: flex;
  }
  #mainContainer {
    display: flex;
    width: 100%;
  }
  #containerLeft {
    width: 30%;
  }
  #centerContainer {
    width: 40%;
  }
  #containerRight {
    width: 30%;
  }

  .tweet {
    border: 1px solid rgb(239, 243, 244);
    width: 100%;
    float: left;
    height: fit-content;
    padding-left: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .tweet:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
</style>