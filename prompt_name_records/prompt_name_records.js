var row_index = 1;

function isEmpty(name) {
    "use strict";
    return !(name !== null && name.trim().length);
}

function isValidName(name) {
    "use strict";
    /*global alert*/
    var regex_for_name;
    regex_for_name = /^[a-z]+$/i;
    if (name.match(regex_for_name)) {
        return true;
    }
    alert("Please enter a valid name");
    return false;
}

function getFirstName() {
    "use strict";
    /*global prompt*/
    var name;
    do {
        do {
            name = prompt("enter first name");
        } while (isEmpty(name));
    } while (!isValidName(name));
    return name;
}

function getLastName() {
    "use strict";
    var name;
    do {
        name = prompt("enter last name");
        if (isEmpty(name)) {
            return " - ";
        }
    } while (!isValidName(name));
    return name;
}

function deleteRow(label) {
    "use strict";
    /*jslint browser: true*/
    /*global confirm*/
    var row = label.parentNode.parentNode;
    if (confirm("do you want to delete this row?")) {
        row.parentNode.removeChild(row);
    }
}

function editName(name, first) {//first is true for first name, false for second name
    "use strict";
    name.firstChild.nodeValue = first ? getFirstName() : getLastName();
}

function addToList(firstname, lastname) {
    "use strict";
    /*jslint browser: true*/
    var table, row, cell, label, j;
    table = document.getElementById("table");
    row = document.createElement("tr");
    for (j = 0; j < 4; j += 1) {
        cell = document.createElement("td");
        label = document.createElement("label");
        switch (j) {
        case 0:
            label.appendChild(document.createTextNode("delete"));
            label.setAttribute("onclick", "deleteRow(this)");
            break;
        case 1:
            label.appendChild(document.createTextNode(row_index));
            label.className = "ID";
            break;
        case 2:
            label.appendChild(document.createTextNode(firstname));
            label.setAttribute("onclick", "editName(this, true)");
            break;
        case 3:
            label.appendChild(document.createTextNode(lastname));
            label.setAttribute("onclick", "editName(this, false)");
            break;
        }
        cell.appendChild(label);
        row.appendChild(cell);
    }
    table.appendChild(row);
    row_index += 1;
}

function inputName() {
    "use strict";
    var firstname, lastname;
    firstname = getFirstName();
    lastname = getLastName();
    addToList(firstname, lastname);
}
