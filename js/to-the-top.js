jQuery(document).ready(function ($) {

    const { __, _x, _n, sprintf } = wp.i18n;
    
    // Create the link
    var toTheTop = $('<a>', {
        href: '#',
        class: 'to-the-top',
        text: __( 'Back to top (JS)', 'to-the-top' )
    });

     // Add the link to the footer of the page
    $('footer').append(toTheTop);
 
 });
 