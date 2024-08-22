import routesAdmin from "./routes.admin";
import routesClient from "./routes.Client";
import { ErrorLayout } from "../layouts";
import { Error404 } from "../pages/Error404";

const routesError = [
  {
    path: "*",
    layout: ErrorLayout,
    component: Error404,
  },
];

const routes = [...routesAdmin, ...routesClient, ...routesError];
export default routes;
