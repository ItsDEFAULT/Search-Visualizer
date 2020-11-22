function matched(id) {
  let temp = document.getElementById(id);
  temp.className = "bg-success single_search_box";
}

function match(id) {
  let temp = document.getElementById(id);
  temp.className = "bg-danger single_search_box";
}

function range(id1, id2) {
  let id_1 = document.getElementById(id1);
  let id_2 = document.getElementById(id2);
  reset(
    document.getElementById("start").value,
    document.getElementById("end").value
  );
  temp = id_1;
  while (temp != id_2.nextElementSibling) {
    temp.className = "bg-primary single_search_box";
    temp = temp.nextElementSibling;
  }
}

function reset(start, end) {
  let i = end - start + 1;
  let mainDiv = document.getElementById("searchMain");
  let box = mainDiv.firstElementChild;
  for (let z = 1; z <= i; ++z) {
    box.className = "bg-warning single_search_box";
    box = box.nextElementSibling;
  }
}

function LinearSearch() {
  let start = parseInt(document.getElementById("start").value);
  let end = parseInt(document.getElementById("end").value);
  reset(start, end);
  let search_ele = parseInt(document.getElementById("searchElement").value);
  let mainDiv = document.getElementById("searchMain");
  let box = mainDiv.firstElementChild;
  let value = box.firstElementChild.innerHTML;

  let i = end - start + 1;
  let found = false;

  function ls(value) {
    setTimeout(() => {
      match(value);
      if (search_ele == value) {
        matched(value);
        found = true;
        console.log("here");
        return false;
      }
      try {
        box = box.nextElementSibling;
        value = box.firstElementChild.innerHTML;
        ls(value);
      } catch (err) {
        alert("Search Element not Found!");
      }
    }, 100);
  }

  ls(value);
}

function BinarySearch(
  start = parseInt(document.getElementById("start").value),
  end = parseInt(document.getElementById("end").value)
) {
  reset(start, end);
  let search_ele = parseInt(document.getElementById("searchElement").value);

  const ANIMATION_DELAY = 1000;

  function bs(start, end) {
    setTimeout(() => {
      if (start > end) {
        alert("Search Element not found!");
        return;
      }

      range(start, end);

      mid = parseInt((start + end) / 2);
      setTimeout(() => {
        match(mid);
        if (search_ele == mid) {
          matched(mid);
          found = true;
          return;
        } else if (search_ele < mid) bs(start, mid - 1);
        else bs(mid + 1, end);
      }, ANIMATION_DELAY);
    }, ANIMATION_DELAY);
  }

  bs(start, end);
}

function ExponentialSearch() {
  let start = parseInt(document.getElementById("start").value);
  let end = parseInt(document.getElementById("end").value);
  reset(start, end);
  let search_ele = parseInt(document.getElementById("searchElement").value);
  let mainDiv = document.getElementById("searchMain");
  let box = mainDiv.firstElementChild;
  let value = box.firstElementChild.innerHTML;

  let boxes = mainDiv.querySelectorAll(".single_search_box");

  if (boxes[0].firstElementChild.innerHTML == search_ele) {
    matched(search_ele);
    return;
  }

  let i = 1,
    n = boxes.length;
  while (i < n && parseInt(boxes[i].firstElementChild.innerHTML) <= search_ele)
    i *= 2;

  if (i >= n) i = n - 1;

  var temp = [];
  for (j = parseInt(i / 2); j <= i; ++j) temp.push(boxes[j]);

  BinarySearch(
    parseInt(temp[0].firstElementChild.innerHTML),
    parseInt(temp[temp.length - 1].firstElementChild.innerHTML)
  ); // passed 1st and last elements from the range found
}
