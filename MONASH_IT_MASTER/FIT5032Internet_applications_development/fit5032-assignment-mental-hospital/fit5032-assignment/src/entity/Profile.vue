<template>
  <section class="profile-section">
    <div class="profile-header">
      <h2>Profile</h2>
      <div class="profile-picture">
        <img :src="user.avatarUrl" :alt="userInfo.username" @error="handleImageError" />
        <p>{{ userInfo.username }}</p>
      </div>
    </div>
    <div class="profile-details">
      <div class="profile-info">
        <div class="info-field">
          <label>Center Name</label>
          <input
            type="text"
            class="form-control"
            v-model="userInfo.username"
            readonly 
          />
          <span class="text-muted">(Unmodifiable)</span> 
        </div>
        <div class="info-field">
          <label>Email ID</label>
          <input
            type="text"
            class="form-control"
            v-model="userInfo.email"
            readonly 
          />
          <span class="text-muted">(Unmodifiable)</span> 
        </div>
        <div class="info-field">
          <label>Password</label>
          <input
            type="password"
            class="form-control"
            v-model="userInfo.password"
            placeholder="Update Password"
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
        <div class="">
          <button class="btn btn-primary me-2" @click="submit">Submit</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getAuth, onAuthStateChanged, updatePassword } from "firebase/auth"; // Firebase modular SDK

export default {
  name: 'ProfileView',
  data() {
    return {
      user: {
        avatarUrl: '@/images/icon.png', // Default avatar
      },
      userInfo: {
        username: "",
        email: "",
        password: "", // For password update
        gender: "",
      },
      token: "",
    };
  },
  methods: {
    submit() {
      // If the user updates their password, use Firebase to update it
      if (this.userInfo.password) {
        const auth = getAuth();
        const user = auth.currentUser;
        updatePassword(user, this.userInfo.password)
          .then(() => {
            alert("Password updated successfully");
          })
          .catch((error) => {
            console.error("Error updating password:", error);
          });
      }
      // Handle other updates (like gender) by saving them locally or sending to your backend
    },
    handleImageError(event) {
      event.target.src = '@/images/default-avatar.png'; // Fallback avatar
    },
    fetchUserData() {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // Retrieve Firebase user data and set it to userInfo
          this.userInfo.email = user.email;
          this.userInfo.username = user.displayName || "No Name Provided"; // Display name if available
          // Handle avatar if the user has a photoURL in their Firebase profile
          this.user.avatarUrl = user.photoURL || '@/images/default-avatar.png';
        } else {
          console.log("No user is signed in.");
        }
      });
    }
  },
  mounted() {
    this.fetchUserData(); // Fetch Firebase user data when the component is mounted
  }
}
</script>

<style scoped>
.profile-section {
  width: 800px;
  padding: 20px;
  background-color: #fff;
}

.profile-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 20px;
  background-color: #eee;
  border-radius: 8px;
}

.profile-picture img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}

.profile-details {
  display: flex;
  justify-content: space-between;
}

.profile-info {
  width: 60%;
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
</style>
