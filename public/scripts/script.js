$(document).ready(() => {
    const url = "/flowerspecies"
    $.getJSON(url, (data) => {
        $.each(data, (key, val) => {
            console.log(key + val);
        });
    });
});
