This is a file that tells you how to access IATD backend component 1.

### Initialisation

1. To start the project, please first cd into the `my-react-app` folder.
2. Then, you should run `npm install` so that the packages can be installed
3. After that, run `npm run dev` and the website should be up on `http://localhost:5173`
4. Go into an internet browser, such as google chrome, and search up `http://localhost:5173`
5. You should be able to view the website there.

### A description of what each code file does

- `/my-react-app/node_modules/`: a collection of modules for node.
- `./my-react-app/public/assets/`: a collection of images for the courses page
- `./my-react-app/src/`: the components used in this app. This part is pretty important:
  - `./components/`: Where the components are. Contains two folders:
    - `./HomePage/`: Contains assets for the HomePage.
      - `./CourseCard/`: Contains the CourseCard component.
        - `./EnrollButton/`: I decided to make the enroll button separate. It didn't have to be separate.
          - `EnrollButton.jsx`: The jsx for the enroll button. Just a glorified `Link` tag. Uses a css flexbox to make the link wide.
          - `EnrollButton.css`: The css for the EnrollButton.
        - `CourseCard.jsx`: The CourseCard component.
        - `CourseCard.css`: The css for the CourseCard Component. Just provides a few classes for the CourseCards.
      - `HomePage.jsx`: Is the homepage. Uses the `CourseCard` template found under `./CourseCard/`.
      - `HomePage.css`: The css for the HomePage. Just defines the `.course-container`.
  - `App.jsx`: the application. Everything is directed here. pens a server on `http://localhost:5173`
  - `App.css`: provides the css for App. All that it does is change the font and change the width.
  - `index.css`: I'm actually not sure what this does. I don't think I touched it.
  - `main.jsx`: I'm not sure what this does either. I don't think I touched it.
