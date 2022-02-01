<template>
  <input v-model="nom" type="text" placeholder="Balance ton blaze"/>
  <button @click="noms.push(nom)">Ajouter nom</button>
  <ul v-if="noms.length >= 3">
      <li v-for="name in noms" :key="element">
        {{ name }}
      </li>
  </ul>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  data: () => {
    
    return {
        nom: '',
        noms: []
    }
  }
});
</script>

<style>
button {
    margin-top: 10px;
}
</style>