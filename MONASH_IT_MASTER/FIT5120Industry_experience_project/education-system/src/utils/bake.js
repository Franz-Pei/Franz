import { reactive } from "vue";
export const questions = reactive([
    {
        text: "Which of the following school subjects do you enjoy the most?",
        options: [
            { text: "Applied Computing / Data Analytics", value: "applied_computing", tag: "IT & Data" },
            { text: "Maths (General, Methods, Specialist)", value: "maths", tag: "IT & Data, Engineering & Science" },
            { text: "Psychology / Health & Human Development", value: "psychology", tag: "Health & Human Services" },
            { text: "Biology / Chemistry / Physics", value: "science", tag: "Health & Human Services, Engineering & Science" },
            { text: "Visual Communication / Studio Arts / Media", value: "arts", tag: "Creative Arts & Media" },
            { text: "Business / Economics / Accounting", value: "business", tag: "Business & Management" },
            { text: "English / Literature / History / Legal Studies", value: "humanities", tag: "Education & Social Sciences" }
        ]
    },
    {
        text: "What types of activities do you enjoy or feel excited about?",
        options: [
            { text: "Helping people feel better or solve problems", value: "helping", tag: "Health & Human Services" },
            { text: "Designing, drawing, or creating things", value: "designing", tag: "Creative Arts & Media" },
            { text: "Solving complex puzzles or logical problems", value: "solving", tag: "IT & Data, Engineering & Science" },
            { text: "Organizing tasks or managing projects", value: "organizing", tag: "Business & Management" },
            { text: "Coding, programming or working with tech", value: "coding", tag: "IT & Data" },
            { text: "Performing, storytelling or writing", value: "performing", tag: "Creative Arts & Media" }
        ]
    },
    {
        text: "Which work environments do you feel most drawn to?",
        options: [
            { text: "Fast-paced and team-driven", value: "fast_paced", tag: "Business & Management" },
            { text: "Calm and people-focused", value: "calm", tag: "Health & Human Services" },
            { text: "Quiet and independent", value: "quiet", tag: "IT & Data" },
            { text: "Creative and flexible", value: "creative", tag: "Creative Arts & Media" },
            { text: "Structured and process-based", value: "structured", tag: "Education & Social Sciences, Business & Management" },
            { text: "Technical and hands-on", value: "technical", tag: "Engineering & Science" }
        ]
    },
    {
        text: "What are you naturally good at or confident in?",
        options: [
            { text: "Talking with people and understanding their needs", value: "talking", tag: "Health & Human Services, Education & Social Sciences" },
            { text: "Working with numbers, data or logic", value: "numbers", tag: "IT & Data" },
            { text: "Leading groups and making decisions", value: "leading", tag: "Business & Management" },
            { text: "Solving problems creatively", value: "creative_solving", tag: "Creative Arts & Media, Engineering & Science" },
            { text: "Staying organised and on schedule", value: "organized", tag: "Business & Management" },
            { text: "Learning new tech or digital tools quickly", value: "learning_tech", tag: "IT & Data" }
        ]
    },
    {
        text: "In a group project, what role do you usually take?",
        options: [
            { text: "The leader -- organising and assigning roles", value: "leader", tag: "Business & Management" },
            { text: "The creative -- designing visuals or making it look good", value: "creative_role", tag: "Creative Arts & Media" },
            { text: "The helper -- checking in with others and resolving conflict", value: "helper", tag: "Health & Human Services" },
            { text: "The researcher -- finding and analysing information", value: "researcher", tag: "IT & Data, Education & Social Sciences" },
            { text: "The planner -- managing timelines and task flow", value: "planner", tag: "Business & Management" },
            { text: "The quiet worker -- focusing on your assigned part", value: "quiet_worker", tag: "IT & Data, Engineering & Science" }
        ]
    },
    {
        text: "What matters most to you in a future career?",
        options: [
            { text: "Helping others and making a difference", value: "helping_others", tag: "Health & Human Services" },
            { text: "Expressing creativity and ideas", value: "expressing_creativity", tag: "Creative Arts & Media" },
            { text: "Working independently with flexibility", value: "independent", tag: "IT & Data" },
            { text: "Earning good income and progressing quickly", value: "good_income", tag: "Business & Management" },
            { text: "Solving difficult problems or learning new things", value: "solving_problems", tag: "Engineering & Science, IT & Data" },
            { text: "Having a clear structure and daily routine", value: "clear_structure", tag: "Education & Social Sciences, Business & Management" }
        ]
    },
    {
        text: "What gives you the biggest sense of satisfaction?",
        options: [
            { text: "Seeing someone smile after you helped them", value: "seeing_smile", tag: "Health & Human Services" },
            { text: "Finishing a complex task or challenge", value: "finishing_challenge", tag: "IT & Data, Engineering & Science" },
            { text: "Creating something original", value: "creating_original", tag: "Creative Arts & Media" },
            { text: "Meeting a deadline perfectly", value: "meeting_deadline", tag: "Business & Management" },
            { text: "Teaching, explaining, or supporting someone", value: "teaching", tag: "Education & Social Sciences" },
            { text: "Working behind the scenes to keep things running", value: "behind_scenes", tag: "IT & Data" }
        ]
    }
])
export const careerClustersData = [
    {
        name: "IT & Data",
        jobs: ["Software Developer", "Data Analyst"],
        tags: ["IT & Data"]
    },
    {
        name: "Health & Human Services",
        jobs: ["Registered Nurse", "Social Worker"],
        tags: ["Health & Human Services"]
    },
    {
        name: "Creative Arts & Media",
        jobs: ["Graphic Designer", "Interior Designer", "Fashion Designer"],
        tags: ["Creative Arts & Media"]
    },
    {
        name: "Engineering & Science",
        jobs: ["Mechanical Engineer", "Architect"],
        tags: ["Engineering & Science"]
    },
    {
        name: "Business & Management",
        jobs: ["Human Resources Officer", "Marketing Coordinator", "Financial Analyst"],
        tags: ["Business & Management"]
    },
    {
        name: "Education & Social Sciences",
        jobs: ["Primary / Secondary School Teacher", "Librarian"],
        tags: ["Education & Social Sciences"]
    }
]
export const majorRecommendations = {
    "IT & Data": [
        "Software Developer",
        "Data Analyst"
    ],
    "Health & Human Services": [
        "Registered Nurse",
        "Social Worker",
    ],
    "Creative Arts & Media": [
        "Graphic Designer",
        "Interior Designer",
        "Fashion Designer",
    ],
    "Engineering & Science": [
        "Mechanical Engineer",
        "Architect",
    ],
    "Business & Management": [
        "Human Resources Officer",
        "Marketing Coordinator",
        "Financial Analyst",
    ],
    "Education & Social Sciences": [
        "Primary / Secondary School Teacher",
        "Librarian"
    ]
}