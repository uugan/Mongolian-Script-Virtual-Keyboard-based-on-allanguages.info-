;
var VirtualKeyboard = new
function () {
    var i = this;
    i.$VERSION$ = "3.6.7.721";
    var I = findPath('vk_loader.js');
    var l = /\x03/;
    var o = {
        'layout': null,
        'skin': 'winxp'
    };
    var O = 'kb_b';
    var Q = true;
    var _ = {
        14: 'backspace',
        15: 'tab',
        28: 'enter',
        29: 'caps',
        41: 'shift_left',
        52: 'shift_right',
        53: 'del',
        54: 'ctrl_left',
        55: 'alt_left',
        56: 'space',
        57: 'alt_right',
        58: 'ctrl_right'
    };
    var c = {
        'SHIFT': 'shift',
        'ALT': 'alt',
        'CTRL': 'ctrl',
        'CAPS': 'caps'
    };
    var C;
    var v = {
        'QWERTY Standard': "À1234567890m=ÜQWERTYUIOPÛÝASDFGHJKL;ÞZXCVBNM¼¾¿",
        'QWERTY Canadian': "Þ1234567890m=ÜQWERTYUIOPÛÝASDFGHJKL;ÀZXCVBNM¼¾¿",
        'QWERTY Dutch': "Þ1234567890Û¿ÜQWERTYUIOPÝ;ASDFGHJKL=ÀZXCVBNM¼¾m",
        'QWERTY Estonian': "¿1234567890m=ÜQWERTYUIOPÞÛASDFGHJKL;ÀZXCVBNM¼¾Ý",
        'QWERTY Greek (220)': "À1234567890¿ÛÜQWERTYUIOP=ÝASDFGHJKL;ÞZXCVBNM¼¾m",
        'QWERTY Greek (319)': "À1234567890¿=ÜQWERTYUIOPÛÝASDFGHJKL;ÞZXCVBNM¼¾m",
        'QWERTY Gujarati': "À1234567890m=XQWERTYUIOPÛÝASDFGHJKL;ÜZXCVBNM¼¾¿",
        'QWERTY Italian': "Ü1234567890ÛÝ¿QWERTYUIOP;=ASDFGHJKLÀÞZXCVBNM¼¾m",
        'QWERTY Kannada': "À1234567890m=ZQWERTYUIOPÛÝASDFGHJKL;ÞZXCVBNM¼¾¿",
        'QWERTY Portuguese': "À1234567890ÛÝ¿QWERTYUIOP=;ASDFGHJKLÞÜZXCVBNM¼¾m",
        'QWERTY Scandinavian': "Ü1234567890=Û¿QWERTYUIOPÝ;ASDFGHJKLÀÞZXCVBNM¼¾m",
        'QWERTY Spanish': "Ü1234567890mÛ¿QWERTYUIOPÝ;ASDFGHJKLÀÞZXCVBNM¼¾ß",
        'QWERTY Tamil': "À1234567890m =ZQWERTYUIOPÛÝASDFGHJKL;ÞCVBNM¼¾ ¿",
        'QWERTY Turkish': "À1234567890ßm¼QWERTYUIOPÛÝASDFGHJKL;ÞZXCVBNM¿Ü¾",
        'QWERTY UK': "ß1234567890m=ÞQWERTYUIOPÛÝASDFGHJKL;ÀZXCVBNM¼¾¿",
        'QWERTZ Albanian': "À1234567890m=ÜQWERTZUIOPÛÝASDFGHJKL;ÞYXCVBNM¼¾¿",
        'QWERTZ Bosnian': "À1234567890¿=ÜQWERTZUIOPÛÝASDFGHJKL;ÞYXCVBNM¼¾m",
        'QWERTZ Czech': "À1234567890=¿ÜQWERTZUIOPÛÝASDFGHJKL;ÞYXCVBNM¼¾m",
        'QWERTZ German': "Ü1234567890ÛÝ¿QWERTZUIOP;=ASDFGHJKLÀÞYXCVBNM¼¾m",
        'QWERTZ Hungarian': "0123456789À¿=ÜQWERTZUIOPÛÝASDFGHJKL;ÞYXCVBNM¼¾m",
        'QWERTZ Slovak': "À1234567890¿ßÜQWERTZUIOPÛÝASDFGHJKL;ÞYXCVBNM¼¾m",
        'QWERTZ Swiss': "Ü1234567890ÛÝßQWERTZUIOP;ÞASDFGHJKLÀ¿YXCVBNM¼¾m",
        'AZERTY Belgian': "Þ1234567890ÛmÜAZERTYUIOPÝ;QSDFGHJKLMÀWXCVBN¼¾¿=",
        'AZERTY French': "Þ1234567890Û=ÜAZERTYUIOPÝ;QSDFGHJKLMÀWXCVBN¼¾¿ß",
        ',WERTY Bulgarian': "À1234567890m¾Ü¼WERTYUIOPÛÝASDFGHJKL;ÞZXCVBNMßQ¿",
        'QGJRMV Latvian': "À1234567890mFÜQGJRMVNZWXYH;USILDATECÞÛBÝKPOß¼¾¿",
        '/,.PYF UK-Dvorak': "m1234567890ÛÝÜÀ¼¾PYFGCRL¿=AOEUIDHTNSÞ;QJKXBMWVZ",
        'FG;IOD Turkish F': "À1234567890=mXFG;IODRNHPQWUÛEAÝTKMLYÞJÜVC¿ZSB¾¼",
        ';QBYUR US-Dvorak': "7ÛÝ¿PFMLJ4321Ü;QBYURSO¾65=mKCDTHEAZ8ÞÀXGVWNI¼09",
        '56Q.OR US-Dvorak': "m1234JLMFP¿ÛÝÜ56Q¾ORSUYB;=78ZAEHTDCKÞ90X¼INWVGÀ"
    };
    var V = 0,
        x = 0,
        X = 1,
        z = 2,
        Z = 4,
        w = 8,
        W = Z | w,
        s = Z | X,
        S = z | w,
        k = z | Z,
        K = z | Z | w,
        q = z | X,
        E = X | z | Z,
        r = X | w,
        R = X | z | Z | w;
    var t = {
        'buttonUp': 'kbButton',
        'buttonDown': 'kbButtonDown',
        'buttonHover': 'kbButtonHover',
        'hoverShift': 'hoverShift',
        'hoverAlt': 'hoverAlt',
        'modeAlt': 'modeAlt',
        'modeAltCaps': 'modeAltCaps',
        'modeCaps': 'modeCaps',
        'modeNormal': 'modeNormal',
        'modeShift': 'modeShift',
        'modeShiftAlt': 'modeShiftAlt',
        'modeShiftAltCaps': 'modeShiftAltCaps',
        'modeShiftCaps': 'modeShiftCaps',
        'charNormal': 'charNormal',
        'charShift': 'charShift',
        'charAlt': 'charAlt',
        'charShiftAlt': 'charShiftAlt',
        'charCaps': 'charCaps',
        'charShiftCaps': 'charShiftCaps',
        'hiddenAlt': 'hiddenAlt',
        'hiddenCaps': 'hiddenCaps',
        'hiddenShift': 'hiddenShift',
        'hiddenShiftCaps': 'hiddenShiftCaps',
        'deadkey': 'deadKey',
        'noanim': 'VK_no_animate'
    };
    var T = null;
    var y = [];
    y.hash = {};
    y.codes = {};
    y.codeFilter = null;
    y.options = null;
    var Y = {
        keyboard: null,
        desk: null,
        langbox: null,
        attachedInput: null
    };
    var u = null;
    i.addLayoutList = function () {
        for (var n = 0, N = arguments.length; n < N; n++) {
            try {
                i.addLayout(arguments[n]);
            } catch (e) {}
        }
    };
    i.addLayout = function (e) {
        var n = e.code.entityDecode().split("-"),
            N = e.name.entityDecode(),
            m = g(e.normal);
        if (!isArray(m) || 47 != m.length) throw new Error('VirtualKeyboard requires \'keys\' property to be an array with 47 items, ' + m.length + ' detected. Layout code: ' + n + ', layout name: ' + N);
        e.code = (n[1] || n[0]);
        e.name = N;
        e.normal = m;
        e.domain = n[0];
        var M = e.code + " " + e.name;
        if (y.hash.hasOwnProperty(M)) return;
        var n;
        if (!y.codes.hasOwnProperty(e.code)) {
            n = {
                'name': e.code,
                'layout': []
            };
            y.codes[e.code] = n
        } else {
            n = y.codes[e.code]
        }
        y.push(e);
        n.layout.push(e);
        y.hash[M] = e;
        if (!y.codes.hasOwnProperty(e.code)) y.codes[e.code] = e.code;
        e.toString = function () {
            return this.code + " " + this.name
        };
        y.options = null
    };
    i.switchLayout = function (e) {
        F();
        if (!y.options.hasOwnProperty(e)) return false;
        i.IME.hide();
        Y.langbox.options[y.options[e]].selected = true;
        T = y.hash[e];
        if (!T.keys) {
            T.html = b(G(T));
        }
        Y.desk.innerHTML = T.html;
        Y.keyboard.className = T.domain;
        i.IME.css = T.domain;
        V = x;
        h();
        if (isFunction(T.activate)) {
            T.activate();
        }
        f();
        DocumentCookie.set('vk_layout', e);
        o.layout = e;
        return true
    };
    i.getLayouts = function () {
        var e = [];
        for (var n = 0, N = y.length; n < N; n++) {
            e[e.length] = [y[n].code, y[n].name]
        }
        return e.sort();
    };
    i.setVisibleLayoutCodes = function () {
        var e = isArray(arguments[0]) ? arguments[0] : arguments,
            n = null,
            N;
        for (var m in y.codes) {
            if (y.codes.hasOwnProperty(m)) {
                N = m.toUpperCase();
                if (e.indexOf(N) > -1) {
                    if (!n) n = {};
                    n[N] = N
                }
            }
        }
        y.codeFilter = n;
        y.options = null;
        if (!i.switchLayout(Y.langbox.value)) {
            i.switchLayout(Y.langbox.value);
        }
    };
    i.getLayoutCodes = function () {
        var e = [];
        for (var n in y.codes) {
            if (!y.codes.hasOwnProperty(n)) continue;
            e.push(n);
        }
        return e.sort();
    };
    var U = function (e, n) {
        var N = "",
            m = false;
        e = e.replace(O, "");
        switch (e) {
        case c.CAPS:
        case c.SHIFT:
        case "shift_left":
        case "shift_right":
        case c.ALT:
        case "alt_left":
        case "alt_right":
            return true;
        case 'backspace':
            if (isFunction(T.charProcessor) && DocumentSelection.getSelection(Y.attachedInput).length) {
                N = "\x08"
            } else if (n && n.currentTarget == Y.attachedInput) {
                i.IME.hide(true);
                return true
            } else {
                DocumentSelection.deleteAtCursor(Y.attachedInput, false);
                i.IME.hide(true);
            }
            break;
        case 'del':
            i.IME.hide(true);
            if (n) return true;
            DocumentSelection.deleteAtCursor(Y.attachedInput, true);
            break;
        case 'space':
            N = " ";
            break;
        case 'tab':
            N = "\t";
            break;
        case 'enter':
            N = "\n";
            break;
        default:
            N = T.keys[e][V];
            break
        }
        if (N) {
            if (!(N = L(N, DocumentSelection.getSelection(Y.attachedInput)))) return m;
            var M = false;
            var ii = DOM.getWindow(Y.attachedInput);
            if (!N[1] && N[0].length <= 1 && N[0].charCodeAt(0) <= 0x7fff && !Y.attachedInput.contentDocument) {
                var iI = N[0].charCodeAt(0);
                if (isFunction(ii.document.createEvent)) {
                    var n = null;
                    try {
                        n = ii.document.createEvent("KeyEvents");
                        n.initKeyEvent('keypress', false, true, Y.attachedInput.contentWindow, false, false, false, false, 0, iI);
                        n.VK_bypass = true;
                        Y.attachedInput.dispatchEvent(n);
                    } catch (ex) {
                        try {
                            n = ii.document.createEvent("KeyboardEvents");
                            n.initKeyEvent('keypress', false, true, Y.attachedInput.contentWindow, false, false, false, false, iI, 0);
                            n.VK_bypass = true;
                            Y.attachedInput.dispatchEvent(n);
                        } catch (ex) {
                            M = true
                        }
                    }
                } else {
                    try {
                        n.keyCode = 10 == iI ? 13 : iI;
                        m = true
                    } catch (ex) {
                        M = true
                    }
                }
            } else {
                M = true
            }
            if (M) {
                DocumentSelection.insertAtCursor(Y.attachedInput, N[0]);
                if (N[1]) {
                    DocumentSelection.setRange(Y.attachedInput, -N[1], 0, true);
                }
            }
        }
        return m
    };
    var p = function (e) {
        if (!i.isOpen()) return;
        var n = V;
        var N = e.getKeyCode();
        switch (e.type) {
        case 'keydown':
            switch (N) {
            case 9:
                break;
            case 37:
                if (i.IME.isOpen()) {
                    i.IME.prevPage(e);
                    e.preventDefault();
                }
                break;
            case 39:
                if (i.IME.isOpen()) {
                    i.IME.nextPage(e);
                    e.preventDefault();
                }
                break;
            case 38:
                if (i.IME.isOpen()) {
                    if (!i.IME.showPaged()) i.IME.prevPage(e);
                    e.preventDefault();
                }
                break;
            case 40:
                if (i.IME.isOpen()) {
                    if (!i.IME.showAllPages()) i.IME.nextPage(e);
                    e.preventDefault();
                }
                break;
            case 8:
            case 46:
                var m = Y.desk.childNodes[C[N]];
                if (Q && !e.getRepeat()) DOM.CSS(m).addClass(t.buttonDown);
                if (!U(m.id, e)) e.preventDefault();
                break;
            case 20:
                if (!e.getRepeat()) {
                    n = n ^ w
                }
                break;
            case 27:
                if (i.IME.isOpen()) {
                    i.IME.hide();
                } else {
                    var M = DocumentSelection.getStart(Y.attachedInput);
                    DocumentSelection.setRange(Y.attachedInput, M, M);
                }
                return false;
            default:
                if (!e.getRepeat()) {
                    n = n | e.shiftKey | e.ctrlKey << 2 | e.altKey << 1
                }
                if (C.hasOwnProperty(N)) {
                    if (!(e.altKey ^ e.ctrlKey)) {
                        var m = Y.desk.childNodes[C[N]];
                        if (Q) DOM.CSS(m).addClass(t.buttonDown);
                        u = m.id
                    }
                    if (e.altKey && e.ctrlKey) {
                        e.preventDefault();
                        if (e.srcElement) {
                            U(Y.desk.childNodes[C[N]].id, e);
                            u = ""
                        }
                    }
                } else {
                    i.IME.hide();
                }
                break
            }
            break;
        case 'keyup':
            switch (N) {
            case 20:
                break;
            default:
                if (!e.getRepeat()) {
                    n = V & (R ^ (!e.shiftKey | (!e.ctrlKey << 2) | (!e.altKey << 1)));
                }
                if (Q && C.hasOwnProperty(N)) {
                    DOM.CSS(Y.desk.childNodes[C[N]]).removeClass(t.buttonDown);
                }
            }
            break;
        case 'keypress':
            if (u && !e.VK_bypass) {
                if (!U(u, e)) {
                    e.stopPropagation();
                    e.preventDefault();
                }
                u = null
            }
            if (!V ^ k && (e.altKey || e.ctrlKey)) {
                i.IME.hide();
            }
            if (0 == N && !u && !e.VK_bypass && (!e.ctrlKey && !e.altKey && !e.shiftKey)) {
                e.preventDefault();
            }
        }
        if (n != V) {
            H(n);
            h();
        }
    };
    var P = function (e) {
        var n = DOM.getParent(e.srcElement || e.target, 'a');
        if (!n || n.parentNode.id.indexOf(O) < 0) return;
        n = n.parentNode;
        switch (n.id.substring(O.length)) {
        case "caps":
        case "shift_left":
        case "shift_right":
        case "alt_left":
        case "alt_right":
        case "ctrl_left":
        case "ctrl_right":
            return
        }
        if (DOM.CSS(n).hasClass(t.buttonDown) || !Q) {
            U(n.id);
        }
        if (Q) {
            DOM.CSS(n).removeClass(t.buttonDown)
        }
        var N = V & (w | e.shiftKey | e.altKey << 1 | e.ctrlKey << 2);
        if (V != N) {
            H(N);
            h();
        }
        e.preventDefault();
        e.stopPropagation();
    };
    var a = function (e) {
        var n = DOM.getParent(e.srcElement || e.target, 'a');
        if (!n || n.parentNode.id.indexOf(O) < 0) return;
        n = n.parentNode;
        var N = V;
        var m = n.id.substring(O.length);
        switch (m) {
        case "caps":
            N = N ^ w;
            break;
        case "shift_left":
        case "shift_right":
            if (e.shiftKey) break;
            N = N ^ X;
            break;
        case "alt_left":
        case "alt_right":
        case "ctrl_left":
        case "ctrl_right":
            N = N ^ (e.altKey << 1 ^ z) ^ (e.ctrlKey << 2 ^ Z);
            break;
        default:
            if (Q) DOM.CSS(n).addClass(t.buttonDown);
            break
        }
        if (V != N) {
            H(N);
            h();
        }
        e.preventDefault();
        e.stopPropagation();
    };
    var A = function (e) {
        var n = DOM.getParent(e.srcElement || e.target, 'div'),
            N = e.type == 'mouseover' ? 2 : 3;
        if (n && (id = n.id).indexOf(O) > -1) {
            if (id.indexOf(c.SHIFT) > -1) {
                j(N, c.SHIFT);
            } else if (id.indexOf(c.ALT) > -1 || id.indexOf(c.CTRL) > -1) {
                j(N, c.CTRL);
                j(N, c.ALT);
            } else if (id.indexOf(c.CAPS) > -1) {
                J(N, n);
            } else if (Q) {
                J(N, n);
                if (3 == N) {
                    J(0, n);
                }
            }
        }
        e.preventDefault();
        e.stopPropagation();
    };
    var d = function (e) {
        DocumentCookie.set('vk_mapping', e.target.value);
        C = v[e.target.value]
    };
    i.attachInput = function (e) {
        if (!e) return Y.attachedInput;
        if (isString(e)) e = document.getElementById(e);
        if (e == Y.attachedInput) return Y.attachedInput;
        if (!i.switchLayout(o.layout) && !i.switchLayout(Y.langbox.value)) {
            throw new Error('No layouts available');
        }
        i.detachInput();
        if (!e || !e.tagName) {
            Y.attachedInput = null
        } else {
            Q = !DOM.CSS(e).hasClass(t.noanim);
            Y.attachedInput = e;
            f();
            if (e.contentWindow) {
                e = e.contentWindow.document.body.parentNode
            }
            e.focus();
            EM.addEventListener(e, 'keydown', p);
            EM.addEventListener(e, 'keyup', p);
            EM.addEventListener(e, 'keypress', p);
            EM.addEventListener(e, 'mousedown', i.IME.blurHandler);
            var n = document.body.parentNode;
            if (document.body.parentNode != DOM.getParent(e, 'html')) {
                EM.addEventListener(n, 'keydown', p);
                EM.addEventListener(n, 'keyup', p);
                EM.addEventListener(n, 'keypress', p);
            }
            D(true);
        }
        return Y.attachedInput
    };
    i.detachInput = function () {
        if (!Y.attachedInput) return false;
        f(true);
        i.IME.hide();
        if (Y.attachedInput) {
            var e = Y.attachedInput;
            if (e.contentWindow) {
                e = e.contentWindow.document.body.parentNode
            }
            EM.removeEventListener(e, 'keydown', p);
            EM.removeEventListener(e, 'keypress', p);
            EM.removeEventListener(e, 'keyup', p);
            EM.removeEventListener(e, 'mousedown', i.IME.blurHandler);
            var n = document.body.parentNode;
            EM.removeEventListener(n, 'keydown', p);
            EM.removeEventListener(n, 'keyup', p);
            EM.removeEventListener(n, 'keypress', p);
        }
        D(false);
        Y.attachedInput = null;
        return true
    };
    i.getAttachedInput = function () {
        return Y.attachedInput
    };
    i.open = i.show = function (e, n) {
        if (!(e = i.attachInput(Y.attachedInput || e)) || !Y.keyboard || !document.body) return false;
        if (!Y.keyboard.parentNode || Y.keyboard.parentNode.nodeType == 11) {
            if (isString(n)) n = document.getElementById(n);
            if (!n.appendChild) return false;
            n.appendChild(Y.keyboard);
        }
        return true
    };
    i.close = i.hide = function () {
        if (!Y.keyboard || !i.isOpen()) return false;
        i.detachInput();
        Y.keyboard.parentNode.removeChild(Y.keyboard);
        return true
    };
    i.toggle = function (e, n, N) {
        i.isOpen() && Y.attachedInput == i.attachInput(e) ? i.close() : i.show(e, n, N);
    };
    i.isOpen = function () {
        return ( !! Y.keyboard.parentNode) && Y.keyboard.parentNode.nodeType == 1
    };
    var D = function (e) {
        if (e) {
            var n = DOM.StyleSheet(I + 'css/' + o.skin + '/keyboard.css');
            n.add();
        }
        var N = DOM.getWindow(Y.attachedInput);
        if (window != N) {
            var n = DOM.StyleSheet(I + 'css/' + o.skin + '/keyboard.css', N);
            if (e) {
                n.add();
            } else {
                n.remove();
            }
        }
    };
    var f = function (e) {
        if (Y.attachedInput) {
            var V = e ? "" : (T.rtl ? 'rtl' : 'ltr');
            if (Y.attachedInput.contentWindow) Y.attachedInput.contentWindow.document.body.dir = V;
            else Y.attachedInput.dir = V
        }
    };
    var F = function () {
        if (null != y.options) return;
        var e = y.sort(),
            n, N, m, M = {};
        y.options = {};
        Y.langbox.innerHTML = "";
        for (var ii = 0, iI = e.length, il = 0; ii < iI; ii++) {
            n = y[ii];
            m = n.code + " " + n.name;
            if (y.codeFilter && !y.codeFilter.hasOwnProperty(n.code)) continue;
            if (M.label != n.code) {
                M = document.createElement('optgroup');
                M.label = n.code;
                Y.langbox.appendChild(M);
            }
            N = document.createElement('option');
            N.value = m;
            N.appendChild(document.createTextNode(n.name));
            N.label = n.name;
            M.appendChild(N);
            y.options[m] = il++
        }
    };
    var g = function (e) {
        if (isString(e)) return e.match(/\x01.+?\x01|\x03.|[\ud800-\udbff][\udc00-\udfff]|./g).map(function (n) {
            return n.replace(/[\x01\x02]/g, "")
        });
        else
        return e.map(function (n) {
            return isArray(n) ? n.map(function (e) {
                return String.fromCharCodeExt(e)
            }).join("") : String.fromCharCodeExt(n).replace(/[\x01\x02]/g, "")
        });
    };
    var G = function (e) {
        var n = e.normal,
            N = e.shift || {},
            m = e.alt || {},
            M = e.shift_alt || {},
            ii = e.caps || {},
            iI = e.shift_caps || {},
            il = e.dk,
            io = e.cbk,
            iO, iQ, i_, ic, iC = null,
            ie, iv, iV, ix, iX = -1,
            iz = [];
        for (var iZ = 0, iw = n.length; iZ < iw; iZ++) {
            var iW = n[iZ],
                is = null,
                iS = null,
                ik = null,
                iK = [iW];
            if (N.hasOwnProperty(iZ)) {
                iO = g(N[iZ]);
                ie = iZ
            }
            if (ie > -1 && iO[iZ - ie]) {
                ik = iO[iZ - ie];
                iK[X] = ik
            } else if (iW && iW != (iW = iW.toUpperCase())) {
                iK[X] = iW;
                ik = iW
            }
            if (m.hasOwnProperty(iZ)) {
                iQ = g(m[iZ]);
                iv = iZ
            }
            if (iv > -1 && iQ[iZ - iv]) {
                is = iQ[iZ - iv];
                iK[k] = is
            }
            if (M.hasOwnProperty(iZ)) {
                i_ = g(M[iZ]);
                iV = iZ
            }
            if (iV > -1 && i_[iZ - iV]) {
                iK[E] = i_[iZ - iV]
            } else if (is && is != (is = is.toUpperCase())) {
                iK[E] = is
            }
            if (ii.hasOwnProperty(iZ)) {
                ic = g(ii[iZ]);
                ix = iZ
            }
            if (ix > -1 && ic[iZ - ix]) {
                iS = ic[iZ - ix]
            }
            if (iS) {
                iK[w] = iS
            } else if (ik && ik.toUpperCase() != ik.toLowerCase()) {
                iK[w] = ik
            } else if (iW) {
                iK[w] = iW.toUpperCase();
            }
            if (iI.hasOwnProperty(iZ)) {
                iC = g(iI[iZ]);
                iX = iZ
            }
            if (iX > -1 && iC[iZ - iX]) {
                iK[r] = iC[iZ - iX]
            } else if (iS) {
                iK[r] = iS.toLowerCase();
            } else if (ik) {
                iK[r] = ik.toLowerCase();
            } else if (iW) {
                iK[r] = iW
            }
            iz[iZ] = iK
        }
        if (il) {
            e.dk = {};
            for (var iZ in il) {
                if (il.hasOwnProperty(iZ)) {
                    var iq = iZ;
                    if (parseInt(iZ) && iZ > 9) {
                        iq = String.fromCharCode(iZ);
                    }
                    e.dk[iq] = g(il[iZ]).join("").replace(iq, iq + iq);
                }
            }
        }
        e.rtl = !! iz.join("").match(/[\u05b0-\u06ff]/);
        if (isFunction(io)) {
            e.charProcessor = io
        } else if (io) {
            e.activate = io.activate;
            e.charProcessor = io.charProcessor
        }
        e.keys = iz;
        delete e.normal;
        delete e.shift;
        delete e.alt;
        delete e.shift_alt;
        delete e.caps;
        delete e.shift_caps;
        delete e.cbk;
        return iz
    };
    var h = function () {
        var e = [];
        e[x] = t.modeNormal;
        e[X] = t.modeShift;
        e[k] = t.modeAlt;
        e[E] = t.modeShiftAlt;
        e[w] = t.modeCaps;
        e[r] = t.modeShiftCaps;
        e[z] = t.modeNormal;
        e[Z] = t.modeNormal;
        e[q] = t.modeShift;
        e[s] = t.modeShift;
        e[S] = t.modeCaps;
        e[W] = t.modeCaps;
        e[K] = t.modeShiftAltCaps;
        e[R] = t.modeShiftAltCaps;
        DOM.CSS(Y.desk).removeClass(e).addClass(e[V]);
    };
    var H = function (e) {
        var n = V ^ e;
        if (n & X) {
            j( !! (e & X), c.SHIFT);
        }
        if (n & z) {
            j( !! (e & z), c.ALT);
        }
        if (n & Z) {
            j( !! (e & Z), c.CTRL);
        }
        if (n & w) {
            J( !! (e & w), null, c.CAPS);
        }
        V = e
    };
    var j = function (e, n) {
        var N = document.getElementById(O + n + '_left'),
            m = document.getElementById(O + n + '_right');
        switch (0 + e) {
        case 0:
            N.className = DOM.CSS(m).removeClass(t.buttonDown).getClass();
            break;
        case 1:
            DOM.CSS(Y.desk).removeClass([t.hoverShift, t.hoverAlt]);
            N.className = DOM.CSS(m).addClass(t.buttonDown).getClass();
            break;
        case 2:
            if (c.SHIFT == n && V & X ^ X) {
                DOM.CSS(Y.desk).addClass(t.hoverShift);
            } else if (c.ALT == n && V ^ k) {
                DOM.CSS(Y.desk).addClass(t.hoverAlt);
            }
            N.className = DOM.CSS(m).addClass(t.buttonHover).getClass();
            break;
        case 3:
            if (c.SHIFT == n) {
                DOM.CSS(Y.desk).removeClass(t.hoverShift);
            } else if (c.ALT == n) {
                DOM.CSS(Y.desk).removeClass(t.hoverAlt);
            }
            N.className = DOM.CSS(m).removeClass(t.buttonHover).getClass();
            break
        }
    };
    var J = function (e, n, N) {
        var m = n || document.getElementById(O + N);
        if (m) {
            switch (0 + e) {
            case 0:
                DOM.CSS(m).removeClass(t.buttonDown);
                break;
            case 1:
                DOM.CSS(m).addClass(t.buttonDown);
                break;
            case 2:
                DOM.CSS(m).addClass(t.buttonHover);
                break;
            case 3:
                DOM.CSS(m).removeClass(t.buttonHover);
                break
            }
        }
    };
    var L = function (e, n) {
        var N = [e, 0];
        if (isFunction(T.charProcessor)) {
            var m = {
                shift: V & X,
                alt: V & z,
                ctrl: V & Z,
                caps: V & w
            };
            N = T.charProcessor(e, n, m);
        } else if (e == "\x08") {
            N = ['', 0]
        } else if (T.dk && n.length <= 1) {
            var M = l.test(e);
            e = e.replace(l, "");
            if (n && T.dk.hasOwnProperty(n)) {
                N[1] = 0;
                var ii = T.dk[n];
                idx = ii.indexOf(e) + 1;
                N[0] = idx ? ii.charAt(idx) : e
            } else if (M && T.dk.hasOwnProperty(e)) {
                N[1] = 1;
                N[0] = e
            }
        }
        return N
    };
    var b = function (T) {
        var e = document.createElement('span');
        document.body.appendChild(e);
        e.style.position = 'absolute';
        e.style.left = '-1000px';
        for (var n = 0, N = T.length, m = [], M, ii; n < N; n++) {
            M = T[n];
            m.push(["<div id='", O, n, "' class='", t.buttonUp, "'><a href='#'>", B(T, M, x, t.charNormal, e), B(T, M, X, t.charShift, e), B(T, M, k, t.charAlt, e), B(T, M, E, t.charShiftAlt, e), B(T, M, w, t.charCaps, e), B(T, M, r, t.charShiftCaps, e), "</a></div>"].join(""));
        }
        for (var n in _) {
            if (_.hasOwnProperty(n)) {
                M = _[n];
                ii = M.replace(/_.+/, '');
                m.splice(n, 0, ["<div id='", O, M, "' class='", t.buttonUp, "'><a title='", ii, "'", "><span class='title'>", ii, "</span>", "</a></div>"].join(""));
            }
        }
        document.body.removeChild(e);
        return m.join("").replace(/(<\w+)/g, "$1 unselectable='on' ");
    };
    var B = function (e, n, V, N, m) {
        var M = [],
            ii = n[V] || "",
            iI = l.test(ii) && e.dk && e.dk.hasOwnProperty(ii = ii.replace(l, ""));
        if (iI) N += " " + t.deadkey;
        if ((V == r && n[w] && ii.toLowerCase() == n[w].toLowerCase()) || (V == w && n[r] && ii.toLowerCase() == n[r].toLowerCase())) {
            N += " " + t.hiddenCaps
        }
        if ((V == X && n[x] && ii.toLowerCase() == n[x].toLowerCase()) || (V == x && n[X] && ii.toLowerCase() == n[X].toLowerCase())) {
            N += " " + t.hiddenShift
        }
        if ((V == X && n[r] && ii.toLowerCase() == n[r].toLowerCase()) || (V == r && n[X] && ii.toLowerCase() == n[X].toLowerCase())) {
            N += " " + t.hiddenShiftCaps
        }
        if ((V == w && n[x] && ii.toLowerCase() == n[x].toLowerCase()) || (V == x && n[w] && ii.toLowerCase() == n[w].toLowerCase())) {
            N += " " + t.hiddenCaps
        }
        if ((V == E && n[k] && ii.toLowerCase() == n[k].toLowerCase()) || (V == k && n[X] && ii.toLowerCase() == n[X].toLowerCase())) {
            N += " " + t.hiddenAlt
        }
        M.push("<span");
        if (N) {
            M.push(" class=\"" + N + "\"");
        }
        M.push(" >\xa0" + ii + "\xa0</span>");
        return M.join("");
    };
    (function () {
        Y.keyboard = document.createElement('div');
        Y.keyboard.unselectable = "on";
        Y.keyboard.id = 'virtualKeyboard';
        Y.keyboard.innerHTML = ("<div id=\"kbDesk\"><!-- --></div>" + "<select id=\"kb_langselector\"></select>" + "<select id=\"kb_mappingselector\"></select>" + '<div id="copyrights" nofocus="true"><a href="http://debugger.ru/projects/virtualkeyboard" target="_blank" title="&copy;2006-2009 Debugger.ru">VirtualKeyboard ' + i.$VERSION$ + '</a></div>').replace(/(<\w+)/g, "$1 unselectable='on' ");
        Y.desk = Y.keyboard.firstChild;
        var n = Y.keyboard.childNodes.item(1);
        EM.addEventListener(n, 'change', function (e) {
            i.switchLayout(this.value)
        });
        Y.langbox = n;
        var n = n.nextSibling,
            N = "";
        C = DocumentCookie.get('vk_mapping');
        if (!v.hasOwnProperty(C)) C = 'QWERTY Standard';
        for (var m in v) {
            var M = v[m].split("").map(function (e) {
                return e.charCodeAt(0)
            });
            M.splice(14, 0, 8, 9);
            M.splice(28, 0, 13, 20);
            M.splice(41, 0, 16);
            M.splice(52, 0, 16, 46, 17, 18, 32, 18, 17);
            var ii = M;
            M = [];
            for (var iI = 0, il = ii.length; iI < il; iI++) {
                M[ii[iI]] = iI
            }
            v[m] = M;
            ii = m.split(" ", 2);
            if (N.indexOf(N = ii[0]) != 0) {
                n.appendChild(document.createElement('optgroup'));
                n.lastChild.label = N
            }
            M = document.createElement('option');
            n.lastChild.appendChild(M);
            M.value = m;
            M.innerHTML = ii[1];
            M.selected = (m == C);
        }
        C = v[C];
        EM.addEventListener(n, 'change', d);
        EM.addEventListener(Y.desk, 'mousedown', a);
        EM.addEventListener(Y.desk, 'mouseup', P);
        EM.addEventListener(Y.desk, 'mouseover', A);
        EM.addEventListener(Y.desk, 'mouseout', A);
        EM.addEventListener(Y.desk, 'click', EM.preventDefaultAction);
        var io;
        var iO;
        var iQ;
        try {
            io = window.opener.location.search
        } catch (e) {};
        try {
            iO = window.dialogArguments.location.search
        } catch (e) {};
        try {
            iQ = window.top.location.search
        } catch (e) {};
        var i_ = getScriptQuery('vk_loader.js'),
            ic = parseQuery((io || iO || iQ || window.location.search).slice(1));
        o.layout = DocumentCookie.get('vk_layout') || ic.vk_layout || i_.vk_layout || o.layout;
        o.skin = ic.vk_skin || i_.vk_skin || o.skin;
        D(true);
    })();
};
VirtualKeyboard.Langs = {};
VirtualKeyboard.IME = new
function () {
    var i = this;
    var I = "<div id=\"VirtualKeyboardIME\"><table><tr><td class=\"IMEControl\"><div class=\"left\"><!-- --></div></td>" + "<td class=\"IMEControl IMEContent\"></td>" + "<td class=\"IMEControl\"><div class=\"right\"><!-- --></div></td></tr>" + "<tr><td class=\"IMEControl IMEInfo\" colspan=\"3\"><div class=\"showAll\"><div class=\"IMEPageCounter\"></div><div class=\"arrow\"></div></div></td></tr></div>";
    var l = null;
    var o = "";
    var O = 0;
    var Q = false;
    var _ = [];
    var c = null;
    var C = null;
    i.show = function (x) {
        c = VirtualKeyboard.getAttachedInput();
        var X = DOM.getWindow(c);
        if (C != X) {
            if (l && l.parentNode) {
                l.parentNode.removeChild(l);
            }
            C = X;
            V();
            C.document.body.appendChild(l);
        }
        l.className = i.css;
        if (x) i.setSuggestions(x);
        if (c && l && _.length > 0) {
            EM.addEventListener(c, 'blur', i.blurHandler);
            l.style.display = "block";
            i.updatePosition(c);
        } else if ('none' != l.style.display) {
            i.hide();
        }
    };
    i.hide = function (x) {
        if (l && 'none' != l.style.display) {
            l.style.display = "none";
            EM.removeEventListener(c, 'blur', i.blurHandler);
            if (c && DocumentSelection.getSelection(c) && !x) DocumentSelection.deleteSelection(c);
            c = null;
            _ = []
        }
    };
    i.updatePosition = function () {
        var x = DOM.getOffset(c);
        l.style.left = x.x + 'px';
        var X = DocumentSelection.getSelectionOffset(c);
        l.style.top = x.y + X.y + X.h - c.scrollTop + 'px'
    };
    i.setSuggestions = function (x) {
        if (!isArray(x)) return false;
        _ = x;
        O = 0;
        e();
        i.updatePosition(c);
    };
    i.getSuggestions = function (x) {
        return isNumber(x) ? _[x] : _
    };
    i.nextPage = function (x) {
        O = Math.max(Math.min(O + 1, (Math.ceil(_.length / 10)) - 1), 0);
        e();
    };
    i.prevPage = function (x) {
        O = Math.max(O - 1, 0);
        e();
    };
    i.getPage = function () {
        return O
    };
    i.getChar = function (x) {
        x = --x < 0 ? 9 : x;
        return _[i.getPage() * 10 + x]
    };
    i.isOpen = function () {
        return l && 'block' == l.style.display
    };
    i.blurHandler = function (x) {
        i.hide();
    };
    i.toggleShowAll = function (x) {
        var X = l.firstChild.rows[1].cells[0].lastChild;
        if (Q = !Q) {
            X.className = 'showPage'
        } else {
            X.className = 'showAll'
        }
        e();
    };
    i.showAllPages = function () {
        if (!Q) {
            i.toggleShowAll();
            return true
        }
        return false
    };
    i.showPaged = function () {
        if (Q) {
            i.toggleShowAll();
            return true
        }
        return false
    };
    var e = function () {
        var x = ['<table>'];
        for (var X = 0, z = Math.ceil(_.length / 10); X < z; X++) {
            if (Q || X == O) {
                x.push('<tr>');
                for (var Z = 0, w = X * 10; Z < 10 && !isUndefined(_[w + Z]); Z++) {
                    x.push("<td><a href=''>");
                    if (X == O) {
                        x.push("<b>&nbsp;" + ((Z + 1) % 10) + ": </b>");
                    } else {
                        x.push("<b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>");
                    }
                    x.push(_[w + Z] + "</a></td>");
                }
                x.push('</tr>');
            }
        }
        x.push('</table>');
        l.firstChild.rows[0].cells[1].innerHTML = x.join("");
        l.firstChild.rows[1].cells[0].firstChild.firstChild.innerHTML = (O + 1) + "/" + (0 + Q || Math.ceil(_.length / 10));
        var W = l.getElementsByTagName("*");
        for (var Z = 0, s = W.length; Z < s; Z++) {
            W[Z].unselectable = "on"
        }
    };
    var v = function (x) {
        var X = DOM.getParent(x.target, 'a');
        if (X) {
            DocumentSelection.insertAtCursor(c, X.lastChild.nodeValue);
            i.hide();
        }
        x.preventDefault();
        x.stopPropagation()
    };
    var V = function () {
        var x = C.document.createElement('div');
        x.innerHTML = I;
        l = x.firstChild;
        l.style.display = 'none';
        var X = l.firstChild.rows[0].cells[0],
            z = l.firstChild.rows[0].cells[2],
            Z = l.firstChild.rows[1].cells[0].lastChild;
        EM.addEventListener(X, 'mousedown', i.prevPage);
        EM.addEventListener(X, 'mousedown', EM.preventDefaultAction);
        EM.addEventListener(X, 'mousedown', EM.stopPropagationAction);
        EM.addEventListener(z, 'mousedown', i.nextPage);
        EM.addEventListener(z, 'mousedown', EM.preventDefaultAction);
        EM.addEventListener(z, 'mousedown', EM.stopPropagationAction);
        EM.addEventListener(Z, 'mousedown', i.toggleShowAll);
        EM.addEventListener(Z, 'mousedown', EM.preventDefaultAction);
        EM.addEventListener(Z, 'mousedown', EM.stopPropagationAction);
        l.unselectable = "on";
        var w = l.getElementsByTagName("*");
        for (var W = 0, s = w.length; W < s; W++) {
            w[W].unselectable = "on"
        }
        EM.addEventListener(l, 'mousedown', v);
        EM.addEventListener(l, 'mouseup', EM.preventDefaultAction);
        EM.addEventListener(l, 'click', EM.preventDefaultAction);
    }
};
VirtualKeyboard.Layout = function () {};
