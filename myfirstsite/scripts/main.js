var myimage = document.querySelector('img');
myimage.onclick = function () {
    var mysrc = myimage.getAttribute('src');
    if (mysrc === 'images/shaurya.JPG') {
        myimage.setAttribute('src', 'images/shaurya1.JPG');
    }
    else {
            myimage.setAttribute('src', 'images/shaurya.JPG');
         }
    }
var mybutton = document.querySelector('button');
var myheading = document.querySelector('h1');

function myusername() {
    var myname = prompt('Please enter you name');
    localStorage.setItem('name', myname);
    myheading.textContent = 'Welcome to my birthday page, ' + myname;  
}
if (!localStorage.getItem('name')) {
    myusername ();
}
else {
    var storedname = localStorage.getItem('name');
    myheading.textContent = 'Welcome to my birthday page, ' + storedname;
}
mybutton.onclick = function () {
    myusername();
}
