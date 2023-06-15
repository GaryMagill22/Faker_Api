const { faker } = require('@faker-js/faker');
const express = require("express");
const app = express();
app.use(express.json(), express.urlencoded({ extended: true }));
// allow the app to parse json data (data info) as well as allow the app to accept form information

const port = 8000;





// Creating new Users using fake API

const createUser = () => {
    const newFakeUser = {
        id: faker.database.mongodbObjectId(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        phoneNumber: faker.phone.imei(),
        email: faker.internet.email(),
        password: faker.internet.password()

    };
    return newFakeUser;
}
const newFakeUser = createUser()
// console.log(newFakeUser)



// Creating new Company using fake API
const createCompany = () => {
    const newFakeCompany = {
        id: faker.database.mongodbObjectId(),
        name: faker.company.name(),
        address: {
            street: faker.location.street(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country()
        }
    };
    return newFakeCompany;
}

const newFakeCompany = createCompany()
// console.log(newFakeCompany)


//get= retrieve all or retrieve one
//post = create something new
//put = update something
//patch = update something
//delete = delete something


// TEST
//http://localhost:8000/api
app.get("/api/test", (req, res) => {
    res.json({ message: "Hello World" });
});


// Route to create a new user 
app.get('/api/users/new', (req, res) => {
    res.json({
        userInfo: newFakeUser
    })
})


// Route to create new company
app.get('/api/companies/new', (req, res) => {
    res.json({
        companyInfo: newFakeCompany

    })
})

// Route to returns both a new user and company.
app.get('/api/user/company', (req, res) => {
    res.json({
        companyInfo: newFakeCompany,
        userInfo: newFakeUser
    })
})

//Get all -- Read all
// app.get('/api/users', (req, res) => {
//     res.json({

//     })
// })













//line of code that actually runs our server on a specified port.
// this needs to be below the other code blocks
app.listen(port, () => console.log(`Welcome! You are on birdge port: ${port}`));



