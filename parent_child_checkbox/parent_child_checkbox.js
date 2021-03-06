function initialize() {
    "use strict";
    /*jslint browser: true*/
    document.getElementById("colors").checked = false;
    document.getElementById("drinks").checked = false;
    document.getElementById("movies").checked = false;
    document.getElementById("bikes").checked = false;
}

function showHide(parent_checkbox) {
    "use strict";
    /*jslint browser: true*/
    var i, child_checkboxes, child_checkbox_container;
    child_checkboxes = document.getElementsByClassName(parent_checkbox.id);
    child_checkbox_container = document.getElementById(parent_checkbox.id + "div");
    for (i = 0; i < child_checkboxes.length; i += 1) {
        child_checkboxes[i].checked = parent_checkbox.checked;
    }
    if (parent_checkbox.checked) {
        child_checkbox_container.style.display = "inline";
        child_checkbox_container.scrollIntoView();
    } else {
        child_checkbox_container.style.display = "none";
    }
}

