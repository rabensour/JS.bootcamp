// REGISTER ***************************************


//   let fn = document.getElementById("firstname").value;
//   let ln = document.getElementById("lastname").value;
//   let e = document.getElementById("email").value;
//   let u = document.getElementById("username").value;
//   let p = document.getElementById("password").value;
//   let btnReg = document.getElementById('btnReg')


//   function successReg() {

//     if(fn.value === "" || ln.value === "" || e.value === "" || u.value === "" || p.value === "") { 
  
//             btnReg.disabled = true; 
  
//          } else { 
  
//             btnReg.disabled = false;
//          }
//      }


     

// const register = () => {


//   const registerData = {
//     first_name: fn,
//     last_name : ln,
//     email : e,
//     username: u,
//     password: p
//   };
//   // console.log("1", registerData);
//   fetchData(registerData);
// }

// const fetchData = (data) => {
//   console.log("2", data);

//   fetch("http://localhost:3000/", {
//     method : "POST", //sending the user's data
//     headers : {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
//   })
//   .then(response => response.json()) //getting back the data from res.send(users)
//   .then(data => showUsers(data));
// }

// // SAME BUT WITH ASYNC FUNCTION

// // const fetchData = async (data) => {
// //   console.log("2", data);
// //
// //   const resp = await fetch("http://localhost:3000", {
// //     method : "POST",
// //     headers : {
// //       'Accept': 'application/json',
// //       'Content-Type': 'application/json'
// //     },
// //     body: JSON.stringify(data)
// //   });
// //   const response = await resp.json();
// //   showUsers(response);
// // }


// const showUsers = (retdata) => {


//   let root = document.getElementById("root");

//   root.innerHTML = "";

//   console.log("retdata msg", retdata.users);


//   console.log(retdata.users.slice(-1)[0].username)

//   if(retdata.message != "") {
//     let div = document.createElement("div");
//     div.innerText = retdata.message;
//     root.appendChild(div);
//   }
//   else {
//     // retdata.users.map(usr => {
//       let div = document.createElement("div");
//       div.innerText = "Hello " + retdata.users.slice(-1)[0].username + " Your account is now created!";
//       root.appendChild(div);
//     // });
//   }
// };


// LOGIN ***********************************


//console.log(userLogin);
//console.log(passLogin);
//console.log(btnLogin);

// function success() {

//   if(userLogin.value === "" || passLogin.value === "") { 

//           btnLogin.disabled = true; 

//        } else { 

//            btnLogin.disabled = false;
//        }
//    }

const login = () => {

  let userLogin = document.getElementById('username');
let passLogin = document.getElementById('password')
let btnLogin = document.getElementById('login')


  let uu = document.getElementById("username").value;
  let pp = document.getElementById("password").value;

  const loginData = {
    username: uu,
    password: pp
  };
  console.log("10", loginData);
  fetchData2(loginData);
}

const fetchData2 = (data) => {
  console.log("20", data);

  fetch("http://localhost:3000/", {
    method : "POST", //sending the user's data
    headers : {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json()) //getting back the data from res.send(users)
  .then(data => sayHi(data));
}


const sayHi = (retdata) => {

  let uu = document.getElementById("username").value;
  let pp = document.getElementById("password").value;

  let root = document.getElementById("root");
  root.innerHTML = "";

  console.log("retdata msg", retdata.message);

  console.log("retdata user", retdata.users);




     // CHECKING IF THE USER ALREADY EXIST
    //  const isUserExist = (arr, uname) => {

    //   const filterArray = arr.filter(user => {

    //     console.log('USERNAME', user.username)

    //     return user.username === uname;
    //   });
    //   return (filterArray.length > 0);
    // }

    // CHECKING IF THE USER ALREADY EXIST
    // const isPassExist = (arr, pass) => {

    //   const filterArray = arr.filter(user => {

    //     console.log('PASSWORD', user.password)

    //     return user.password === pass;
    //   });
    //   return (filterArray.length > 0);
    // }



 //Checking for Username and Password

  //if(isUserExist(retdata.users, uu.value) && isPassExist(retdata.users, pp.value )) {



    if(retdata.message !== "Username already exists") {

    let div = document.createElement("div");

    console.log('ERROR');

    //div.innerText = retdata.message;

    div.innerText = 'Username is not registered';

    root.appendChild(div);

  } 

  else {
    
      let div = document.createElement("div");
      let user = document.getElementById('username');

      console.log(user.value);

      div.innerText = "Hi " + user.value + " welcome back again!" 
      root.appendChild(div);
    
  }
};



// else {
//   retdata.users.forEach((usr) => {
//     let div = document.createElement("div");
//     div.innerText = "Hi welcome back again " + usr.username;
//     root.appendChild(div);
//   });
// }
// };