<template>
  <input v-model="nom" type="text" placeholder="Balance ton blaze"/><br/>
  <button @click="noms.push(nom)">Ajouter nom</button>
  <ul v-if="noms.length >= 3">
      <li v-for="name in noms">
        {{ name }}
      </li>
  </ul>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  data: () => {
    
    return {
        noms: []
    }
  }
});
</script>