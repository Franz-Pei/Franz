import { reactive } from "vue";
export const questions = reactive([
    {
        text: "Which school subjects do you actually enjoy the most?",
        options: [
            { text: "Coding or working with computers", value: "coding", tags: ["IT & Data"] },
            { text: "Maths (any type)", value: "maths", tags: ["Engineering & Science", "Math & Theoretical Sciences"] },
            { text: "Psychology or Health classes", value: "psychology", tags: ["Health & Human Services"] },
            { text: "Science stuff like bio or chemistry", value: "science", tags: ["Engineering & Science", "Health", "Environment"] },
            { text: "Art, media or anything creative", value: "arts", tags: ["Creative Arts & Media"] },
            { text: "Business, economics or money-related", value: "business", tags: ["Business & Management"] },
            { text: "English, history or legal studies", value: "humanities", tags: ["Education", "Law", "Journalism"] },
            { text: "Environmental science or agriculture", value: "environment", tags: ["Agriculture, Environment & Natural Sciences"] },
            { text: "Food studies, textiles or woodwork", value: "vocational", tags: ["Vocational & Lifestyle Services"] }
        ]
    },
    {
        text: "What kinds of activities do you enjoy most in or outside school?",
        options: [
            { text: "Helping people with their problems", value: "helping", tags: ["Health & Human Services"] },
            { text: "Making stuff---drawing, editing, creating", value: "creating", tags: ["Creative Arts & Media"] },
            { text: "Figuring things out or solving tricky puzzles", value: "problem_solving", tags: ["IT & Data", "Engineering", "Math"] },
            { text: "Running group projects or planning stuff", value: "organizing", tags: ["Business & Management"] },
            { text: "Coding or building cool tech things", value: "coding_activity", tags: ["IT & Data"] },
            { text: "Performing, writing or telling stories", value: "performing", tags: ["Creative Arts", "Media & Communication"] },
            { text: "Getting hands-on with food, plants or tools", value: "hands_on", tags: ["Vocational", "Environment"] },
            { text: "Standing up for what's right", value: "advocacy", tags: ["Law & Public Services"] }
        ]
    },
    {
        text: "What type of work vibe do you think you'd like in the future?",
        options: [
            { text: "Fast and team-based", value: "fast_paced", tags: ["Business & Management"] },
            { text: "Calm and about helping people", value: "calm_helping", tags: ["Health & Human Services"] },
            { text: "Quiet and independent", value: "quiet", tags: ["IT & Data", "Math"] },
            { text: "Creative and chill", value: "creative_chill", tags: ["Creative Arts", "Media & Journalism"] },
            { text: "Super organised and routine", value: "organized", tags: ["Education", "Business"] },
            { text: "Practical and hands-on", value: "practical", tags: ["Engineering", "Vocational"] },
            { text: "Outdoorsy or nature-connected", value: "outdoors", tags: ["Agriculture, Environment"] }
        ]
    },
    {
        text: "What are you naturally good at or feel confident doing?",
        options: [
            { text: "Chatting with people and understanding them", value: "communication", tags: ["Health", "Education"] },
            { text: "Working with numbers or spotting patterns", value: "numbers", tags: ["IT & Data", "Math"] },
            { text: "Leading a group or making decisions", value: "leadership", tags: ["Business"] },
            { text: "Coming up with cool or clever ideas", value: "ideas", tags: ["Creative", "Engineering"] },
            { text: "Staying on top of tasks and being organised", value: "organized_skills", tags: ["Business"] },
            { text: "Learning new tech or digital stuff fast", value: "tech_skills", tags: ["IT & Data"] },
            { text: "Explaining ideas or writing stuff clearly", value: "explaining", tags: ["Media", "Law"] }
        ]
    },
    {
        text: "When you're working in a group, what role do you usually take?",
        options: [
            { text: "The leader who keeps things moving", value: "leader", tags: ["Business"] },
            { text: "The creative who makes it look awesome", value: "creative_role", tags: ["Creative Arts"] },
            { text: "The helper who keeps the team happy", value: "team_helper", tags: ["Health"] },
            { text: "The one who digs into the research", value: "researcher", tags: ["IT & Data", "Education"] },
            { text: "The planner with the perfect timeline", value: "planner", tags: ["Business"] },
            { text: "The quiet one who just gets it done", value: "quiet_worker", tags: ["Engineering", "IT", "Math"] }
        ]
    },
    {
        text: "What sounds most important to you in your future job?",
        options: [
            { text: "Helping people and doing good", value: "helping_people", tags: ["Health"] },
            { text: "Being creative and expressing yourself", value: "creativity", tags: ["Creative Arts"] },
            { text: "Having freedom to work your own way", value: "freedom", tags: ["IT", "Math"] },
            { text: "Earning well and moving up quickly", value: "earning", tags: ["Business"] },
            { text: "Tackling tricky problems or challenges", value: "challenges", tags: ["Engineering", "Math", "IT"] },
            { text: "Clear structure and routine", value: "structure", tags: ["Education", "Business"] },
            { text: "Making a difference for the planet or community", value: "difference", tags: ["Law", "Environment"] }
        ]
    },
    {
        text: "What gives you that 'yes, I nailed it' feeling?",
        options: [
            { text: "Helping someone feel better or less stressed", value: "helping_feeling", tags: ["Health"] },
            { text: "Solving a tough challenge or problem", value: "solving", tags: ["Engineering", "IT", "Math"] },
            { text: "Making something original and cool", value: "original", tags: ["Creative Arts"] },
            { text: "Finishing everything on time and to plan", value: "on_time", tags: ["Business"] },
            { text: "Explaining things well to others", value: "explaining_well", tags: ["Education"] },
            { text: "Quietly fixing things behind the scenes", value: "fixing", tags: ["IT", "Vocational"] },
            { text: "Speaking up or making your opinion heard", value: "speaking_up", tags: ["Media", "Law"] }
        ]
    },
    {
        text: "What kind of goals or values matter most to you in a job?",
        options: [
            { text: "Being outside or doing something for the environment", value: "environment_goals", tags: ["Agriculture & Natural Sciences"] },
            { text: "Standing up for justice and fairness", value: "justice", tags: ["Law & Public Services"] },
            { text: "Sharing stories or helping people understand things", value: "storytelling", tags: ["Media & Communication"] },
            { text: "Doing hands-on or practical work you can see", value: "practical_work", tags: ["Vocational & Lifestyle Services"] },
            { text: "Solving tricky questions or logical stuff", value: "logical_solving", tags: ["Math & Theoretical Sciences"] }
        ]
    },
    {
        text: "Which of these just sounds like a good time to you?",
        options: [
            { text: "Writing a blog, giving a speech, or making a podcast", value: "media_activities", tags: ["Media & Communication"] },
            { text: "Taking care of animals, plants or the planet", value: "nature_activities", tags: ["Agriculture & Natural Sciences"] },
            { text: "Cooking something great or making a DIY project", value: "craft_activities", tags: ["Vocational & Lifestyle Services"] },
            { text: "Debating a real-world issue or defending your side", value: "debate_activities", tags: ["Law & Public Services"] },
            { text: "Proving a maths problem or finding a logic shortcut", value: "math_activities", tags: ["Math & Theoretical Sciences"] }
        ]
    }
])

