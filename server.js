const express = require('express')
const app = express()
const path = require('path');
const authTime = (req,res,next)=>{
  let today = new Date();
  let day = today.getDay()
  let Hours = today.getHours()
  console.log(day)
  console.log(Hours)
  if(day>= 1 && day<= 5&& Hours>=9 &&Hours<= 16){
    next();
  } else {
    res.send("<h1>sory working hours are monday to friday , from 9 to 17 </1>")
  }
}
app.use(authTime)
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './index.html'));
  });
  app.get('/ContactUs.html', function(req, res) {
    res.sendFile(path.join(__dirname, './ContactUs.html'));
  });
  app.get('/OurServices.html', function(req, res) {
    res.sendFile(path.join(__dirname, './OurServices.html'));
  });
const port = 5000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))