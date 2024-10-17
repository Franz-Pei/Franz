<template>
  <div class="container py-5">
    <div class="row">
      <!-- Contact Information Section -->
      <div class="col-md-5">
        <h2 class="font-weight-bold">Contact Us Today for Personalized Support and Assistance</h2>
        <p>
          Reach out to us for personalized support and assistance. We are here to help you with any
          questions or concerns. Our team is dedicated to providing the best service possible.
        </p>
        <div class="mt-4">
          <p><i class="fas fa-phone-alt"></i> +61 045813398</p>
          <p><i class="fas fa-envelope"></i> zpei0003@student.monash.edu</p>
          <p><i class="fas fa-map-marker-alt"></i> Clayton Monash</p>
        </div>
      </div>

      <!-- Contact Form Section -->
      <div class="col-md-7">
        <form @submit.prevent="sendEmail">
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="firstName">First Name</label>
              <input
                type="text"
                class="form-control"
                id="firstName"
                v-model="firstName"
                required
                placeholder="Your first name"
              />
            </div>
            <div class="form-group col-md-6">
              <label for="lastName">Last Name</label>
              <input
                type="text"
                class="form-control"
                v-model="lastName"
                id="lastName"
                required
                placeholder="Your last name"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="email">Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                required
                v-model="email"
                placeholder="email@domain.com"
              />
            </div>
            <div class="form-group col-md-6">
              <label for="phone">Phone</label>
              <input
                type="text"
                class="form-control"
                id="phone"
                v-model="phone"
                required
                placeholder="+21 228xxxx"
              />
            </div>
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea
              class="form-control"
              id="message"
              rows="5"
              required
              placeholder="Your message"
              v-model="message"
            ></textarea>
          </div>

          <!-- PDF Attachment Section -->
          <div class="form-group my-2">
            <label for="attachment">Attach a PDF to describe your situation.</label>
            <input
              type="file"
              class="form-control-file"
              id="attachment"
              @change="onFileSelected"
              accept="application/pdf"
            />
            <small class="form-text text-muted">Please upload a PDF file only.</small>
          </div>
          <div v-if="error.status" class="text-danger my-2">
            {{ error.message }}
            <button @click="error.status = false" class="btn my-2 btn-primary tw-w-full">
              Dismiss
            </button>
          </div>
          <button v-if="!loading" type="submit" class="btn my-2 btn-primary tw-w-full">
            Send message
          </button>
          <button v-else disabled class="btn my-2 tw-bg-gray-600 tw-text-white tw-w-full">
            Loading data
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { EMAIL_ADDRESS } from '@/variables'
import { ref } from 'vue'
import { getFunctions, httpsCallable } from 'firebase/functions'

export default {
  name: 'ContactUS',
  setup() {
    const firstName = ref('')
    const lastName = ref('')
    const email = ref('')
    const phone = ref('')
    const message = ref('')
    const selectedFile = ref()
    const fileContent = ref()
    const functions = getFunctions()
    const loading = ref(false)
    const error = ref({
      status: false,
      message: ''
    })

    const sendEmail = async () => {
      // Validation check for email
      if (email.value === 'pzqfranz@gmail.com') {
        error.value = {
          status: true,
          message: 'Please enter a valid email. "pzqfranz@gmail.com" is not allowed.'
        }
        return
      }

      if (error.value.status) {
        error.value = {
          status: true,
          message: 'Please dismiss the error message.'
        }
        return
      }

      loading.value = true

      // Build email text
      const text = `First Name: ${firstName.value} \n Last Name: ${lastName.value} \n Email: ${email.value} \n Phone: ${phone.value} \n Message: ${message.value} \n EOF.`

      const data = {
        to: EMAIL_ADDRESS,
        subject: `New Contact Form Submission from ${firstName.value}`,
        text,
        attachmentInfo: selectedFile.value
          ? {
              self: fileContent.value.split('data:application/pdf;base64,')[1],
              mimeType: `application/pdf`,
              filename: selectedFile.value.name
            }
          : undefined
      }

      // Call Cloud Function
      const sendEmailWithAttachment = httpsCallable(functions, 'sendEmailWithAttachment')

      try {
        const result = await sendEmailWithAttachment({
          to: data.to,
          subject: data.subject,
          text: data.text,
          attachmentInfo: selectedFile.value ? data.attachmentInfo : null
        })

        // Handle success response
        if (result.data.success) {
          error.value = {
            status: true,
            message: 'Email sent successfully!'
          }
          // Clear the form fields
          firstName.value = ''
          lastName.value = ''
          email.value = ''
          phone.value = ''
          message.value = ''
          selectedFile.value = undefined
          fileContent.value = undefined
        } else {
          error.value = {
            status: true,
            message: `Error sending email: ${result.data.error}`
          }
        }
      } catch (e) {
        // Handle error response
        error.value = {
          status: true,
          message: `Error calling cloud function: ${JSON.stringify(e)}`
        }
      } finally {
        loading.value = false
      }
    }

    const MAX_FILE_SIZE = 60 * 1024 * 1024 // 60MB in bytes
    const onFileSelected = (event) => {
      const file = event.target.files[0]
      if (file) {
        if (file.type !== 'application/pdf') {
          error.value = {
            status: true,
            message: 'Please select a valid PDF file.'
          }
          selectedFile.value = null
        } else if (file.size > MAX_FILE_SIZE) {
          error.value = {
            status: true,
            message: `The file size must not exceed ${MAX_FILE_SIZE / (1024 * 1024)}MB.`
          }
          selectedFile.value = null
        } else {
          selectedFile.value = file
          const reader = new FileReader()
          reader.onload = () => {
            fileContent.value = reader.result
          }
          reader.readAsDataURL(file)
        }
      }
    }

    return {
      firstName,
      lastName,
      email,
      phone,
      message,
      error,
      loading,
      sendEmail,
      onFileSelected
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 960px;
}

h2 {
  font-size: 1.75rem;
  margin-bottom: 1rem;
}

p {
  margin-bottom: 0.5rem;
}

.form-control {
  border-radius: 20px;
}

.btn-primary {
  background-color: #ff7f50;
  border-color: #ff7f50;
  border-radius: 20px;
  padding: 10px 20px;
}
</style>
