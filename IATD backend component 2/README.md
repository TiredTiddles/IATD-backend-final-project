This is a file that tells you how to access IATD backend component 2

### Initialisation

1. To start the project, please first cd into the `backend` folder. This folder contains the code.
2. Then, run `node index.js` in the terminal
3. The server should be up.

> A problem that I am well aware of is the lack of security around the `.env` file containing my credentials. I'm not sure how to fix this, as we don't have dedicated hardware/virtual machine to run this on.

4. Use postman or another application that is capable of using HTTP verbs upload courses to the database through: `POST localhost:8080/courses/`.

```
{
  "title": "Introduction to Cybersecurity",
  "imageLocation": "/uploads/courses/cybersec.png",
  "courseCode": "CYB101",
  "description": "Learn the fundamentals of cybersecurity, including threat types, encryption concepts, risk management, and defensive strategies.",
  "instructor": "Dr. Amanda Chen",
  "duration": 12,
  "category": "Technology",
  "link": "https://example.com/courses/cyb101"
}
```

5. You can GET these courses by using the GET verb. For example, `GET localhost:8080/courses`
6. If you want a specific course, find the `_id` tag, and use `GET localhost:8080/courses/:id`, where you replace `:id` with the value you got

7. If you want to clear the database, you can write `DELETE localhost:8080/courses` to clear everything. I have not yet implemented a function to delete only one file at a time. I used this to clear my database a few times.

### A description of what each file does.

I think what I did in component 1 just took a long time without bringing value.

- `backend/`
  - `models/Course.js`: the schema for MongoDB.
  - `node_modules/`: I'm not sure. Seems to contain the modules for node.
  - `index.js`: The file that handles http requests (APIs). This is the core of the backend. Runs a server on `http://localhost:8080`. Courses can be found on `localhost:8080/courses/` through the API. If you use postman and run `GET` there, then it should return all the courses.
  - `package.json`: I'm not sure what this does. I didn't edit it either.
  - `package-lock.json`: I'm not sure what this does. I didn't edit it either.
