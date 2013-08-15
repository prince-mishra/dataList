/**
 * User: prince
 * Date: 16/8/13
 */

(function(window) {
    var Helper = {
        addEvent : function(element, type, callback) {
            if (element.addEventListener) {
                element.addEventListener(type, callback, false);
            }else if (element.attachEvent) {
                element.attachEvent('on' + type, callback)
            } else {
                element['on' + type] = callback;
            }
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
