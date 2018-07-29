$(document).tooltip()
$("#bdate").datepicker()

$(document).ready(function () {
    $("#passinput").keyup(function () {
        var len = $("#passinput").val().length;
        if (len < 1) $("#strength").text("");
        else if (len < 6) $("#strength").text("Weak");
        else if (len < 10) $("#strength").text("Acceptable");
        else if (len < 14) $("#strength").text("Strong");
    })
});

function check_for_null(input) {
    if (input == "") {
        return false;
    } else {
        return true;
    }
}

function validate_username() {
    var input = $("#userinput").val();
    return check_for_null(input);
}

function validate_email() {
    var input = $("#email").val();
    return check_for_null(input);
}

function validate_bdate() {
    var input = $("#bdate").val();
    return check_for_null(input);
}

function validate_pass() {
    var input = $("#passinput").val();
    return check_for_null(input);
}

function validate_form() {
    if (validate_username() == true && validate_email() == true && validate_bdate() == true && validate_pass() == true) {
        return true;
    } else {
        alert("Fill the complete form.");
        return false;
    }
}