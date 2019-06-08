const bcrypt = require('bcrypt');

module.exports = {
    
    
    login: (req, res, next) => {
        const dbQuery = req.app.get('db')
        const {username, user_password} = req.body;

        let currentUser;
        dbQuery.users.findOne({username})
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
        const dbQuery = req.app.get('db');
        const {username, user_password} = req.body;
        
        // let newUser;
        dbQuery.users.findOne({username})
            .then((users)=>{
                if(users){
                    currentUser = users;
                     throw(`Sorry ${username} username already exists. Please login.`)
                        }else{
                            return bcrypt.hash(user_password, saltRounds);
                        }
                    })
            .then((hash) => {
                return dbQuery.users.insert({
                    username, 
                    user_password:hash
                })
              })
              .then((user)=>{
                delete user.user_password;
                req.session.user = user;
                res.send('Thank you for registering!')
                })
            
            .catch((err)=>{
                res.send(err)
            })
    
    }
}