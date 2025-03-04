course_management/
├── backend/
│   ├── controller/
│   │   ├── courseController.js
│   │   ├── enrollmentController.js
│   │   ├── gradeController.js
│   │   ├── userController.js #handles user login and auth
│   │   └── ...
│   ├── data/ #for any static data or initial setup data
│   ├── helper/
│   │   ├── algorand.js # Algorand interaction functions (SDK)
│   │   ├── utils.js # Utility functions (date formatting, etc.)
│   │   └── ...
│   ├── models/
│   │   ├── Course.js
│   │   ├── Enrollment.js
│   │   ├── Grade.js
│   │   └── User.js
│   ├── routes/
│   │   ├── courseRoutes.js
│   │   ├── enrollmentRoutes.js
│   │   ├── gradeRoutes.js
│   │   ├── userRoutes.js
│   │   └── ...
│   ├── services/
│   │   ├── courseService.js
│   │   ├── enrollmentService.js
│   │   ├── gradeService.js
│   │   ├── userService.js
│   │   └── algorandService.js # Abstraction for Algorand interactions
│   ├── validator/
│   │   ├── courseValidator.js
│   │   ├── enrollmentValidator.js
│   │   ├── gradeValidator.js
│   │   └── userValidator.js
│   ├── venv/ # Virtual environment (Python) - Might also use Node modules
│   ├── .env # Environment variables
│   ├── app.js # Main backend entry point (Express.js server)
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AddCourse.jsx
│   │   │   ├── CourseDetails.jsx
│   │   │   ├── CourseList.jsx
│   │   │   ├── EditCourse.jsx
│   │   │   ├── StudentList.jsx
│   │   │   └── ...
│   │   ├── services/
│   │   │   └── api.js # Handles API calls to backend
│   │   ├── App.jsx
│   │   └── index.jsx
│   ├── app.css
│   ├── index.css
│   ├── index.html
│   └── webpack.config.cjs
├── algokit.toml # AlgoKit configuration file
└── README.md
