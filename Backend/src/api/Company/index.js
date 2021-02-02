import { Router } from 'express'
import { comparePassword } from '../Common/companyModel';
import {
  showCompanyNamesData,
    addEmployeedata,
    showEmployeesData,
    signin,
    CompanyProfile,
    addProject,
    updateProfile,
    EditEmployees,
    updateEmployees,
    DeleteEmployee,
    showProjectsListData,
    projectDetails
} from './controller'

const router = new Router();

import multer from "multer";


const MIME_TYPE_MAP = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg'
}
const storage = multer.diskStorage({
  destination: (req, file, cb) =>{
    cb(null, "/src/images");
  },
  filename: (req, file, cb) =>{
    const name = file.originalname.toLowerCase().split('').join('-');
    const ext = MIME_TYPE_MAP[file.mimetype]
    console.log(name+"-"+Date.now()+"."+ext)
    cd(null, name+"-"+Date.now()+"."+ext);
  }
})


router.post("/signin", comparePassword, signin);

router.post("/addProject", addProject);

router.get('/showProjectsListData/:id', showProjectsListData);

router.get('/projectDetails/:projectUrl', projectDetails);

router.get('/companyProfile/:id', CompanyProfile);

router.put('/updateProfile/:id', updateProfile);

router.get('/showcompanyNamesData', showCompanyNamesData);

router.post('/addemployeedata', multer({storage: storage}).single("file"), addEmployeedata);

router.get('/showemployeesdata/:id', showEmployeesData);

router.get('/editEmployee/:id', EditEmployees);

router.put('/updateEmployees/:id', updateEmployees);

router.delete('/deleteEmployee/:id', DeleteEmployee);

export default router