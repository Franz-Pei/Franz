<template>
    <!-- <div id="app">
        <h1> Book Counter</h1>
        <button @click="getBookCount">Get Book Count</button>
        <p v-if="count !== null">Total number of books:{{count}}</p>
        <p v-if="error">{{error}}</p>
    </div> -->
    <pre>{{jsondata}}</pre>
</template>

<script>
import axios from 'axios';
    export default {
    data() {
        return {
        jsondata: null,
        error: null,
        };
    },
    mounted()
    {
        this.getBookCountAPI();
    },
    methods: {
        async getBookCountAPI()
        { 
        try {
            const response = await axios.get('https://countbooks-kkfr2aoqna-uc.a.run.app');
            this.jsondata = response.data;
            console.log("Response:", this.jsondata);
            this.error = null;
            } catch (error) {
                console.error('Error fetching book count:', error);
                this.error = error;
                this.count = null;
            }
        }
    },
 };
  </script>