<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <h1 class="text-center">🗄️ W5.Library Registration Form</h1>
        <form @submit.prevent="submitForm">
          <!-- Row for Username and Password -->
          <div class="row mb-3">
            <!-- Username Field -->
            <div class="col-md-6">
              <label for="username" class="form-label">Username</label>
              <input type="text" class="form-control" id="username"
                @blur="() => validateName(true)"
                @input="() => validateName(false)"
                v-model="formData.username" />
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
              <input type="password" class="form-control" id="password"
                @blur="() => validatePassword(true)"
                @input="() => validatePassword(false)"
                v-model="formData.password" />
              <div v-if="errors.confirmPassword" class="text-danger">
                {{ errors.confirmPassword }}
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
                <input type="checkbox" class="form-check-input" id="isAustralian"
                      v-model="formData.isAustralian"
                      @blur="() => validateAustralianResident(true)">
                <label class="form-check-label" for="isAustralian">Australian Resident?</label>
                <div v-if="errors.resident" class="text-danger">{{errors.resident}}</div>
              </div>
            </div>
          </div>

          <div class="mb-3">
            <label for="reason" class="form-label">Reason for joining</label>
            <textarea class="form-control" id="reason" rows="3" 
                      v-model="formData.reason"
                      @blur="() => validateReason(true)"></textarea>
            <div v-if="errors.reason" class="text-danger">{{ errors.reason }}</div>
            <div v-if="specialMessageVisible" class="text-success">
              Great to have a friend
            </div>
          </div>

          <!-- suburb -->
          <div class="mb-3">
            <label for="reason" class="form-label">Suburb</label>
            <input type="text" class="form-control" id="suburb" v-bind:value="formData.suburb" />
          </div>
         
          <!-- submit and Clear -->
          <div class="text-center">
            <button type="submit" class="btn btn-primary me-2">Submit</button>
            <button type="button" class="btn btn-secondary" @click="clearForm">Clear</button>
          </div>
        </form>
      </div>
      </div>
    </div>



    <!-- Display submitted cards -->
    <div class="row mt-5">
      <div class="d-flex flex-wrap justify-content-start">
        <div class="card-header ">
            <div class="header_item">Username</div>
            <div class="header_item">Password</div>
            <div class="header_item">Australian Resident</div>
            <div class="header_item">Gender</div>
            <div class="header_item">Reason</div>
        </div>
        <div v-for="(card, index) in submittedCards" :key="index" class="content m-2">
          <ul class="content-group">
            <li class="content-group-item">{{ card.username }}</li>
            <li class="content-group-item">{{ card.password }}</li>
            <li class="content-group-item">{{ card.isAustralian ? 'true' : 'false' }}</li>
            <li class="content-group-item">{{ card.gender }}</li>
            <li class="content-group-item">{{ card.reason }}</li>
          </ul>
        </div>
      </div>
    </div>
  <!-- </div> -->
</template>


<script setup>
// Our logic will go here
import { ref } from 'vue';

const formData = ref({
  username: '',
  password: '',
  confirmPassword: '',
  isAustralian: false,
  reason: '',
  gender: '',
  suburb: 'Clayton'// called suburb inside my script's formData
})


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
]);

const formSubmitted = ref(false);
const specialMessageVisible = ref(false); // Flag to control the display of the special message

const submitForm = () =>{
  validateName(true);
  validatePassword(true)
  validateGender(true)
  validateAustralianResident(true)
  validateReason(false);
  if (!errors.value.username && !errors.value.password && !errors.value.gender && !errors.value.reason && !errors.value.gender){
    submittedCards.value.push({...formData.value});
    formSubmitted.value = true; // Set the submission flag to true on successful submit
    clearForm();
  } 
};

const clearForm =() =>{
  formData.value = {
    username: '',
    password: '',
    isAustralian:false,
    reason: '',
    gender:''

  };
};

const errors = ref({
  username:null,
  password:null,
  comfirmPassword:null,
  resident: null,
  gender: null,
  reason: null,
});

const validateName =(blur) =>{
  if (formData.value.username.length < 3){
    if(blur) errors.value.username = "Name must be at least 3 characters";
  }else{
    errors.value.username = null;
  }
};
const validatePassword =(blur) =>{
  const password = formData.value.password;
  const minLength = 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /["!@#$%^&*(),.?":{}|<>]/.test(password);

  if(password.length < minLength){
    if (blur) errors.value.password = `Password must be at least ${minLength} characters long.`;
  } else if (!hasUppercase){
    if (blur) errors.value.password = "Password must contain at least one uppercase letter.";
  } else if (!hasLowercase){
    if (blur) errors.value.password = "Password must contain at least one lowcase letter.";
  } else if (!hasNumber){
    if (blur) errors.value.password = "Password must contain at least one number."
  } else if (!hasSpecialChar){
    if (blur) errors.value.password = "Password must contain at least one special character.";
  } else{
    errors.value.password = null;
  }
};

const validateGender =(blur) =>{
  if (!formData.value.gender){
    if(blur){
      errors.value.gender = "Please select a gender.";
    }
  } else {
    errors.value.gender = null;
  }
}

const validateAustralianResident = (blur) =>{
  if (!formData.value.isAustralian){
    if(blur) errors.value.resident = "Please comfirm if you are an Australian resident.";
  } else {
    errors.value.resident = null;
  }
};

// Validation and other logic...
const validateReason = (blur) => {
  const reason = formData.value.reason.trim();
  if (!reason) {
    if (blur) {
      errors.value.reason = "Please provide a reason for joining.";
      specialMessageVisible.value = false;
    }
  } else if (reason.length < 10) {
    if (blur) {
      errors.value.reason = "Reason must be at least 10 characters long.";
      specialMessageVisible.value = false;
    }
  } else {
    errors.value.reason = null;
    specialMessageVisible.value = true; // Show the special message when the input is valid and over 10 characters
  }
}


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
   .card-header .header_item{
      width: 25%;
      text-align: left;
    }
   .content {
    width: 100%;
    border-top: 1px solid #ccc;
   }

   .content-group{
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin: 0;
    padding: 0;
    padding-left: 20px;
   }
   .content-group li{
    width: 25%;
    text-align: left;
    height: 50px;
    line-height: 50px;
   }

</style>