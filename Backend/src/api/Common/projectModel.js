var mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true
    },
    company: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:"companies",
        required: true
    },
    Technology: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

const projectModel = mongoose.model("Projects", projectSchema);

export default projectModel;