export const careerClustersData = [
    {
        name: "Agriculture, Environment & Natural Sciences",
        jobs: ["Agricultural Technician", "Agronomist", "Biologist", "Biomedical Scientist", "Climate Analyst", "Conservation Officer", "Ecologist"],
        tags: ["Agriculture, Environment & Natural Sciences", "Environment"]
    },
    {
        name: "Business & Management",
        jobs: ["Accountant", "Auditor", "Brand Manager", "Business Analyst", "Content Strategist", "Digital Marketing Analyst", "Economist"],
        tags: ["Business & Management", "Business"]
    },
    {
        name: "Creative Arts, Media, Communication & Journalism",
        jobs: ["Animator", "Art Director", "Brand Manager", "Content Creator", "Content Strategist", "Creative Director", "Digital Marketing Analyst"],
        tags: ["Creative Arts & Media", "Creative Arts", "Media & Communication", "Media & Journalism", "Journalism"]
    },
    {
        name: "Education & Social Sciences",
        jobs: ["Policy Analyst", "Research Officer", "School Teacher", "Social Worker"],
        tags: ["Education", "Education & Social Sciences"]
    },
    {
        name: "Engineering & Science",
        jobs: ["Project Engineer", "QA/QC Engineer", "Quantitative Analyst", "Climate Analyst", "Engineer", "Environmental Scientist"],
        tags: ["Engineering & Science", "Engineering"]
    },
    {
        name: "Health & Human Services",
        jobs: ["Mental Health Counselor", "Nurse", "Nutritionist", "HR Specialist", "Health Administrator", "Healthcare Analyst", "Physician Assistant", "Behavioral Analyst"],
        tags: ["Health & Human Services", "Health"]
    },
    {
        name: "IT & Data",
        jobs: ["Data Analyst", "Data Scientist", "Software Developer", "Statistician", "Systems Analyst", "Systems Engineer", "Web Developer"],
        tags: ["IT & Data", "IT"]
    },
    {
        name: "Law & Public Services",
        jobs: ["Compliance Officer", "Lawyer", "Legal Advisor", "Paralegal", "Policy Analyst"],
        tags: ["Law & Public Services", "Law"]
    },
    {
        name: "Math & Theoretical Sciences",
        jobs: ["Actuary", "Data Scientist", "Mathematician", "Quantitative Analyst", "Statistician"],
        tags: ["Math & Theoretical Sciences", "Math"]
    },
    {
        name: "Vocational & Lifestyle Services",
        jobs: ["Chef", "Carpenter", "Fashion Designer", "Interior Designer", "Landscaper"],
        tags: ["Vocational & Lifestyle Services", "Vocational"]
    }
]
// Default password for verification
export const DEFAULT_PASSWORD = "123456";
export const STORAGE_KEY = "system_access_token";