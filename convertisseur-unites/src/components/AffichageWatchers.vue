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
                valeur_cm: 0,
                valeur_mm: 0,
                valeur_mcm: 0,
            }
        },
        watch: {
            valeur_km: function(newVal){
                this.valeur_cm = newVal * 100000;
                this.valeur_mm = newVal * 1000000;
                this.valeur_mcm = newVal * 1000000*1000;
            }
        }
    });
</script>