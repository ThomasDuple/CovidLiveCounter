getData();
setInterval(getData, 5000);

function getData() {
    console.log('reload');
    $.ajax({
        url: 'https://covid-api.mmediagroup.fr/v1/cases?country=France',
        success: function (result) {
            displayData(result.All);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.error(xhr, ajaxOptions, thrownError);
        }
    });
}

function displayData(data) {
    $('#cases').text(data.confirmed);
    $('#death').text(data.deaths);
}