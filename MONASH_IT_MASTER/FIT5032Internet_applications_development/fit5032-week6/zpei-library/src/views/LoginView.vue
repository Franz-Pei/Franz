<template>
    <div>
        <h2> Login</h2>
        <h3 class="msg" v-if="loginStatus">Login Failed, Wrong Username or Password</h3>
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
                loginStatus: false
            };
        },
        methods:{
            ...mapActions(['login']),
           async handleLogin(){
                const user = {username: this.username, password: this.password};
               const res = await this.login(user);
               console.log(res,"res")
               if(res.code == 200) {
                this.loginStatus = false
                sessionStorage.setItem("token",res.data.token)
                this.$router.push({name: 'Home'});
               } else {
                this.loginStatus = true
               }
            },
        },
    };
</script>

<style scoped>
.msg{
    color: red;
}
</style>