var mongoose         = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

const employeeloginStatusSchema = new mongoose.Schema({
    EmployeeID: {
        type: String
    },
    Name: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:"employees"
    },
    date:{
        type: String
    },
    login:{
        type: String
    },
    logout: {
        type: String
    }
},
    {
        timestamps: true
    })

    employeeloginStatusSchema.plugin(mongoosePaginate);
const employeeloginStatusModel = mongoose.model('employeeloginStatus', employeeloginStatusSchema)

export default employeeloginStatusModel;
