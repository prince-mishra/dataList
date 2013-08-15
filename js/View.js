/**
 * User: prince
 * Date: 16/8/13
 */
(function(window) {

    function View() {
        this.template =
            '<div>' +
                '<input type="checkbox" name="row-checkbox" id="{{id}}" class="row-checkbox" />' +
                '<span>{{subject}}</span>' +
            '</div>';
    }

    View.prototype.show = function(data) {
        var tmpl = this.template,
            view = '';
        for(var item in data) {
            var cur = data[item];
            view += tmpl.replace('{{id}}', cur['id']).replace('{{subject}}', cur['subject']);
        }
        return view;
    }

    window.View = View;

})(window);
