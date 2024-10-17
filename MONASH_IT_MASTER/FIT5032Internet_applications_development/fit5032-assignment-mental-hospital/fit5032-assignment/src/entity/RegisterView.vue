<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <h1 class="text-center">Registration Form</h1>
        <form @submit.prevent="submitForm">
          <!-- Row for Username and Password -->
          <div class="row mb-3">
            <!-- Username Field -->
            <div class="col-md-6">
              <label for="username" class="form-label">Username</label>
              <input
                type="text"
                class="form-control"
                id="username"
                @blur="() => validateName(true)"
                @input="() => validateName(false)"
                v-model="formData.username"
              />
              <div v-if="errors.username" class="text-danger">{{ errors.username }}</div>
            </div>
            <!-- Gender -->
            <div class="col-md-6">
              <label for="gender" class="form-label">Gender</label>
              <select class="form-select" id="gender" v-model="formData.gender">
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <div v-if="errors.gender" class="text-danger">{{ errors.gender }}</div>
            </div>
            <!-- Password Field -->
            <div class="col-md-6">
              <label for="password" class="form-label">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                @blur="() => validatePassword(true)"
                @input="() => validatePassword(false)"
                v-model="formData.password"
              />
              <div v-if="errors.password" class="text-danger">
                {{ errors.password }}
              </div>
            </div>
            <!-- confirm password -->
            <div class="col-md-6">
              <label for="confirm-password" class="form-label">Confirm password</label>
              <input
                type="password"
                class="form-control"
                id="confirm-password"
                v-model="formData.confirmPassword"
                @blur="() => validateConfirmPassword(true)"
              />
              <div v-if="errors.confirmPassword" class="text-danger">
                {{ errors.confirmPassword }}
              </div>
            </div>
          </div>

          <!-- Additional Fields -->
          <div class="row mb-3">
            <div class="col-md-6">
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="isAustralian"
                  v-model="formData.isAustralian"
                  @blur="() => validateAustralianResident(true)"
                />
                <label class="form-check-label" for="isAustralian">Australian Resident?</label>
                <div v-if="errors.resident" class="text-danger">{{ errors.resident }}</div>
              </div>
            </div>
          </div>

          <div class="mb-3">
            <label for="reason" class="form-label">Reason for joining</label>
            <textarea
              class="form-control"
              id="reason"
              rows="3"
              v-model="formData.reason"
              @blur="() => validateReason(true)"
            ></textarea>
            <div v-if="errors.reason" class="text-danger">{{ errors.reason }}</div>
            <div v-if="specialMessageVisible" class="text-success">Great to have a friend</div>
          </div>
          <!-- email Field -->
          <div class="cmb-3">
            <label for="email" class="form-label">Email</label>
            <input
              type="text"
              class="form-control"
              id="email"
              @blur="() => validateEmail(true)"
              @input="() => validateEmail(false)"
              v-model="formData.email"
            />
            <div v-if="errors.email" class="text-danger">{{ errors.email }}</div>
            <div v-if="emailMessageVisible" class="text-success">Great to have a friend</div>
          </div>
          <!-- suburb -->
          <div class="mb-3">
            <label for="reason" class="form-label">Suburb</label>
            <input type="text" class="form-control" id="suburb" v-bind:value="formData.suburb" />
          </div>

          <!-- Submit, Clear, and Sign In Buttons -->
          <div class="text-center button-container">
            <button type="submit" class="btn btn-primary me-2">Submit</button>
            <button type="button" class="btn btn-secondary me-2" @click="clearForm">Clear</button>
            <!-- Router-link with an image for signing in -->
            <router-link to="/sign-in" class="btn btn-link">
              <img src="@/images/sign-in.png" alt="Sign In" class="button-image" />
            </router-link>
        </div>
        </form>
      </div>
    </div>
  </div>

  <!-- Display submitted cards -->
  <div class="row mt-5 content">
    <div class="d-flex flex-wrap justify-content-start">
      <div class="card-header">
        <div class="header_item">Username</div>
        <div class="header_item">Password</div>
        <div class="header_item">Australian Resident</div>
        <div class="header_item">Gender</div>
        <div class="header_item">email</div>
        <div class="header_item">Reason</div>
      </div>
      <div v-for="(card, index) in submittedCards" :key="index" class="content m-2">
        <ul class="content-group">
          <li class="content-group-item">{{ card.username }}</li>
          <li class="content-group-item">{{ card.password }}</li>
          <li class="content-group-item">{{ card.isAustralian ? 'true' : 'false' }}</li>
          <li class="content-group-item">{{ card.gender }}</li>
          <li class="content-group-item">{{ card.email }}</li>
          <li class="content-group-item">{{ card.reason }}</li>
        </ul>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script setup>
