<template>
  <div class="container mt-5">
    <h2 class="mb-4 text-center">Mass Mailing</h2>
    <div v-if="error.status" class="text-danger my-2">
      {{ error.message }}
      <button @click="dismissError" class="btn my-2 btn-primary tw-w-full">Dismiss</button>
    </div>

    <!-- Search, Sort, and Column Selection -->
    <div class="mb-4">
      <input type="text" v-model="searchQuery" placeholder="Keyword..." class="form-control" />
      <select v-model="searchColumn" class="form-control mt-2">
        <option value="username">Search by Username</option>
        <option value="email">Search by Email</option>
      </select>
      <select v-model="sortKey" class="form-control mt-2">
        <option value="username">Sort by Username</option>
        <option value="email">Sort by Email</option>
        <option value="createdAt">Sort by Date</option>
      </select>
      <button @click="applyFilter" class="btn btn-primary mt-2">Apply Filter</button>
    </div>

    <div v-if="loading" class="text-danger my-2">Loading data...</div>
    <!-- Pagination Controls -->
    <div class="d-flex justify-content-center mt-4" v-if="filteredData.length > 0 && !loading">
      <button class="btn btn-primary mx-1" :disabled="currentPage === 1" @click="currentPage--">
        Previous
      </button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button
        class="btn btn-primary mx-1"
        :disabled="currentPage === totalPages"
        @click="currentPage++"
      >
        Next
      </button>
    </div>

    <!-- User Table with Multi-select -->
    <table class="table table-striped mt-4 tw-w-full" v-if="filteredData.length > 0 && !loading">
      <thead>
        <tr>
          <th>Select</th>
          <th>Username</th>
          <th>Email</th>
          <th>Created At</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in paginatedData" :key="user._id">
          <td>
            <input type="checkbox" v-model="selectedUsers" :value="user.email" />
          </td>
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <td>{{ formatDate(user.createdAt) }}</td>
        </tr>
      </tbody>
    </table>

    <!-- No results found -->
    <div v-if="filteredData.length === 0 && !loading" class="text-center">No results found.</div>

    <!-- Showing Info -->
    <div class="text-center mt-3">
      Showing {{ showingStart }} - {{ showingEnd }} of {{ filteredData.length }}, Total:
      {{ data.length }}
    </div>

    <!-- Pagination Controls -->
    <div class="d-flex justify-content-center mt-4" v-if="filteredData.length > 0 && !loading">
      <button class="btn btn-primary mx-1" :disabled="currentPage === 1" @click="currentPage--">
        Previous
      </button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button
        class="btn btn-primary mx-1"
        :disabled="currentPage === totalPages"
        @click="currentPage++"
      >
        Next
      </button>
    </div>

    <!-- Email Form for Sending Mass Email -->
    <div class="mt-5">
      <h3>Send Mass Email</h3>
      <form @submit.prevent="sendMassEmail">
        <div class="form-group">
          <label for="subject">Subject</label>
          <input
            type="text"
            v-model="emailSubject"
            class="form-control"
            id="subject"
            required
            placeholder="Enter email subject"
          />
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea
            class="form-control"
            v-model="emailMessage"
            id="message"
            rows="5"
            required
            placeholder="Enter email content"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Send Email</button>
      </form>

      <!-- Progress Bar -->
      <div class="progress mt-4" v-if="progress > 0">
        <div
          class="progress-bar"
          :style="{ width: progress + '%' }"
          role="progressbar"
          :aria-valuenow="progress"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {{ progress }}%
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { storage } from '@/firebase'
import { ref as firebaseRef, getDownloadURL } from 'firebase/storage'
import { onMounted, ref, computed } from 'vue'
import { getFunctions, httpsCallable } from 'firebase/functions'

