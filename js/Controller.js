/**
 * User: prince
 * Date: 16/8/13
 */

(function(window) {

    function Controller(model, view) {
        this.model = model,
        this.view = view;
    }

    Controller.prototype.add = function(data, callback) {
        var self = this;
        this.model.add(data);
        this.model.list(function(response){
            callback(response);
        });
    }

    Controller.prototype.remove = function(id, callback) {
        var self = this;
        this.model.remove(id, callback);
    }

    window.Controller = Controller;
})(window);
