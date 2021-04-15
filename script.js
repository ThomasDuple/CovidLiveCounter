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
    $('#cases').text(data.confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' '));
    $('#death').text(data.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' '));
}