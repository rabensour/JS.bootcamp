const robots = [
          {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz',
            image: "https://robohash.org/1?200x200"
          },
          {
            id: 2,
            name: 'Ervin Howell',
            username: 'Antonette',
            email: 'Shanna@melissa.tv',
            image: 'https://robohash.org/2?200x200'
          },
          {
            id: 3,
            name: 'Clementine Bauch',
            username: 'Samantha',
            email: 'Nathan@yesenia.net',
            image: 'https://robohash.org/3?200x200'
          },
          {
            id: 4,
            name: 'Patricia Lebsack',
            username: 'Karianne',
            email: 'Julianne.OConner@kory.org',
            image: 'https://robohash.org/4?200x200'
          },
          {
            id: 5,
            name: 'Chelsey Dietrich',
            username: 'Kamren',
            email: 'Lucio_Hettinger@annie.ca',
            image: 'https://robohash.org/5?200x200'
          },
          {
            id: 6,
            name: 'Mrs. Dennis Schulist',
            username: 'Leopoldo_Corkery',
            email: 'Karley_Dach@jasper.info',
            image: 'https://robohash.org/6?200x200'
          },
          {
            id: 7,
            name: 'Kurtis Weissnat',
            username: 'Elwyn.Skiles',
            email: 'Telly.Hoeger@billy.biz',
            image: 'https://robohash.org/7?200x200'
          },
          {
            id: 8,
            name: 'Nicholas Runolfsdottir V',
            username: 'Maxime_Nienow',
            email: 'Sherwood@rosamond.me',
            image: 'https://robohash.org/8?200x200'
          },
          {
            id: 9,
            name: 'Glenna Reichert',
            username: 'Delphine',
            email: 'Chaim_McDermott@dana.io',
            image:'https://robohash.org/9?200x200'
          },
          {
            id: 10,
            name: 'Clementina DuBuque',
            username: 'Moriah.Stanton',
            email: 'Rey.Padberg@karina.biz',
            image:'https://robohash.org/10?200x200'
          }
          ];


var products = "",
	ids = "",
    names = "",
	usernames = "";

for (var i = 0; i < robots.length; i++) {
	var id = robots[i].id,
		name = robots[i].name,
		username = robots[i].username,
		email = robots[i].email,
		image = robots[i].image;
	
	//create product cards
	products += "<div class='col-sm-4 product' robots-id='" + id + "' robots-name='" + name + "' robots-username='" + username + "' robots-email='" + email + "'><div class='product-inner text-center'><img src='" + image + "'><br /> Name: " + name + "<br /> Email : " + email + "<br /></div></div>";
	
	//create dropdown of makes
	if (ids.indexOf("<option value='" + id + "'>" + id + "</option>") == -1) {
		ids += "<option value='" + id + "'>" + id + "</option>";
	}
	
	//create dropdown of models
	if (names.indexOf("<option value='" + name +"'>" + name + "</option>") == -1) {
		names += "<option value='" + name + "'>" + name + "</option>";
	}
	
	//create dropdown of types
	if (usernames.indexOf("<option value='" + username + "'>" + username + "</option>") == -1) {
		usernames += "<option value='" + username + "'>" + username + "</option>";
	}
}

$("#products").html(products);
$(".filter-id").append(ids);
$(".filter-name").append(names);
$(".filter-username").append(usernames);

var filtersObject = {};

//on filter change
$(".filter").on("change",function() {
	var filterName = $(this).robots("filter"),
		filterVal = $(this).val();
	
	if (filterVal == "") {
		delete filtersObject[filterName];
	} else {
		filtersObject[filterName] = filterVal;
	}
	
	var filters = "";
	
	for (var key in filtersObject) {
	  	if (filtersObject.hasOwnProperty(key)) {
			filters += "[robots-"+key+"='"+filtersObject[key]+"']";
	 	}
	}
	
	if (filters == "") {
		$(".product").show();
	} else {
		$(".product").hide();
		$(".product").hide().filter(filters).show();
	}
});

//on search form submit
$("#search-form").submit(function(e) {
	e.preventDefault();
	var query = $("#search-form input").val().toLowerCase();

	$(".product").hide();
	$(".product").each(function() {
		var id = $(this).robots("id").toLowerCase(),
			name = $(this).robots("name").toLowerCase(),
			username = $(this).robots("username").toLowerCase();

		if (id.indexOf(query) > -1 || name.indexOf(query) > -1 || username.indexOf(query) > -1) {
			$(this).show();
		}
	});
});