export default {
  name: 'MassMailing',
  setup() {
    const data = ref([])
    const filteredData = ref([]) // 用于存储过滤后的数据
    const loading = ref(false)
    const error = ref({
      status: false,
      message: ''
    })
    const selectedUsers = ref([]) // Store selected users

    const emailSubject = ref('')
    const emailMessage = ref('')
    const progress = ref(0) // Email sending progress

    const functions = getFunctions()

    const sendMassEmail = async () => {
      if (selectedUsers.value.length === 0) {
        error.value = {
          status: true,
          message: 'Please select at least one user to send the email.'
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

      progress.value = 0 // 重置进度条
      loading.value = true

      const sendEmailWithAttachment = httpsCallable(functions, 'sendEmailWithAttachment') // 调用云函数

      try {
        // 逐个发送邮件
        for (let i = 0; i < selectedUsers.value.length; i++) {
          const recipient = selectedUsers.value[i]
          try {
            const result = await sendEmailWithAttachment({
              to: recipient,
              subject: emailSubject.value,
              text: emailMessage.value
            })

            if (result.data.success) {
              console.log(`Email sent successfully to ${recipient}`)
            } else {
              console.error(`Error sending email to ${recipient}:`, result.data.error)
              error.value = {
                status: true,
                message: `Error sending email to ${recipient}: ${result.data.error}`
              }
            }
          } catch (err) {
            console.error(`Error sending email to ${recipient}:`, err)
            error.value = {
              status: true,
              message: `Error sending email to ${recipient}: ${JSON.stringify(err)}`
            }
          }

          // 更新进度条
          progress.value = Math.round(((i + 1) / selectedUsers.value.length) * 100)
        }

        // 如果全部成功，重置表单和状态
        if (progress.value === 100) {
          error.value = {
            status: true,
            message: 'All emails sent successfully!'
          }
          setTimeout(() => {
            error.value.status = false
          }, 3000)

          // 重置表单数据
          emailSubject.value = ''
          emailMessage.value = ''
          selectedUsers.value = []
          progress.value = 0
        }
      } catch (e) {
        console.error('Error sending emails:', e)
        error.value = {
          status: true,
          message: `Error sending emails: ${JSON.stringify(e)}`
        }
      } finally {
        loading.value = false
      }
    }

    const dismissError = () => {
      error.value = {
        status: false,
        message: ''
      }
    }

    // Sorting, Searching, and Pagination variables
    const sortKey = ref('username') // Default sort by username
    const searchQuery = ref('')
    const searchColumn = ref('username') // Default search by username
    const currentPage = ref(1)
    const itemsPerPage = 10

    onMounted(async () => {
      loading.value = true
      const storageRef = firebaseRef(storage, '/users.json')
      try {
        const downloadURL = await getDownloadURL(storageRef)
        const response = await (await fetch(downloadURL)).json()
        data.value = response
        filteredData.value = response // 初始时展示所有数据
        loading.value = false
      } catch (error) {
        error.value = {
          status: true,
          message: 'Error downloading file'
        }
        console.error('Error downloading file:', error)
        loading.value = false
      }
    })

    // Apply search and sort
    const applyFilter = () => {
      let filtered = [...data.value] // 拷贝数据

      // Filter by search query (case-insensitive) and specific column
      if (searchQuery.value) {
        filtered = filtered.filter((user) => {
          const searchField = user[searchColumn.value]?.toString().toLowerCase() || ''
          return searchField.includes(searchQuery.value.toLowerCase())
        })
      }

      // Sort the filtered data based on sort key
      filtered.sort((a, b) => {
        if (sortKey.value === 'username') {
          return a.username.localeCompare(b.username)
        } else if (sortKey.value === 'email') {
          return a.email.localeCompare(b.email)
        } else {
          return new Date(a.createdAt) - new Date(b.createdAt) // 时间排序需要转换为日期对象
        }
      })

      filteredData.value = filtered
      currentPage.value = 1 // 重置当前页为第一页
    }

    // Pagination logic
    const totalPages = computed(() => Math.ceil(filteredData.value.length / itemsPerPage))
    const paginatedData = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage
      const end = start + itemsPerPage
      return filteredData.value.slice(start, end)
    })

    // Computed properties for showing info
    const showingStart = computed(() => (currentPage.value - 1) * itemsPerPage + 1)
    const showingEnd = computed(() =>
      Math.min(currentPage.value * itemsPerPage, filteredData.value.length)
    )

    const formatDate = (timestamp) => {
      const date = new Date(parseInt(timestamp))
      return date.toLocaleDateString('en-AU')
    }

    return {
      data,
      filteredData,
      loading,
      error,
      sortKey,
      searchQuery,
      searchColumn,
      currentPage,
      totalPages,
      paginatedData,
      applyFilter,
      formatDate,
      showingStart,
      showingEnd,
      selectedUsers,
      progress,
      emailMessage,
      emailSubject,
      sendMassEmail,
      dismissError
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: auto;
}

img {
  object-fit: cover;
  width: 100px;
  height: auto;
}

.btn-primary {
  background-color: #007bff;
  border: none;
}
</style>
