/**
 * This is your server file
 */

// Add all your require statements here
const express = require('express');
const cors = require("cors");
let sankofa = require('./sankofa.js');
// console.log(sankofa)




// Your port of choice here
const PORT = process.env.PORT || 3000;

// Create your app (server) here
const app = express();

// Add middleware here
app.use(cors());
app.use(express.json())


// Add express routes here
app.get('/', (req, res) => {
    res.status(200).json('hello world!')
})

// Create a route to get all of Sankofa
app.get("/fellows", (req, res) => {

    res.status(200).json(sankofa);
});

// Create a get route for singular member of Sankofa
app.get("/fellows/:id", (req, res) => {
    const id = req.params.id;
    const found = sankofa.find(member => member.id === parseInt(id));

    console.log(found)
    if (found) {

        res.status(200).json(found);

    } else {

        res.status(404).json("Sorry not found");

    }
});

// Create a route to post a new member of Sankofa
app.post('/fellows', (req, res) => {
    const newFellow = {
        id: req.body.id,
        name: req.body.name,
        age: req.body.age,
        occupation: req.body.occupation
    };

    if (!(newFellow.name || newFellow.age)) {
        res.status(404).json("Not a valid input!")
    } else {
        sankofa.push(newFellow)
        res.status(200).json(newFellow)
    }
})

// Create a route to update a fellow
app.patch('/fellows/:id', (req, res) => {
    const id = req.params.id;
    let found = sankofa.find(fellow => fellow.id === parseInt(id));
    const updateFellow = req.body
    console.log(found)

    if (found) {
        found.name = updateFellow.name ? updateFellow.name : found.name;
        found.age = updateFellow.age ? updateFellow.age : found.age;
        found.occupation = updateFellow.occupation ? updateFellow.occupation : found.occupation;

        res.status(200).json(found)
    } else {
        res.status(404).json("Fellow not found!")
    }
})


// Create a route to delete a fellow
app.delete('/fellows/:id', (req, res) => {
    const id = req.params.id;
    let foundId = sankofa.findIndex(fellow => fellow.id === parseInt(id));

    if (foundId >= 0) {
        let removeId = sankofa.splice(foundId, 1);
        res.status(200).json(removeId[0])
    } else {
        res.status(404).json("Fellow not found!")
    }
})



// **STRETCH** Methods

// Create a route to get all fellows over the age of 21 (>= 21) fellowsOverAge/:age

// Create a route that returns the first fellow over the age of 23(??)






// Add server listen call here
app.listen(PORT)