<template>
    <Tweet/>
    <div v-for="tweet in tweets" class="tweet">
        <p>{{ tweet.message }}</p>
    </div>
</template>

<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import axios from "axios";
import Tweet from "./components/tweet.vue";


export default {
    data() {
        return {
            tweets: [],
        };
    },
    created() {
        axios
            .get("https://fges-twitter-clone.herokuapp.com/allTweets", {
            headers: {
                "x-fges-user-key": "k5ant4cNQ85Up8Sxq9yUGQTfaTh43B7X",
            },
        })
            .then(result => {
            this.tweets = result.data;
        });
    },
    components: { Tweet }
}


</script>