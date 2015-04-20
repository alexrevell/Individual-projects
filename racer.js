$(document).ready( function() {

    // function hide(event) {
    //     $(this).fadeOut('slow').delay(3000);
    // };


    // var active = $('td').attr('active');
    // nextCell.attr(active);

    // $( 'td.active' ). currentCell.attr
    // $('nextCell')( 'td.active' )

    $(document).on('keyup', function(e) {
        console.log(e)
        if (e.which === 65) {

        var currentCell = $('#player1_strip td.active');
        var nextCell = currentCell.next();
        nextCell.addClass("active");
        currentCell.removeClass("active");

        }   else if (e.which === 76) {

            var currentCell = $('#player2_strip td.active');
            var nextCell = currentCell.next();
            nextCell.addClass("active");
            currentCell.removeClass("active");
            }

    });

});
