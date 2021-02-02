import companyModel from "../Common/companyModel";
import Employee from "../Common/employeeModel";
import EmployeeLoginStatus from "../Common/employeesLoginStatusModel";
import projectModel from "../Common/projectModel";
var bcrypt = require("bcryptjs");

export const signin = (req, res) => {
  
  companyModel.findOne({ email: req.body.email }, (err, result) => {
    if (err) res.send(err);
    else {
      const resp = bcrypt.compareSync(req.body.password, result.password);
      res.send({ success: resp, id: result._id, company: result.company });
    }
  });
};

export const addProject = (req, res) => {
  projectModel.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};


export const showProjectsListData = (req, res) => {
  projectModel.find({company: req.params.id},(err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};

export const projectDetails = (req, res) => {
  companyModel.find({ Name: req.params.projectUrl }, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      console.log(result);
      res.send(result);
    }
  });
};

export const CompanyProfile = (req, res) => {
  companyModel.findById({ _id: req.params.id }, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};

export const updateProfile = (req, res) => {
  companyModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );
};

export const showCompanyNamesData = (req, res) => {
  companyModel.find((err, result) => {
    if (err) {
      res.send(err);
    } else {
      const resp = result.map((data) => {
        return { id: data._id, company: data.company };
      });
      res.send(resp);
    }
  });
};

export const addEmployeedata = ((req, res) => {
  const url = req.protocol + "://" + req.get("host");
  const post = new Employee({
    EmployeeID: req.body.EmployeeID,
    Name: req.body.Name,
    company: req.body.company,
    jobStatus: req.body.jobStatus,
    DOB: req.body.DOB,
    Phone: req.body.Phone,
    email: req.body.email,
    password: req.body.password,
    gender: req.body.gender,
    address: req.body.address,
    imagePath: url + "/src/images/" + req.body.file
  });
  post.save(req.body, (err, result) => {
    if (err) res.send(err);
    else res.send(result);
  });
});

export const showEmployeesData = (req, res, next) => {
  Employee.find({company: req.params.id})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

export const EditEmployees = (req, res) => {
  Employee.findById({ _id: req.params.id }, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};

export const updateEmployees = (req, res) => {
  Employee.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );
};

export const DeleteEmployee = (req, res) => {
  Employee.findByIdAndRemove({ _id: req.params.id }, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};