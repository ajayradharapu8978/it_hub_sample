var mongoose = require("mongoose");
var mongoosePaginate = require("mongoose-paginate");
var bcrypt = require("bcryptjs");

const companySchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: true
    },
    Category: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

companySchema.pre("save", async function () {
  if (this.isModified("password") || this.isNew) {
    var salt = await bcrypt.genSalt();
    var hash = await bcrypt.hash(this.password, salt);
    this.password = hash;
  }
});

export const comparePassword = (req, res, next) => {
  companyModel
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

companySchema.plugin(mongoosePaginate);

const companyModel = mongoose.model("companies", companySchema);

export default companyModel;
