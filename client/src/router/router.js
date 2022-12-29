import '../App.css';
import '../index.css';
import '../css/index.css';

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
// import Login from "../compons/Log Options/01-Login";
// import Logout from "../compons/Log Options/02-Logout";
// import ChangeAccount from "../compons/Log Options/03-ChangeAccount";
// import Blog from "../compons/Sections/04-Blog";
// import Projects from "../compons/Sections/05-Projects";
// import About from "../compons/Sections/07-About";
import Categories from '../components/Categories';
import Begin from '../components/Begin';
import Help from '../components/Help/Help.jsx';
import Profile from '../components/Profile/Profile.jsx';

export const router= createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/check',
    element: <Categories/>
  },
  {
    path: '/begin',
    element: <Begin/>
  },
  {
    path: '/help',
    element: <Help/>
  },
  {
    path: '/profile',
    element: <Profile/>
  },
]);