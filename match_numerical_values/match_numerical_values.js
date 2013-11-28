function checkNumber(form) {
    "use strict";
    /*jslint browser: true*/
    var is_numeric;
    is_numeric = !isNaN(form.numberTextBox.value);
    form.result.value = is_numeric;
    alert("Please see the values");
    return is_numeric;
}
