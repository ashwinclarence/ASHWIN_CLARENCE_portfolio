

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




  // contact form
  function checkNumber(){
    const phoneNumber=document.getElementById("user-number");
   const contactSubmit=document.getElementById("form-submit-btn");
   console.log(phoneNumber.value);
   console.log(phoneNumber.value.length);
    if(isNaN(phoneNumber.value)||phoneNumber.value.length<10 ||phoneNumber.value.length>10){
      phoneNumber.style.color="red";
      // document.getElementById("form-error").innerHTML="Enter a valid Number";
      contactSubmit.disabled=true;
    }else{
      phoneNumber.style.color="#000000";
      contactSubmit.disabled=false;
      // document.getElementById("form-error").innerHTML="";
    }

  }
 

  function SndMail(){
    alert("Message send")
  }



  // toggle side bar for mobile and tab
  function showSideBar(){
    const sidebar=document.querySelector(".side-bar");
    sidebar.style.display="flex";
    document.getElementById("show-menu").style.display="none";
    document.getElementById("hide-menu").style.display="block";
  }
  function hideSideBar(){
    const sidebar=document.querySelector(".side-bar");
    sidebar.style.display="none";
    document.getElementById("show-menu").style.display="block";
    document.getElementById("hide-menu").style.display="none";
  }