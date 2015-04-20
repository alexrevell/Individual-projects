$(document).ready( function() {

    // function hide(event) {
    //     $(this).fadeOut('slow').delay(3000);
    // };


    // var active = $('td').attr('active');
    // nextCell.attr(active);

    // $( 'td.active' ). currentCell.attr
    // $('nextCell')( 'td.active' )

    $(document).on('keyup', function(e) {

        function movePlayer(id) {

            var currentCell = $('#player' + id + '_strip td.active');
            var nextCell = currentCell.next();

              nextCell.addClass("active");
              currentCell.removeClass("active");

              }

        if (e.which === 65) {

          movePlayer(1)

        }   else if (e.which === 76) {

          movePlayer(2);

        }
    });

});
