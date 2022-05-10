(function () {
    let root = this;
    let generateName = (function () {
        let postfix = 0;
        return function (descString) {
            postfix++;
            return '@@' + descString + '_' + postfix
        }
    })()
    let SymbolPolyfill = function (description) {
        if (this instanceof SymbolPolyfill) throw new TypeError('Symbol is not a constructor')

        let symbol = Object.create({
            toString: function () {
                return this.__Name__;
            },
            valueOf: function () {
                return this;
            }
        })

        let descString = description === undefined ? undefined : String(descString);

        Object.defineProperties(symbol, {
            '__Description__': {
                value: descString,
                writable: false,
                enumerable: false,
                configurable: false
            },
            '_Name_': {
                value: generateName(descString),
                writable: false,
                enumerable: false,
                configurable: false
            }
        });

        return symbol
    };
    root.SymbolPolyfill = SymbolPolyfill
})()