import About from "Source/components/About";
import Home from "Source/components/Home";
import Topics from "Source/components/Topics";

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,

  },
  {
    path: '/about',
    exact: true,
    component: About,
  },
  {
    path: '/topic',
    exact: true,
    component: Topics,
  }
];

export default routes;