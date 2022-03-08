<template>
<div id="tweetArea">
  <h1>Accueil</h1>
  <form @submit.prevent="sendTweet" id="tweetForm">
      <textarea placeholder="Quoi de neuf ?" class="tweetZone" v-model="content">
      </textarea>
      <div id="sep"></div>
      <input type="submit" value="Tweeter" id="tweetSubmitButton">
  </form>
</div>
</template>

<script>
import { defineComponent } from 'vue';
import axios from "axios";

export default defineComponent({
  data: () => {
    return {
      content: null,
      textLengthError: false,
    }
  },
  methods: {
    sendTweet(){
      if(this.content != null){
        if(this.content.length > 260){
          textLengthError = true;
        } else {
          axios.post(
            "https://fges-twitter-clone.herokuapp.com/tweet",
            {
              message: this.content,
              parent: "",
            },
            {
              headers:{
                "x-fges-user-key": "k5ant4cNQ85Up8Sxq9yUGQTfaTh43B7X",
              } 
            }
          );
          this.content = null;
        }
      }
    }
  }
});
</script>

<style>
#tweetArea {
  border: 1px solid rgb(239, 243, 244);
  overflow: auto;
  padding-bottom: 10px;
}
  .tweetZone {
    resize: none;
    width: 100%;
    margin-top: 15px;
    border: none;
  }

  .tweetZone:focus{
    outline: none;
  }

  #sep {
    width: 95%;
    height: 1px;
    background-color:rgb(239, 243, 244);
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
  }
  #tweetSubmitButton {
    float: right;
    margin-right: 5%;
    background-color: #770073;
    border: none;
    border-radius: 15px;
    color: white;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 5px;
    padding-bottom: 5px;
  }
  #tweetForm {
    width: 95%;
    margin-left: 2.5%;
  }
</style>