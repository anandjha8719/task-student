const Student = require('../models/Student');
module.exports.home = function(req, res){
    return res.render('home')
}



module.exports.home = async function(req, res){

    try{
        // populate the likes of each post and comment
        let students = await Student.find({})
        

        return res.render('home', {
            title: "Home Page",
            all_students: students
        });

    }catch(err){
        console.log('Error', err);
        return;
    }
   
}


module.exports.signin = function(req, res){
    return res.render('sign_in');
}

module.exports.create = function(req, res){
    console.log(req.body);
    Student.create(req.body, function(err, student){
        if(err){
            console.log('error in saving data to db', err);
        }
           
        return res.redirect('/');
    })
}
module.exports.delete = function(req, res){
    let id = req.query.id;
    Student.findByIdAndDelete(id, function(err){
        return res.redirect('/');
    });
}