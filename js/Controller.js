/**
 * User: prince
 * Date: 16/8/13
 */

(function(window) {

    function Controller(model, view) {
        this.model = model,
        this.view = view;
    }

    Controller.prototype.add = function(data) {
        var self = this;
        this.model.add(data);
        this.model.list(function(response){
            self.view.show(response);
        });
    }

    Controller.prototype.remove = function(id) {
        var self = this;
        this.model.remove(id, function(response) {
            self.view.show(response);
        });
    }

    window.Controller = Controller;
})(window);
