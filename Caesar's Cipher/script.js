$(document).ready(function(){
    $("#encrypt").click(function(e){
        e.preventDefault()
        function rot13(form) { // LBH QVQ VG!
            var newstr = ""; // establishes a new variable in scope
            for (var i = 0; i < form.length; i++){ //iterates through characters in str
                var charCode = form.charCodeAt(i); // sets new var charCode to each character in str
                if (charCode > 64 && charCode < 78) { // if the character is in first 13 of alpha
                    newstr += String.fromCharCode(charCode+13); // set newstr equal to the character + 13
                }
                else if (charCode > 77 && charCode < 91){ // if the character is in last 13 of alpha
                    newstr += String.fromCharCode(charCode-13);
                }
                else {
                    newstr += form[i];
                }
            }
            return newstr;
        }
        var text = $("#text").val();
        var upCase = text.toUpperCase();
        var encrypted = rot13(upCase);
        $("#output").html(encrypted);
    })
})
