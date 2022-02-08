<template>
<div v-if="message_erreur == 1">
    ERREUR DANS LE FORMULAIRE
</div>
<form v-if="confirme == 0" @submit="checkForm">
    <label for="name">Nom</label><br>
    <input type="text" name="name" v-model="nom" ><br>

    <label for="prenom">Prenom</label><br>
    <input type="text" name="prenom" v-model="prenom"><br>

    <label for="dateNaissance">Date naissance</label><br>
    <input type="date" name="dateNaissance" v-model="dateNaissance"><br>

    <label for="email">email</label><br>
    <input type="email" name="dateNaissance" v-model="email"><br>

    <input type="submit" value="Confirmer">
</form>

<div v-if="confirme == 1">
    Félicitations, vous êtes inscrits !
</div>

</template>

<script>
    import { defineComponent } from "vue";

    export default defineComponent({
        data(){
            return {
                nom: null,
                prenom: null,
                dateNaissance: null,
                email: null,
                confirme: 0,
                message_erreur:0,
            }
        },
        methods: {
            checkForm(){
                if(this.nom && this.prenom && this.dateNaissance && email){
                    this.confirme = 1;
                } else {
                    this.message_erreur = 1;
                }
            }
        }
    });
</script>