$(document).ready(function() {

    // minor improvement: prevent double click to highlight text
    $('td').mousedown(function(event) {
        if (event.detail > 1) {
            event.preventDefault();
        };
    });

    // Add class "selectable" to all <td> cells (excluding "Not Available")
    $('td:not(.unselectable)').each(function () {
        $cellVal = $(this).text().trim();
        if ($cellVal === 'Not Available') {
            $(this).addClass('unselectable');
        } else {
            $(this).addClass('selectable');
        };
    });

    // Click event: if the cell is already selected, remove it. Otherwise, add it.
    $('td.selectable').click(function () {
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        } else {
            $(this).addClass('selected');
        }
    });

})
