import "./App.css";
import Home from "./Pages/Home/Home";
import Team from "./Pages/TeamMembers/Team";
import Quiz from "./Pages/Quiz/Quiz";
import EditQuiz from "./Pages/Quiz/EditQuiz";
import Rank from "./Pages/Ranking/Rank";
import SingIn_Outs from "./Pages/SingIn_Out/SingIn_Out";
import Insertquiz from "./Pages/Quiz/insertquiz";
import Courses from "./Pages/Courses/Courses";
import MiniCourseslist from "./Pages/Courses/MiniCourseslist";

import HomeUser from "./Pages/User/HomeUsers";
import AllQuizs from "./Pages/User/AllQuizs";
import QuizUser from "./Pages/User/QuizUser";
import StartQuizs from "./Pages/User/StartQuizs";
import Ranking from "./Pages/User/Rarking";
import Profiles from "./Pages/User/Profiles";
import Login from "./Pages/User/Login";
import AboutUS from "./Pages/User/AboutUS";
import MiniCourse from "./Pages/User/MiniCourses";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeUser />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/AboutUS",
    element: <AboutUS />,
  },
  {
    path: "/AllQuizs",
    element: <AllQuizs />,
  },
  {
    path: "/QuizUser/:id",
    element: <QuizUser />,
  },
  {
    path: "/StartQuizs/:id",
    element: <StartQuizs />,
  },
  {
    path: "/MiniCourse",
    element: <MiniCourse />,
  },
  {
    path: "/Ranking",
    element: <Ranking />,
  },
  {
    path: "/Profiles",
    element: <Profiles />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/team",
    element: <Team />,
  },
  {
    path: "/Courses",
    element: <Courses />,
  },
  {
    path: "/MiniCourseslist",
    element: <MiniCourseslist />,
  },
  {
    path: "/Quiz",
    element: <Quiz />,
  },
  {
    path: "/EditQuiz/:id",
    element: <EditQuiz />,
  },
  {
    path: "/Rank",
    element: <Rank />,
  },
  {
    path: "/SingIn_Outs",
    element: <SingIn_Outs />,
  },
  {
    path: "/Insertquiz",
    element: <Insertquiz />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
