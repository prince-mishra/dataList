/**
 * User: prince
 * Date: 16/8/13
 */
(function(window) {

    function View() {
        this.template = '<tr><td draggable="true" ondragstart="dataList.drag(event)" data-row-id="{{id}}"><input type="checkbox" name="row-checkbox" id="{{id}}" /></td><td>{{subject}}</td></tr>';
    }

    View.prototype.show = function(data) {
        var tmpl = this.template,
            view = '';
        for(var item in data) {
            var cur = data[item];
            view += tmpl.replace(/{{id}}/g, cur['id']).replace(/{{subject}}/g, cur['subject']);
        }
        return view;
    }

    window.View = View;

})(window);
