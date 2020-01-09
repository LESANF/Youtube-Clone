import multer from "multer";
import routes from "./routes";

const multerVideo = multer({ dest: "videos/" });

export function localMiddleware(req, res, next) {
  res.locals.siteName = "Youtube";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 999
  };
  next();
}

export const uploadVideo = multerVideo.single("videoFile");
