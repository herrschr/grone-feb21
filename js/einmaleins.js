document.addEventListener("DOMContentLoaded", function(){
  add_rows()
});

function add_row(y) {
  var row_str = ""
  for (x = 1; x < 10; x++) {
    new_num = x *y;
    row_str += new_num.toString() + "  "
  }
  row_str += "\n"
  var elem = document.createElement("span")
  elem.innerHTML = row_str;
  num_container = document.getElementById("num_container");
  num_container.appendChild(elem)
}

function add_rows() {
  for (y = 1; y < 10; y++) {
    add_row(y)
  }
}
