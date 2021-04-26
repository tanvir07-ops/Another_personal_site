// // // var myVariable = "Welcome To my Home page";
// // // document.write(myVariable);
// // // alert('Tanvir Rifat')

// // // var a = 20;
// // // if (a == 10) {
// // //     document.write('<br>A is ' + a)
// // // } else {
// // //     document.write('<br>A is not 10')
// // // }

// // // function Rifat() {
// // //     document.write("<br>Tanvir Rifat")

// // // }
// // // Rifat()

// // alert("Tanvir Rifat")

// // var person = {
// //     firstName: "Tanvir",
// //     lastName: "Rifat",
// //     age: 34,
// //     height: 'erwa'
// // }
// // document.write("<br>" + person.firstName)
// // document.write("<br>" + person.lastName)
// // document.write("<br>" + person.age)


// // using jQuery
// // $(function() {
// //     eikhane amra all jquery likhe thaki!
// //     but eikhane shudu document gulo show kore!
// //     image gula show kore na!

// //     Tai amra nicher window.on use korbo


// // })

// $(window).on("load", function() {

//     alert("Window mood used bucause its generate all graphics")
//     $('h1').slideUp(1000).slideDown(1000)
//     $('#main').css({


//         color: 'red',
//         fontSize: 25


//     })
//     $('h1').click(function() {

//         $('.content').css({


//             color: 'blue',
//             fontSize: 30


//         })


//     })


// })

$(window).on('load', function() {
    // fadeout use kora hoy hide korar jonne

    $('#status').fadeOut()
    $('#preloader').delay(650).fadeOut('slow')


})