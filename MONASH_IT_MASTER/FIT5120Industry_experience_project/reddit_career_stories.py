import praw
import json

# Connect to Reddit API
reddit = praw.Reddit(
    client_id='C5GQs4s4J7zctYlxh572TA',
    client_secret='bZAP3xc7uRnJeycCcXYK-j-pTnQGmA',
    user_agent='career_explorer_script/0.1 by Living_Membership514'
)

# City and category settings
cities = ['Melbourne', 'Sydney', 'Brisbane', 'Perth', 'Adelaide', 'Canberra', 'Hobart', 'Darwin']

categories = {
    'Agriculture': ['agriculture', 'environmental scientist'],
    'Business': ['business analyst', 'accountant', 'marketing'],
    'Creative Arts': ['graphic designer', 'artist', 'journalist'],
    'Education': ['teacher', 'education'],
    'Engineering': ['civil engineer', 'mechanical engineer', 'engineer'],
    'Health': ['nurse', 'psychologist', 'doctor'],
    'IT & Data': ['software engineer', 'data analyst', 'developer'],
    'Law': ['lawyer', 'public service', 'legal'],
    'Math': ['mathematician', 'researcher', 'data scientist']
}

results = {}

# Collect both title and URL
for city in cities:
    results[city] = {}
    for category, keywords in categories.items():
        posts = []
        for keyword in keywords:
            query = f"{keyword} {city} career"
            print(f"🔍 Searching: {query}")
            for post in reddit.subreddit('all').search(query, limit=5):
                posts.append({
                    'title': post.title,
                    'url': f"https://www.reddit.com{post.permalink}" if hasattr(post, 'permalink') else post.url
                })
        results[city][category] = posts

# Save into JSON file
with open('career_stories.json', 'w', encoding='utf-8') as f:
    json.dump(results, f, indent=2, ensure_ascii=False)

print("✅ Titles and URLs collected and saved to 'career_stories.json'")
