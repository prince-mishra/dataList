/**
 * User: prince
 * Date: 16/8/13
 */
(function(window) {

    function DataStore(appName) {
        //private
        var self = this,
            store = window.localStorage,
            appName = appName;
        if (!store[appName]) {
            store[appName] = JSON.stringify({
                "count" : 0,
                "lastId" : 0
            });
        }

        function str2obj (str) {
            if (str) {
                return JSON.parse(str);
            }
            else {
                return str;
            }
        }

        function obj2str(obj) {
            return JSON.stringify(obj);
        }

        function generateKey() {
            var items = str2obj(store.getItem(appName)),
                currentKey = items['lastId'];
            return currentKey+1;
            }

        function resetStore(items) {
            store[appName] = obj2str(items);
        }

        function _list() {
            var items = store.getItem(appName);

            return str2obj(items);

        }
        function _get(id) {
            var contents = _list(),
                item = contents[id];
            if (item) {
                return item;
            }
            else {
                throw "ItemNotFound";
            }
        }

        function _set(value) {
            var items = _list(),
                key = generateKey(),
                obj = {
                    "id" : key,
                    "subject" : value
                };

            items[key] = obj;
            items['count'] = items['count'] + 1;
            items['lastId']= key;
            resetStore(items);
            return _list()[key];
        }

        function _remove(id) {
            var items = _list();
            delete items[id];
            items['count'] = items['count'] - 1;
            resetStore(items);
            return _list();
        }

        function _update(id, value) {
            var items = _list();
            items[id] = value;
            resetStore(items);
            return _list()[id];
        }

        function handleCallback(func, data) {
            if (func) {
                func(data);
            }
            else {
                console.log(data);
            }
        }

        return {
            // public API

            list : function(callback) {
                var items = _list();
                // ugly hack. TODO : use a structure where data is differentiable from metadata.
                delete items['count'];
                delete items['lastId'];

                handleCallback(callback, items);
            },

            add : function(obj, callback) {
                console.log("add", obj);
                var key = _set(obj);
                handleCallback(callback, key);
            },

            remove : function(id, callback) {
                _remove(id);
                handleCallback(callback, _list());
            },

            update : function(id, value, callback) {
                _update(id, value);
            }
        }
    }

    window.Model = DataStore;

})(window);