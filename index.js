$(function() {
    $('#js-shopping-list-form').submit(function(event) {

        event.preventDefault();

        // saving value of input as userText
        const userText = $(event.currentTarget).find('#shopping-list-entry').val();

        // empties out the input box after an item is submitted
        $('#shopping-list-entry').val('');

        // adding item to the bottom of the shopping list in li format
        $('.shopping-list').append(
        `<li>
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

    // adding strikethrough class to span when check button is clicked
    $('ul').on('click', '.shopping-item-toggle', function(event) {
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });
    
    // deleting whole list item when delete button is clicked
    $('ul').on('click', '.shopping-item-delete', function(event) {
        $(this).closest('li').remove();
    });


});