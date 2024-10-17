<template>
  <main>
    <div class="content-container">
      <div class="text-container">
        <h1>Empowering Minds, Enriching Lives</h1>
        <p>
          Ziqi Pei Mental Wellness Platform delivers essential mental health services, including
          custom psychological assessments, expert lectures, and community initiatives, leveraging
          advanced neuroscience, psychoacoustics, and CBT technology.
        </p>
        <div class="button-container">
          <router-link to="/contact-us" class="nav-link" active-class="active">
            <img src="@/images/contact-us.png" alt="Contact Us" class="button-image" />
          </router-link>
          <router-link to="/sign-in" class="nav-link" active-class="active">
            <img src="@/images/sign-in.png" alt="Sign In" class="button-image" />
          </router-link>
        </div>
      </div>
      <img src="@/images/frontpage.png" alt="Descriptive Alt Text" class="side-image" />
    </div>
  </main>

  <!-- Doctor Cards Section -->
  <div class="services-section">
    <div style="text-align: center">Service</div>
    <h2>Empowering Minds Our Mental Health Consulting Services</h2>
    <div class="service-cards-container">
      <!-- Card for Dr. Olivia Chen -->
      <div class="service-card">
        <img src="@/images/dr-olivia-chen.png" alt="Dr. Olivia Chen" />
        <div class="service-info">
          <h3>Dr. Olivia Chen</h3>
          <p>
            Dr. Olivia Chen, cognitive neuroscientist specializing in memory and learning research.
          </p>
          <router-link to="/service" class="nav-link" active-class="active">
            <button>Book an appointment</button>
          </router-link>
          <!-- <button>Book an appointment</button> -->
        </div>
      </div>
      <!-- Card for Mental Counseling -->
      <div class="service-card">
        <img src="@/images/mental-counseling.png" alt="Mental Counseling" />
        <div class="service-info">
          <h3>Mental Counseling</h3>
          <p>Lorem ipsum dolor sit amet, consectetur Convallis est.</p>
          <router-link to="/service" class="nav-link" active-class="active">
            <button>See detail</button>
          </router-link>
        </div>
      </div>
      <!-- Card for Dr. Harry Wilson -->
      <div class="service-card">
        <img src="@/images/harry-wilso.png" alt="Dr. Harry Wilson" />
        <div class="service-info">
          <h3>Dr. Harry Wilson</h3>
          <p>
            Dr. Harry Wilson, clinical psychologist specializing in cognitive behavioral therapy and
            anxiety disorders.
          </p>
          <router-link to="/service" class="nav-link" active-class="active">
            <button>Book an appointment</button>
          </router-link>
        </div>
      </div>
      <!-- Card for Dr. Jen Martinez -->
      <div class="service-card">
        <img src="@/images/dr-jen-martinez.png" alt="Dr. Jen Martinez" />
        <div class="service-info">
          <h3>Dr. Jen Martinez</h3>
          <p>
            Dr. Jen Martinez, child psychologist specializing in developmental disorders and family
            therapy.
          </p>
          <router-link to="/service" class="nav-link" active-class="active">
            <button>Book an appointment</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>

  <!-- New Section for Mental Health Digital Care Program -->
  <section class="resource-center-container">
    <div class="resource-center-header">Resource Center</div>
    <div class="intro-section">
      <h1>Boost mental health and remote workers</h1>
      <p>
        It provides strategies to create an optimal work-from-homeenvironment, helping you stay
        focused and effcient, whetheryou're new to remote work or a seasoned professional.
      </p>
      <router-link to="/resource-center" class="button learn-more">Learn More</router-link>
    </div>
    <img
      src="@/images/meditation-image.png"
      alt="Meditation Illustration"
      class="meditation-image"
    />
  </section>

  <!-- New Section for Team of Experts -->
  <section class="team-experts-container">
    <!-- <div style="text-align: center">User Space</div> -->
    <div class="team-experts-header">
      <h2>User Space</h2>
      <h1>Caring for Your Mental Health - Get to Know Our Team of Experts</h1>
      <p>
        Ziqi Pei Mental Wellness Platform delivers essential mental health services, including
        custom psychological assessments, expert lectures, and community initiatives, leveraging
        advanced neuroscience, psychoacoustics, and CBT technology.
      </p>
      <router-link to="/user-space" class="button learn-more">See more</router-link>
    </div>
    <img src="@/images/graph-image.png" alt="User Engagement Graph" class="side-image" />
    <div class="graph-container"></div>
  </section>

  <!-- About Us Section -->
  <section class="about-us-section">
    <div class="about-us-content">
      <h2>About Us</h2>
      <h1>Discover the Faces Behind Our Mental Health Consultancy</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam
        lorem non mauris. Ultrices aliquet at quam adipiscing ipsum justo vestibulum sit cursus A
        risus donec eget enim.
      </p>
      <router-link to="/about-us" class="button see-details">See Details</router-link>
    </div>
    <img src="@/images/about-us-image.png" alt="About Us Illustration" class="about-us-image" />
  </section>

  <!-- Newsletter Subscription Section -->
  <section class="newsletter-section">
    <div class="newsletter-content">
      <h1>Join To Our Newsletter</h1>
      <p>
        Meet our team of seasoned psychologists and innovative researchers dedicated to your mental
        well-being. Discover the experts committed to transforming lives through advanced mental
        health care.
      </p>
      <form class="newsletter-form">
        <input type="email" placeholder="Your email" required />
        <button type="submit">Subscribe Us</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style>
