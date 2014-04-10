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


/*

function ArrayClear(arr) {
    if (!arr) {
        return null;
    }
    else {
        arr.splice(0, arr.length);
    }
    return arr;
}

function ArrayFirstItemOrNull(arr) {
    if (arr == null || arr.length <= 0) {
        return null;
    }
    return arr[0];
}


function inArray(arr, item, equalsFunc) {
    if (arr == null || item == null) {
        return false;
    }

    for (var i = 0; i < arr.length; i++) {
        if (equalsFunc != null ? equalsFunc(arr[i], item) : arr[i] == item) {
            return true;
        }
    }

    return false;
}

function ArrayConvert(arr, convertFunc) {
    if (arr == null || convertFunc == null) {
        return [];
    }

    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
        newArr.push(convertFunc(arr[i]));
    }

    return newArr;
}

function ArrayGetItem(arr, equalsFunc) {
    if (arr == null || equalsFunc == null) {
        return null;
    }

    for (var i = 0; i < arr.length; i++) {
        var found = equalsFunc(arr[i]);
        if (found) {
            return arr[i];
        }
    }

    return null;
}

//Copies all items from source into target. if onlyIfNotExistInTarget then items from source will only be added if they do not already exist in target.
//equalsFunc is optional and will be called for each item before check if exist in target arr. If null but convertfunc exist then the converted item will be checked. Should return true if equal otherwise false
//convertFunc is optional and will be called for each item before add. The function should return a converted object to be added
function ArrayMerge(sourceArr, targetArr, onlyIfNotExistInTarget, equalsFunc, convertFunc) {
    if (sourceArr == null || targetArr == null) {
        return false;
    }

    for (var i = 0; i < sourceArr.length; i++) {
        var exist = false;

        var item = sourceArr[i];
        
        if (convertFunc) {
            item = convertFunc(item);
        }

        for (var j = 0; j < targetArr.length; j++) {
            if ((equalsFunc ? equalsFunc(targetArr[j], item) : item == targetArr[j]) && onlyIfNotExistInTarget) {
                exist = true;
                break;
            }
        }
        if (!exist) {
            targetArr.push(item);
        }
    }

    return true;
}

function ArraySubtract(sourceArr, removeArr, equalsFunc) {
    if (sourceArr == null || removeArr == null) {
        return [];
    }

    var arr = [];

    for (var i = 0; i < sourceArr.length; i++) {
        var item = sourceArr[i];
        var exist = false;
        for (var j = 0; j < removeArr.length; j++) {
            exist = (equalsFunc ? equalsFunc(removeArr[j], item) : item == removeArr[j]);
            if (exist) {
                break;
            }
        }

        if (!exist) {
            arr.push(item);
        }
        
    }

    return arr;
}

ArrayWhereItemEquals(sourceArr, equalsFunc) {
        if (sourceArr == null || equalsFunc == null) {
            return [];
        }

        var arr = [];

        for (var i = 0; i < sourceArr.length; i++) {
            var item = sourceArr[i];
            if (equalsFunc(item)) {
                arr.push(item);
            }
        }

        return arr;
    }

*/




    return {};

}));



