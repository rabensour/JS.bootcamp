  async function myFetch () {
         	let response = await(await fetch("https://swapi.dev/api/starships/9/")).json();
         	return response;
         }