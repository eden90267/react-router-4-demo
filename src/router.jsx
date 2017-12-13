import Start from "Source/components/Start";
import Timer from "Source/components/Timer";
import TimeUp from "Source/components/TimeUp";

const routes = [
  {
    path: '/',
    exact: true,
    component: Start,

  },
  {
    path: '/timer',
    exact: true,
    component: Timer,
  },
  {
    path: '/timeup',
    exact: true,
    component: TimeUp,
  }
];

export default routes;