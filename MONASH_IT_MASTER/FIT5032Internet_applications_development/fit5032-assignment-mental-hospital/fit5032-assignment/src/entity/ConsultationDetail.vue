<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-header">
        <div class="d-flex justify-content-between align-items-center">
          <h1>Consultation Details</h1>
          <div>
            <img
              src="@/images/default-avatar.jpg"
              alt="Profile"
              class="rounded-circle"
              width="50"
            />
            <strong>Robert</strong>
            <button class="btn btn-primary ms-2">Edit</button>
            <button class="btn btn-danger ms-2">Delete</button>
          </div>
        </div>
      </div>
      <div class="card-body">
        <h5>John Doe #TRUST0331</h5>
        <p><strong>Consulted by:</strong> Dr. Robin</p>
        <p><strong>Consulted on:</strong> 01 / 06 / 2022</p>
        <p><strong>Updated on:</strong> 01 / 06 / 2022</p>
        <div class="mb-2">
          <span class="badge bg-secondary">Diabetic</span>
          <span class="badge bg-secondary">Hypertension</span>
        </div>
        <p class="mb-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
      </div>
      <div class="card-footer">
        <h5>Attachments</h5>
        <a href="#" class="btn btn-link">Prescription 01.pdf</a>
        <a href="#" class="btn btn-link">Prescription 02.jpg</a>
        <button class="btn btn-outline-primary mt-3">Back to Profile</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConsultationDetails'
}
</script>

<style scoped>
.card-header img {
  width: 50px;
  height: 50px;
}
</style>
