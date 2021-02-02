import Company from "../Common/companyModel";
import Employee from "../Common/employeeModel";
import adminModel from "./adminModel";
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

export const signin = (req, res, next) => {
  adminModel.findOne({ userName: req.body.userName }, (err, result) => {
    if (err) res.send(err);
    else {
      const resp = bcrypt.compareSync(req.body.password, result.password);
      const token = jwt.sign({ _id: result._id }, "secret_Key", {
        expiresIn: "1h",
      });
      const adminData = jwt.verify(token, "secret_Key");
      res.send({ success: resp, token, id: adminData._id });
    }
  });
}

export const addComapnydata = (req, res) => {
  Company.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
}

export const showCompaniesData = (req, res, next) => {
  const options = {
    select: "_id company Category email",
  };
  Company.paginate({}, options)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

export const showEmployeesData = (req, res, next) => {
  Employee.paginate()
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

export const EditCompany = (req, res) => {
  Company.findById({ _id: req.params.id }, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};

export const updateCompany = (req, res) => {
  Company.findByIdAndUpdate(
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

export const DeleteCompany = (req, res) => {
  Company.findByIdAndRemove({ _id: req.params.id }, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};
