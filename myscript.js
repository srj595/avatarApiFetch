
$(document).ready(function () {

    $('.btn').click(function () {
        const name = $('#nameid').val();
        alert(name);
        $('#imageid').attr('src', `https://joeschmoe.io/api/v1/ ${name}`);

    });

});