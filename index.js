const express = require("express");
const {Parser} = require("json2csv");
const fs = require("fs");
const app = express();
const json2csvParser = new Parser();
app.listen(3000,()=>{
    console.log("app is listening at port 3000");
});
var information = [
    {
    "Country": "Nigeria",
    "Population": "200m",
    "Continent": "Africa",
    "Official Language": "English"
    },
    {
    "Country": "India",
    "Population": "1b",
    "Continent": "Asia",
    "Official Language": "Hindi, English"
    },
    {
    "Country":"United States of America",
    "Population": "328m",
    "Continent": "North America",
    "Official Language": "English"
    },
    {
    "Country": "United Kingdom",
    "Population": "66m",
    "Continent": "Europe",
    "Official Language": "English"
    }
];


const parsedData = json2csvParser.parse(information);
console.log(parsedData);
fs.writeFile("data.xlsx",parsedData,(err)=>{
if(err){
    throw err;
}
console.log("file saved")
})

app.get('/get-csv',(req,res)=>{
    res.attachment("data.xlsx");
    res.status(200).send(parsedData);

});
app.get('/',(req,res)=>{
    res.status(200).send("response from the server....");

});
app.get('/home',(req,res)=>{
    res.status(200).send("home....");

});
app.get('/about',(req,res)=>{
    res.status(200).send("about....");

});
