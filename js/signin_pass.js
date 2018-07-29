function validate_password() {
    var input = $("#passinput").val();
    if (input == "") {
        alert("You can't proceed without a password.");
        return false;
    }
    else if (input == "gitmobile") {
        return true;
    } else {
        alert("Wrong password.");
        return false;
    }
}