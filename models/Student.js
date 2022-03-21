const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    school: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true
    },
    division: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    }
},{
    timestamps: true
});

const Student = mongoose.model('Student', StudentSchema);
module.exports = Student;