/**
 * User: prince
 * Date: 16/8/13
 */
(function(window) {

    function View() {
        this.template = '<tr><td><input type="checkbox" name="row-checkbox" id="{{id}}"/></td><td>{{subject}}</td></tr>';
    }

    View.prototype.show = function(data) {
        var tmpl = this.template,
            view = '';
        for(var item in data) {
            var cur = data[item];
            view += tmpl.replace('{{id}}', cur['id']).replace('{{subject}}', cur['subject']);
        }
        console.log(view);
        return view;
    }

    window.View = View;

})(window);
