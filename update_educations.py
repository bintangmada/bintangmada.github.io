import json

file_path = '/Users/bintangsuharsono/Documents/BINTANG MADA LAPTOP M3/GITHUB SAYA/WEBSITE PROFILE SAYA/REACT + TAILWIND/bintangmada.github.io/src/data/portfolio.json'

with open(file_path, 'r', encoding='utf-8') as f:
    data = json.load(f)

# Update Indonesian
data['id']['educations'] = [
    {
        "degree": "Sarjana Teknik Informatika / Ilmu Komputer",
        "institution": "Universitas Brawijaya",
        "year": "",
        "description": "Fokus: Jaringan Komputer, Keamanan Jaringan, dan Sistem Terdistribusi (IPK: 3.31)"
    }
]

# Update English
data['en']['educations'] = [
    {
        "degree": "Bachelor Degree in Informatics / Computer Science",
        "institution": "Brawijaya University",
        "year": "",
        "description": "Focus: Computer Networking, Network Security, and Distributed Systems. GPA : 3.31"
    }
]

with open(file_path, 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=4, ensure_ascii=False)

print("Updated successfully")
