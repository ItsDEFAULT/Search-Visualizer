function createBox(i) {
  let box = document.createElement("div");
  box.id = i;
  box.style.width = "50px";
  box.style.height = "50px";
  box.style.backgroundColor = "#FF6F61";
  box.className = "bg-warning single_search_box";
  box.value = "";
  box.style.border = "2px solid blue";
  box.after("&emsp;");
  box.style.display = "inline-block";
  box.appendChild(getNum(i));
  return box;
}

function getNum(number) {
  let temp = document.createElement("h5");
  temp.className = "single_search_box_text";
  temp.innerHTML = number;
  return temp;
}

//this is the main function that adds all the numbers into the box
function addElements() {
  let start = parseInt(document.getElementById("start").value);
  let end = parseInt(document.getElementById("end").value);

  if (end < start)
    alert("Ending number should be larger than the starting number!");

  for (
    let i = start, temp_timer = 1;
    i <= end, temp_timer <= end - start + 1;
    ++i, temp_timer++
  ) {
    setTimeout(function () {
      mainBox.appendChild(createBox(i));
    }, (1000 / 30) *
      temp_timer); /* I created a temp_timer to start the number from 1,
     we need to multiply the duration by this timer, since js dosent actually wait here because of the setTimout(), instead
     it keeps executing the code further and once the timer is hit, it executes the code in setTimeout, if we didnt use the 
     temp_timer variable, we would get all the elements at once after the timer (since it didnt wait), so we delay it by the number of times ,
     the loop goes on:
     eg: 1st loop 1 *1 = 1s, 2nd loop 1 * 2 =2s and so on 
     Why 1000 / 30?:
     1000ms = 1sec, ive divided it by 30 to get 30 frames(boxes) per second
     */
  }
}

function refresh() {
  location.reload();
}

let body = document.querySelector("body");

let mainBox = body.querySelector("#searchMain");
