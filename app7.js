//58-67

main=document.getElementById("main-content").children
for(i=0;i<main.length;i++){
      document.write(main[i].innerHTML+"<br>")
}

document.write("<br>")

document.write("<br>")

document.write("<br>")

ren=document.getElementsByClassName("render")

for(i=0;i<ren.length;i++){
document.write(ren[i].innerHTML+"<br>")
}



document.getElementById("first-name").value="Sehrish"
document.getElementById("last-name").value="Ayaz"
document.getElementById("email").value="sehrishayaz25@gmail.com"




document.write(document.getElementById("form-content").nodeType + "<br>")
document.write(document.getElementById("lastName").nodeType, document.getElementById("lastName").childNodes)


var lname=document.getElementById("lastName")

lname.appendChild(document.createTextNode("Sehrish"))


var main = document.getElementById("main-content").children
var len=document.getElementById("main-content").children.length-1
document.write("<br>"+main[0].innerHTML+"<br>")
document.write("<br>"+main[len].innerHTML+"<br>")

var p=document.getElementById("lastName").nextElementSibling.innerHTML
var n=document.getElementById("lastName").previousElementSibling.innerHTML
document.write("<br>"+p+"<br>")
document.write("<br>"+n+"<br>")


var email =document.getElementById("email").parentNode

document.write("<br>"+email+"<br>"+email.nodeType)