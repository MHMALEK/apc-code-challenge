import pathes from "./pathes";
// pages
import SearchPage from "../../ui/pages/search";
import IndexPage from "../../ui/pages/index";
import NotFoundPage from "../../ui/pages/not-found";


const routes = [
  // index
  {
    path: pathes.INDEX_PATH,
    component: IndexPage,
    exact: true,
  },
  // search
  {
    path: pathes.SEARCH_ROOM_PATH,
    component: SearchPage,
    exact: true,
  },
  // not found
  {
    path: pathes.NOT_FOUND_PATH,
    component: NotFoundPage,
    exact: false,
  },
];

export default routes;
