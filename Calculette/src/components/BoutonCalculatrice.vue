<template>
<button class="bouton" @click="envoyer_element(numero)">{{numero}}</button>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            
        };
    },
    props: {
        numero: "",
    },
    emits: ['update-data'],
    methods: {
        envoyer_element(element){
            this.$emit('update-data', element);
        }
    }
})
</script>

