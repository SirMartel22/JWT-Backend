const User = require("../models/user")
const bcrypt = require("bcrypt");

async function createAdminAccount() {
    try {

    // check if there is existing adming before creating another
        const existingAdmin = await User.findOne({
            email: "admin@test.com"
        });
        if (!existingAdmin) {
           const newAdmin = new User({
                email: "admin@test.com",
                name: "Admin",
                password: await bcrypt.hash("admin", 10),
                role: "admin"
           })
           await newAdmin.save();
            console.log("New Admin created successfully");
        } else {
            console.log("Admin already exist")
        }
        
    } catch (error) {
        console.error(error.message)
    }
}


module.exports = createAdminAccount