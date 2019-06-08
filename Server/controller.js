const bcrypt = require('bcrypt');

module.exports = { 
    login: (req, res, next) => {
        const db = req.app.get('db')
        const {username, user_password} = req.body;

        let currentUser;
        db.users.findOne({username})
            .then((users)=>{
                if(users){
                    currentUser = users;
                    return bcrypt.compare(user_password, users.user_password)  
                }else{
                    throw("User does not exist!")
                }
            })
            .then((verified)=>{
                if(verified){
                    delete currentUser.user_password
                    res.send({success: true, users:currentUser})
                }else{
                    throw('The username or password was incorrect.')
                }
            })
            .catch((err)=>{
                res.send({success:false, err})
            })
    },
    
    register: (req, res, next) => {
        const db = req.app.get('db');
    
        const {username, user_password} = req.body;
   
        db.users.findOne({username})
            .then((users)=>{
                if(users){
                   throw('Sorry this username already exists. Please login.')
                }else{ 
                    return bcrypt.hash(user_password, saltRounds);
                }
            })
            .then((hash) => {
                return db.users.insert({username, user_password:hash})
              }) 
            .then((users)=>{
                delete users.user_password;
                req.session.users = users;
                res.send('Thank you for registering!')
            })
            .catch((err)=>{
                res.send(err)
            })
    
    }
}
