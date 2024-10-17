<template>
  <footer class="footer-bar">
    <div class="footer-sections">
      <div class="footer-section">
        <h3>Ziqi Pei's Mental Hospital</h3>
        <p>Monash University, 00008</p>
        <p>Monash College: 01857</p>
      </div>
      <div class="footer-section">
        <h3>Services</h3>
        <ul>
          <li>Mental Health Consultation</li>
          <li>Mental Health Resource Describe</li>
          <li>Meditation relation Tool</li>
          <li>Mental Community</li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>Contact</h3>
        <p>+61 0485183398</p>
        <p>zpei0003@student.monash.edu</p>
        <p>Clayton Monash</p>
      </div>
      <div class="footer-section">
        <h3>Maps</h3>
        <img src="@/images/map-preview.png" alt="Total Male Patients" />
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'ButtonBar'
}
</script>

<style scoped>
.footer-bar {
  background-color: #00796b; /* Set the background color */
  color: #fff; /* Set the text color */
  display: flex;
  justify-content: space-between; /* Space out the footer sections */
  align-items: center; /* Vertically center the content */
  padding: 20px 50px; /* Padding around the entire footer */
}

.footer-bar,
.footer-bar * {
  color: #fff; /* Ensure all text in the footer bar is white */
}

.footer-sections {
  display: flex;
  width: 100%; /* Ensures it takes the full width of the footer */
  justify-content: space-between; /* Space out each section equally */
}

.footer-section {
  display: flex;
  flex-direction: column; /* Stack content vertically */
  align-items: center; /* Center-align the content */
  flex: 1; /* Allow each section to take equal width */
}

.footer-section h3 {
  font-size: 16px; /* Size of the section headings */
  margin-bottom: 10px; /* Space below headings */
}

.footer-section p,
.footer-section li {
  font-size: 14px; /* Size of the text */
  margin-bottom: 5px; /* Space below each item */
}

.footer-section ul {
  list-style: none; /* Remove bullet points */
  padding: 0; /* Remove padding */
  margin: 0; /* Remove margins for a tight fit */
}

@media (max-width: 768px) {
  .footer-bar {
    flex-direction: column; /* Stack footer sections vertically on small screens */
  }

  .footer-sections {
    flex-direction: column;
  }

  .footer-section {
    margin-bottom: 20px; /* Space between sections on small screens */
  }
}
</style>
