$(document).ready(function() {

    // minor improvement: prevent double click to highlight text
    $('td').mousedown(function(event) {
        if (event.detail > 1) {
            event.preventDefault();
        };
    });

    // Add class "selectable" to all <td> cells (excluding "Not Available")
    $('td:not(.unselectable)').each(function () {
        var cellVal = $(this).text().trim();
        if (cellVal === 'Not Available') {
            $(this).addClass('unselectable');
        } else {
            $(this).addClass('selectable');
        };
    });

    // Click event: if the cell is already selected, remove it. Otherwise, add it.
    $('td.selectable').click(function () {
        var activity = $(this).text().trim();

        // Get the column index of the clicked cell, in order to get the column name
        var cliffIndex = $(this).index();
        var cliffName = $('th').eq(cliffIndex).text();

        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
            $(`#result p:contains(${activity})`).remove();

            // if nothing is selected, hide the #modal-button box
            if ($("#result").has("p").length == false) {
                $("#modal-button").css({
                    "visibility": "hidden"
                });
            }

        } else {
            $(this).addClass('selected');
            $("#result").append(`<p>${activity} at ${cliffName}</p>`);
            $("#modal-button").css({
                "visibility": "visible",
            });
        }
    });

    // Handle the submit button in the modal
    $("#submit-atv").click(function() {
        var email = $('#emailField').val();

        // Just double check
        if (email.trim() === '') {
            alert('Please fill in the email field.');
        } else {
            $("#displaySelected").modal("hide");
            window.location.href = "index.html";
        }
    })

});
