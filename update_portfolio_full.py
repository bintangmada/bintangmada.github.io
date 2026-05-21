import json

file_path = '/Users/bintangsuharsono/Documents/BINTANG MADA LAPTOP M3/GITHUB SAYA/WEBSITE PROFILE SAYA/REACT + TAILWIND/bintangmada.github.io/src/data/portfolio.json'

with open(file_path, 'r', encoding='utf-8') as f:
    data = json.load(f)

# Combine skills
all_skills = [
    "Java", "SQL", "JavaScript", 
    "Spring Boot", "Bootstrap", 
    "MySQL", "Oracle", "Redis", 
    "IntelliJ IDEA", "SQL Developer", "GitLab", "GitHub", "Postman", "VS Code", "Figma", "Trello", 
    "Windows 11", "MacOS", 
    "FileZilla", "MS Office"
]

# Update About info for both languages
id_about_paragraphs = [
    "Saya seorang Java Developer dengan pengalaman langsung dalam mengembangkan dan memelihara aplikasi enterprise, terutama menggunakan Java Spring Boot.",
    "Terampil dalam pengembangan backend dan fullstack, manajemen database, serta sistem manajemen vendor. Memiliki kemampuan yang terbukti dalam memberikan hasil kerja baik dalam tim maupun secara mandiri."
]

en_about_paragraphs = [
    "Java Developer with hands-on experience in developing and maintaining enterprise applications, primarily using Java Spring Boot.",
    "Skilled in backend and fullstack development, database management, and vendor management systems. Proven ability to deliver results in team-based and independent environments."
]

data['id']['about']['paragraphs'] = id_about_paragraphs
data['en']['about']['paragraphs'] = en_about_paragraphs

data['id']['about']['skills'] = all_skills
data['en']['about']['skills'] = all_skills

# Update experiences (id)
data['id']['experiences'] = [
    {
        "role": "Developer",
        "company": "Bank Negara Indonesia (Persero)",
        "duration": "Mar 2023 - Sekarang",
        "description": "Mengembangkan dan memelihara aplikasi manajemen vendor (internal & eksternal). Menangani registrasi vendor, kontrak, dan pelacakan personel alih daya (outsource). Membuat fitur pelaporan dan dasbor pemantauan.",
        "tags": ["Java", "Spring Boot", "Vendor Management"]
    },
    {
        "role": "Application Developer Jr.",
        "company": "PT Mitra Integrasi Informatika",
        "duration": "Nov 2022 - Sekarang",
        "description": "Membangun sistem backend dengan Java Spring Boot. Membuat proyek fullstack menggunakan Java, Thymeleaf, HTML, CSS, dan JS.",
        "tags": ["Java", "Spring Boot", "Thymeleaf", "HTML/CSS/JS"]
    },
    {
        "role": "IT Developer",
        "company": "Aan Safaat Permadi & Partners",
        "duration": "Jan 2019 - Apr 2019",
        "description": "Merancang dan mengembangkan sistem captive portal menggunakan Raspberry Pi. Mengintegrasikan FreeRadius, DaloRadius, dan CoovaChilli.",
        "tags": ["Raspberry Pi", "FreeRadius", "DaloRadius", "CoovaChilli"]
    },
    {
        "role": "IT Infrastructure Staff",
        "company": "Universitas Brawijaya",
        "duration": "Jun 2018 - Agt 2018",
        "description": "Melakukan refaktor website fakultas dan memelihara fasilitas jaringan.",
        "tags": ["Infrastructure", "Network"]
    }
]

# Update experiences (en)
data['en']['experiences'] = [
    {
        "role": "Developer",
        "company": "Bank Negara Indonesia (Persero)",
        "duration": "Mar 2023 - Present",
        "description": "Developed and maintained vendor management applications (internal & external). Handled vendor registration, contracts, and outsourced personnel tracking. Created reporting features and monitoring dashboards.",
        "tags": ["Java", "Spring Boot", "Vendor Management"]
    },
    {
        "role": "Application Developer Jr.",
        "company": "PT Mitra Integrasi Informatika",
        "duration": "Nov 2022 - Present",
        "description": "Built backend systems with Java Spring Boot. Created fullstack projects using Java, Thymeleaf, HTML, CSS, and JS.",
        "tags": ["Java", "Spring Boot", "Thymeleaf", "HTML/CSS/JS"]
    },
    {
        "role": "IT Developer",
        "company": "Aan Safaat Permadi & Partners",
        "duration": "Jan 2019 - Apr 2019",
        "description": "Designed and developed captive portal system using Raspberry Pi. Integrated FreeRadius, DaloRadius, and CoovaChilli.",
        "tags": ["Raspberry Pi", "FreeRadius", "DaloRadius", "CoovaChilli"]
    },
    {
        "role": "IT Infrastructure Staff",
        "company": "Brawijaya University",
        "duration": "Jun 2018 - Aug 2018",
        "description": "Refactored faculty website and maintained network facilities.",
        "tags": ["Infrastructure", "Network"]
    }
]

