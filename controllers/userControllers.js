const {readFileSync, writeFileSync} = require('fs')
const path = require('path')

/**
 * @Desc Get All Users
 * @Name Get api/v1/user
 * @access Public
 */
const userControllers = (req, res) =>{

     // Get All Users
     const allUsers = JSON.parse(readFileSync(path.join(__dirname, '../db/users.json')))
     res.status(200).json(allUsers)
}


/**
 * @Desc Create New Users
 * @Name POST api/v1/user
 * @Public
 */
const createUsers = (req, res)=>{

    // Get All Users
    let users = JSON.parse(readFileSync(path.join(__dirname, '../db/users.json')))
    const {name, skill} = req.body

    // Validation
    if(!name || !skill){

        res.status(400).json({
            meassage: 'All Fildes are Require'
        })

    }else{

        users.push({
            id: Math.floor(Math.random()*10000000000).toString(),
            name: name,
            skill: skill
        })
        writeFileSync(path.join(__dirname, '../db/users.json'), JSON.stringify(users))
        res.status(201).json({
            meassage: 'file Created Success'
        })

    }
}

// Export Controllers
module.exports = {
    userControllers,
    createUsers
}