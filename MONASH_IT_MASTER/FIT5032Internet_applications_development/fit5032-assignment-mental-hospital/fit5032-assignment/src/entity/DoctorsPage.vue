<template>
  <div class="tw-min-h-screen tw-bg-gray-100">
    <!-- Header -->
    <header class="tw-bg-white tw-shadow">
      <div
        class="tw-container tw-mx-auto tw-px-4 tw-py-6 tw-flex tw-justify-between tw-items-center"
      >
        <h1 class="tw-text-2xl tw-font-bold">Our Doctors</h1>
        <div class="tw-flex tw-items-center tw-space-x-4">
          <span class="tw-text-lg">Admin</span>
          <img
            src="@\images\default-avatar.jpg"
            alt="Profile"
            class="tw-w-10 tw-h-10 tw-rounded-full tw-border tw-border-gray-300"
          />
        </div>
      </div>
    </header>

    <!-- Search Bar -->
    <div class="tw-container tw-mx-auto tw-px-4 tw-py-6">
      <div class="tw-flex tw-justify-between tw-items-center">
        <input type="text" placeholder="Search" class="tw-border tw-rounded-lg tw-w-1/2 tw-p-3" />
        <span>1-10 of 30</span>
      </div>
    </div>

    <!-- Doctors Grid -->
    <div class="tw-container tw-mx-auto tw-px-4 tw-py-6 tw-grid tw-grid-cols-4 tw-gap-6">
      <!-- Add Doctor Card -->
      <div
        class="tw-border-2 tw-border-dashed tw-border-teal-500 tw-rounded-lg tw-flex tw-items-center tw-justify-center tw-p-6"
      >
        <div class="tw-text-center">
          <img
            src="https://via.placeholder.com/100x100"
            alt="Add Doctor"
            class="tw-mx-auto tw-mb-4"
          />
          <button class="tw-bg-teal-500 tw-text-white tw-px-4 tw-py-2 tw-rounded-lg">
            Add Doctor
          </button>
        </div>
      </div>

      <!-- Doctor Card -->
      <div v-for="n in 9" :key="n" class="tw-bg-white tw-rounded-lg tw-shadow-lg tw-p-6">
        <img
          src="@\images\default-avatar.jpg"
          alt="Doctor"
          class="tw-w-24 tw-h-24 tw-rounded-full tw-mx-auto tw-mb-4"
        />
        <h3 class="tw-text-lg tw-font-bold tw-text-center">Dr. John Doe</h3>
        <p class="tw-text-center tw-text-sm tw-text-gray-500">Ortho Specialist</p>
        <p class="tw-text-center tw-text-sm tw-text-gray-500">Trust Hospital, Example City</p>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
/* 使用 Tailwind CSS 的内置样式，根据需要进行微调 */
</style>
