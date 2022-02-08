<template>
<div id="div_main">
    <button class="bouton_carousel" @click="decrement_index">&lt</button>
    <img :src="listeImage[index]"/>
    <button class="bouton_carousel" @click="increment_index">></button>
</div>

</template>

<script>
    import { defineComponent } from "vue";

    export default defineComponent({
        data(){
            return {
               listeImage: ['https://i.pinimg.com/originals/a3/c9/31/a3c931d0740f200e839b863a9d93a1dc.jpg', 'https://sfractus-images.cleo.media/unsafe/567x0:1647x1080/641x0/images/Rick-et-Morty-1668.jpg', 'https://collection.cdn-pictorem.com/collection/900_Gunawan-Rb_Monkey%20D%20%20Luffy%20-%20Anime%20one%20piece%20series.jpg'],
               index: 0,
            }
        },
        methods: {
            increment_index(){
                this.index += 1;
                if(this.index >= this.listeImage.length) this.index = 0;
            },
            decrement_index(){
                this.index -= 1;
                if(this.index < 0) this.index = this.listeImage.length - 1;
            }
        }
    });
</script>

<style>
.bouton_carousel{
    height: 150px;
    width: 150px;
    margin: 30px;
}

#div_main {
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
}

img {
    width: 50%;
}
</style>