// Our logic will go here
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const userList = ref(JSON.parse(localStorage.getItem('userList')))
const formData = ref({
  id: Math.random().toString(36).substr(2),
  username: '',
  password: '',
  email: '',
  confirmPassword: '',
  isAustralian: false,
  reason: '',
  gender: '',
  suburb: 'Clayton', // called suburb inside my script's formData
  rats:{}
})
const errors = ref({
  username: null,
  password: null,
  email: null,
  comfirmPassword: null,
  // resident: null,
  gender: null,
  reason: null
})

// Function to check for duplicate usernames
const isUsernameTaken = (username) => {
  return userList.value.some(user => user.username.toLowerCase() === username.toLowerCase());
}
// Helper function to check for duplicate emails
const isEmailTaken = (email) => {
  return userList.value.some(user => user.email.toLowerCase() === email.toLowerCase());
}


// Username validation including uniqueness check
const validateName = (blur) => {
  if (formData.value.username.length < 3) {
    if (blur) errors.value.username = 'Name must be at least 3 characters'
  } else if (isUsernameTaken(formData.value.username)) {
    if (blur) errors.value.username = 'Username is already taken, please choose another.'
  } else {
    errors.value.username = null
  }
}

/**
 * Confirm password validation function that checks if the password and confirm password fields match.
 * @param blur: boolean - If true, the function will display an error message if the passwords do not match.
 */
const validateConfirmPassword = (blur) => {
  if (formData.value.password !== formData.value.confirmPassword) {
    if (blur) errors.value.confirmPassword = 'Passwords do not match.'
  } else {
    errors.value.confirmPassword = null
  }
}

const submittedCards = ref([
  // {
  //     username: 'jinx',
  //     password: '123456Qq@',
  //     isAustralian: false,
  //     reason: 'None',
  //     gender: 'male'
  //   }
])

const formSubmitted = ref(false)
const specialMessageVisible = ref(false) // Flag to control the display of the special message
const emailMessageVisible = ref(false)
const submitForm = () => {
  validateName(true)
  validatePassword(true)
  validateGender(true)
  // validateAustralianResident(true)
  validateReason(false)
  validateEmail(true);  // Make sure to validate the email when submitting the form
  // console.log(errors.value.username, 'username')
  // console.log(errors.value.password, 'password')
  // console.log(errors.value.gender, 'gender')
  // console.log(errors.value.reason, 'reason')
  // console.log(errors.value.email, 'email')
  // console.log(errors.value.resident, 'resident')
  if (
    !errors.value.username &&
    !errors.value.password &&
    !errors.value.gender &&
    !errors.value.reason &&
    !errors.value.email 
    // !errors.value.resident
  ) {
    // console.log(1111111)
    submittedCards.value.push({ ...formData.value, role: 0 })
    localStorage.setItem('userList', JSON.stringify(submittedCards.value))
    formSubmitted.value = true // Set the submission flag to true on successful submit
    clearForm()
  }
}

const clearForm = () => {
  formData.value = {
    id: Math.random().toString(36).substr(2),
    username: '',
    password: '',
    email: '',
    isAustralian: false,
    reason: '',
    gender: '',
    rats:{}
  }
}


