$(document).ready(function(){

       //Ice Cream Flavors and Cones Input //

        $('#prepBtn').click(function () {

            $('#order').html('');
            var checkVar = document.forms["icecreamform"].toppingcheck;
            var checkboxes = checkVar.length;
            var coneType = document.forms["icecreamform"].cone;
            var conelength = coneType.length;
            for (var i = 0; i < conelength; i++) {
                if (coneType[i].checked) {
                    $('#order').append('<li>' + coneType[i].value + ' Cone </li>');
                }
            }
            for (var i = 0; i < checkboxes; i++) {
                if (checkVar[i].checked) {
                    $('#order').append('<li>' + ' ' + checkVar[i].value + '</li>');
                }
            }
        });

        // Card Flip //

        $(function() {
    $("button").on("click", function() {
        if ($(".card").hasClass("flipped")) {
            $(".card").removeClass("flipped");
        } else {
            $(".card").addClass("flipped")
        }
    });
});

   
    }); //end document ready
  