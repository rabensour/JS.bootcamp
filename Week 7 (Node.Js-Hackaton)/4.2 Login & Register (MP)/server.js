const http = require('http');
const exp = require('express');
const bp = require('body-parser');
const fs = require('fs');
const cors = require('cors');

const app = exp();

//middleware = between the req and the resp
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());

app.use(cors());


app.post("/", (req, res) => {

  console.log(req.body);
  // let users = [];

  let response_data = {
    message: "",
    users: [] //users goes here now
  }

  try {
    const f = fs.readFileSync('./userlist');
    response_data.users = JSON.parse(f);
  } catch (e) {
    // console.log('no file');
  } finally {
    try {

      console.log(response_data.users);

      if(isUserExist(response_data.users, req.body.username)){

        throw new Error('Username already exists')
      }

      response_data.users.push(req.body);

      fs.writeFile('./userlist', JSON.stringify(response_data.users), err => {
        if(err){
          console.log(err);
        }
      });
    } catch (e) {
      response_data.message = e.message;
    }
  }
  // encrypting the password (NOT REALLY)
  response_data.users = response_data.users.map(user => {
    user.password = "*".repeat(user.password.length);
    return user;
  })

  res.send(response_data); //sending back data
})

// CHECKING IF THE USER ALREADY EXIST
const isUserExist = (arr, uname) => {
  const filterArray = arr.filter(user => {
    return user.username === uname;
  });
  return (filterArray.length > 0);
}

// CHECKING IF THE USER PASS ALREADY EXIST
    // const isPassExist = (arr, pass) => {

    //   const filterArray = arr.filter(user => {

    //     console.log('PASSWORD', user.password)

    //     return user.password === pass;
    //   });
    //   return (filterArray.length > 0);
    // }




app.listen(3000);
