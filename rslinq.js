(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory); // expects that jquery has been defined somewhere 
    } else {
        // Browser globals
        root.rslinq = factory();
    }
}(this, function () {

    Array.prototype.where = function (equalsFunc) {
        if (equalsFunc == null) {
            return [];
        }

        var arr = [];

        for (var i = 0; i < this.length; i++) {
            var item = this[i];
            if (equalsFunc(item)) {
                arr.push(item);
            }
        }

        return arr;
    };

    Array.prototype.join = function (token) {
        var s = "";
        for (var i = 0; i < this.length; i++) {
            s += this[i] + (i == this.length - 1 ? '' : token);
        }
        return s;
    };

    /* sortfunc takes 2 items and should return -1,0,1 depending on their relationship */
    Array.prototype.orderBy = function (sortFunc) {

        var sorted = this.slice(0);
        sorted.sort(sortFunc);
        return sorted;
    };

    Array.prototype.groupBy = function(groupFunc) {
        var res = [];
    //an array of arrays will be created where a group by key must be defined
    for (var i = 0; i < this.length; i++) {
        var groupByKey = ko.toJSON(groupFunc(this[i]));
        if (groupByKey === undefined) {
            groupByKey = null;
        }
        if (!res.any(function(a) { return a.key === groupByKey })) {
            res.push({ key: groupByKey, values: [] });
        }
        
        for (var j = 0; j < res.length; j++) {
            if (res[j].key === groupByKey) {
                res[j].values.push(this[i]);
                break;
            }
        }
        
    }
    return res;
};

Array.prototype.foreach = function (selectFunc) {
    if (selectFunc == null) {
        return null;
    }

    for (var i = 0; i < this.length; i++) {
        selectFunc(this[i]);
    }

};

Array.prototype.select = function (selectFunc) {
    if (selectFunc == null) {
        return null;
    }
    
    var arr = [];

    for (var i = 0; i < this.length; i++) {
        arr.push(selectFunc(this[i]));
    }

    return arr;
};

Array.prototype.any = function (equalsFunc) {
    if (equalsFunc == null) {
        return false;
    }

    for (var i = 0; i < this.length; i++) {
        if (equalsFunc(this[i])) {
            return true;
        }
    }

    return false;
};

    return {};

}));



