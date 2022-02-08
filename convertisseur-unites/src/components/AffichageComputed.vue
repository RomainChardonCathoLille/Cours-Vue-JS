<template>
<form>
    <label for="v_km">Valeur en KM</label>
    <input type="number" name="v_km" v-model="valeur_km">
</form>
<div>
    <ul>
        <li>Valeur en cm: {{valeur_cm}} cm</li>
        <li>Valeur en mm: {{valeur_mm}} mm</li>
        <li>Valeur en µm: {{valeur_mcm}} µm</li>
    </ul>
</div>

</template>

<script>
    import { defineComponent } from "vue";

    export default defineComponent({
        data(){
            return {
                valeur_km: 0,
            }
        },
        computed: {
            valeur_cm(){
                return this.valeur_km*100000;
            },
            valeur_mm(){
                return this.valeur_km*1000000;
            },
            valeur_mcm(){
                return this.valeur_km*1000000*1000;
            }

        }
    });
</script>