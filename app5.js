//chp 49-52
//1. Create a signup form and display form data in your web page on submission.
function formValidation() {
    var uid = document.registration.userid;
    var passid = document.registration.passid;
    var uname = document.registration.username;
}

{
    if (passid_validation(passid, 7, 12)) {
        if (allLetter(uname))
    }
}
return false;

function userid_validation(uid, mx, my) {
    var uid_len = uid.value.length;
    if (uid_len == 0 || uid_len >= my || uid_len < mx) {
        alert("User Id should not be empty / length be between " + mx + " to " + my);
        uid.focus();
        return false;
    }
    return true;
}

//2. Suppose in your webpage there is content area in which you have entered your item details, but user can only see
//some details on first look. When user clicks on “Read more” button, full detail of that particular item will be displayed.


function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

//3. In previous assignment you have created a tabular data using javascript. Let’s modify that. Create a form which
//takes student’s details and show each student detail in table. Each row of table must contain a delete button and
//an edit button. On click on delete button entire row should be deleted. On click on edit button, a hidden form will appear with the values of that row.

var name
var id
var clas
var table = document.getElementById('table')
document.getElementById("form").style.display = "none"
var x
for (var i = 1; i < table.rows.length; i++) {

    x = i
    table.rows[i].cells[3].onclick = function del() {
        table.deleteRow(this.parentElement.rowIndex)
    }

    table.rows[i].cells[4].onclick = function edit() {

        id = table.rows[x].cells[0].innerHTML
        name = table.rows[x].cells[1].innerHTML
        clas = table.rows[x].cells[2].innerHTML

        table.style.display = "none"
        document.getElementById("form").style.display = "block"
        document.getElementById("id").value = id
        document.getElementById("name").value = name
        document.getElementById("clas").value = clas
    }
}