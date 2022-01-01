import { Router } from "express";
import UserRoutes from './user';
const Routes = new Router();
Routes.use('/user', UserRoutes)
Routes.all("*", (req, res) => {
   return res.status(404).json({})
})

export default Routes;