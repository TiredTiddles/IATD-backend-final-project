This is a file that tells you how to access IATD backend component 2

### Initialisation

1. To start the project, please first cd into the `backend` folder. This folder contains the code.
2. Then, create a terminal and run `node index.js` in it. You should see "Server running on http://localhost:8080" if this succeeds. There should also be "Connected to MongoDB" to show that it was successful in connecting to MongoDB, and that you can now use the HTTP verbs to GET, POST, DELETE some of the course content.

> Please note that if you tested anything for component two, you should run `DELETE http://localhost:8080/courses` to clear everything. This is because the schema made before is different to the schema used in this project.

3. Now, create a second terminal. If you're in VSC, you can use "cmd + shift + p" or "ctrl + shift + p" to open a menu. Search up "Create new terminal (with profile)" and use any terminal you like. (bash and zsh work - others are unknown).
4. In this terminal, cd into the `my-react-app` folder. This folder contains the frontend component of this assessment.
5. Run `npm install` to install all the packages. Yes this is important.
6. If it says there's vulnerabilities in something, run `npm audit fix` until you're happy, and then run `npm audit fix --force` if the number isn't reducing
7. Now run `npm run dev`. It should say "VITE v7.2.2 ready in **180ms**". If it does, this means that you can now access the website at `http://localhost:8080`.

8. If you are met with a blank screen, that is normal. I'm afraid you'll have to POST these individually, because I don't have a bulk POST route.

Number 1

```
{
  "card": {
    "title": "Cybersecurity",
    "imageLocation": "course_9734457.jpg",
    "courseCode": "CS101",
    "description": "Learn to protect network and systems from cyber attacks. This course covers encryption, firewalls, and threat detection with hands-on labs.",
    "duration": 40,
    "link": "/CybersecurityCoursePage"
  },
  "course": {
    "title": "Cybersecurity",
    "description": "Learn to protect network and systems from cyber attacks. This course covers encryption, firewalls, and threat detection with hands-on labs.",
    "overview": "This course will introduce you to the world of cybersecurity. You'll learn encryption, firewalls, and threat detection with hands-on labs.",
    "courseContent": [
      "Introduction to Cybersecurity",
      "Cryptography and Encryption",
      "Firewalls and Network Security",
      "Threat Detection and Response",
      "Ethical Hacking and Penetration Testing"
    ],
    "courseCosts": "Standard: $550 • Student: $450 • Professional: $750",
    "instructor": "John Doe",
    "category": "Network Security"
  }
}
```

Number 2

```
{
  "card": {
    "title": "C Programming",
    "imageLocation": "image.webp",
    "courseCode": "CS105",
    "description": "Master the C programming language from scratch. Learn about variables, loops, functions, pointers, and building small projects.",
    "duration": 35,
    "link": "/CCoursePage"
  },
  "course": {
    "title": "C Programming",
    "description": "Learn one of the world's most powerful and beginner-friendly programming languages, used everywhere from web development to AI.",
    "overview": "Learn the fundamentals of the C programming language, including memory management, pointers, data structures, compilation, and low-level problem solving.",
    "courseContent": [
      "C Syntax & Program Structure",
      "Variables, Data Types & Operators",
      "Control Flow (if, switch, loops)",
      "Functions & Header Files",
      "Pointers & Memory Management",
      "Arrays, Strings & Structs",
      "Dynamic Memory (malloc, calloc, free)",
      "File I/O",
      "Working with the C Compiler & Build Tools",
      "Debugging with GDB",
      "Intro to Data Structures in C"
    ],
    "courseCosts": "Standard: $480 • Student: $380 • Professional: $760",
    "instructor": "Jane Smith",
    "category": "Programming"
  }
}
```

Number 3

```
{
  "card": {
    "title": "Mobile App Development",
    "imageLocation": "mobile-app-development-img.jpg",
    "courseCode": "CS130",
    "description": "Build Android and iOS apps using modern frameworks. Learn about UI design, APIs, and app deployment.",
    "duration": 60,
    "link": "/MobileAppDevelopmentCoursePage"
  },
  "course": {
    "title": "Mobile App Development",
    "description": "Build Android and iOS apps using modern frameworks. Learn about UI design, APIs, and app deployment.",
    "overview": "In this course, you will build mobile apps for both Android and iOS platforms using modern frameworks. You'll learn to design UIs, connect APIs, and deploy apps.",
    "courseContent": [
      "Introduction to Mobile App Development",
      "Setting Up the Development Environment",
      "UI Design and User Experience",
      "Integrating APIs with Mobile Apps",
      "App Deployment and Store Submission"
    ],
    "courseCosts": "Standard: $600 • Student: $500 • Professional: $800",
    "instructor": "Alice Johnson",
    "category": "Mobile Development"
  }
}
```

Number 4

```
{
  "card": {
    "title": "Python Programming",
    "imageLocation": "Features_Of_Python_1_f4ccd6d9f7.jpg",
    "courseCode": "CS120",
    "description": "Master Python for general-purpose programming, including data structures, functions, file handling, and basic automation.",
    "duration": 50,
    "link": "/PythonCoursePage"
  },
  "course": {
    "title": "Python Programming",
    "description": "Master Python for general-purpose programming, including data structures, functions, file handling, and basic automation.",
    "overview": "Learn Python from scratch, and dive into programming concepts like data structures, functions, file handling, and automation.",
    "courseContent": [
      "Introduction to Python",
      "Data Structures in Python",
      "Functions and Modules",
      "File Handling in Python",
      "Basic Automation with Python"
    ],
    "courseCosts": "Standard: $500 • Student: $400 • Professional: $700",
    "instructor": "Bob Lee",
    "category": "Programming"
  }
}
```

