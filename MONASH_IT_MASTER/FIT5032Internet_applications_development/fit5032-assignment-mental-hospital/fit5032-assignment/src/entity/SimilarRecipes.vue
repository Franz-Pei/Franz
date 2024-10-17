<template>
  <div class="container mt-5">
    <h2 class="mb-4 text-center">Similar Recipes</h2>
    <div v-if="error.status" class="text-danger my-2">
      {{ error.message }}
      <button @click="error.status = false" class="btn my-2 btn-primary tw-w-full">Dismiss</button>
    </div>

    <!-- Search, Sort, and Column Selection -->
    <div class="mb-4">
      <input type="text" v-model="searchQuery" placeholder="Keyword..." class="form-control" />
      <select v-model="searchColumn" class="form-control mt-2">
        <option value="title">Search by Title</option>
        <!-- <option value="timestamp">Search by Date</option> -->
      </select>
      <select v-model="sortKey" class="form-control mt-2">
        <option value="title">Sort by Title</option>
        <option value="timestamp">Sort by Date</option>
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
    <!-- Recipe List (Table Format) -->
    <table class="table table-striped mt-4 tw-w-full" v-if="filteredData.length > 0 && !loading">
      <thead>
        <tr>
          <th>Title</th>
          <th>Date</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="recipe in paginatedData" :key="recipe.timestamp">
          <td>{{ recipe.title }}</td>
          <td>{{ formatDate(recipe.timestamp) }}</td>
          <td>
            <img :src="recipe.image" alt="Recipe image" width="100" />
          </td>
        </tr>
      </tbody>
    </table>

    <!-- No results found -->
    <div v-if="filteredData.length === 0 && !loading" class="text-center">No results found.</div>

    <!-- Showing Info -->
    <div class="text-center mt-3">
      Showing {{ showingStart }} - {{ showingEnd }} of {{ filteredData.length }}, Total: {{ data.length }}
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
  </div>
</template>

<script>
import { storage } from '@/firebase'
import { ref as firebaseRef, getDownloadURL } from 'firebase/storage'
import { onMounted, ref, computed } from 'vue'

export default {
  name: 'SimilarRecipes',
  setup() {
    const data = ref([])
    const filteredData = ref([]) // 用于存储过滤后的数据
    const loading = ref(false)
    const error = ref({
      status: false,
      message: ''
    })

    // Sorting, Searching, and Pagination variables
    const sortKey = ref('title') // Default sort by title
    const searchQuery = ref('')
    const searchColumn = ref('title') // Default search by title
    const currentPage = ref(1)
    const itemsPerPage = 10

    onMounted(async () => {
      loading.value = true
      const storageRef = firebaseRef(storage, '/similar-recipes.json')
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
        filtered = filtered.filter((recipe) => {
          const searchField = recipe[searchColumn.value]?.toString().toLowerCase() || ''
          return searchField.includes(searchQuery.value.toLowerCase())
        })
      }

      // Sort the filtered data based on sort key
      filtered.sort((a, b) => {
        if (sortKey.value === 'title') {
          return a.title.localeCompare(b.title)
        } else if (sortKey.value === 'timestamp') {
          return a.timestamp - b.timestamp
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
    const showingEnd = computed(() => Math.min(currentPage.value * itemsPerPage, filteredData.value.length))

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
      showingEnd
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
