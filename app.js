/**
 * This is your server file
 */

// Add all your require statements here



// Your port of choice here
const PORT = process.env.PORT || 3000;

// Create your app (server) here


// Add middleware here


// Add express routes here
app.get('/', (req, res) => {
    res.status(200).json('hello world!')
})



// Add server listen call here
