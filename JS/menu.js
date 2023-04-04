// function openNav() {
//   document.querySelector(".sidenav").style.width = "350px";
//   console.log(openNav)
// }

//   function openNav() {
//     const element = document.getElementById("mySidenav").style.width = "350px";
//     const etat = element.style.display;
 
//     if ( etat == none )
//     element.style.display = 'block';
//     else
//     element.style.display = 'none';
//    }
   
//     function closeNav() {
//      document.getElementById("mySidenav").style.width = "0";
//    }


// Avec Jquery:
function show() {
    const menu = $(".sidenav");

    menu.css({"display" : "block", 
         "Transition": '1',});

}

function closeNav() {
    $(".sidenav").css('display', 'none',)
}