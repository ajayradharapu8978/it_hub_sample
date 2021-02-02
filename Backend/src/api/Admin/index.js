import { Router } from "express";
import passport from "passport";
import {
  signin,
  addComapnydata,
  showCompaniesData,
  showEmployeesData,
  EditEmployees,
  updateEmployees,
  DeleteEmployee,
  EditCompany,
  updateCompany,
  DeleteCompany
} from "./controller.js";
import {comparePassword} from "./adminModel.js";

const router = new Router();

router.post("/signin", comparePassword, signin);

router.post("/addcompanydata", passport.authenticate('jwt',{session: false}),addComapnydata);

router.get("/showcompaniesdata", passport.authenticate('jwt', {session: false}),showCompaniesData);

router.get('/editEmployee/:id', passport.authenticate('jwt', {session: false}),EditEmployees);

router.put('/updateEmployees/:id', passport.authenticate('jwt', {session: false}),updateEmployees);

router.delete('/deleteEmployee/:id', passport.authenticate('jwt', {session: false}),DeleteEmployee);

router.get("/showemployeesdata", passport.authenticate('jwt', {session: false}),showEmployeesData);

router.get('/editCompany/:id', passport.authenticate('jwt', {session: false}),EditCompany);

router.put('/updateCompany/:id', passport.authenticate('jwt', {session: false}),updateCompany);

router.delete('/deleteCompany/:id', passport.authenticate('jwt', {session: false}),DeleteCompany);

export default router;