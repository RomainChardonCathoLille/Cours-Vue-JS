<template>
<div id="calculette">
    <EcranCalculatrice :affichage="elements"/>
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
    emits: ["update_calculator_screen"],
    methods: {
        gerer_elements(element){
            if(element != "="){
                this.elements.push(element);
            } else {
                this.faire_calcul();
            }
            this.$emit("update_calculator_screen", this.elements);
        },
        faire_calcul(){
            let calcul = [];
            let i = 0;
            let n = 0;
            this.elements.forEach(element => {
                console.log(i);
                if(element == "="){
                    if(calcul.length != 0){
                        
                    }
                } else if (element !="x" && element != "/" && element != "+" && element != "-"){
                    if(n == 0){
                        let element_calcul = "";
                        element_calcul += (element);
                        calcul.push(element_calcul);
                        n = 1;
                    } else {
                        calcul[i] += element;
                    }
                } else {
                    if(element == "/" || element == "x" || element == "+"){
                        if(n != 0){
                            calcul.push(element);
                            i += 2;
                            n = 0;
                        }
                    } else {
                        if(i == 0 && n == 0){
                            let element_calcul = "";
                            element_calcul += (element);
                            calcul.push(element_calcul);
                            n = 1;
                        } else {
                            calcul.push(element);
                            n = 0;
                            i += 2;
                        }
                    }
                }
            });
            console.log(calcul);
            let valeur_finale = 0;
            let index_operations = []
            i = 0;
            calcul.forEach(item => {
                if(calcul[i] == "+" || calcul[i] == "-" || calcul[i] == "*" || calcul[i] == "/"){
                    index_operations.push(i);
                }
                i++;
            });
            console.log(index_operations);
            n = 0;
            while(calcul.length > 1){
                index_operations.forEach(item => {
                let new_val;
                switch(calcul[item]){
                    case "x":
                        new_val = calcul[item-1] * calcul[item+1];
                        calcul[item] = "" + new_val;
                        calcul.splice(item-1, 1);
                        calcul.splice(item, 1);
                        index_operations.splice(n);
                        break;
                    case "/":
                        new_val = calcul[item-1] * calcul[item+1];
                        calcul[item] = "" + new_val;
                        calcul.splice(item-1, 1);
                        calcul.splice(item, 1);
                        index_operations.splice(n);
                        break;
                }
                n++;
            });
            n = 0;
            index_operations.forEach(item => {
                let new_val;
                switch(calcul[item]){
                    case "-":
                        new_val = calcul[item-1] - calcul[item+1];
                        calcul[item] = "" + new_val;
                        console.log("CALCUL: " + calcul[item-1] + " - " + calcul[item+1] + " = " + new_val);
                        calcul.splice(item-1, 1);
                        calcul.splice(item, 1);
                        index_operations.splice(n);
                        break;
                    case "+":
                        new_val = calcul[item-1] + calcul[item+1];
                        calcul[item] = "" + new_val;
                        calcul.splice(item-1, 1);
                        calcul.splice(item, 1);
                        index_operations.splice(n);
                        break;
                }
                console.log(calcul);
                n++;
            });
            
            }
            
            this.elements = calcul;
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