// REGISTER ***************************************


     

const register = () => {

    let fn = document.getElementById("firstname").value;
    let ln = document.getElementById("lastname").value;
    let e = document.getElementById("email").value;
    let u = document.getElementById("username").value;
    let p = document.getElementById("password").value;
    let btnReg = document.getElementById('btnReg')

    //   function successReg() {

//     if(fn.value === "" || ln.value === "" || e.value === "" || u.value === "" || p.value === "") { 
  
//             btnReg.disabled = true; 
  
//          } else { 
  
//             btnReg.disabled = false;
//          }
//      }


  const registerData = {
    first_name: fn,
    last_name : ln,
    email : e,
    username: u,
    password: p
  };
  // console.log("1", registerData);
  fetchData(registerData);
}

const fetchData = (data) => {
  console.log("2", data);

  fetch("http://localhost:3000/", {
    method : "POST", //sending the user's data
    headers : {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json()) //getting back the data from res.send(users)
  .then(data => showUsers(data));
}

// SAME BUT WITH ASYNC FUNCTION

// const fetchData = async (data) => {
//   console.log("2", data);
//
//   const resp = await fetch("http://localhost:3000", {
//     method : "POST",
//     headers : {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
//   });
//   const response = await resp.json();
//   showUsers(response);
// }


const showUsers = (retdata) => {


  let root = document.getElementById("root");

  root.innerHTML = "";

  console.log("retdata msg", retdata.users);


  console.log(retdata.users.slice(-1)[0].username)

  if(retdata.message != "") {
    let div = document.createElement("div");
    div.innerText = retdata.message;
    root.appendChild(div);
  }
  else {
    // retdata.users.map(usr => {
      let div = document.createElement("div");
      div.innerText = "Hello " + retdata.users.slice(-1)[0].username + " Your account is now created!";
      root.appendChild(div);
    // });
  }
};