# Update Projects (id)
data['id']['projects'] = [
    {
        "title": "Vendor Management Enhancement",
        "description": "Sistem peningkatan manajemen vendor untuk kebutuhan enterprise. (Tahun: 2025)",
        "tags": ["Java", "Spring Boot", "Vendor Management"],
        "link": "#",
        "image": "/images/projects/ecommerce.jpg"
    },
    {
        "title": "Session Management System with Redis",
        "description": "Sistem manajemen sesi pengguna menggunakan Redis untuk aplikasi berskala besar. (Tahun: 2023)",
        "tags": ["Redis", "Java", "Backend"],
        "link": "#",
        "image": "/images/projects/landing-page.jpg"
    },
    {
        "title": "Asset Management System with Spring Boot",
        "description": "Aplikasi manajemen aset berbasis Spring Boot. (Tahun: 2022)",
        "tags": ["Spring Boot", "Java", "Asset Management"],
        "link": "#",
        "image": "/images/projects/kanban.jpg"
    },
    {
        "title": "HR Schema CRUD",
        "description": "Operasi CRUD sederhana untuk skema HR. (Tahun: 2022)",
        "tags": ["CRUD", "Database", "SQL"],
        "link": "#",
        "image": "/images/projects/ecommerce.jpg"
    },
    {
        "title": "IoT Fog Computing System for Mushrooms Cultivation",
        "description": "Sistem komputasi fog berbasis IoT untuk budidaya jamur. (Tahun: 2021)",
        "tags": ["IoT", "Fog Computing", "Hardware"],
        "link": "#",
        "image": "/images/projects/landing-page.jpg"
    },
    {
        "title": "Clothing Store Landing Page & PWA",
        "description": "Halaman landing untuk toko pakaian dengan fitur Progressive Web App (PWA). (Tahun: 2020)",
        "tags": ["PWA", "Landing Page", "Frontend"],
        "link": "#",
        "image": "/images/projects/kanban.jpg"
    }
]

# Update Projects (en)
data['en']['projects'] = [
    {
        "title": "Vendor Management Enhancement",
        "description": "An enhanced vendor management system for enterprise needs. (Year: 2025)",
        "tags": ["Java", "Spring Boot", "Vendor Management"],
        "link": "#",
        "image": "/images/projects/ecommerce.jpg"
    },
    {
        "title": "Session Management System with Redis",
        "description": "User session management system using Redis for scalable applications. (Year: 2023)",
        "tags": ["Redis", "Java", "Backend"],
        "link": "#",
        "image": "/images/projects/landing-page.jpg"
    },
    {
        "title": "Asset Management System with Spring Boot",
        "description": "Asset management application built with Spring Boot. (Year: 2022)",
        "tags": ["Spring Boot", "Java", "Asset Management"],
        "link": "#",
        "image": "/images/projects/kanban.jpg"
    },
    {
        "title": "HR Schema CRUD",
        "description": "Simple CRUD operations for HR schemas. (Year: 2022)",
        "tags": ["CRUD", "Database", "SQL"],
        "link": "#",
        "image": "/images/projects/ecommerce.jpg"
    },
    {
        "title": "IoT Fog Computing System for Mushrooms Cultivation",
        "description": "IoT-based fog computing system for mushroom cultivation. (Year: 2021)",
        "tags": ["IoT", "Fog Computing", "Hardware"],
        "link": "#",
        "image": "/images/projects/landing-page.jpg"
    },
    {
        "title": "Clothing Store Landing Page & PWA",
        "description": "Landing page and Progressive Web App (PWA) for a clothing store. (Year: 2020)",
        "tags": ["PWA", "Landing Page", "Frontend"],
        "link": "#",
        "image": "/images/projects/kanban.jpg"
    }
]

# Optionally: Append training & certifications into projects or a new section? 
# In the schema, there isn't a training section default. Maybe we can append to the 'experiences' or 'educations'?
# Let's add them to 'educations' or modify 'educations' to include training.
data['id']['educations'].extend([
    {
        "degree": "Java Coding Camp",
        "institution": "PT Mitra Integrasi Informatika",
        "year": "2022-2023",
        "description": "Pelatihan dan Sertifikasi."
    },
    {
        "degree": "Fullstack Web Designer",
        "institution": "BuildWithAngga",
        "year": "2020",
        "description": "Pelatihan dan Sertifikasi."
    },
    {
        "degree": "Progressive Web Apps",
        "institution": "BuildWithAngga",
        "year": "2020",
        "description": "Pelatihan dan Sertifikasi."
    }
])

data['en']['educations'].extend([
    {
        "degree": "Java Coding Camp",
        "institution": "PT Mitra Integrasi Informatika",
        "year": "2022-2023",
        "description": "Training and Certification."
    },
    {
        "degree": "Fullstack Web Designer",
        "institution": "BuildWithAngga",
        "year": "2020",
        "description": "Training and Certification."
    },
    {
        "degree": "Progressive Web Apps",
        "institution": "BuildWithAngga",
        "year": "2020",
        "description": "Training and Certification."
    }
])

with open(file_path, 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=4, ensure_ascii=False)

print("success")
