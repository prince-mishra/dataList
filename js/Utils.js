/**
 * User: prince
 * Date: 16/8/13
 */

(function(window) {
    var Helper = {
        addEvent : function(target, evt, callback) {
            target.addEventListener(evt, function(e) {
                callback(e);
            })
        },
        $ : function(id) {
            return document.querySelector(id);
        },

        $$ : function(selector) {
            return document.querySelectorAll(selector);
        }

    }
    window.Helper = Helper;
})(window);
