$('#amt').on("input", function () {
    let pageViews = $('#amt').val();
    $('#views').text(`${pageViews == 1000 ? '1': pageViews}` + `${pageViews == 1000 ? 'M' : 'K'}`);
    $('.progress').css('width', `${parseInt(pageViews/10)}%`);
    if (pageViews >= 10 && pageViews < 50) {
        $('.amount span').text(`${$('#myToggle').is(':checked') ? parseFloat(8-(8 * 0.25)) : parseInt(2 * 4)}`); //edited calculation
    } else if (pageViews >= 50 && pageViews < 100) {
        $('.amount span').text(`${$('#myToggle').is(':checked') ? parseFloat(12-(12 * 0.25)) : parseInt(3 * 4)}`); //edited calculation
    } else if (pageViews >= 100 && pageViews < 500) {
        $('.amount span').text(`${$('#myToggle').is(':checked') ? parseFloat(16-(16 * 0.25)) : parseInt(4 * 4)}`); //edited calculation
    } else if (pageViews >= 500 && pageViews < 1000) {
        $('.amount span').text(`${$('#myToggle').is(':checked') ? parseFloat(24-(24 * 0.25)) : parseInt(6 * 4)}`); //edited calculation
    } else {
        $('.amount span').text(`${$('#myToggle').is(':checked') ? parseFloat(36-(36 * 0.25)) : parseInt(9 * 4)}`); //edited calculation
    }
});

$('#myToggle').on('change', function () {
    const rate = $('.amount span').text();
    const discount = parseInt(rate * 0.25);
    $('.amount span').text(`${$('#myToggle').is(':checked') ? parseInt(rate-discount) : originalRate}`);
    const originalRate = rate;
})
