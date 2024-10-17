<template>
  <section class="userInfomations-section">
  <div class="userInfomations-header">
    <h2>userInfomations</h2>
  </div>
  <div class="add">
      <button class="btn btn-primary" @click="addUser">add</button>
  </div>
    <!-- userInfomations cards -->
<div class="row mt-5 content">
  
  <div class="d-flex flex-wrap justify-content-start">
    <div class="card-header">
      <div class="header_item">Username</div>
      <div class="header_item">Password</div>
      <div class="header_item">Gender</div>
      <div class="header_item">email</div>
      <div class="header_item">options</div>
    </div>
    <div v-for="(card, index) in userList" :key="index" class="content">
      <ul class="content-group">
        <li class="content-group-item">{{ card.username }}</li>
        <li class="content-group-item">{{ card.password }}</li>
        <li class="content-group-item">{{ card.gender }}</li>
        <li class="content-group-item">{{ card.email }}</li>
        <li class="content-group-item">
         <span style="color: greenyellow;cursor: pointer;" @click="edit(card)"> edit</span>
         <span style="color: red;cursor: pointer;" @click="del(card,index)"> delete</span>
        </li>
      </ul>
    </div>
  </div>
</div>
<div class="dialog" v-if="visible">
      <div class="dialog_inner">
          <div class="form_content">
              <div class="title">{{ title }}</div>
              <div class="profile-info">
                  <div class="info-field">
                  <label>Center Name</label>
                  <input
                      type="text"
                      class="form-control"
                      v-model="userInfo.username"
                  />
                  </div>
                  <div class="info-field">
                  <label>Email ID</label>
                  <input
                      type="text"
                      class="form-control"
                      v-model="userInfo.email"
                  />
                  </div>
                  <div class="info-field">
                  <label>password</label>
                  <input
                      type="text"
                      class="form-control"
                      v-model="userInfo.password"
                  />
                  </div>
              
                  <div class="info-field">
                  <label>Gender</label>
                  <select class="form-select" id="gender" v-model="userInfo.gender">
                          <option value="">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                      </select>
                  </div>
              <div class="button_content">
                  <button class="btn btn-primary me-2" @click="submit">Submit</button>
                  <button class="btn me-2" @click="cancel">Cancel</button>
              </div>
              </div>
          </div>
      </div>
</div>
  </section>
</template>
<script>
export default {
  name: 'userInfomationsView',
  data() {
    return {
      title: "Add User",
      visible: false,
      userList: [],
      userInfo: {
          id: Math.random().toString(36).substr(2),
          username: "",
          email: "",
          password: "",
          gender: "",
          role: 0,
          isAustralian: true,
          reason: '',
          suburb: 'Clayton',
          rats: {}
        }
    }
  },
  methods: {
    isUsernameTaken(newUsername, userId) {
      return this.userList.some(user => user.username === newUsername && user.id !== userId);
    },
    isEmailTaken(newEmail, userId) {
      return this.userList.some(user => user.email === newEmail && user.id !== userId);
    },
    submit() {
      if (this.isUsernameTaken(this.userInfo.username, this.userInfo.id)) {
        alert("Username is already taken. Please choose another one.");
        return;
      }
      if (this.isEmailTaken(this.userInfo.email, this.userInfo.id)) {
        alert("Email is already in use. Please choose another one.");
        return;
      }

      if (this.title == "Add User") {
        // let newId = this.userList.reduce((maxId, user) => Math.max(user.id, maxId), 0) + 1;
        let newUser = {...this.userInfo};
        this.userList.push(newUser);
      } else {
        this.userList = this.userList.map(user => user.id === this.userInfo.id ? {...this.userInfo} : user);
      }

      localStorage.setItem('userList', JSON.stringify(this.userList));
      alert(this.title == "Add User" ? "User added successfully" : "User updated successfully");
      this.cancel();
    },
    addUser() {
      this.userInfo = {
        id: Math.random().toString(36).substr(2), // Reset ID for new user
        username: "",
        email: "",
        password: "",
        gender: "",
        role: 0,
        isAustralian: true,
        reason: '',
        suburb: 'Clayton',
        rats: {}
      };
      this.title = "Add User";
      this.visible = true;
    },
    cancel() {
      this.visible = false;
    },
    edit(row) {
      this.title = "Edit User";
      this.userInfo = {...row};
      this.visible = true;
    },
    del(row, index) {
      if (row.role == 1) {
        alert("Cannot delete an administrator");
      } else {
        this.userList.splice(index, 1);
        localStorage.setItem('userList', JSON.stringify(this.userList));
        alert("User deleted successfully");
      }
    },
  },
mounted() {
  this.token = sessionStorage.getItem('token')
  this.userList = JSON.parse(localStorage.getItem('userList') || '[]')
  const id = sessionStorage.getItem('id')
  this.userData = this.userList.filter((item) => item.id == id)
  this.userDataNo = this.userList.filter((item) => item.id != id)
}
}
</script>
<style scoped>
.userInfomations-section {
width: 800px;
padding: 20px;
background-color: #fff;
}

.userInfomations-header {
align-items: center;
padding: 10px;
margin-bottom: 20px;
background-color: #eee; /* Adds a grey background */
border-radius: 8px; /* Rounds the corners */
}
.card-header {
width: 100%;
color: #000;
padding: 10px;
border-radius: 10px 10px 0 0;
display: flex;
justify-content: space-between;
}
.header_item {
width: 20%;
text-align: center;
}
.content {
width: 100%;
border-top: 1px solid #ccc;
}

.content-group {
width: 100%;
padding: 10px;
display: flex;
justify-content: space-between;
list-style: none;
margin: 0;
padding: 0;
}
.content-group li {
width: 20%;
text-align: center;
height: 50px;
line-height: 50px;
}
.add {
display: table;
float: left;
margin-bottom: 30px;
}
.dialog {
  width: 100%;
  height: 100vh;
  background: rgba(175, 168, 168, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999999;
}
.dialog_inner {
  width: 100%;
  height: 100%;
  position: relative;
}
.form_content {
  width: 400px;
  height: 500px;
  background: #fff;
  border-radius: 20px;
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 20%;
}
.title {
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
}
.profile-info {
width: 60%;
margin: 20px auto 0 auto;
}
.info-field {
margin-bottom: 10px;
}
.info-field label {
font-weight: bold;
}
.profile-picture {
text-align: center;
}
.button_content {
  margin-top: 20px
}
</style>
