<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import RenduInput from './components/RenduInput.vue';
import ComposantNomsVue from './components/ComposantNoms.vue';
import ComposantNoms from './components/ComposantNoms.vue';
</script>

<template>
<div id="main_container">
  <RenduInput/>
  <ComposantNoms/>
</div>
</template>

<style>
body{
  margin: 0;
}
#main_container {
  margin: 0;
  background-color: purple;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
    color: white;

}

#my_input_container {
  width: 100%;
}

input {
  height: 30px;
  border-radius: 5px;
  width: 300px;
}
</style>
