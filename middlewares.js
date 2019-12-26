import routes from "./routes";

export function localMiddleware(req, res, next) {
  res.locals.siteName = "Youtube";
  res.locals.routes = routes;
  next();
}
