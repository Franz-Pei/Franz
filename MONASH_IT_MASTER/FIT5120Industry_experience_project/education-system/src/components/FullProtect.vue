<template>
  <div v-if="showModal" class="password-overlay">
    <div class="password-modal">
      <div class="password-card card shadow-lg">
        <div class="card-body text-center">
          <h2 class="mb-4">System Verification</h2>
          <div class="mb-3">
            <input
              type="password"
              class="form-control form-control-lg"
              placeholder="Please Enter Password"
              v-model="password"
              @keyup.enter="handleSubmit"
              :disabled="isLoading"
            />
          </div>
          <button
            class="btn btn-primary w-100 btn-lg"
            @click="handleSubmit"
            :disabled="isLoading"
          >
            <span v-if="!isLoading">Verify Identity</span>
            <span v-else>
              <span class="spinner-border spinner-border-sm me-2"></span>
              Verifying...
            </span>
          </button>

          <div v-if="errorMessage" class="alert alert-danger mt-3 mb-0">
            {{ errorMessage }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
// Default password for verification
// SessionStorage key for authentication state
import { DEFAULT_PASSWORD, STORAGE_KEY } from "@/utils/index.js";


// Reactive states
const showModal = ref(true); // Whether to display the modal
const password = ref(""); // Input password
const errorMessage = ref(""); // Error message to display
const isLoading = ref(false); // Loading state for button and input

/**
 * Handles the password submit event.
 * Validates input, simulates an API call delay, and checks password correctness.
 */
const handleSubmit = async () => {
  // If password input is empty, show an error
  if (!password.value) {
    errorMessage.value = "Please Enter The Password";
    return;
  }

  // Start loading and clear previous error
  isLoading.value = true;
  errorMessage.value = "";

  try {
    // Simulate API delay (e.g., checking password on server)
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Check if entered password matches the default password
    if (password.value === DEFAULT_PASSWORD) {
      // Store authentication status in sessionStorage
      sessionStorage.setItem(STORAGE_KEY, "authenticated");
      // Hide the modal after successful authentication
      showModal.value = false;
    } else {
      // If password is incorrect, show error and clear the input
      errorMessage.value = "Incorrect Password, Please Try Again";
      password.value = "";
    }
  } finally {
    // Stop loading state
    isLoading.value = false;
  }
};

// On component initialization, check if already authenticated
if (sessionStorage.getItem(STORAGE_KEY) === "authenticated") {
  showModal.value = false;
}
</script>

<style scoped>
.password-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.password-card {
  background: rgba(255, 255, 255, 0.8);
  border-radius: 15px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
  overflow: hidden;
}
.password-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0.1) 100%
  );
  z-index: -1;
}
.form-control {
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.form-control:focus {
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.15);
}
.btn-primary {
  background: rgba(13, 110, 253, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(2px);
}
.alert {
  background: rgba(248, 215, 218, 0.9);
  border-color: rgba(220, 53, 69, 0.2);
}
@keyframes modalEnter {
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@media (max-width: 576px) {
  .password-modal {
    padding: 15px;
  }
  
  .password-card {
    border-radius: 12px;
  }
}
</style>
