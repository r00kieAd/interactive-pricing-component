$('#amt').on("change", function () {
    let pageViews = $('#amt').val();
    $('#views').text(pageViews + `${pageViews == 1000 ? 'M' : 'K'}`);
    if (pageViews >= 10 && pageViews < 50) {
        $('.amount span').text(`${$('#cycleValueSwitch').is(':checked') ? parseFloat(8 * 0.25) : 8}`);
    } else if (pageViews >= 50 && pageViews < 100) {
        $('.amount span').text(`${$('#cycleValueSwitch').is(':checked') ? parseFloat(12 * 0.25) : 12}`);
    } else if (pageViews >= 100 && pageViews < 500) {
        $('.amount span').text(`${$('#cycleValueSwitch').is(':checked') ? parseFloat(16 * 0.25) : 16}`);
    } else if (pageViews >= 500 && pageViews < 1000) {
        $('.amount span').text(`${$('#cycleValueSwitch').is(':checked') ? parseFloat(24 * 0.25) : 24}`);
    } else {
        $('.amount span').text(`${$('#cycleValueSwitch').is(':checked') ? parseFloat(36 * 0.25) : 36}`);
    }
});

$('#cycleValueSwitch').on('change', function () {
    const rate = $('.amount span').text();
    $('.amount span').text(`${$('#cycleValueSwitch').is(':checked') ? parseFloat(rate * 0.25) : parseInt(rate / 0.25)}`);
})

$('input[type="radio"] + label').click(function () {
    if ($(this).attr('for') == 'v1') {
        $('.Yearly').prop('checked', false);
    } else {
        $('.Monthly').prop('checked', false);
    }
})