const validatePassword = (blur) => {
  const password = formData.value.password
  const minLength = 8
  const hasUppercase = /[A-Z]/.test(password)
  const hasLowercase = /[a-z]/.test(password)
  const hasNumber = /\d/.test(password)
  const hasSpecialChar = /["!@#$%^&*(),.?":{}|<>]/.test(password)

  if (password.length < minLength) {
    if (blur) errors.value.password = `Password must be at least ${minLength} characters long.`
  } else if (!hasUppercase) {
    if (blur) errors.value.password = 'Password must contain at least one uppercase letter.'
  } else if (!hasLowercase) {
    if (blur) errors.value.password = 'Password must contain at least one lowcase letter.'
  } else if (!hasNumber) {
    if (blur) errors.value.password = 'Password must contain at least one number.'
  } else if (!hasSpecialChar) {
    if (blur) errors.value.password = 'Password must contain at least one special character.'
  } else {
    errors.value.password = null
  }
}

const validateGender = (blur) => {
  if (!formData.value.gender) {
    if (blur) {
      errors.value.gender = 'Please select a gender.'
    }
  } else {
    errors.value.gender = false
  }
}

const validateAustralianResident = () => {
  // if (!formData.value.isAustralian) {
  //   if (blur) errors.value.resident = 'Please comfirm if you are an Australian resident.'
  // } else {
  //   errors.value.resident = false
  // }
}
// 手机号校验
// Updated validateEmail function including uniqueness check
const validateEmail = (blur) => {
  const email = formData.value.email.trim();
  const emailRegex = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$/;

  // Check if the email is empty
  if (!email) {
    if (blur) errors.value.email = 'Email cannot be empty.';
    emailMessageVisible.value = false;
  } else if (!emailRegex.test(email)) {
    if (blur) errors.value.email = 'Invalid email format.';
    emailMessageVisible.value = false;
  } else if (isEmailTaken(email)) {
    if (blur) errors.value.email = 'This email is already taken, please use another.';
    emailMessageVisible.value = false;
  } else {
    errors.value.email = null;
    emailMessageVisible.value = true;
  }
}
const validateReason = (blur) => {
  const reason = formData.value.reason.trim()
  // Update the regex to exclude special characters but allow spaces
  let reg = new RegExp(
    "[`~!@#$%^&*()=|{}':;',\\[\\].<>《》/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]"
  )
  let flag = reg.test(reason)
  if (!reason) {
    if (blur) {
      errors.value.reason = 'Please provide a reason for joining.'
      specialMessageVisible.value = false
    }
  } else if (reason.length < 10) {
    if (blur) {
      errors.value.reason = 'Reason must be at least 10 characters long.'
      specialMessageVisible.value = false
    }
  } else if (flag) {
    if (blur) {
      errors.value.reason = 'Reason must not include special characters.'
      specialMessageVisible.value = false
    }
  } else {
    errors.value.reason = null
    specialMessageVisible.value = true // Show the special message when the input is valid and over 10 characters
  }
}
watch(
  () => route.name,
  (name) => {
    let userList = localStorage.getItem('userList')
      ? JSON.parse(localStorage.getItem('userList'))
      : []
    submittedCards.value = userList
    console.log(name)
  },
  {
    deep: true,
    immediate: true
  }
)
</script>

<style scoped>
.card-header {
  width: 100%;
  color: #000;
  padding: 10px;
  border-radius: 10px 10px 0 0;
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
}
.card-header .header_item {
  width: 20%;
  text-align: left;
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
  padding-left: 20px;
}
.content-group li {
  width: 20%;
  text-align: left;
  height: 50px;
  line-height: 50px;
}

.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.button-image {
  width: auto; /* Adjust width as needed */
  height: 40px; /* Match the height of your buttons */
  vertical-align: middle; /* Align the image vertically */
}

</style>
