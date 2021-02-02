var mongoose         = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var bcrypt = require('bcryptjs');

const employeeSchema = new mongoose.Schema({       
    EmployeeID:{
        type: String,
        required: true
    }, 
    Name:{
        type: String,
        required: true
    },
    company: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:"companies",
        required: true
    },
    jobStatus: {
        type: String,
        required: true
    },
    DOB: {
        type: String,
        required: true
    },
    Phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    imagePath:{
        type: String,
        required: true
    }

},
    {
        timestamps: true
    })

    employeeSchema.pre("save", async function () {
      if (this.isModified("password") || this.isNew) {
        var salt = await bcrypt.genSalt(10);
        var hash = await bcrypt.hash(this.password, salt);
        this.password = hash;
      }
    });
    
export const comparePassword = (req, res, next) => {
    employeeModel
      .findOne({ email: req.body.email })
      .exec()
      .then((data) => {
        if (data != null) {
          bcrypt.compare(req.body.password, data.password, (err, isMatch) => {
              if (!isMatch) {
                res.send(`invalid password`);
              } else {
                next();
              }
            });
        } else {
          res.send("invalid user");
        }
      });
  };

    employeeSchema.plugin(mongoosePaginate);

const employeeModel = mongoose.model('employees', employeeSchema)

export default employeeModel;
