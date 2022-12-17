const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors')
const app = express();


app.use(express.json()) // using json function to support json in app
app.use(cors()); // to handle cors policy


// mongodb url
const DB = 'mongodb+srv://ashish:12345@cluster0.q0m6zmp.mongodb.net/?retryWrites=true&w=majority';
mongoose.set("strictQuery", false);


// Making connection to mongodb
mongoose.connect(DB, { useNewUrlParser: true }).then(() => {
    console.log("Connection Successfull");
}).catch((err) => {
    console.log(err);
})


// reuire formschema from model folder
const User = require('./model/formSchema');


//  home route for backend (optional)
app.get("/", (req, res) => {
    // res.send("<h1>Hello World</h1>");
});


// post route for form getting all data from frontend

app.post("/form", async (req, res) => {

   
    const { name, phone, pincode, address, landmark, flat_number, floor_number, building_name, city, state } = req.body; //getting all data from frontend

    try {

        const user = new User({ name, phone, pincode, address, landmark, flat_number, floor_number, building_name, city, state }); // creating new object of user using above data
        await user.save();
        res.status(201).json({ message: "user added successfully" });

    } catch {

        (err) => {
            console.log(err);
        }

    }

})


// listening to localhost port 8000
app.listen('8000', () => {
    console.log('Server running at port 8000');
})