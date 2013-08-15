/**
 * User: prince
 * Date: 16/8/13
 */
(function(window) {

    function DataList(name) {
        this.model       = new Model(name);
        this.view        = new View();
        this.controller  = new Controller(this.model, this.view);
    }

    DataList.prototype.repaint = function() {
        var self = this;
        self.controller.model.list(function(r){
            var rows = self.controller.view.show(r);
            document.getElementById('content-body').innerHTML = rows;
        });
    }

    var dataList = new DataList("myDataList");

    // bind events


    Helper.addEvent(window, 'load', function(e) {
        dataList.repaint();

        Helper.addEvent(Helper.$('#add-btn'), 'click', function(e) {
            var newSubject = prompt("Enter contents :");
            if (newSubject) {
                dataList.controller.add(newSubject, function(e) {
                    dataList.repaint();
                });
            }
        });

        Helper.addEvent(Helper.$('#remove-btn'), 'click', function(e) {
            var selected = Helper.$$('input[name="row-checkbox"]:checked');
            if (!selected.length) {
                alert("No items selected.");
                return false;
            }
            console.log(selected);
            var r = confirm("Are you sure you want to remove the selected items?");
            if (r) {
                for (var i = 0; i < selected.length; i ++) {
                    var cur = selected[i],
                        id = cur.id;
                    dataList.controller.remove(id);
                }
                dataList.repaint();
            }
        });
    });


    window.dataList = dataList;

})(window);