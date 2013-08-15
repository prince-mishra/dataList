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

    var dataList = new DataList("myDataList");


    window.dataList = dataList;

})(window);