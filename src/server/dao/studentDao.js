const sequelize = require('../util/dbUtil.js')
const Sequelize = require('Sequelize');

const StudentEntity = sequelize.define('students', {
    id: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    className: Sequelize.STRING,
    student_name: Sequelize.STRING
});

const studentDao = {
    selectStudentList: function (req, res) {
        res.json(StudentEntity.findAll().then(data => {
            return data;
        }));
    }
};
module.exports = studentDao;