html {
  scroll-behavior: smooth; /* Enables smooth scrolling for anchor links */
}

body,
html {
  margin: 0;
  padding: 0;
  background-color: white; /* Explicitly setting background color */
  color: black; /* Ensuring text color is set */
  font-family: Arial, sans-serif; /* Consistent font across the page */
  overflow-x: hidden; /* Prevents horizontal scroll */
  overflow-y: auto; /* Allows vertical scrolling */
}

/* Specific styles for the Home link */
.home-link::after {
  content: '';
  display: block;
  width: 70%; /* Adjust the width as needed */
  height: 6px; /* Height of the oval border */
  background-color: black; /* Color of the oval border */
  border-radius: 60px; /* Creates the oval shape */
  position: absolute;
  bottom: -10px; /* Adjust distance from the text */
  left: 50%; /* Center the oval */
  transform: translateX(-50%); /* Center the oval */
}

.hospital-name,
ul li a {
  font-size: 24px; /* 调整字体大小 */
  font-weight: bold; /* 字体加粗 */
}

ul {
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
  flex-grow: 2; /* 允许导航区域增长占据更多空间 */
}

.button-container {
  display: flex;
  justify-content: center; /* 将按钮居中对齐 */
  gap: 10px; /* 设置按钮之间的间距 */
  margin-top: 20px; /* 与上方文本的间隔 */
}

.button-image {
  width: 100px; /* 按钮图片宽度，根据需要调整 */
  height: auto; /* 保持纵横比 */
  cursor: pointer; /* 鼠标悬停时显示为指针，表明可点击 */
}

ul li a:hover {
  color: blue;
  text-decoration: underline;
}

