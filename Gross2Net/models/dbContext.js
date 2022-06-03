const {seedUsers} = require('./seed_data/user_initial_data');
const User = require('./entities/user')
const mongoose = require('mongoose');
    
const url = "mongodb://localhost:27017/SalaryChange"

mongoose.connect(url)
.then(() => console.log('Mongoose connection open'))
.catch((err) => console.log(err));
              
const seedDB = async () => {
    await User.deleteMany({});
    await User.insertMany(seedUsers);
}

seedDB().then(() => {
    mongoose.connection.close();
})
        