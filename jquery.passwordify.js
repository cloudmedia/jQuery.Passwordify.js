/**
 * jQuery.Passwordify.js
 * Written by: Jay Simons
 * Cloudulus.Media (https://code.cloudulus.media)
 */

if (window.jQuery) {
    (function ($) {
        $.fn.passwordify = function (opts) {
            var settings = $.extend({
                maxLength: 8,
                numbersOnly: false,
                enterKeyCallback: null
            }, opts);

            var rePattern = '\\s\\S';
            if (settings.numbersOnly) rePattern = '0-9';

            var maskPlaceholder = "";
            for (var i = 0; i < settings.maxLength; i++)
            {
                maskPlaceholder = maskPlaceholder + 'Z';
            }

            return this.on('keyup', function (e) {
                var me = $(this);
                switch (e.which) {
                    case 8: // Handle backspace
                        $(this).data('val', $(this).data('val').slice(0, -1));
                        break;
                    case 13: // Handle enter key
                        if (typeof settings.enterKeyCallback == 'function') settings.enterKeyCallback(me);
                        break;
                    default: // All other input
                        var regex = new RegExp("^[" + rePattern + "]$");
                        if (regex.exec(e.key) && $(this).data('val').length < settings.maxLength) {
                            $(this).data('val', $(this).data('val') + e.key);
                        }
                }
                setTimeout(function () {
                    var inpVal = me.val();
                    me.val(inpVal.replace(/./gi, '*'));
                }, 300);
            }).mask(maskPlaceholder, {
                translation: {
                    'Z': {pattern: "[" + rePattern + "\*]"}
                }
            });
        }
    })(jQuery);
} else {
    console.log("Passwordify.js: This class requies jQuery > v3!");
}