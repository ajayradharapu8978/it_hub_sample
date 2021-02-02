import employeeModel from '../Common/employeeModel';
import LoginStatus from '../Common/employeesLoginStatusModel'
var bcrypt = require("bcryptjs");



export const signin = (req, res) => {

  let promise = employeeModel.findOne({ email: req.body.email }).exec();
  promise.then(result =>{
    const resp = bcrypt.compareSync(req.body.password, result.password);
    res.send({ success: resp, id: result._id, EmployeeID: result.EmployeeID, Name: result.Name });
  })
  promise.catch(err =>{
    return res.send(err);
  })
};


export const addLoginStatusdata = (req, res) => {
  LoginStatus.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};


export const showLoginStatusData = (req, res, next) => {
    LoginStatus.find({"Name":req.params.id},(err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(result);
        }
    })
}

export const updateEmployeeLoginStatus = (req, res) => {
  LoginStatus.findByIdAndUpdate(
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


export const EmployeeProfile = (req, res) => {
  employeeModel.findById({ _id: req.params.id }, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};

export const updateEmployeeProfile = (req, res) => {
  employeeModel.findByIdAndUpdate(
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
