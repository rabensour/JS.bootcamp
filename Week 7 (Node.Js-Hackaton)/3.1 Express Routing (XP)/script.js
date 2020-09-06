
fetch('http://localhost:3000')
.then((response) => {
    //console.log(response);
    response.json().then((data) => {
        console.log('Object:', data);
    });
});


/************************************************************************** */

//Other Method

// fetch('http://localhost:3000', {
//     method: 'GET',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     }
//   })
//   .then(response => response.json())
//   .then(data => console.log('Object:', data, 'String:'))
//   //.then(string => console.log('String:', JSON.stringify(string)));




/********************************************************************* */

//Other Method

// let request = new Request('http://localhost:3000', {
//     headers: new Headers({
//         'Content-Type': 'text/json' 
//     }),
//     method: 'GET'
// });

// fetch(request).then((response) => {
//     console.log(response);
//     response.json().then((data) => {
//         console.log(data);
//     });
// });



/******************************************************** */


