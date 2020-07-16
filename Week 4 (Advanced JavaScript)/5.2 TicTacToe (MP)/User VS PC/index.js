//=====Variables
const square_obj = document.querySelectorAll("#square");
var square_arr = [...square_obj];
const sq_obj_l = square_obj.length;
//==icons

const ix = document.querySelector("#ix").innerHTML;
const oo = document.querySelector("#oo").innerHTML;
const refresh = document.querySelector("#refresh");
const icons = document.querySelectorAll(".icons");
var human_select = "";
var computer_select = "";
//==icons
//==results
const win_text = document.querySelector(".results > #win");
const lose_text = document.querySelector(".results > #lose");
//==results
//=====Variables
//==icon select 

icons.forEach((icon) => {
  icon.addEventListener("click", function () {
    if (icon.innerHTML === ix) {
      human_select = ix;
      computer_select = oo;
      console.log(human_select + " " + computer_select);
    } else {
      human_select = oo;
      computer_select = ix;
      console.log(human_select + " " + computer_select);
    }
    if (icon.innerHTML === refresh.innerHTML) {
      for (i = 0; i < square_arr.length; i++) {
        square_arr[i].innerHTML = "";
      }
    }
  });
});
//==icon select
//==refresh icon
refresh.addEventListener("click", (e) => {
  square_obj.forEach((sq) => {
    sq.innerHTML = "";
  });
  console.clear();
  square_arr = [...square_obj];
  human_select = "";
  bot_select = "";
  win_text.style.cssText = lose_text.style.cssText = "opacity:.25;color:;";
});
//==refresh icon
//==select random square
function getRandom(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
var winner_template = [
  [3, 4, 5],
  [0, 1, 2],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
function check_winner(length) {
  const square_new_array = [...square_obj];
  var obj_ix_arr = new Array();
  var obj_oo_arr = new Array();
  if (length < 5) {
    square_new_array.forEach((obj) => {
      if (obj.innerHTML === ix) {
        const obj_ix = square_new_array.indexOf(obj);
        obj_ix_arr.push(obj_ix);
      } else if (obj.innerHTML === oo) {
        const obj_oo = square_new_array.indexOf(obj);
        obj_oo_arr.push(obj_oo);
      }
    });
    function winner_check(arr, target_ix, target_oo, ch_ix, ch_oo) {
      for (i = 0; i < 8; i++) {
        ch_ix = arr[i].every((e) => target_ix.includes(e));
        ch_oo = arr[i].every((e) => target_oo.includes(e));
        if (ch_ix === true) {
          win_text.style.opacity = "1";
          win_text.style.color = "red";
        }
        if (ch_oo === true) {
          lose_text.style.opacity = "1";
          lose_text.style.color = "red";
        }
      }
    }
    const check_ix = "";
    const check_oo = "";
    winner_check(winner_template, obj_ix_arr, obj_oo_arr, check_ix, check_oo);
  }
}
//==select random square
square_arr.forEach((square) => {
  square.addEventListener("click", function () {
    if (human_select != "") {
      let square_splice = square_arr.indexOf(square);
      square.innerHTML = human_select;
      square_arr.splice(square_splice, 1);
      let sq_random = getRandom(square_arr.length);
      square_arr[sq_random].innerHTML = computer_select;
      square_arr.splice(sq_random, 1);
      check_winner(square_arr.length);
    }
  });
});
