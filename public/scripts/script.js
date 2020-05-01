$(document).ready(() => {
    //JSON object.
    const urlspecies = "/flowerspecies";
    $.getJSON(urlspecies, (data) => {
        //For key value pairs.
        $.each(data, (key, val) => {
            $('<li>' + key + '</li>').appendTo('#ul-flowers');
            $('<li>' + val + '</li>').appendTo('#ul-stock');
        });
    });
    //JSON array.
    const urlspeciesarr = "/flowerspeciesarr";
    $.getJSON(urlspeciesarr, (data) => {
        for (let i = 0; i < data.length; i++) {
            $('<li>' + data[i].id + '</li>').appendTo('#ul-idarr');
            $('<li>' + data[i].name + '</li>').appendTo('#ul-flowersarr');
            $('<li>' + data[i].quantity + '</li>').appendTo('#ul-stockarr');

        }
    });
});



