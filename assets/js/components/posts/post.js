/**
 * Reload GoogleMaps Tabs
 */
document.addEventListener('DOMContentLoaded', function () {
    $('#post').find('a[data-toggle="tab"]').on('shown.bs.tab', function () {
        setTimeout(function () {
            window.dispatchEvent(new Event('resize'));
        }, 1000);
    });
});


/**
 * Remove Language
 */
$('.close-lang-content').click(function () {
    var local = $(this).data('local');
    $('#post').find('a[data-target="#local-' + local + '"]').parent().remove();

    $('#post #local-' + local).remove();
});