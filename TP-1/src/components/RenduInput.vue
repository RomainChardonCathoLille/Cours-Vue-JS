<template>
<div id="my_input">
  <input  v-model="mon_texte" placeholder="Entrez du texte"/>
</div>
  <p>{{ mon_texte }}</p>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      mon_texte: ''
    }
  },
})
</script>
