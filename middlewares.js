import routes from "./routes";

export function localMiddleware(req, res, next) {
  res.locals.siteName = "Youtube";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 999
  };
  next();
}
