/**
 * User: prince
 * Date: 16/8/13
 */
(function(window) {

    function View() {
<<<<<<< HEAD
        this.template =
            '<div>' +
                '<input type="checkbox" name="row-checkbox" id="{{id}}" class="row-checkbox" />' +
                '<span>{{subject}}</span>' +
            '</div>';
=======
        this.template = '<tr><td draggable="true" ondragstart="dataList.drag(event)" data-row-id="{{id}}"><input type="checkbox" name="row-checkbox" id="{{id}}" /></td><td>{{subject}}</td></tr>';
>>>>>>> gh-pages
    }

    View.prototype.show = function(data) {
        var tmpl = this.template,
            view = '';
        for(var item in data) {
            var cur = data[item];
            view += tmpl.replace('{{id}}', cur['id']).replace('{{subject}}', cur['subject']);
        }
<<<<<<< HEAD
=======
        console.log(view);
>>>>>>> gh-pages
        return view;
    }

    window.View = View;

})(window);
