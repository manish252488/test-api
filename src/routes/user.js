import { Router } from "express";
import * as UserController from '../controllers';
const UserRoutes = new Router();

UserRoutes.post('/login', UserController.login)

export default UserRoutes;