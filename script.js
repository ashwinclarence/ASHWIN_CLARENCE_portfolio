function showMoreProject(){
    document.getElementById("project-second-row").style.visibility="visible";
    // document.getElementById("project-second-row").style.visibility = "hidden";
    document.getElementById("show-more-project-btn").style.display="none";
    
}

// Add an event listener to the window object that listens for the scroll event.
window.addEventListener("scroll", function() {

    // Get the current vertical scroll position of the user.
    var scroll = window.scrollY;
  
    // Add or remove the HTML class based on the scroll position.
    if (scroll >= 250) {
      document.querySelector(".navbar-container").classList.add("scroll-nav");
    } else {
      document.querySelector(".navbar-container").classList.remove("scroll-nav");
    }
  });