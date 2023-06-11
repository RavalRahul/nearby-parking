const express = require("express");
const cors = require("cors");
require('./db/config');
const User = require('./db/UserMaster.js');
const Parking = require('./db/ParkingMaster.js');
const app = express();

app.use(express.json());
app.use(cors());

app.post("/register",async (req, resp)=>{
    let userData = new User(req.body);
    let result = userData.save();
    resp.send(result);
});

app.post('/login',async (req,resp) => {
    if(req.body.password ?? req.body.email){

        let _user = await User.findOne(req.body).select("-password"); 
    
        if(_user){
            resp.send(_user);                    
        }else{
            resp.send({result:false});
        }
    }
});

app.post("/addParking",async (req, resp)=>{
    let parkingData = new Parking(req.body);
    let result = parkingData.save();
    resp.send(result);
});

app.get('/getParking',async (req,resp) => {
    let _parkingData = await Parking.find(); 
    resp.send(_parkingData);                    
});

app.listen(5000);