

//halfletter

jQuery(function($) {
    var halfstyle_text, halfstyle_chars, $halfstyle_el, halfstyle_i, halfstyle_output, halfstyle_style;

    // Iterate over all class occurrences
    $('.textToHalfStyle').each(function(idx, halfstyle_el) {
        $halfstyle_el = $(halfstyle_el);
        halfstyle_style = $halfstyle_el.data('halfstyle') || 'hs-base';
        halfstyle_text = $halfstyle_el.text();
        halfstyle_chars = halfstyle_text.split('');

        // Set the screen-reader text
        $halfstyle_el.html('<span style="position: absolute !important;clip: rect(1px 1px 1px 1px);clip: rect(1px, 1px, 1px, 1px);">' + halfstyle_text + '</span>');

        // Reset output for appending
        halfstyle_output = '';

        // Iterate over all chars in the text
        for (halfstyle_i = 0; halfstyle_i < halfstyle_chars.length; halfstyle_i++) {
            // Create a styled element for each character and append to container
            halfstyle_output += '<span aria-hidden="true" class="halfStyle ' + halfstyle_style + '" data-content="' + halfstyle_chars[halfstyle_i] + '">' + halfstyle_chars[halfstyle_i] + '</span>';
        }
        // Chrome 59 and above specific fix - Part 1 - Addresses a Chrome bug where Chrome fails to corectly render and repaint pseudo elements - I came up with this fix after many different tests.
        var _applyChromeFix = !!window.chrome && !!navigator.appVersion.match(/.*Chrome\/([0-9\.]+)/) && parseInt(navigator.appVersion.match(/.*Chrome\/([0-9\.]+)/)[1], 10) >= 59;
        if (_applyChromeFix) {
            halfstyle_output += '<style>.halfStyle{}</style>';
        }

        // Write to DOM only once
        $halfstyle_el.append(halfstyle_output);

        // Chrome 59 and above specific fix - Part 2
        if (_applyChromeFix) {
            setTimeout(function(){
                $halfstyle_el.find('style').remove();
            }, 0);
        }
    });
});

//background image

var images = [
  'nasa--hI5dX2ObAs-unsplash-2.jpg',
  'aldebaran-s-g-Gc-k-NPkA-unsplash.jpg',
  'Horsehead-Hubble.jpg',
  'pxfuel.com.jpg',
  'NGC_3114.png'
]


if (document.getElementById) { window.onload = swap };
function swap() {
var numimages=8;
rndimg = new Array('one.jpg',
  'two.jpg',
   'three.jpg',
  'four.jpg',
  'five.jpg',
'six.jpg',
'seven.jpg',
  'eight.jpg'
  ); 
x=(Math.floor(Math.random()*numimages));
randomimage=(rndimg[x]);
document.querySelector(".right").style.backgroundImage = "url("+ randomimage +")"; 
}


