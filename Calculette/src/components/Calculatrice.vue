<template>
<div id="calculette">
    <EcranCalculatrice affichage="element"/>
    <div id="boutons">
        <BoutonCalculatrice @update-data="gerer_elements" numero="9"/>
        <BoutonCalculatrice @update-data="gerer_elements" numero="8"/>
        <BoutonCalculatrice @update-data="gerer_elements" numero="7"/>
        <BoutonCalculatrice @update-data="gerer_elements" numero="6"/>
        <BoutonCalculatrice @update-data="gerer_elements" numero="5"/>
        <BoutonCalculatrice @update-data="gerer_elements" numero="4"/>
        <BoutonCalculatrice @update-data="gerer_elements" numero="3"/>
        <BoutonCalculatrice @update-data="gerer_elements" numero="2"/>
        <BoutonCalculatrice @update-data="gerer_elements" numero="1"/>
        <BoutonCalculatrice @update-data="gerer_elements" numero="0"/>

        <BoutonCalculatrice @update-data="gerer_elements" numero="/"/>
        <BoutonCalculatrice @update-data="gerer_elements" numero="-"/>
        <BoutonCalculatrice @update-data="gerer_elements" numero="+"/>
        <BoutonCalculatrice @update-data="gerer_elements" numero="x"/>
        <BoutonCalculatrice @update-data="gerer_elements" numero="="/>
    </div>

</div>
</template>

<script>
import { defineComponent } from 'vue';
import EcranCalculatrice from './EcranCalculatrice.vue';
import BoutonCalculatrice from './BoutonCalculatrice.vue';

export default defineComponent({
    data() {
        return {
            elements: [],
        };
    },
    components: { EcranCalculatrice, BoutonCalculatrice },
    methods: {
        gerer_elements(element){
            console.log(element);
            if(element.numer != "="){
                this.elements.push(element);
            } else {
                this.faire_calcul();
            }
        },
        faire_calcul(){

        }
    }

})
</script>

<style>
#calculette {
    border: 3px solid black;
    border-radius: 5px;
    width: 500px;
}

.bouton {
    width: 30%;
    height: 50px;
}
#boutons {
    margin-left: auto;
    margin-right: auto;
}
</style>