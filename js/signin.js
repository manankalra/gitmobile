var names = ["manankalra", "harshit2195", "Priyamsehgal"];
$("#userinput").autocomplete({
    source: names
});

function match(name) {
    var names = ["manankalra", "harshit2195", "Priyamsehgal"];
    var i;
    for (i = 0; i < names.length; i++) {
        if (name == names[i]) {
            return true;
        }
    }
    alert("You're not registered.");
    return false;
}

function validate_username() {
    var input = $("#userinput").val();
    if (input == "") {
        alert("You can't proceed without a username.");
        return false;
    }
    else if (input != "") {
        return match(input);
    }
}