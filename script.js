//getting name using GET
let params = new URLSearchParams(location.search);
myName = params.get('myName');
document.getElementById("mytxt").textContent = myName + "|";



//animation
var i = 1;
var txt = myName;
var speed = 100;
var m = 1;
var x;


function typeWriter() {
    x = txt.slice(0, i - 1);

    document.getElementById("mytxt").textContent = x + "|";
    i++;

    if (x.length == txt.length) {
        setTimeout(myErease, 300);
    } else {
        setTimeout(typeWriter, speed);

    }

}


function myErease() {
    x = txt.slice(0, i - 1);

    document.getElementById("mytxt").textContent = x + "|";
    i--;

    if (x.length == 0) {
        i++;
        setTimeout(typeWriter, 150);
    } else {
        setTimeout(myErease, speed);

    }
}


typeWriter()








// var i = 1;
// var txt = 'Ushnik';
// var speed = 100;
// var mode = 1;
// var x = txt;


// function typeWriter() {
//     x=txt.slice(0, i-1);
//     if (mode == 1) {
//         document.getElementById("mytxt").innerHTML = x;
//         i++;
//         setTimeout(typeWriter, speed);
//     }
//     if (i == 2) {
//         document.getElementById("mytxt").innerHTML = x;
//         i = i - 1;
//         setTimeout(typeWriter, speed / 2);
//     }
//     // if (x.length == 0) {
//     //     mode=1;
//     // }
//     // if (x.length == txt.length) {
//     //     mode=2;
//     // }
// }

// typeWriter();

// // i = txt.length;
// // function myerase() {
// //     if (i > 0) {
// //         document.getElementById("mytxt").innerHTML = txt.slice(0, i - 1);
// //         i = i - 1;
// //         setTimeout(myerase, speed / 2);
// //     }
// // }

// // myerase()



