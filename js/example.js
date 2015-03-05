/**
* Website name here
* Website URL here
*
* @author Author name here
* @package mypackagename_default
*
*/
var ModuleName = (function ($) {
    "use strict";

    // private alias to settings
    var s;

    return {
        settings: {
            example: $("#example"),
        },

        init: function() {
            s = this.settings;

            this.bindUIActions();
        },

        bindUIActions: function() {
            s.example.on("click", function(){
                console.log("example");
            });
        }
    };
})(jQuery);


jQuery(document).ready(function() {

    ModuleName.init();

});