Number 5

```
{
  "card": {
    "title": "Software Engineering Foundations",
    "imageLocation": "programming-languages.webp",
    "courseCode": "CS140",
    "description": "Learn the fundamental principles of designing, building, and maintaining large-scale software systems with real engineering methods.",
    "duration": 45,
    "link": "/SoftwareEngineeringCoursePage"
  },
  "course": {
    "title": "Software Engineering Foundations",
    "description": "Master the core concepts of software engineering including modular design, version control, testing, architecture, and development workflows.",
    "overview": "This course introduces you to the discipline of software engineering. You'll learn methodologies like Agile and Scrum, understand system design, work with Git, write maintainable code, and build software collaboratively using real engineering practices.",
    "courseContent": [
      "Introduction to Software Engineering",
      "Agile, Scrum, and Development Methodologies",
      "Version Control with Git & GitHub",
      "Software Architecture & Design Patterns",
      "Writing Maintainable & Modular Code",
      "Testing Strategies (Unit, Integration, E2E)",
      "Debugging & Code Review Techniques",
      "Building and Deploying Software",
      "Working in Engineering Teams",
      "Intro to System Design"
    ],
    "courseCosts": "Standard: $520 • Student: $420 • Professional: $780",
    "instructor": "Dr. Emily Carter",
    "category": "Software Engineering"
  }
}
```

Number 6

```
{
  "card": {
    "title": "Data Science Essentials",
    "imageLocation": "What-is-data-science-2.jpg",
    "courseCode": "DS110",
    "description": "Learn the fundamentals of data science including data analysis, statistics, and machine learning foundations.",
    "duration": 55,
    "link": "/DataScienceCoursePage"
  },
  "course": {
    "title": "Data Science Essentials",
    "description": "Build a strong foundation in data cleaning, statistics, visualisation, and machine learning workflows.",
    "overview": "This course introduces the full data science pipeline. You will learn Python-based data analysis, work with pandas and NumPy, explore visualisation methods, and build your first predictive models using real-world datasets.",
    "courseContent": [
      "Introduction to Data Science",
      "Working with Data in Python",
      "Statistics & Probability Foundations",
      "Data Cleaning and Preprocessing",
      "Data Visualisation Techniques",
      "Exploratory Data Analysis",
      "Machine Learning Basics",
      "Building Predictive Models",
      "Evaluating Model Performance",
      "Real-World Data Science Projects"
    ],
    "courseCosts": "Standard: $650 • Student: $500 • Professional: $900",
    "instructor": "Dr. Hannah Lewis",
    "category": "Data Science"
  }
}
```

Number 7

```
{
  "card": {
    "title": "Web Development Basics",
    "imageLocation": "which-development-job-is-right-for-you.jpg",
    "courseCode": "WD101",
    "description": "Learn how websites work and build your first responsive webpages using HTML, CSS, and JavaScript.",
    "duration": 30,
    "link": "/WebDevelopmentCoursePage"
  },
  "course": {
    "title": "Web Development Basics",
    "description": "Learn the fundamentals of web development—HTML, CSS, JavaScript, and responsive design.",
    "overview": "A beginner-friendly introduction to building websites from scratch. You'll learn how the web works, create structured content with HTML, style it with CSS, and add interactivity using JavaScript.",
    "courseContent": [
      "How the Web Works",
      "HTML Structure and Semantic Markup",
      "CSS Styling and Flexbox",
      "Responsive Design",
      "JavaScript Basics",
      "DOM Manipulation",
      "Intro to Deployment",
      "Building Your First Website"
    ],
    "courseCosts": "Standard: $300 • Student: $250 • Professional: $450",
    "instructor": "Mark Rivera",
    "category": "Web Development"
  }
}
```

Number 8

```
{
  "card": {
    "title": "Computer Science Principles",
    "imageLocation": "computer-programming-vs-computer-science-image_blog.jpg",
    "courseCode": "CS100",
    "description": "Explore the core concepts of computer science including algorithms, logic, networks, and computing theory.",
    "duration": 40,
    "link": "/ComputerSciencePrinciplesCoursePage"
  },
  "course": {
    "title": "Computer Science Principles",
    "description": "A broad introduction to the fundamental ideas behind computing and algorithmic thinking.",
    "overview": "This course explores the essential foundations of computer science. You'll learn about logic, problem-solving, algorithms, networks, binary systems, and how computers process information.",
    "courseContent": [
      "What is Computer Science?",
      "Computational Thinking",
      "Logic and Boolean Algebra",
      "Binary & Data Representation",
      "Algorithms and Efficiency",
      "Networks and the Internet",
      "Basic Programming Concepts",
      "Impact of Computing on Society"
    ],
    "courseCosts": "Standard: $420 • Student: $350 • Professional: $600",
    "instructor": "Prof. Daniel Wong",
    "category": "Computer Science"
  }
}
```

You can make other types, but please make sure that the `imageLocation` exists. The images can be found in the `frontend/my-react-app/public/assets/`.

9. Access `http://localhost:8080/` now, and the courses should render. if they do, it works. If they don't, I have no idea what went wrong because it works on my end.
10. (optional) Give me a good mark!
