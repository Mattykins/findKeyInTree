Object.prototype.findKeyInTree = function (key, options) {
    var i,
        result,
        matches = [],
        isFinal = arguments[2] === false ? false : true;

    options = options || {};

    for (i in this) {
        var compare = [key, i];

        if (options.conventionAgnostic === true) {
            compare = compare.map(function(s) {
                return s.replace(/(\_[a-zA-Z])/g, function(match) {
                    return match.toUpperCase().replace('_','');
                });
            });
        }

        if (options.caseSensitive === false) {
            compare = compare.map(function(s) {
                return s.toLowerCase();
            });
        }

        if (compare[0] === compare[1]) {
            if (isFinal) {
                matches.push(i);
            } else {
                return i;
            }
        }

        if (this[i].constructor === {}.constructor) {
            result = this[i].findKeyInTree(key, options, null);
            if (result) {
                if (isFinal) {
                    matches.push(i + '.' + result);
                } else {
                    return i + '.' + result;
                }
            }
        }
    }

    if (isFinal) {
        if (matches.length > 1) {
            return matches;
        } else if (matches.length === 1) {
            return matches[0];
        } else {
            return false;
        }
    } else {
        return false;
    }
};
