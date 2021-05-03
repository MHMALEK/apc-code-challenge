import Pathes from './pathes';
// pages
import IndexPage from '../../../ui/screens/main';
import NotFoundPage from '../../../ui/screens/not-found';

const routes = [
  // index
  {
    path: Pathes.INDEX_PATH,
    component: IndexPage,
    exact: true,
  },

  // not found
  {
    path: Pathes.NOT_FOUND_PATH,
    component: NotFoundPage,
    exact: false,
  },
];

export default routes;
