import "./filter.css";
const Filters = () => {
  filterSelection("all");
  function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
      w3RemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
  }

  // Show filtered elements
  function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
      }
    }
  }

  // Hide elements that are not selected
  function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
  }

  // Add active class to the current control button (highlight it)
  var btnContainer = document.getElementById("myBtnContainer");
  var btns = btnContainer.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
  return (
    <>
      <div id="myBtnContainer">
        <button class="btn active" onclick="filterSelection('all')">
          Show all
        </button>
        <button class="btn" onclick="filterSelection('cars')">
          Cars
        </button>
        <button class="btn" onclick="filterSelection('animals')">
          Animals
        </button>
        <button class="btn" onclick="filterSelection('fruits')">
          Fruits
        </button>
        <button class="btn" onclick="filterSelection('colors')">
          Colors
        </button>
      </div>

      <div class="container">
        <div class="filterDiv cars">BMW</div>
        <div class="filterDiv colors fruits">Orange</div>
        <div class="filterDiv cars">Volvo</div>
        <div class="filterDiv colors">Red</div>
        <div class="filterDiv cars">Ford</div>
        <div class="filterDiv colors">Blue</div>
        <div class="filterDiv animals">Cat</div>
        <div class="filterDiv animals">Dog</div>
        <div class="filterDiv fruits">Melon</div>
        <div class="filterDiv fruits animals">Kiwi</div>
        <div class="filterDiv fruits">Banana</div>
        <div class="filterDiv fruits">Lemon</div>
        <div class="filterDiv animals">Cow</div>
      </div>
    </>
  );
};

export default Filters;
