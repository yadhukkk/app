function myFunction() {
    var x = document.getElementById("mynav");
    if (x.className === "header-col2 topnav") {
      x.className += " responsive header-col2";
    } else {
      x.className = "header-col2 topnav";
    }
  }
