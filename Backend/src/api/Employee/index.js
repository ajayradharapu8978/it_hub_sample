import { Router } from 'express'
import { comparePassword } from '../Common/employeeModel';
import {
    showLoginStatusData, 
    signin,
    EmployeeProfile,
    addLoginStatusdata,
    updateEmployeeLoginStatus,
    updateEmployeeProfile
} from './controller'

const router = new Router();

router.post("/signin", comparePassword, signin);

router.post("/addLoginStatusdata", addLoginStatusdata);

router.get('/employeeProfile/:id', EmployeeProfile);

router.get('/showLoginStatusData/:id', showLoginStatusData);

router.put('/updateEmployeeLoginStatus/:id', updateEmployeeLoginStatus);

router.put('/updateEmployeeProfile/:id', updateEmployeeProfile);

export default router