<template>
    <div>
        <h2> Login</h2>
        <form @submit.prevent="handleLogin">
            <div>
                <label for="username">Username:</label>
                <input type="text" v-model="username" required>
            </div>
            <div>
                <label for="password">Password:</label>
                <input type="password" v-model="password" required>
            </div>
            <button type="submit">Login</button>
            </form>
        </div>
    </template>

    <script>
    import { mapActions } from 'vuex';

    export default{
        data(){
            return{
                username:'',
                password:'',
            };
        },
        methods:{
            ...mapActions(['login']),
            handleLogin(){
                const user = {username: this.username, password: this.password};
                this.login(user);
                this.$router.push({name: 'Home'});
            },
        },
    };
</script>