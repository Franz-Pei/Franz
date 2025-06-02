// data/universities.js

// Universities data with updated format
export const universities = [
  {
    id: '1', // Convert to string ID to maintain compatibility
    name: "University of Melbourne",
    shortName: "Melbourne",
    color: 0x1976D2, // Convert hex color string to number
    position: { x: -15, y: 0, z: -10 },
    size: { width: 7, height: 5, depth: 7 },
    visited: true,
    videoUrl: "https://www.youtube.com/embed/kvulHO5ggeQ",
    website: "https://www.unimelb.edu.au/",
    description: "The top-ranked university in Australia, renowned for its excellent research and teaching resources.",
    // Convert courses from string array to object array
    courses: [
      { id: 'melb-1', name: "Bachelor of Arts", credits: 30, description: "Explore humanities, social sciences, languages, and more." },
      { id: 'melb-2', name: "Bachelor of Science", credits: 30, description: "Study various science disciplines from biology to physics." },
      { id: 'melb-3', name: "Master of Engineering", credits: 35, description: "Advanced engineering studies with specialization options." },
      { id: 'melb-4', name: "Doctor of Medicine", credits: 40, description: "Professional qualification for medical practice." },
      { id: 'melb-5', name: "Bachelor of Commerce", credits: 30, description: "Study economics, finance, marketing, and management." }
    ]
  },
  {
    id: '2',
    name: "Monash University",
    shortName: "Monash",
    color: 0xD32F2F,
    position: { x: 0, y: 0, z: -10 },
    size: { width: 7, height: 5, depth: 7 },
    visited: true,
    videoUrl: "https://www.youtube.com/embed/969i7d4g_ZE",
    website: "https://www.monash.edu/",
    description: "A research-intensive university, highly regarded in engineering, medicine, and business.",
    courses: [
      { id: 'mon-1', name: "Bachelor of Medicine", credits: 40, description: "Train to become a medical practitioner with clinical experience." },
      { id: 'mon-2', name: "Bachelor of Pharmacy", credits: 30, description: "Learn about pharmaceutical science and practice." },
      { id: 'mon-3', name: "Bachelor of Engineering", credits: 30, description: "Study various engineering disciplines with practical projects." },
      { id: 'mon-4', name: "Bachelor of Business", credits: 30, description: "Develop business skills across multiple disciplines." },
      { id: 'mon-5', name: "Bachelor of Law", credits: 35, description: "Prepare for a legal career with a focus on practical skills." }
    ]
  },
  {
    id: '3',
    name: "La Trobe University",
    shortName: "La Trobe",
    color: 0x4CAF50,
    position: { x: 15, y: 0, z: -10 },
    size: { width: 7, height: 5, depth: 7 },
    visited: false,
    videoUrl: "https://www.youtube.com/embed/L15ID7Cejdw",
    website: "https://www.latrobe.edu.au/",
    description: "A multi-campus university located in Melbourne and surrounding areas, known for its practical research and teaching.",
    courses: [
      { id: 'lt-1', name: "Bachelor of Health Sciences", credits: 30, description: "Study various aspects of health and healthcare systems." },
      { id: 'lt-2', name: "Bachelor of Education", credits: 30, description: "Prepare for a teaching career in various educational settings." },
      { id: 'lt-3', name: "Bachelor of Business", credits: 30, description: "Develop business skills with a practical focus." },
      { id: 'lt-4', name: "Bachelor of Arts", credits: 30, description: "Explore humanities, social sciences, and creative arts." },
      { id: 'lt-5', name: "Bachelor of Science", credits: 30, description: "Study a range of science disciplines with practical experience." }
    ]
  },
  {
    id: '4',
    name: "RMIT University",
    shortName: "RMIT",
    color: 0xFF5722,
    position: { x: -15, y: 0, z: 0 },
    size: { width: 7, height: 5, depth: 7 },
    visited: false,
    videoUrl: "https://www.youtube.com/embed/V2rAO9Z7MlM",
    website: "https://www.rmit.edu.au/",
    description: "A leading Australian university in technology, design, and business, located in the heart of Melbourne.",
    courses: [
      { id: 'rmit-1', name: "Bachelor of Design", credits: 30, description: "Develop design skills with industry-focused projects." },
      { id: 'rmit-2', name: "Bachelor of Engineering", credits: 30, description: "Study engineering with a focus on innovation and problem-solving." },
      { id: 'rmit-3', name: "Bachelor of Information Technology", credits: 30, description: "Learn modern IT skills with hands-on experience." },
      { id: 'rmit-4', name: "Bachelor of Architecture", credits: 35, description: "Prepare for architectural practice with design studios." },
      { id: 'rmit-5', name: "Bachelor of Fine Arts", credits: 30, description: "Develop artistic skills across various media." }
    ]
  },
  {
    id: '5',
    name: "Deakin University",
    shortName: "Deakin",
    color: 0x2196F3,
    position: { x: 0, y: 0, z: 0 },
    size: { width: 7, height: 5, depth: 7 },
    visited: false,
    videoUrl: "https://www.youtube.com/embed/y7Br8CPQn34",
    website: "https://www.deakin.edu.au/",
    description: "Ranked first in Victoria for student satisfaction, offering flexible learning options.",
    courses: [
      { id: 'deak-1', name: "Bachelor of Commerce", credits: 30, description: "Study business, finance, and economics with a practical focus." },
      { id: 'deak-2', name: "Bachelor of Nursing", credits: 30, description: "Prepare for a nursing career with clinical placements." },
      { id: 'deak-3', name: "Bachelor of Education", credits: 30, description: "Train to become a teacher with practical experience." },
      { id: 'deak-4', name: "Bachelor of Health Sciences", credits: 30, description: "Explore various aspects of health with specialization options." },
      { id: 'deak-5', name: "Bachelor of IT", credits: 30, description: "Develop IT skills with industry-relevant projects." }
    ]
  },
  {
    id: '6',
    name: "Federation University",
    shortName: "Federation",
    color: 0x9C27B0,
    position: { x: 15, y: 0, z: 0 },
    size: { width: 7, height: 5, depth: 7 },
    visited: false,
    videoUrl: "https://www.youtube.com/embed/YAQCkvDqNWw",
    website: "https://federation.edu.au/",
    description: "A multi-campus university providing personalized learning experiences and support for students.",
    courses: [
      { id: 'fed-1', name: "Bachelor of Education", credits: 30, description: "Prepare for a teaching career with practical placements." },
      { id: 'fed-2', name: "Bachelor of Business", credits: 30, description: "Study business with a focus on practical skills." },
      { id: 'fed-3', name: "Bachelor of Nursing", credits: 30, description: "Train to become a nurse with clinical experience." },
      { id: 'fed-4', name: "Bachelor of Information Technology", credits: 30, description: "Develop IT skills with hands-on projects." },
      { id: 'fed-5', name: "Bachelor of Arts", credits: 30, description: "Explore humanities and social sciences." }
    ]
  },
  {
    id: '7',
    name: "Victoria University",
    shortName: "VU",
    color: 0x795548,
    position: { x: 0, y: 0, z: 10 },
    size: { width: 7, height: 5, depth: 7 },
    visited: false,
    videoUrl: "https://www.youtube.com/embed/dGGJsxN_IY0?si=EpJo34Hvv4_B95px",
    website: "https://www.vu.edu.au/",
    description: "Renowned for its innovative VU Block Model teaching approach, offering both higher education and vocational courses.",
    courses: [
      { id: 'vu-1', name: "Bachelor of Business", credits: 30, description: "Study business with the innovative Block Model approach." },
      { id: 'vu-2', name: "Bachelor of Sport and Exercise Science", credits: 30, description: "Prepare for a career in sports and fitness." },
      { id: 'vu-3', name: "Bachelor of Education", credits: 30, description: "Train to become a teacher with practical experience." },
      { id: 'vu-4', name: "Bachelor of Engineering", credits: 30, description: "Study engineering with a focus on practical skills." },
      { id: 'vu-5', name: "Bachelor of Information Technology", credits: 30, description: "Develop IT skills with industry-relevant projects." }
    ]
  }
];