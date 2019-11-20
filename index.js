$(function() {
    $('#js-shopping-list-form').submit(function(event) {

        event.preventDefault();

        const userText = $(event.currentTarget).find('#shopping-list-entry').val();
        // userText.val("");

        $('.shopping-list').append(`
        <li>
            <span class="shopping-item">${userText}</span>
            <div class="shopping-item-controls">
                <button class="shopping-item-toggle">
                    <span class="button-label">check</span>
                </button>
                <button class="shopping-item-delete">
                    <span class="button-label">delete</span>
                </button>
            </div>
        </li>`);
    });

    $('span').click(function(event) {
        $(this).toggleClass('.shopping-item__checked');
    });

    $('.shopping-item-toggle').on('click', 'li', function(event) {
        $(this).remove();
    });


});