main {
  max-width: 1200px; /* 或者根据你的设计需求来设置 */
  margin: 0 auto; /* 上下保持0，左右自动（居中） */
  padding: 20px; /* 根据需要可以调整内边距 */
  display: flex;
  flex-direction: column; /* Ensures content is laid out top to bottom */
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.content-container {
  width: 100%; /* 容器宽度 */
  display: flex;
  align-items: center; /* 垂直居中对齐 */
  justify-content: space-between; /* 分散对齐 */
}

.text-container {
  flex: 1; /* 文本容器占据多余空间 */
  padding-right: 20px; /* 右侧间距 */
}

h1 {
  align-items: center; /* 垂直居中对齐 */
}

.side-image {
  width: 500px; /* 图片宽度 */
  height: auto; /* 保持纵横比 */
}
footer {
  padding: 10px;
  text-align: center;
  background-color: #f0f0f0;
}

/* Additional styles for arranging service cards horizontally */
.services-section {
  width: 100%;
  background-color: #f4f4f4; /* Light grey background to distinguish the section */
  padding: 50px 0; /* Adds padding above and below the section */
  box-shadow: 0 -5px 10px rgba(0, 0, 0, 0.1); /* Adds a subtle shadow at the top of the section */
}

.service-cards-container {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: nowrap;
  width: 100%;
}

.service-card {
  flex: 0 1 22%; /* Flex grow, flex shrink, and flex-basis */
  margin: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.service-card:hover {
  transform: translateY(-10px);
}

.service-info {
  padding: 10px;
}
.service-card img {
  width: 100%; /* Ensure the image covers the card width */
  height: auto; /* Maintain aspect ratio */
  display: block; /* Removes bottom space/gap */
}

.service-info {
  padding: 15px; /* Padding inside the card */
  text-align: left; /* Left align text */
}

.service-info h3 {
  margin-top: 0;
  color: #333; /* Darker text for readability */
  font-size: 18px; /* Larger text for headings */
}

.service-info p {
  font-size: 14px; /* Standard text size */
  color: #666; /* Lighter text color */
  margin: 10px 0 20px; /* Space between elements */
}

button {
  background-color: #0056b3;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3; /* Darker blue on hover */
}

@media (max-width: 768px) {
  /* Adjustments for smaller devices */
  .content-container,
  .service-cards-container {
    flex-direction: column;
    align-items: center;
  }

  .side-image,
  .service-card img {
    width: 100%; /* Makes images responsive */
  }
}

.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.resource-center-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  background-color: #f0f5ff; /* Light background color */
}
.resource-center-header {
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
}
.intro-section {
  max-width: 600px;
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
}

p {
  font-size: 1.2rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 30px;
}

.button.learn-more {
  padding: 10px 20px;
  background-color: #6200ea; /* Purple background */
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
}

.button.learn-more:hover {
  background-color: #3700b3; /* Darker purple on hover */
}

.meditation-image {
  width: 50%;
  height: auto;
}

/* New section for team of experts, styled similarly to the homepage */
.team-experts-container {
  display: flex;
  flex-direction: row; /* Horizontal layout for larger screens */
  align-items: center; /* Vertically centers content */
  justify-content: space-between; /* Spaces out text and graph */
  background-color: #ffffff; /* Maintains a clean, bright background */
  padding: 40px; /* Generous padding for visual space */
  border-top: 1px solid #ccc; /* Subtle separation from previous content */
}

.user-space-header {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: 24px;
  font-weight: bold;
  color: #333;
  padding: 20px;
  background-color: #f4f4f4; /* Background color to make it stand out */
}
.team-experts-header {
  flex: 3; /* Increase flex-grow to allow more space for text */
  margin: 20px; /* Ensure there’s space around the text for readability */
}
.graph-container {
  flex: 2; /* Allocate less space to the graph container */
  display: flex;
  justify-content: center;
  padding-left: 20px;
}

/* Styling adjustments for responsiveness and smaller devices */
@media (max-width: 768px) {
  .team-experts-container {
    flex-direction: column;
    align-items: center;
  }
  .user-space-header {
    position: static;
    transform: none;
    left: auto;
    text-align: center;
    width: 100%;
  }

  .graph-container {
    padding-left: 0; /* Eliminates left padding for a full-width appearance */
    margin-top: 20px; /* Adds vertical spacing above the graph */
  }
}

/* About Us Section Styles */
.about-us-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
  background-color: #f0f5ff;
  border-top: 1px solid #ccc;
}

.about-us-content {
  flex: 1;
  margin-right: 20px;
}

.about-us-content h2 {
  color: #666;
  font-size: 18px;
  margin-bottom: 10px;
}

.about-us-content h1 {
  color: #333;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.about-us-content p {
  font-size: 16px;
  line-height: 1.6;
  color: #666;
  margin-bottom: 30px;
}

.button.see-details {
  padding: 10px 20px;
  background-color: #6200ea; /* Purple background */
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
}

.button.see-details:hover {
  background-color: #3700b3; /* Darker purple on hover */
}

.about-us-image {
  width: 50%;
  height: auto;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .about-us-section {
    flex-direction: column;
    text-align: center;
  }

  .about-us-content {
    margin-right: 0;
    margin-bottom: 20px;
  }

  .about-us-image {
    width: 100%;
  }
}

/* Newsletter Section Styles */
.newsletter-section {
  background-color: #004d40; /* Dark green background */
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.newsletter-content h1 {
  color: #ffffff; /* Pure white for the heading */
  font-size: 36px;
  margin-bottom: 20px;
}

.newsletter-content p {
  color: #f5f5f5; /* Slightly off-white for the paragraph */
  max-width: 600px;
  text-align: center;
  margin-bottom: 20px;
  line-height: 1.6;
}

.newsletter-form {
  display: flex;
  gap: 10px;
}

.newsletter-form input[type='email'] {
  padding: 10px;
  border: none;
  border-radius: 5px;
  width: 300px;
  background-color: #ffffff; /* Pure white background for the input */
  color: #333; /* Dark text for contrast */
}

.newsletter-form button {
  padding: 10px 20px;
  background-color: #ff5722; /* Vivid orange for the button */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.newsletter-form button:hover {
  background-color: #e64a19; /* Darker shade for hover effect */
}

@media (max-width: 768px) {
  .newsletter-form {
    flex-direction: column;
  }

  .newsletter-form input[type='email'],
  .newsletter-form button {
    width: 100%;
  }
}
</style>
