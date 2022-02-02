<template>
<div id="ecran">
    <p>
        <span v-for="item in affichage">{{affichage}}</span>
    </p>
</div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            valeur: "",
        };
    },
    props: {
        affichage: [],
    },
})
</script>

<style>
#ecran {
    display: flex;
    height: 50px;
    justify-content: end;

    border: 3px solid black;
    margin: 5px;
    border-radius: 5px;
}
</style>