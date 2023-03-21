!function (e) {
    var t = {};

    function n(o) {
        var r;
        return (t[o] || (r = t[o] = {i: o, l: !1, exports: {}}, e[o].call(r.exports, r, r.exports, n), r.l = !0, r)).exports
    }

    n.m = e, n.c = t, n.d = function (e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: o})
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {enumerable: !0, value: e}), 2 & t && "string" != typeof e) for (var r in e) n.d(o, r, function (t) {
            return e[t]
        }.bind(null, r));
        return o
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 111)
}([function (e, t) {
    e.exports = function (e) {
        return "function" == typeof e
    }
}, function (e, t, n) {
    (function (t) {
        function n(e) {
            return e && e.Math == Math && e
        }

        e.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof t && t) || function () {
            return this
        }() || Function("return this")()
    }).call(this, n(119))
}, function (e, t, n) {
    "use strict";

    function o() {
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.ChatterboxEvent = void 0, Object.defineProperty(o.prototype, "eventName", {
        get: function () {
            return Object.getPrototypeOf(this).constructor.eventName
        }, set: function (e) {
            if (e !== this.eventName) throw new Error("Cannot change eventName.")
        }, enumerable: !1, configurable: !0
    }), t.ChatterboxEvent = o
}, function (e, t, n) {
    n = n(33);
    var o = Function.prototype, r = o.bind, i = o.call, s = n && r.bind(i, i);
    e.exports = n ? function (e) {
        return e && s(e)
    } : function (e) {
        return e && function () {
            return i.apply(e, arguments)
        }
    }
}, function (e, t, n) {
    var o = n(1), r = n(75), i = n(13), s = n(76), a = n(73), c = n(72), u = r("wks"), l = o.Symbol, d = l && l.for, p = c ? l : l && l.withoutSetter || s;
    e.exports = function (e) {
        var t;
        return i(u, e) && (a || "string" == typeof u[e]) || (t = "Symbol." + e, a && i(l, e) ? u[e] = l[e] : u[e] = (c && d ? d : p)(t)), u[e]
    }
}, function (e, t, n) {
    var o = n(1), r = n(49).f, i = n(23), s = n(20), a = n(55), c = n(80), u = n(83);
    e.exports = function (e, t) {
        var n, l, d, p = e.target, h = e.global, f = e.stat, m = h ? o : f ? o[p] || a(p, {}) : (o[p] || {}).prototype;
        if (m) for (n in t) {
            if (l = t[n], d = e.dontCallGetSet ? (d = r(m, n)) && d.value : m[n], !u(h ? n : p + (f ? "." : "#") + n, e.forced) && void 0 !== d) {
                if (typeof l == typeof d) continue;
                c(l, d)
            }
            (e.sham || d && d.sham) && i(l, "sham", !0), s(m, n, l, e)
        }
    }
}, function (e, t) {
    e.exports = function (e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
}, function (e, t, n) {
    n = n(33);
    var o = Function.prototype.call;
    e.exports = n ? o.bind(o) : function () {
        return o.apply(o, arguments)
    }
}, function (e, t, n) {
    n = n(6), e.exports = !n((function () {
        return 7 != Object.defineProperty({}, 1, {
            get: function () {
                return 7
            }
        })[1]
    }))
}, function (e, t, n) {
    var o = n(11), r = String, i = TypeError;
    e.exports = function (e) {
        if (o(e)) return e;
        throw i(r(e) + " is not an object")
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.ChatterboxCommand = void 0;
    var o = n(18);

    function r() {
        this.commandId = o.Guid.newGuid()
    }

    Object.defineProperty(r.prototype, "commandName", {
        get: function () {
            return Object.getPrototypeOf(this).constructor.commandName
        }, enumerable: !1, configurable: !0
    }), t.ChatterboxCommand = r
}, function (e, t, n) {
    var o = n(0), r = "object" == typeof document && document.all;
    e.exports = void 0 === r && void 0 !== r ? function (e) {
        return "object" == typeof e ? null !== e : o(e) || e === r
    } : function (e) {
        return "object" == typeof e ? null !== e : o(e)
    }
}, function (e, t, n) {
    var o = n(1), r = n(0);
    e.exports = function (e, t) {
        return arguments.length < 2 ? (n = o[e], r(n) ? n : void 0) : o[e] && o[e][t];
        var n
    }
}, function (e, t, n) {
    var o = n(3), r = n(27), i = o({}.hasOwnProperty);
    e.exports = Object.hasOwn || function (e, t) {
        return i(r(e), t)
    }
}, function (e, t, n) {
    var o = n(0), r = n(38), i = TypeError;
    e.exports = function (e) {
        if (o(e)) return e;
        throw i(r(e) + " is not a function")
    }
}, function (e, t) {
    e.exports = !1
}, function (e, t, n) {
    var o = n(8), r = n(77), i = n(78), s = n(9), a = n(52), c = TypeError, u = Object.defineProperty, l = Object.getOwnPropertyDescriptor, d = "enumerable", p = "configurable", h = "writable";
    t.f = o ? i ? function (e, t, n) {
        var o;
        return s(e), t = a(t), s(n), "function" == typeof e && "prototype" === t && "value" in n && h in n && !n[h] && (o = l(e, t)) && o[h] && (e[t] = n.value, n = {configurable: (p in n ? n : o)[p], enumerable: (d in n ? n : o)[d], writable: !1}), u(e, t, n)
    } : u : function (e, t, n) {
        if (s(e), t = a(t), s(n), r) try {
            return u(e, t, n)
        } catch (e) {
        }
        if ("get" in n || "set" in n) throw c("Accessors not supported");
        return "value" in n && (e[t] = n.value), e
    }
}, function (e, t, n) {
    "use strict";

    function o(e) {
        var t, n;
        this.promise = new e((function (e, o) {
            if (void 0 !== t || void 0 !== n) throw i("Bad Promise constructor");
            t = e, n = o
        })), this.resolve = r(t), this.reject = r(n)
    }

    var r = n(14), i = TypeError;
    e.exports.f = function (e) {
        return new o(e)
    }
}, function (e, t, n) {
    "use strict";

    function o() {
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.Guid = void 0, o.newGuid = function () {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function (e) {
            var t = 16 * Math.random() | 0;
            return ("x" === e ? t : 3 & t | 8).toString(16)
        }))
    }, o.isNullOrEmpty = function (e) {
        return !e || e === this.empty
    }, o.isValid = function (e) {
        return !(!e || !e.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i))
    }, o.empty = "00000000-0000-0000-0000-000000000000", t.Guid = o
}, function (e, t, n) {
    "use strict";
    var o = this && this.__awaiter || function (e, t, n, o) {
        return new (n = n || Promise)((function (r, i) {
            function s(e) {
                try {
                    c(o.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function a(e) {
                try {
                    c(o.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function c(e) {
                var t;
                e.done ? r(e.value) : ((t = e.value) instanceof n ? t : new n((function (e) {
                    e(t)
                }))).then(s, a)
            }

            c((o = o.apply(e, t || [])).next())
        }))
    }, r = this && this.__generator || function (e, t) {
        var n, o, r, i = {
            label: 0, sent: function () {
                if (1 & r[0]) throw r[1];
                return r[1]
            }, trys: [], ops: []
        }, s = {next: a(0), throw: a(1), return: a(2)};
        return "function" == typeof Symbol && (s[Symbol.iterator] = function () {
            return this
        }), s;

        function a(s) {
            return function (a) {
                var c = [s, a];
                if (n) throw new TypeError("Generator is already executing.");
                for (; i;) try {
                    if (n = 1, o && (r = 2 & c[0] ? o.return : c[0] ? o.throw || ((r = o.return) && r.call(o), 0) : o.next) && !(r = r.call(o, c[1])).done) return r;
                    switch (o = 0, (c = r ? [2 & c[0], r.value] : c)[0]) {
                        case 0:
                        case 1:
                            r = c;
                            break;
                        case 4:
                            return i.label++, {value: c[1], done: !1};
                        case 5:
                            i.label++, o = c[1], c = [0];
                            continue;
                        case 7:
                            c = i.ops.pop(), i.trys.pop();
                            continue;
                        default:
                            if (!(r = 0 < (r = i.trys).length && r[r.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                i = 0;
                                continue
                            }
                            if (3 === c[0] && (!r || c[1] > r[0] && c[1] < r[3])) i.label = c[1]; else if (6 === c[0] && i.label < r[1]) i.label = r[1], r = c; else {
                                if (!(r && i.label < r[2])) {
                                    r[2] && i.ops.pop(), i.trys.pop();
                                    continue
                                }
                                i.label = r[2], i.ops.push(c)
                            }
                    }
                    c = t.call(e, i)
                } catch (a) {
                    c = [6, a], o = 0
                } finally {
                    n = r = 0
                }
                if (5 & c[0]) throw c[1];
                return {value: c[0] ? c[1] : void 0, done: !0}
            }
        }
    };
    Object.defineProperty(t, "__esModule", {value: !0}), t.readFileAsDataUrl = t.convertUrlsToAnchorTags = t.htmlEntities = t.tryParseJson = t.getElements = t.onDocumentReady = t.getUrlParameterByName = t.hideElement = t.showElement = void 0, t.showElement = function (e) {
        e.removeAttribute("hidden")
    }, t.hideElement = function (e) {
        e.setAttribute("hidden", "")
    }, t.getUrlParameterByName = function (e, t) {
        return t = t || window.location.href, e = e.replace(/[\[\]]/g, "\\$&"), (e = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)").exec(t)) ? e[2] ? decodeURIComponent(e[2].replace(/\+/g, " ")) : "" : null
    }, t.onDocumentReady = function (e) {
        "interactive" === document.readyState || "complete" === document.readyState ? e() : document.addEventListener("DOMContentLoaded", (function () {
            e()
        }))
    }, t.getElements = function (e) {
        var t = new e;
        return Object.keys(t).forEach((function (e) {
            return t[e] = window.document.getElementById(e)
        })), t
    }, t.tryParseJson = function (e) {
        try {
            return JSON.parse(e)
        } catch (e) {
            return null
        }
    }, t.htmlEntities = function (e) {
        return (e || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
    }, t.convertUrlsToAnchorTags = function (e) {
        var t, n;
        return "URL" in window ? (/:/.test(t = e || "") && (n = function (e, t, n) {
            var o;
            try {
                o = new URL(e)
            } catch (e) {
            }
            o && (o.host || o.pathname) && (n[t] = '<a href="' + o.href + '" target="_blank">' + o.href + "</a>")
        }, [" ", "\r\n", "\n"].forEach((function (e) {
            var o = t.split(e);
            o.forEach(n), t = o.join(e)
        }))), t) : e
    }, t.readFileAsDataUrl = function (e) {
        return o(this, void 0, void 0, (function () {
            return r(this, (function (t) {
                return [2, new Promise((function (t, n) {
                    var o = new FileReader;
                    o.onload = function (e) {
                        e = e.target.result, t(e)
                    }, o.onerror = function () {
                        return n()
                    }, o.readAsDataURL(e)
                }))]
            }))
        }))
    }
}, function (e, t, n) {
    var o = n(0), r = n(16), i = n(122), s = n(55);
    e.exports = function (e, t, n, a) {
        var c = (a = a || {}).enumerable, u = void 0 !== a.name ? a.name : t;
        if (o(n) && i(n, u, a), a.global) c ? e[t] = n : s(t, n); else {
            try {
                a.unsafe ? e[t] && (c = !0) : delete e[t]
            } catch (e) {
            }
            c ? e[t] = n : r.f(e, t, {value: n, enumerable: !1, configurable: !a.nonConfigurable, writable: !a.nonWritable})
        }
        return e
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.DispatchType = void 0, (t = t.DispatchType || (t.DispatchType = {}))[t.ToggleWidgetOpen = 0] = "ToggleWidgetOpen", t[t.ToggleWidgetClosed = 1] = "ToggleWidgetClosed", t[t.ToggleWidgetHidden = 2] = "ToggleWidgetHidden", t[t.NewMessage = 3] = "NewMessage", t[t.WidgetReady = 4] = "WidgetReady", t[t.WidgetStarted = 5] = "WidgetStarted", t[t.SetLengthUnit = 6] = "SetLengthUnit", t[t.SetClosedWidth = 7] = "SetClosedWidth", t[t.SetClosedHeight = 8] = "SetClosedHeight", t[t.SetOpenWidth = 9] = "SetOpenWidth", t[t.SetHeight = 10] = "SetHeight", t[t.SetPosition = 11] = "SetPosition", t[t.SetConversationId = 12] = "SetConversationId", t[t.SetWebToken = 13] = "SetWebToken", t[t.SetRegistrationDefaults = 14] = "SetRegistrationDefaults", t[t.SetFontSize = 15] = "SetFontSize", t[t.SetBorderRadius = 16] = "SetBorderRadius", t[t.SetSoundEnabled = 17] = "SetSoundEnabled", t[t.SetMessageInProgess = 18] = "SetMessageInProgess", t[t.SetLastReadMessageId = 19] = "SetLastReadMessageId", t[t.SetWidgetViewMode = 20] = "SetWidgetViewMode", t[t.SetWindowWidth = 21] = "SetWindowWidth", t[t.SetWindowHeight = 22] = "SetWindowHeight", t[t.Reload = 23] = "Reload", t[t.ReloadIframe = 24] = "ReloadIframe", t[t.OpenWindow = 25] = "OpenWindow", t[t.CloseWindow = 26] = "CloseWindow", t[t.OpenWidget = 27] = "OpenWidget", t[t.CloseWidget = 28] = "CloseWidget", t[t.HideWidget = 29] = "HideWidget", t[t.EndConversation = 30] = "EndConversation", t[t.StartConversation = 31] = "StartConversation", t[t.SkipCache = 32] = "SkipCache", t[t.WidgetConfiguration = 33] = "WidgetConfiguration", t[t.ConversationStarted = 34] = "ConversationStarted", t[t.ConversationEnded = 35] = "ConversationEnded"
}, function (e, t) {
    e.exports = function (e, t) {
        return {enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t}
    }
}, function (e, t, n) {
    var o = n(8), r = n(16), i = n(22);
    e.exports = o ? function (e, t, n) {
        return r.f(e, t, i(1, n))
    } : function (e, t, n) {
        return e[t] = n, e
    }
}, function (e, t) {
    e.exports = function (e) {
        try {
            return {error: !1, value: e()}
        } catch (e) {
            return {error: !0, value: e}
        }
    }
}, function (e, t, n) {
    n = n(1), e.exports = n.Promise
}, function (e, t, n) {
    var o = n(50), r = n(51);
    e.exports = function (e) {
        return o(r(e))
    }
}, function (e, t, n) {
    var o = n(51), r = Object;
    e.exports = function (e) {
        return r(o(e))
    }
}, function (e, t, n) {
    function o(e, t) {
        this.stopped = e, this.result = t
    }

    var r = n(29), i = n(7), s = n(9), a = n(38), c = n(86), u = n(41), l = n(36), d = n(87), p = n(63), h = n(88), f = TypeError, m = o.prototype;
    e.exports = function (e, t, n) {
        function v(e) {
            return g && h(g, "normal", e), new o(!0, e)
        }

        function y(e) {
            return O ? (s(e), P ? A(e[0], e[1], v) : A(e[0], e[1])) : P ? A(e, v) : A(e)
        }

        var g, b, w, C, S, _, x = n && n.that, O = !(!n || !n.AS_ENTRIES), T = !(!n || !n.IS_RECORD), E = !(!n || !n.IS_ITERATOR), P = !(!n || !n.INTERRUPTED), A = r(t, x);
        if (T) g = e.iterator; else if (E) g = e; else {
            if (!(n = p(e))) throw f(a(e) + " is not iterable");
            if (c(n)) {
                for (b = 0, w = u(e); b < w; b++) if ((C = y(e[b])) && l(m, C)) return C;
                return new o(!1)
            }
            g = d(e, n)
        }
        for (S = (T ? e : g).next; !(_ = i(S, g)).done;) {
            try {
                C = y(_.value)
            } catch (e) {
                h(g, "throw", e)
            }
            if ("object" == typeof C && C && l(m, C)) return C
        }
        return new o(!1)
    }
}, function (e, t, n) {
    var o = n(3), r = n(14), i = n(33), s = o(o.bind);
    e.exports = function (e, t) {
        return r(e), void 0 === t ? e : i ? s(e, t) : function () {
            return e.apply(t, arguments)
        }
    }
}, function (e, t) {
    e.exports = {}
}, function (e, t, n) {
    var o = n(1), r = n(25), i = n(0), s = n(83), a = n(56), c = n(4), u = n(153), l = n(97), d = n(15), p = n(74), h = r && r.prototype, f = c("species"), m = !1, v = i(o.PromiseRejectionEvent);
    n = s("Promise", (function () {
        var e = a(r), t = e !== String(r);
        if (!t && 66 === p) return !0;
        if (d && (!h.catch || !h.finally)) return !0;
        if (!p || p < 51 || !/native code/.test(e)) {
            function n(e) {
                e((function () {
                }), (function () {
                }))
            }

            if (((e = new r((function (e) {
                e(1)
            }))).constructor = {})[f] = n, !(m = e.then((function () {
            })) instanceof n)) return !0
        }
        return !t && (u || l) && !v
    }));
    e.exports = {CONSTRUCTOR: n, REJECTION_EVENT: v, SUBCLASSING: m}
}, function (e, t, n) {
    "use strict";

    function o(e) {
        this.receiverWindow = e
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.DispatcherService = void 0, o.prototype.dispatch = function (e, t) {
        this.receiverWindow.postMessage(JSON.stringify({command: e, parameter: t}), "*")
    }, t.DispatcherService = o
}, function (e, t, n) {
    n = n(6), e.exports = !n((function () {
        var e = function () {
        }.bind();
        return "function" != typeof e || e.hasOwnProperty("prototype")
    }))
}, function (e, t, n) {
    var o = (n = n(3))({}.toString), r = n("".slice);
    e.exports = function (e) {
        return r(o(e), 8, -1)
    }
}, function (e, t) {
    e.exports = function (e) {
        return null == e
    }
}, function (e, t, n) {
    n = n(3), e.exports = n({}.isPrototypeOf)
}, function (e, t, n) {
    n = n(12), e.exports = n("navigator", "userAgent") || ""
}, function (e, t) {
    var n = String;
    e.exports = function (e) {
        try {
            return n(e)
        } catch (e) {
            return "Object"
        }
    }
}, function (e, t, n) {
    var o = n(1), r = (n = n(11), o.document), i = n(r) && n(r.createElement);
    e.exports = function (e) {
        return i ? r.createElement(e) : {}
    }
}, function (e, t, n) {
    var o, r, i, s, a, c, u, l, d = n(123), p = n(1), h = n(3), f = n(11), m = n(23), v = n(13), y = n(54), g = n(57), b = (n = n(58), "Object already initialized"), w = p.TypeError;
    p = p.WeakMap;
    u = d || y.state ? (o = y.state || (y.state = new p), r = h(o.get), i = h(o.has), s = h(o.set), a = function (e, t) {
        if (i(o, e)) throw w(b);
        return t.facade = e, s(o, e, t), t
    }, c = function (e) {
        return r(o, e) || {}
    }, function (e) {
        return i(o, e)
    }) : (n[l = g("state")] = !0, a = function (e, t) {
        if (v(e, l)) throw w(b);
        return t.facade = e, m(e, l, t), t
    }, c = function (e) {
        return v(e, l) ? e[l] : {}
    }, function (e) {
        return v(e, l)
    }), e.exports = {
        set: a, get: c, has: u, enforce: function (e) {
            return u(e) ? c(e) : a(e, {})
        }, getterFor: function (e) {
            return function (t) {
                if (f(t) && (t = c(t)).type === e) return t;
                throw w("Incompatible receiver, " + e + " required")
            }
        }
    }
}, function (e, t, n) {
    var o = n(129);
    e.exports = function (e) {
        return o(e.length)
    }
}, function (e, t, n) {
    function o() {
    }

    var r, i = n(9), s = n(132), a = n(60), c = n(58), u = n(85), l = n(39), d = (n = n(57), "prototype"), p = "script", h = n("IE_PROTO"), f = function (e) {
        return "<script>" + e + "</" + p + ">"
    }, m = function () {
        try {
            r = new ActiveXObject("htmlfile")
        } catch (e) {
        }
        m = "undefined" == typeof document || document.domain && r ? function (e) {
            e.write(f("")), e.close();
            var t = e.parentWindow.Object;
            return e = null, t
        }(r) : (t = "javascript:", (e = l("iframe")).style.display = "none", u.appendChild(e), e.src = String(t), (t = e.contentWindow.document).open(), t.write(f("document.F=Object")), t.close(), t.F);
        for (var e, t, n = a.length; n--;) delete m[d][a[n]];
        return m()
    };
    c[h] = !0, e.exports = Object.create || function (e, t) {
        var n;
        return null !== e ? (o[d] = i(e), n = new o, o[d] = null, n[h] = e) : n = m(), void 0 === t ? n : s.f(n, t)
    }
}, function (e, t, n) {
    var o = n(64), r = n(0), i = n(34), s = n(4)("toStringTag"), a = Object, c = "Arguments" == i(function () {
        return arguments
    }());
    e.exports = o ? i : function (e) {
        var t;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (t = function (e, t) {
            try {
                return e[t]
            } catch (e) {
            }
        }(e = a(e), s)) ? t : c ? i(e) : "Object" == (t = i(e)) && r(e.callee) ? "Arguments" : t
    }
}, function (e, t, n) {
    var o = n(34);
    n = n(1);
    e.exports = "process" == o(n.process)
}, function (e, t, n) {
    "use strict";
    var o = this && this.__createBinding || (Object.create ? function (e, t, n, o) {
        void 0 === o && (o = n), Object.defineProperty(e, o, {
            enumerable: !0, get: function () {
                return t[n]
            }
        })
    } : function (e, t, n, o) {
        e[o = void 0 === o ? n : o] = t[n]
    }), r = this && this.__exportStar || function (e, t) {
        for (var n in e) "default" === n || t.hasOwnProperty(n) || o(t, e, n)
    }, i = (Object.defineProperty(t, "__esModule", {value: !0}), r(n(198), t), r(n(104), t), n(221)), s = (Object.defineProperty(t, "RegistrationField", {
        enumerable: !0, get: function () {
            return i.RegistrationField
        }
    }), n(222));
    Object.defineProperty(t, "ConnectionState", {
        enumerable: !0, get: function () {
            return s.ConnectionState
        }
    })
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.environment = void 0, t.environment = void 0, t.environment = {
        bootstrapperUrl: "js/zisson/chat2.zisson.no-index.html",
        socketUrl: "wss://skravle.zisson.no/ws-widget",
        apiUrlConfig: "https://skravle.zisson.no/api/chat/config",
        apiUrlHistory: "https://skravle.zisson.no/api/chat/conversation",
        apiUrlRequestReport: "https://skravle.zisson.no/api/chat/request-report",
        environment: "production"
    }
}, function (e, t, n) {
    "use strict";
    var o;
    Object.defineProperty(t, "__esModule", {value: !0}), t.WidgetPosition = t.customMimeType = t.OptionType = t.TextType = t.MessageType = void 0, (o = t.MessageType || (t.MessageType = {}))[o.Agent = 0] = "Agent", o[o.EndUser = 1] = "EndUser", o[o.System = 2] = "System", (o = t.TextType || (t.TextType = {}))[o.Header = 1] = "Header", o[o.LogoTitle = 2] = "LogoTitle", o[o.RegistrationInfo = 3] = "RegistrationInfo", o[o.RegistrationFooter = 4] = "RegistrationFooter", o[o.RegistrationStart = 5] = "RegistrationStart", o[o.WelcomeMessage = 6] = "WelcomeMessage", o[o.ChatInputPlaceholder = 7] = "ChatInputPlaceholder", o[o.ClosedTitle = 8] = "ClosedTitle", o[o.ClosedBody = 9] = "ClosedBody", o[o.RequestReportEmail = 11] = "RequestReportEmail", o[o.ConversationEnded = 14] = "ConversationEnded", o[o.RequestReportWasSent = 15] = "RequestReportWasSent", o[o.StartNewChat = 16] = "StartNewChat", o[o.ConversationJoined = 17] = "ConversationJoined", o[o.QueuePosition = 18] = "QueuePosition", o[o.ConversationLeft = 19] = "ConversationLeft", o[o.ConversationQueued = 20] = "ConversationQueued", o[o.Credits = 22] = "Credits", o[o.DefaultSystemName = 24] = "DefaultSystemName", o[o.BotSorry = 25] = "BotSorry", o[o.AcceptTermsCheckboxLable = 26] = "AcceptTermsCheckboxLable", o[o.AcceptTermsLinkText = 27] = "AcceptTermsLinkText", o[o.TermsLink = 28] = "TermsLink", o[o.TermsButton = 29] = "TermsButton", o[o.AvailableAgentsHeader = 30] = "AvailableAgentsHeader", o[o.AvailableAgentsBody = 31] = "AvailableAgentsBody", o[o.TranscriptEmailInputPlaceholder = 34] = "TranscriptEmailInputPlaceholder", (t.OptionType || (t.OptionType = {})).textXUri = "text/x-uri", (o = t.customMimeType || (t.customMimeType = {})).videoYoutube = "video/youtube", o.videoVimeo = "video/vimeo", o.videoWistia = "video/wistia", o.videoMsStream = "video/ms_stream", (o = t.WidgetPosition || (t.WidgetPosition = {}))[o.TopLeft = 0] = "TopLeft", o[o.TopRight = 1] = "TopRight", o[o.BottomRight = 2] = "BottomRight", o[o.BottomLeft = 3] = "BottomLeft"
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.WidgetViewMode = void 0, (t = t.WidgetViewMode || (t.WidgetViewMode = {}))[t.Unknown = 0] = "Unknown", t[t.Open = 1] = "Open", t[t.Closed = 2] = "Closed", t[t.Hidden = 3] = "Hidden"
}, function (e, t, n) {
    var o = n(8), r = n(7), i = n(70), s = n(22), a = n(26), c = n(52), u = n(13), l = n(77), d = Object.getOwnPropertyDescriptor;
    t.f = o ? d : function (e, t) {
        if (e = a(e), t = c(t), l) try {
            return d(e, t)
        } catch (e) {
        }
        if (u(e, t)) return s(!r(i.f, e, t), e[t])
    }
}, function (e, t, n) {
    var o = n(3), r = n(6), i = n(34), s = Object, a = o("".split);
    e.exports = r((function () {
        return !s("z").propertyIsEnumerable(0)
    })) ? function (e) {
        return "String" == i(e) ? a(e, "") : s(e)
    } : s
}, function (e, t, n) {
    var o = n(35), r = TypeError;
    e.exports = function (e) {
        if (o(e)) throw r("Can't call method on " + e);
        return e
    }
}, function (e, t, n) {
    var o = n(120), r = n(71);
    e.exports = function (e) {
        return e = o(e, "string"), r(e) ? e : e + ""
    }
}, function (e, t, n) {
    var o = n(14), r = n(35);
    e.exports = function (e, t) {
        return e = e[t], r(e) ? void 0 : o(e)
    }
}, function (e, t, n) {
    var o = n(1), r = (n = n(55), "__core-js_shared__");
    o = o[r] || n(r, {});
    e.exports = o
}, function (e, t, n) {
    var o = n(1), r = Object.defineProperty;
    e.exports = function (e, t) {
        try {
            r(o, e, {value: t, configurable: !0, writable: !0})
        } catch (n) {
            o[e] = t
        }
        return t
    }
}, function (e, t, n) {
    var o = n(3), r = n(0), i = (n = n(54), o(Function.toString));
    r(n.inspectSource) || (n.inspectSource = function (e) {
        return i(e)
    }), e.exports = n.inspectSource
}, function (e, t, n) {
    var o = n(75), r = n(76), i = o("keys");
    e.exports = function (e) {
        return i[e] || (i[e] = r(e))
    }
}, function (e, t) {
    e.exports = {}
}, function (e, t, n) {
    var o = n(128);
    e.exports = function (e) {
        return (e = +e) != e || 0 == e ? 0 : o(e)
    }
}, function (e, t) {
    e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
}, function (e, t, n) {
    var o = n(13), r = n(0), i = n(27), s = n(57), a = (n = n(130), s("IE_PROTO")), c = Object, u = c.prototype;
    e.exports = n ? c.getPrototypeOf : function (e) {
        var t;
        e = i(e);
        return o(e, a) ? e[a] : (t = e.constructor, r(t) && e instanceof t ? t.prototype : e instanceof c ? u : null)
    }
}, function (e, t, n) {
    var o = n(3), r = n(9), i = n(131);
    e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
        var e, t = !1, n = {};
        try {
            (e = o(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set))(n, []), t = n instanceof Array
        } catch (n) {
        }
        return function (n, o) {
            return r(n), i(o), t ? e(n, o) : n.__proto__ = o, n
        }
    }() : void 0)
}, function (e, t, n) {
    var o = n(43), r = n(53), i = n(35), s = n(30), a = n(4)("iterator");
    e.exports = function (e) {
        if (!i(e)) return r(e, a) || r(e, "@@iterator") || s[o(e)]
    }
}, function (e, t, n) {
    var o = {};
    o[n(4)("toStringTag")] = "z", e.exports = "[object z]" === String(o)
}, function (e, t, n) {
    var o = n(43), r = String;
    e.exports = function (e) {
        if ("Symbol" === o(e)) throw TypeError("Cannot convert a Symbol value to a string");
        return r(e)
    }
}, function (e, t, n) {
    var o = n(16).f, r = n(13), i = n(4)("toStringTag");
    e.exports = function (e, t, n) {
        (e = e && !n ? e.prototype : e) && !r(e, i) && o(e, i, {configurable: !0, value: t})
    }
}, function (e, t, n) {
    function o() {
    }

    function r(e) {
        if (!c(e)) return !1;
        try {
            return h(o, p, e), !0
        } catch (e) {
            return !1
        }
    }

    function i(e) {
        if (!c(e)) return !1;
        switch (u(e)) {
            case"AsyncFunction":
            case"GeneratorFunction":
            case"AsyncGeneratorFunction":
                return !1
        }
        try {
            return v || !!m(f, d(e))
        } catch (e) {
            return !0
        }
    }

    var s = n(3), a = n(6), c = n(0), u = n(43), l = n(12), d = n(56), p = [], h = l("Reflect", "construct"), f = /^\s*(?:class|function)\b/, m = s(f.exec), v = !f.exec(o);
    i.sham = !0, e.exports = !h || a((function () {
        var e;
        return r(r.call) || !r(Object) || !r((function () {
            e = !0
        })) || e
    })) ? i : r
}, function (e, t, n) {
    n = n(1), e.exports = n
}, function (e, t, n) {
    n(118)
}, function (e, t, n) {
    "use strict";
    var o = {}.propertyIsEnumerable, r = Object.getOwnPropertyDescriptor, i = r && !o.call({1: 2}, 1);
    t.f = i ? function (e) {
        return !!(e = r(this, e)) && e.enumerable
    } : o
}, function (e, t, n) {
    var o = n(12), r = n(0), i = n(36), s = (n = n(72), Object);
    e.exports = n ? function (e) {
        return "symbol" == typeof e
    } : function (e) {
        var t = o("Symbol");
        return r(t) && i(t.prototype, s(e))
    }
}, function (e, t, n) {
    n = n(73), e.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator
}, function (e, t, n) {
    var o = n(74);
    n = n(6);
    e.exports = !!Object.getOwnPropertySymbols && !n((function () {
        var e = Symbol();
        return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && o && o < 41
    }))
}, function (e, t, n) {
    var o, r, i = n(1), s = (n = n(37), i.process);
    i = i.Deno;
    !(r = (i = (s = s && s.versions || i && i.version) && s.v8) ? 0 < (o = i.split("."))[0] && o[0] < 4 ? 1 : +(o[0] + o[1]) : r) && n && (!(o = n.match(/Edge\/(\d+)/)) || 74 <= o[1]) && (o = n.match(/Chrome\/(\d+)/)) && (r = +o[1]), e.exports = r
}, function (e, t, n) {
    var o = n(15), r = n(54);
    (e.exports = function (e, t) {
        return r[e] || (r[e] = void 0 !== t ? t : {})
    })("versions", []).push({version: "3.25.1", mode: o ? "pure" : "global", copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.25.1/LICENSE", source: "https://github.com/zloirock/core-js"})
}, function (e, t, n) {
    n = n(3);
    var o = 0, r = Math.random(), i = n(1..toString);
    e.exports = function (e) {
        return "Symbol(" + (void 0 === e ? "" : e) + ")_" + i(++o + r, 36)
    }
}, function (e, t, n) {
    var o = n(8), r = n(6), i = n(39);
    e.exports = !o && !r((function () {
        return 7 != Object.defineProperty(i("div"), "a", {
            get: function () {
                return 7
            }
        }).a
    }))
}, function (e, t, n) {
    var o = n(8);
    n = n(6);
    e.exports = o && n((function () {
        return 42 != Object.defineProperty((function () {
        }), "prototype", {value: 42, writable: !1}).prototype
    }))
}, function (e, t, n) {
    var o = n(8), r = (n = n(13), Function.prototype), i = o && Object.getOwnPropertyDescriptor, s = (n = n(r, "name")) && "something" === function () {
    }.name;
    o = n && (!o || i(r, "name").configurable);
    e.exports = {EXISTS: n, PROPER: s, CONFIGURABLE: o}
}, function (e, t, n) {
    var o = n(13), r = n(124), i = n(49), s = n(16);
    e.exports = function (e, t, n) {
        for (var a = r(t), c = s.f, u = i.f, l = 0; l < a.length; l++) {
            var d = a[l];
            o(e, d) || n && o(n, d) || c(e, d, u(t, d))
        }
    }
}, function (e, t, n) {
    var o = n(3), r = n(13), i = n(26), s = n(126).indexOf, a = n(58), c = o([].push);
    e.exports = function (e, t) {
        var n, o = i(e), u = 0, l = [];
        for (n in o) !r(a, n) && r(o, n) && c(l, n);
        for (; t.length > u;) !r(o, n = t[u++]) || ~s(l, n) || c(l, n);
        return l
    }
}, function (e, t) {
    t.f = Object.getOwnPropertySymbols
}, function (e, t, n) {
    function o(e, t) {
        return (e = c[a(e)]) == l || e != u && (i(t) ? r(t) : !!t)
    }

    var r = n(6), i = n(0), s = /#|\.prototype\./, a = o.normalize = function (e) {
        return String(e).replace(s, ".").toLowerCase()
    }, c = o.data = {}, u = o.NATIVE = "N", l = o.POLYFILL = "P";
    e.exports = o
}, function (e, t, n) {
    var o = n(81), r = n(60);
    e.exports = Object.keys || function (e) {
        return o(e, r)
    }
}, function (e, t, n) {
    n = n(12), e.exports = n("document", "documentElement")
}, function (e, t, n) {
    var o = n(4), r = n(30), i = o("iterator"), s = Array.prototype;
    e.exports = function (e) {
        return void 0 !== e && (r.Array === e || s[i] === e)
    }
}, function (e, t, n) {
    var o = n(7), r = n(14), i = n(9), s = n(38), a = n(63), c = TypeError;
    e.exports = function (e, t) {
        var n = arguments.length < 2 ? a(e) : t;
        if (r(n)) return i(o(n, e));
        throw c(s(e) + " is not iterable")
    }
}, function (e, t, n) {
    var o = n(7), r = n(9), i = n(53);
    e.exports = function (e, t, n) {
        var s, a;
        r(e);
        try {
            if (!(s = i(e, "return"))) {
                if ("throw" === t) throw n;
                return n
            }
            s = o(s, e)
        } catch (e) {
            a = !0, s = e
        }
        if ("throw" === t) throw n;
        if (a) throw s;
        return r(s), n
    }
}, function (e, t, n) {
    "use strict";
    var o = n(26), r = n(90), i = n(30), s = n(40), a = n(16).f, c = n(91), u = n(93), l = n(15), d = (n = n(8), "Array Iterator"), p = s.set, h = s.getterFor(d);
    e.exports = c(Array, "Array", (function (e, t) {
        p(this, {type: d, target: o(e), index: 0, kind: t})
    }), (function () {
        var e = h(this), t = e.target, n = e.kind, o = e.index++;
        return !t || o >= t.length ? (e.target = void 0, u(void 0, !0)) : u("keys" == n ? o : "values" == n ? t[o] : [o, t[o]], !1)
    }), "values"), s = i.Arguments = i.Array;
    if (r("keys"), r("values"), r("entries"), !l && n && "values" !== s.name) try {
        a(s, "name", {value: "values"})
    } catch (e) {
    }
}, function (e, t, n) {
    var o = n(4), r = n(42), i = (n = n(16).f, o("unscopables")), s = Array.prototype;
    null == s[i] && n(s, i, {configurable: !0, value: r(null)}), e.exports = function (e) {
        s[i][e] = !0
    }
}, function (e, t, n) {
    "use strict";

    function o() {
        return this
    }

    var r = n(5), i = n(7), s = n(15), a = n(79), c = n(0), u = n(137), l = n(61), d = n(62), p = n(66), h = n(23), f = n(20), m = n(4), v = n(30), y = (n = n(92), a.PROPER), g = a.CONFIGURABLE, b = n.IteratorPrototype, w = n.BUGGY_SAFARI_ITERATORS, C = m("iterator"), S = "values", _ = "entries";
    e.exports = function (e, t, n, a, m, x, O) {
        function T(e) {
            if (e === m && j) return j;
            if (!w && e in M) return M[e];
            switch (e) {
                case"keys":
                case S:
                case _:
                    return function () {
                        return new n(this, e)
                    }
            }
            return function () {
                return new n(this)
            }
        }

        u(n, t, a);
        a = t + " Iterator";
        var E, P, A = !1, M = e.prototype, I = M[C] || M["@@iterator"] || m && M[m], j = !w && I || T(m), L = "Array" == t && M.entries || I;
        if (L && (L = l(L.call(new e))) !== Object.prototype && L.next && (s || l(L) === b || (d ? d(L, b) : c(L[C]) || f(L, C, o)), p(L, a, !0, !0), s && (v[a] = o)), y && m == S && I && I.name !== S && (!s && g ? h(M, "name", S) : (A = !0, j = function () {
            return i(I, this)
        })), m) if (E = {values: T(S), keys: x ? j : T("keys"), entries: T(_)}, O) for (P in E) !w && !A && P in M || f(M, P, E[P]); else r({target: t, proto: !0, forced: w || A}, E);
        return s && !O || M[C] === j || f(M, C, j, {name: m}), v[t] = j, E
    }
}, function (e, t, n) {
    "use strict";
    var o, r, i = n(6), s = n(0), a = n(11), c = n(42), u = n(61), l = n(20), d = n(4), p = (n = n(15), d("iterator"));
    d = !1;
    [].keys && ("next" in (r = [].keys()) ? (u = u(u(r))) !== Object.prototype && (o = u) : d = !0), !a(o) || i((function () {
        var e = {};
        return o[p].call(e) !== e
    })) ? o = {} : n && (o = c(o)), s(o[p]) || l(o, p, (function () {
        return this
    })), e.exports = {IteratorPrototype: o, BUGGY_SAFARI_ITERATORS: d}
}, function (e, t) {
    e.exports = function (e, t) {
        return {value: e, done: t}
    }
}, function (e, t, n) {
    var o = n(9), r = n(144), i = n(35), s = n(4)("species");
    e.exports = function (e, t) {
        return void 0 === (e = o(e).constructor) || i(e = o(e)[s]) ? t : r(e)
    }
}, function (e, t, n) {
    var o, r, i = n(1), s = n(145), a = n(29), c = n(0), u = n(13), l = n(6), d = n(85), p = n(146), h = n(39), f = n(147), m = n(96), v = (n = n(44), i.setImmediate), y = i.clearImmediate, g = i.process, b = i.Dispatch, w = i.Function, C = i.MessageChannel, S = i.String, _ = 0, x = {}, O = "onreadystatechange";
    try {
        o = i.location
    } catch (e) {
    }

    function T(e) {
        return function () {
            A(e)
        }
    }

    function E(e) {
        A(e.data)
    }

    function P(e) {
        i.postMessage(S(e), o.protocol + "//" + o.host)
    }

    var A = function (e) {
        var t;
        u(x, e) && (t = x[e], delete x[e], t())
    };
    v && y || (v = function (e) {
        f(arguments.length, 1);
        var t = c(e) ? e : w(e), n = p(arguments, 1);
        return x[++_] = function () {
            s(t, void 0, n)
        }, r(_), _
    }, y = function (e) {
        delete x[e]
    }, n ? r = function (e) {
        g.nextTick(T(e))
    } : b && b.now ? r = function (e) {
        b.now(T(e))
    } : C && !m ? (m = (n = new C).port2, n.port1.onmessage = E, r = a(m.postMessage, m)) : i.addEventListener && c(i.postMessage) && !i.importScripts && o && "file:" !== o.protocol && !l(P) ? (r = P, i.addEventListener("message", E, !1)) : r = O in h("script") ? function (e) {
        d.appendChild(h("script"))[O] = function () {
            d.removeChild(this), A(e)
        }
    } : function (e) {
        setTimeout(T(e), 0)
    }), e.exports = {set: v, clear: y}
}, function (e, t, n) {
    n = n(37), e.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(n)
}, function (e, t) {
    e.exports = "object" == typeof Deno && Deno && "object" == typeof Deno.version
}, function (e, t, n) {
    var o = n(25), r = n(99);
    n = n(31).CONSTRUCTOR;
    e.exports = n || !r((function (e) {
        o.all(e).then(void 0, (function () {
        }))
    }))
}, function (e, t, n) {
    var o = n(4)("iterator"), r = !1;
    try {
        var i = 0, s = {
            next: function () {
                return {done: !!i++}
            }, return: function () {
                r = !0
            }
        };
        s[o] = function () {
            return this
        }, Array.from(s, (function () {
            throw 2
        }))
    } catch (e) {
    }
    e.exports = function (e, t) {
        if (!t && !r) return !1;
        var n = !1;
        try {
            var i = {};
            i[o] = function () {
                return {
                    next: function () {
                        return {done: n = !0}
                    }
                }
            }, e(i)
        } catch (e) {
        }
        return n
    }
}, function (e, t, n) {
    var o = n(9), r = n(11), i = n(17);
    e.exports = function (e, t) {
        return o(e), r(t) && t.constructor === e ? t : ((0, (e = i.f(e)).resolve)(t), e.promise)
    }
}, function (e, t, n) {
    "use strict";
    var o = n(5), r = n(7), i = n(14), s = n(17), a = n(24), c = n(28);
    o({target: "Promise", stat: !0}, {
        allSettled: function (e) {
            var t = this, n = s.f(t), o = n.resolve, u = n.reject, l = a((function () {
                var n = i(t.resolve), s = [], a = 0, u = 1;
                c(e, (function (e) {
                    var i = a++, c = !1;
                    u++, r(n, t, e).then((function (e) {
                        c || (c = !0, s[i] = {status: "fulfilled", value: e}, --u || o(s))
                    }), (function (e) {
                        c || (c = !0, s[i] = {status: "rejected", reason: e}, --u || o(s))
                    }))
                })), --u || o(s)
            }));
            return l.error && u(l.value), n.promise
        }
    })
}, function (e, t, n) {
    "use strict";
    var o = n(5), r = n(7), i = n(14), s = n(12), a = n(17), c = n(24), u = n(28), l = "No one promise resolved";
    o({target: "Promise", stat: !0}, {
        any: function (e) {
            var t = this, n = s("AggregateError"), o = a.f(t), d = o.resolve, p = o.reject, h = c((function () {
                var o = i(t.resolve), s = [], a = 0, c = 1, h = !1;
                u(e, (function (e) {
                    var i = a++, u = !1;
                    c++, r(o, t, e).then((function (e) {
                        u || h || (h = !0, d(e))
                    }), (function (e) {
                        u || h || (u = !0, s[i] = e, --c || p(new n(s, l)))
                    }))
                })), --c || p(new n(s, l))
            }));
            return h.error && p(h.value), o.promise
        }
    })
}, function (e, t, n) {
    "use strict";
    var o = n(160).charAt, r = n(65), i = n(40), s = n(91), a = n(93), c = "String Iterator", u = i.set, l = i.getterFor(c);
    s(String, "String", (function (e) {
        u(this, {type: c, string: r(e), index: 0})
    }), (function () {
        var e = l(this), t = e.string, n = e.index;
        return n >= t.length ? a(void 0, !0) : (t = o(t, n), e.index += t.length, a(t, !1))
    }))
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var o = n(2), r = (Object.defineProperty(t, "ChatterboxEvent", {
        enumerable: !0, get: function () {
            return o.ChatterboxEvent
        }
    }), n(206)), i = (Object.defineProperty(t, "EventDeserializer", {
        enumerable: !0, get: function () {
            return r.EventDeserializer
        }
    }), n(207)), s = (Object.defineProperty(t, "ConversationEnded", {
        enumerable: !0, get: function () {
            return i.ConversationEnded
        }
    }), n(208)), a = (Object.defineProperty(t, "ConversationStarted", {
        enumerable: !0, get: function () {
            return s.ConversationStarted
        }
    }), n(209)), c = (Object.defineProperty(t, "ConversationOpened", {
        enumerable: !0, get: function () {
            return a.ConversationOpened
        }
    }), n(210)), u = (Object.defineProperty(t, "ConversationNotFound", {
        enumerable: !0, get: function () {
            return c.ConversationNotFound
        }
    }), n(211)), l = (Object.defineProperty(t, "ConversationQueued", {
        enumerable: !0, get: function () {
            return u.ConversationQueued
        }
    }), n(212)), d = (Object.defineProperty(t, "MessageSent", {
        enumerable: !0, get: function () {
            return l.MessageSent
        }
    }), n(213)), p = (Object.defineProperty(t, "ConversationJoined", {
        enumerable: !0, get: function () {
            return d.ConversationJoined
        }
    }), n(214)), h = (Object.defineProperty(t, "ConversationLeft", {
        enumerable: !0, get: function () {
            return p.ConversationLeft
        }
    }), n(215)), f = (Object.defineProperty(t, "WritingSignaled", {
        enumerable: !0, get: function () {
            return h.WritingSignaled
        }
    }), n(106)), m = (Object.defineProperty(t, "QueuePosition", {
        enumerable: !0, get: function () {
            return f.QueuePosition
        }
    }), n(216)), v = (Object.defineProperty(t, "ConversationUnQueued", {
        enumerable: !0, get: function () {
            return m.ConversationUnQueued
        }
    }), n(107)), y = (Object.defineProperty(t, "TermsAndConditionsAccepted", {
        enumerable: !0, get: function () {
            return v.TermsAndConditionsAccepted
        }
    }), n(108)), g = (Object.defineProperty(t, "TermsAndConditionsDeclined", {
        enumerable: !0, get: function () {
            return y.TermsAndConditionsDeclined
        }
    }), n(217)), b = (Object.defineProperty(t, "AgentJoinedConversation", {
        enumerable: !0, get: function () {
            return g.AgentJoinedConversation
        }
    }), n(218)), w = (Object.defineProperty(t, "MessageOptionSelected", {
        enumerable: !0, get: function () {
            return b.MessageOptionSelected
        }
    }), n(105)), C = (Object.defineProperty(t, "MessageOptionsSent", {
        enumerable: !0, get: function () {
            return w.MessageOptionsSent
        }
    }), n(219)), S = (Object.defineProperty(t, "UrlPopupMessageSent", {
        enumerable: !0, get: function () {
            return C.UrlPopupMessageSent
        }
    }), n(220));
    Object.defineProperty(t, "AttachmentReferenceSent", {
        enumerable: !0, get: function () {
            return S.AttachmentReferenceSent
        }
    })
}, function (e, t, n) {
    "use strict";
    var o, r, i = this && this.__extends || (o = function (e, t) {
        return (o = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
            e.__proto__ = t
        } || function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        })(e, t)
    }, function (e, t) {
        function n() {
            this.constructor = e
        }

        o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    });
    Object.defineProperty(t, "__esModule", {value: !0}), t.MessageOptionsSent = void 0, n = n(2), i(s, r = n.ChatterboxEvent), s.eventName = "MessageOptionsSent", n = s;

    function s() {
        return null !== r && r.apply(this, arguments) || this
    }

    t.MessageOptionsSent = n
}, function (e, t, n) {
    "use strict";
    var o, r, i = this && this.__extends || (o = function (e, t) {
        return (o = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
            e.__proto__ = t
        } || function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        })(e, t)
    }, function (e, t) {
        function n() {
            this.constructor = e
        }

        o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    });
    Object.defineProperty(t, "__esModule", {value: !0}), t.QueuePosition = void 0, n = n(2), i(s, r = n.ChatterboxEvent), s.eventName = "QueuePosition", n = s;

    function s() {
        return null !== r && r.apply(this, arguments) || this
    }

    t.QueuePosition = n
}, function (e, t, n) {
    "use strict";
    var o, r, i = this && this.__extends || (o = function (e, t) {
        return (o = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
            e.__proto__ = t
        } || function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        })(e, t)
    }, function (e, t) {
        function n() {
            this.constructor = e
        }

        o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    });
    Object.defineProperty(t, "__esModule", {value: !0}), t.TermsAndConditionsAccepted = void 0, n = n(2), i(s, r = n.ChatterboxEvent), s.eventName = "TermsAndConditionsAccepted", n = s;

    function s() {
        return null !== r && r.apply(this, arguments) || this
    }

    t.TermsAndConditionsAccepted = n
}, function (e, t, n) {
    "use strict";
    var o, r, i = this && this.__extends || (o = function (e, t) {
        return (o = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
            e.__proto__ = t
        } || function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        })(e, t)
    }, function (e, t) {
        function n() {
            this.constructor = e
        }

        o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    });
    Object.defineProperty(t, "__esModule", {value: !0}), t.TermsAndConditionsDeclined = void 0, n = n(2), i(s, r = n.ChatterboxEvent), s.eventName = "TermsAndConditionsDeclined", n = s;

    function s() {
        return null !== r && r.apply(this, arguments) || this
    }

    t.TermsAndConditionsDeclined = n
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.SimpleSubject = t.SimpleSubscriber = t.SimpleSubscription = void 0, r.prototype.unsubscribe = function () {
        this._subscriber.unsubscribe()
    };
    var o = r;

    function r(e) {
        this._subscriber = e
    }

    t.SimpleSubscription = o, s.prototype.unsubscribe = function () {
        this._subject.unsubscribe(this)
    }, s.prototype.call = function (e) {
        this._callback(e)
    };
    var i = s;

    function s(e, t) {
        this._subject = t, this._callback = e
    }

    function a() {
        this._subscribers = []
    }

    t.SimpleSubscriber = i, a.prototype.subscribe = function (e) {
        return e = new i(e, this), this._subscribers.push(e), new o(e)
    }, a.prototype.unsubscribe = function (e) {
        this._subscribers.splice(this._subscribers.indexOf(e), 1)
    }, a.prototype.next = function (e) {
        this._subscribers.forEach((function (t) {
            return t.call(e)
        }))
    }, t.SimpleSubject = a
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.Peer = void 0, t.Peer = function (e, t, n) {
        this.peerId = e, this.name = t, this.peerType = n
    }
}, function (e, t, n) {
    n(112), e.exports = n(196)
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), n(113), n(168), n(179), n(188), n(195)
}, function (e, t, n) {
    e.exports = n(114)
}, function (e, t, n) {
    var o = n(115);
    n(164), n(165), n(166), n(167), e.exports = o
}, function (e, t, n) {
    n = n(116), e.exports = n
}, function (e, t, n) {
    var o = n(117);
    n(161), e.exports = o
}, function (e, t, n) {
    n(69), n(89), n(138), n(140), n(101), n(102), n(159), n(103), n = n(68), e.exports = n.Promise
}, function (e, t, n) {
    "use strict";

    function o(e, t) {
        var n, o = 2 < arguments.length ? arguments[2] : void 0, r = i(C, this);
        return a ? n = a(b(), r ? s(this) : C) : (n = r ? this : u(C), l(n, g, "Error")), void 0 !== t && l(n, "message", m(t)), y && l(n, "stack", p(n.stack, 1)), h(n, o), f(e, w, {that: r = []}), l(n, "errors", r), n
    }

    var r = n(5), i = n(36), s = n(61), a = n(62), c = n(80), u = n(42), l = n(23), d = n(22), p = n(133), h = n(134), f = n(28), m = n(135), v = n(4), y = n(136), g = v("toStringTag"), b = Error, w = [].push, C = (a ? a(o, b) : c(o, b, {name: !0}), o.prototype = u(b.prototype, {constructor: d(1, o), message: d(1, ""), name: d(1, "AggregateError")}));
    r({global: !0, constructor: !0, arity: 2}, {AggregateError: o})
}, function (e, t) {
    var n = function () {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function (e, t, n) {
    var o = n(7), r = n(11), i = n(71), s = n(53), a = n(121), c = (n = n(4), TypeError), u = n("toPrimitive");
    e.exports = function (e, t) {
        if (!r(e) || i(e)) return e;
        var n = s(e, u);
        if (n) {
            if (n = o(n, e, t = void 0 === t ? "default" : t), !r(n) || i(n)) return n;
            throw c("Can't convert object to primitive value")
        }
        return a(e, t = void 0 === t ? "number" : t)
    }
}, function (e, t, n) {
    var o = n(7), r = n(0), i = n(11), s = TypeError;
    e.exports = function (e, t) {
        var n, a;
        if ("string" === t && r(n = e.toString) && !i(a = o(n, e))) return a;
        if (r(n = e.valueOf) && !i(a = o(n, e))) return a;
        if ("string" !== t && r(n = e.toString) && !i(a = o(n, e))) return a;
        throw s("Can't convert object to primitive value")
    }
}, function (e, t, n) {
    var o = n(6), r = n(0), i = n(13), s = n(8), a = n(79).CONFIGURABLE, c = n(56), u = (n = n(40)).enforce, l = n.get, d = Object.defineProperty, p = s && !o((function () {
        return 8 !== d((function () {
        }), "length", {value: 8}).length
    })), h = String(String).split("String");
    n = e.exports = function (e, t, n) {
        "Symbol(" === String(t).slice(0, 7) && (t = "[" + String(t).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), n && n.getter && (t = "get " + t), n && n.setter && (t = "set " + t), (!i(e, "name") || a && e.name !== t) && (s ? d(e, "name", {value: t, configurable: !0}) : e.name = t), p && n && i(n, "arity") && e.length !== n.arity && d(e, "length", {value: n.arity});
        try {
            n && i(n, "constructor") && n.constructor ? s && d(e, "prototype", {writable: !1}) : e.prototype && (e.prototype = void 0)
        } catch (e) {
        }
        return n = u(e), i(n, "source") || (n.source = h.join("string" == typeof t ? t : "")), e
    };
    Function.prototype.toString = n((function () {
        return r(this) && l(this).source || c(this)
    }), "toString")
}, function (e, t, n) {
    var o = n(1);
    n = n(0), o = o.WeakMap;
    e.exports = n(o) && /native code/.test(String(o))
}, function (e, t, n) {
    var o = n(12), r = n(3), i = n(125), s = n(82), a = n(9), c = r([].concat);
    e.exports = o("Reflect", "ownKeys") || function (e) {
        var t = i.f(a(e)), n = s.f;
        return n ? c(t, n(e)) : t
    }
}, function (e, t, n) {
    var o = n(81), r = n(60).concat("length", "prototype");
    t.f = Object.getOwnPropertyNames || function (e) {
        return o(e, r)
    }
}, function (e, t, n) {
    function o(e) {
        return function (t, n, o) {
            var a, c = r(t), u = s(c), l = i(o, u);
            if (e && n != n) {
                for (; l < u;) if ((a = c[l++]) != a) return !0
            } else for (; l < u; l++) if ((e || l in c) && c[l] === n) return e || l || 0;
            return !e && -1
        }
    }

    var r = n(26), i = n(127), s = n(41);
    e.exports = {includes: o(!0), indexOf: o(!1)}
}, function (e, t, n) {
    var o = n(59), r = Math.max, i = Math.min;
    e.exports = function (e, t) {
        return (e = o(e)) < 0 ? r(e + t, 0) : i(e, t)
    }
}, function (e, t) {
    var n = Math.ceil, o = Math.floor;
    e.exports = Math.trunc || function (e) {
        return (0 < (e = +e) ? o : n)(e)
    }
}, function (e, t, n) {
    var o = n(59), r = Math.min;
    e.exports = function (e) {
        return 0 < e ? r(o(e), 9007199254740991) : 0
    }
}, function (e, t, n) {
    n = n(6), e.exports = !n((function () {
        function e() {
        }

        return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
    }))
}, function (e, t, n) {
    var o = n(0), r = String, i = TypeError;
    e.exports = function (e) {
        if ("object" == typeof e || o(e)) return e;
        throw i("Can't set " + r(e) + " as a prototype")
    }
}, function (e, t, n) {
    var o = n(8), r = n(78), i = n(16), s = n(9), a = n(26), c = n(84);
    t.f = o && !r ? Object.defineProperties : function (e, t) {
        s(e);
        for (var n, o = a(t), r = c(t), u = r.length, l = 0; l < u;) i.f(e, n = r[l++], o[n]);
        return e
    }
}, function (e, t, n) {
    n = n(3);
    var o = Error, r = n("".replace), i = (n = String(o("zxcasd").stack), /\n\s*at [^:]*:[^\n]*/), s = i.test(n);
    e.exports = function (e, t) {
        if (s && "string" == typeof e && !o.prepareStackTrace) for (; t--;) e = r(e, i, "");
        return e
    }
}, function (e, t, n) {
    var o = n(11), r = n(23);
    e.exports = function (e, t) {
        o(t) && "cause" in t && r(e, "cause", t.cause)
    }
}, function (e, t, n) {
    var o = n(65);
    e.exports = function (e, t) {
        return void 0 === e ? arguments.length < 2 ? "" : t : o(e)
    }
}, function (e, t, n) {
    var o = n(6), r = n(22);
    e.exports = !o((function () {
        var e = Error("a");
        return !("stack" in e) || (Object.defineProperty(e, "stack", r(1, 7)), 7 !== e.stack)
    }))
}, function (e, t, n) {
    "use strict";

    function o() {
        return this
    }

    var r = n(92).IteratorPrototype, i = n(42), s = n(22), a = n(66), c = n(30);
    e.exports = function (e, t, n, u) {
        return t += " Iterator", e.prototype = i(r, {next: s(+!u, n)}), a(e, t, !1, !0), c[t] = o, e
    }
}, function (e, t, n) {
    var o = n(64), r = n(20);
    n = n(139);
    o || r(Object.prototype, "toString", n, {unsafe: !0})
}, function (e, t, n) {
    "use strict";
    var o = n(64), r = n(43);
    e.exports = o ? {}.toString : function () {
        return "[object " + r(this) + "]"
    }
}, function (e, t, n) {
    n(141), n(154), n(155), n(156), n(157), n(158)
}, function (e, t, n) {
    "use strict";

    function o(e, t) {
        var n, o, r, i, s = t.value, a = t.state == q, c = a ? e.ok : e.fail, p = e.resolve, h = e.reject, f = e.domain;
        try {
            c ? (a || (t.rejection === G && (i = t, d(C, l, (function () {
                var e = i.facade;
                u ? F.emit("rejectionHandled", e) : $(H, e, i.value)
            }))), t.rejection = z), !0 === c ? n = s : (f && f.enter(), n = c(s), f && (f.exit(), r = !0)), n === e.promise ? h(W("Promise-chain cycle")) : (o = J(n)) ? d(o, n, p, h) : p(n)) : h(s)
        } catch (e) {
            f && !r && f.exit(), h(e)
        }
    }

    var r, i, s, a = n(5), c = n(15), u = n(44), l = n(1), d = n(7), p = n(20), h = n(62), f = n(66), m = n(142), v = n(14), y = n(0), g = n(11), b = n(143), w = n(94), C = n(95).set, S = n(148), _ = n(151), x = n(24), O = n(152), T = n(40), E = n(25), P = n(31), A = (n = n(17), "Promise"), M = P.CONSTRUCTOR, I = P.REJECTION_EVENT, j = (P = P.SUBCLASSING, T.getterFor(A)), L = T.set,
        k = (T = E && E.prototype, E), R = T, W = l.TypeError, B = l.document, F = l.process, U = n.f, N = U, D = !!(B && B.createEvent && l.dispatchEvent), V = "unhandledrejection", H = "rejectionhandled", q = 1, z = 1, G = 2, J = function (e) {
            var t;
            return !(!g(e) || !y(t = e.then)) && t
        }, Q = function (e, t) {
            e.notified || (e.notified = !0, S((function () {
                for (var n, r, i = e.reactions; n = i.get();) o(n, e);
                e.notified = !1, t && !e.rejection && (r = e, d(C, l, (function () {
                    var e = r.facade, t = r.value, n = K(r);
                    if (n && (n = x((function () {
                        u ? F.emit("unhandledRejection", t, e) : $(V, e, t)
                    })), r.rejection = u || K(r) ? G : z, n.error)) throw n.value
                })))
            })))
        }, $ = function (e, t, n) {
            var o;
            D ? ((o = B.createEvent("Event")).promise = t, o.reason = n, o.initEvent(e, !1, !0), l.dispatchEvent(o)) : o = {promise: t, reason: n}, !I && (t = l["on" + e]) ? t(o) : e === V && _("Unhandled promise rejection", n)
        }, K = function (e) {
            return e.rejection !== z && !e.parent
        }, Z = function (e, t, n) {
            return function (o) {
                e(t, o, n)
            }
        }, Y = function (e, t, n) {
            e.done || (e.done = !0, (e = n || e).value = t, e.state = 2, Q(e, !0))
        }, X = function (e, t, n) {
            if (!e.done) {
                e.done = !0, n && (e = n);
                try {
                    if (e.facade === t) throw W("Promise can't be resolved itself");
                    var o = J(t);
                    o ? S((function () {
                        var n = {done: !1};
                        try {
                            d(o, t, Z(X, n, e), Z(Y, n, e))
                        } catch (t) {
                            Y(n, t, e)
                        }
                    })) : (e.value = t, e.state = q, Q(e, !1))
                } catch (t) {
                    Y({done: !1}, t, e)
                }
            }
        };
    if (M && (R = (k = function (e) {
        b(this, R), v(e), d(r, this);
        var t = j(this);
        try {
            e(Z(X, t), Z(Y, t))
        } catch (e) {
            Y(t, e)
        }
    }).prototype, (r = function (e) {
        L(this, {type: A, done: !1, notified: !1, parent: !1, reactions: new O, rejection: !1, state: 0, value: void 0})
    }).prototype = p(R, "then", (function (e, t) {
        var n = j(this), r = U(w(this, k));
        return n.parent = !0, r.ok = !y(e) || e, r.fail = y(t) && t, r.domain = u ? F.domain : void 0, 0 == n.state ? n.reactions.add(r) : S((function () {
            o(r, n)
        })), r.promise
    })), i = function () {
        var e = new r, t = j(e);
        this.promise = e, this.resolve = Z(X, t), this.reject = Z(Y, t)
    }, n.f = U = function (e) {
        return e === k || void 0 === e ? new i : N(e)
    }, !c && y(E) && T !== Object.prototype)) {
        s = T.then, P || p(T, "then", (function (e, t) {
            var n = this;
            return new k((function (e, t) {
                d(s, n, e, t)
            })).then(e, t)
        }), {unsafe: !0});
        try {
            delete T.constructor
        } catch (n) {
        }
        h && h(T, R)
    }
    a({global: !0, constructor: !0, wrap: !0, forced: M}, {Promise: k}), f(k, A, !1, !0), m(A)
}, function (e, t, n) {
    "use strict";
    var o = n(12), r = n(16), i = n(4), s = n(8), a = i("species");
    e.exports = function (e) {
        e = o(e);
        var t = r.f;
        s && e && !e[a] && t(e, a, {
            configurable: !0, get: function () {
                return this
            }
        })
    }
}, function (e, t, n) {
    var o = n(36), r = TypeError;
    e.exports = function (e, t) {
        if (o(t, e)) return e;
        throw r("Incorrect invocation")
    }
}, function (e, t, n) {
    var o = n(67), r = n(38), i = TypeError;
    e.exports = function (e) {
        if (o(e)) return e;
        throw i(r(e) + " is not a constructor")
    }
}, function (e, t, n) {
    n = n(33);
    var o = Function.prototype, r = o.apply, i = o.call;
    e.exports = "object" == typeof Reflect && Reflect.apply || (n ? i.bind(r) : function () {
        return i.apply(r, arguments)
    })
}, function (e, t, n) {
    n = n(3), e.exports = n([].slice)
}, function (e, t) {
    var n = TypeError;
    e.exports = function (e, t) {
        if (e < t) throw n("Not enough arguments");
        return e
    }
}, function (e, t, n) {
    var o, r, i, s, a, c, u, l = n(1), d = n(29), p = n(49).f, h = n(95).set, f = n(96), m = n(149), v = n(150), y = n(44), g = (n = l.MutationObserver || l.WebKitMutationObserver, l.document), b = l.process, w = l.Promise;
    (p = (p = p(l, "queueMicrotask")) && p.value) || (o = function () {
        var e, t;
        for (y && (e = b.domain) && e.exit(); r;) {
            t = r.fn, r = r.next;
            try {
                t()
            } catch (e) {
                throw r ? s() : i = void 0, e
            }
        }
        i = void 0, e && e.enter()
    }, s = f || y || v || !n || !g ? !m && w && w.resolve ? ((f = w.resolve(void 0)).constructor = w, u = d(f.then, f), function () {
        u(o)
    }) : y ? function () {
        b.nextTick(o)
    } : (h = d(h, l), function () {
        h(o)
    }) : (a = !0, c = g.createTextNode(""), new n(o).observe(c, {characterData: !0}), function () {
        c.data = a = !a
    })), e.exports = p || function (e) {
        e = {fn: e, next: void 0}, i && (i.next = e), r || (r = e, s()), i = e
    }
}, function (e, t, n) {
    var o = n(37);
    n = n(1);
    e.exports = /ipad|iphone|ipod/i.test(o) && void 0 !== n.Pebble
}, function (e, t, n) {
    n = n(37), e.exports = /web0s(?!.*chrome)/i.test(n)
}, function (e, t, n) {
    var o = n(1);
    e.exports = function (e, t) {
        var n = o.console;
        n && n.error && (1 == arguments.length ? n.error(e) : n.error(e, t))
    }
}, function (e, t) {
    function n() {
        this.head = null, this.tail = null
    }

    n.prototype = {
        add: function (e) {
            e = {item: e, next: null}, this.head ? this.tail.next = e : this.head = e, this.tail = e
        }, get: function () {
            var e = this.head;
            if (e) return this.head = e.next, this.tail === e && (this.tail = null), e.item
        }
    }, e.exports = n
}, function (e, t, n) {
    var o = n(97);
    n = n(44);
    e.exports = !o && !n && "object" == typeof window && "object" == typeof document
}, function (e, t, n) {
    "use strict";
    var o = n(5), r = n(7), i = n(14), s = n(17), a = n(24), c = n(28);
    o({target: "Promise", stat: !0, forced: n(98)}, {
        all: function (e) {
            var t = this, n = s.f(t), o = n.resolve, u = n.reject, l = a((function () {
                var n = i(t.resolve), s = [], a = 0, l = 1;
                c(e, (function (e) {
                    var i = a++, c = !1;
                    l++, r(n, t, e).then((function (e) {
                        c || (c = !0, s[i] = e, --l || o(s))
                    }), u)
                })), --l || o(s)
            }));
            return l.error && u(l.value), n.promise
        }
    })
}, function (e, t, n) {
    "use strict";
    var o = n(5), r = n(15), i = n(31).CONSTRUCTOR, s = n(25), a = n(12), c = n(0), u = (n = n(20), s && s.prototype);
    o({target: "Promise", proto: !0, forced: i, real: !0}, {
        catch: function (e) {
            return this.then(void 0, e)
        }
    }), !r && c(s) && (o = a("Promise").prototype.catch, u.catch !== o && n(u, "catch", o, {unsafe: !0}))
}, function (e, t, n) {
    "use strict";
    var o = n(5), r = n(7), i = n(14), s = n(17), a = n(24), c = n(28);
    o({target: "Promise", stat: !0, forced: n(98)}, {
        race: function (e) {
            var t = this, n = s.f(t), o = n.reject, u = a((function () {
                var s = i(t.resolve);
                c(e, (function (e) {
                    r(s, t, e).then(n.resolve, o)
                }))
            }));
            return u.error && o(u.value), n.promise
        }
    })
}, function (e, t, n) {
    "use strict";
    var o = n(5), r = n(7), i = n(17);
    o({target: "Promise", stat: !0, forced: n(31).CONSTRUCTOR}, {
        reject: function (e) {
            var t = i.f(this);
            return r(t.reject, void 0, e), t.promise
        }
    })
}, function (e, t, n) {
    "use strict";
    var o = n(5), r = n(12), i = n(15), s = n(25), a = n(31).CONSTRUCTOR, c = n(100), u = r("Promise"), l = i && !a;
    o({target: "Promise", stat: !0, forced: i || a}, {
        resolve: function (e) {
            return c(l && this === u ? s : this, e)
        }
    })
}, function (e, t, n) {
    "use strict";
    var o = n(5), r = n(15), i = n(25), s = n(6), a = n(12), c = n(0), u = n(94), l = n(100), d = (n = n(20), i && i.prototype);
    o({
        target: "Promise", proto: !0, real: !0, forced: !!i && s((function () {
            d.finally.call({
                then: function () {
                }
            }, (function () {
            }))
        }))
    }, {
        finally: function (e) {
            var t = u(this, a("Promise")), n = c(e);
            return this.then(n ? function (n) {
                return l(t, e()).then((function () {
                    return n
                }))
            } : e, n ? function (n) {
                return l(t, e()).then((function () {
                    throw n
                }))
            } : e)
        }
    }), !r && c(i) && (o = a("Promise").prototype.finally, d.finally !== o && n(d, "finally", o, {unsafe: !0}))
}, function (e, t, n) {
    function o(e) {
        return function (t, n) {
            t = s(a(t)), n = i(n);
            var o, r = t.length;
            return n < 0 || r <= n ? e ? "" : void 0 : (o = u(t, n)) < 55296 || 56319 < o || n + 1 === r || (r = u(t, n + 1)) < 56320 || 57343 < r ? e ? c(t, n) : o : e ? l(t, n, n + 2) : r - 56320 + (o - 55296 << 10) + 65536
        }
    }

    var r = n(3), i = n(59), s = n(65), a = n(51), c = r("".charAt), u = r("".charCodeAt), l = r("".slice);
    e.exports = {codeAt: o(!1), charAt: o(!0)}
}, function (e, t, n) {
    function o(e, t) {
        if (e) {
            if (e[l] !== p) try {
                u(e, l, p)
            } catch (t) {
                e[l] = p
            }
            if (e[d] || u(e, d, t), s[t]) for (var n in c) if (e[n] !== c[n]) try {
                u(e, n, c[n])
            } catch (t) {
                e[n] = c[n]
            }
        }
    }

    var r, i = n(1), s = n(162), a = n(163), c = n(89), u = n(23), l = (n = n(4))("iterator"), d = n("toStringTag"), p = c.values;
    for (r in s) o(i[r] && i[r].prototype, r);
    o(a, "DOMTokenList")
}, function (e, t) {
    e.exports = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
    }
}, function (e, t, n) {
    n = (n = n(39)("span").classList) && n.constructor && n.constructor.prototype, e.exports = n === Object.prototype ? void 0 : n
}, function (e, t, n) {
    n(69)
}, function (e, t, n) {
    n(101)
}, function (e, t, n) {
    "use strict";
    var o = n(5), r = n(17), i = n(24);
    o({target: "Promise", stat: !0, forced: !0}, {
        try: function (e) {
            var t = r.f(this);
            return ((e = i(e)).error ? t.reject : t.resolve)(e.value), t.promise
        }
    })
}, function (e, t, n) {
    n(102)
}, function (e, t, n) {
    e.exports = n(169)
}, function (e, t, n) {
    n = n(170), e.exports = n
}, function (e, t, n) {
    n = n(171), e.exports = n
}, function (e, t, n) {
    n = n(172), e.exports = n
}, function (e, t, n) {
    n(173), n = n(178), e.exports = n("Array", "find")
}, function (e, t, n) {
    "use strict";
    var o = n(5), r = n(174).find, i = (n = n(90), "find"), s = !0;
    i in [] && Array(1)[i]((function () {
        s = !1
    })), o({target: "Array", proto: !0, forced: s}, {
        find: function (e) {
            return r(this, e, 1 < arguments.length ? arguments[1] : void 0)
        }
    }), n(i)
}, function (e, t, n) {
    function o(e) {
        var t = 1 == e, n = 2 == e, o = 3 == e, i = 4 == e, d = 6 == e, p = 7 == e, h = 5 == e || d;
        return function (f, m, v, y) {
            for (var g, b, w = a(f), C = s(w), S = r(m, v), _ = c(C), x = 0, O = (m = y || u, t ? m(f, _) : n || p ? m(f, 0) : void 0); x < _; x++) if ((h || x in C) && (b = S(g = C[x], x, w), e)) if (t) O[x] = b; else if (b) switch (e) {
                case 3:
                    return !0;
                case 5:
                    return g;
                case 6:
                    return x;
                case 2:
                    l(O, g)
            } else switch (e) {
                case 4:
                    return !1;
                case 7:
                    l(O, g)
            }
            return d ? -1 : o || i ? i : O
        }
    }

    var r = n(29), i = n(3), s = n(50), a = n(27), c = n(41), u = n(175), l = i([].push);
    e.exports = {forEach: o(0), map: o(1), filter: o(2), some: o(3), every: o(4), find: o(5), findIndex: o(6), filterReject: o(7)}
}, function (e, t, n) {
    var o = n(176);
    e.exports = function (e, t) {
        return new (o(e))(0 === t ? 0 : t)
    }
}, function (e, t, n) {
    var o = n(177), r = n(67), i = n(11), s = n(4)("species"), a = Array;
    e.exports = function (e) {
        var t;
        return o(e) && (t = e.constructor, (r(t) && (t === a || o(t.prototype)) || i(t) && null === (t = t[s])) && (t = void 0)), void 0 === t ? a : t
    }
}, function (e, t, n) {
    var o = n(34);
    e.exports = Array.isArray || function (e) {
        return "Array" == o(e)
    }
}, function (e, t, n) {
    var o = n(1), r = n(3);
    e.exports = function (e, t) {
        return r(o[e].prototype[t])
    }
}, function (e, t, n) {
    e.exports = n(180)
}, function (e, t, n) {
    n = n(181), e.exports = n
}, function (e, t, n) {
    n = n(182), e.exports = n
}, function (e, t, n) {
    n = n(183), e.exports = n
}, function (e, t, n) {
    n(103), n(184), n = n(68), e.exports = n.Array.from
}, function (e, t, n) {
    var o = n(5), r = n(185);
    o({
        target: "Array", stat: !0, forced: !n(99)((function (e) {
            Array.from(e)
        }))
    }, {from: r})
}, function (e, t, n) {
    "use strict";
    var o = n(29), r = n(7), i = n(27), s = n(186), a = n(86), c = n(67), u = n(41), l = n(187), d = n(87), p = n(63), h = Array;
    e.exports = function (e) {
        var t, n, f, m, v, y, g, b = i(e), w = (e = c(this), 1 < (g = arguments.length) ? arguments[1] : void 0), C = void 0 !== w, S = 0;
        if (!(g = (C && (w = o(w, 2 < g ? arguments[2] : void 0)), p(b))) || this === h && a(g)) for (t = u(b), n = e ? new this(t) : h(t); S < t; S++) y = C ? w(b[S], S) : b[S], l(n, S, y); else for (v = (m = d(b, g)).next, n = e ? new this : []; !(f = r(v, m)).done; S++) y = C ? s(m, w, [f.value, S], !0) : f.value, l(n, S, y);
        return n.length = S, n
    }
}, function (e, t, n) {
    var o = n(9), r = n(88);
    e.exports = function (e, t, n, i) {
        try {
            return i ? t(o(n)[0], n[1]) : t(n)
        } catch (t) {
            r(e, "throw", t)
        }
    }
}, function (e, t, n) {
    "use strict";
    var o = n(52), r = n(16), i = n(22);
    e.exports = function (e, t, n) {
        (t = o(t)) in e ? r.f(e, t, i(0, n)) : e[t] = n
    }
}, function (e, t, n) {
    e.exports = n(189)
}, function (e, t, n) {
    n = n(190), e.exports = n
}, function (e, t, n) {
    n = n(191), e.exports = n
}, function (e, t, n) {
    n = n(192), e.exports = n
}, function (e, t, n) {
    n(193), n = n(68), e.exports = n.Object.assign
}, function (e, t, n) {
    var o = n(5);
    n = n(194);
    o({target: "Object", stat: !0, arity: 2, forced: Object.assign !== n}, {assign: n})
}, function (e, t, n) {
    "use strict";
    var o = n(8), r = n(3), i = n(7), s = n(6), a = n(84), c = n(82), u = n(70), l = n(27), d = n(50), p = Object.assign, h = Object.defineProperty, f = r([].concat);
    e.exports = !p || s((function () {
        var e, t, n, r;
        return !(!o || 1 === p({b: 1}, p(h({}, "a", {
            enumerable: !0, get: function () {
                h(this, "b", {value: 3, enumerable: !1})
            }
        }), {b: 2})).b) || (t = {}, r = "abcdefghijklmnopqrst", (e = {})[n = Symbol()] = 7, r.split("").forEach((function (e) {
            t[e] = e
        })), 7 != p({}, e)[n] || a(p({}, t)).join("") != r)
    })) ? function (e, t) {
        for (var n = l(e), r = arguments.length, s = 1, p = c.f, h = u.f; s < r;) for (var m, v = d(arguments[s++]), y = p ? f(a(v), p(v)) : a(v), g = y.length, b = 0; b < g;) m = y[b++], o && !i(h, v, m) || (n[m] = v[m]);
        return n
    } : p
}, function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "Headers", (function () {
        return f
    })), n.d(t, "Request", (function () {
        return C
    })), n.d(t, "Response", (function () {
        return _
    })), n.d(t, "DOMException", (function () {
        return O
    })), n.d(t, "fetch", (function () {
        return T
    }));
    var o, r, i = "undefined" != typeof globalThis && globalThis || "undefined" != typeof self && self || void 0 !== i && i, s = "URLSearchParams" in i, a = "Symbol" in i && "iterator" in Symbol, c = "FileReader" in i && "Blob" in i && function () {
        try {
            return new Blob, !0
        } catch (e) {
            return !1
        }
    }(), u = "FormData" in i, l = "ArrayBuffer" in i;

    function d(e) {
        if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || "" === e) throw new TypeError('Invalid character in header field name: "' + e + '"');
        return e.toLowerCase()
    }

    function p(e) {
        return "string" != typeof e ? String(e) : e
    }

    function h(e) {
        var t = {
            next: function () {
                var t = e.shift();
                return {done: void 0 === t, value: t}
            }
        };
        return a && (t[Symbol.iterator] = function () {
            return t
        }), t
    }

    function f(e) {
        this.map = {}, e instanceof f ? e.forEach((function (e, t) {
            this.append(t, e)
        }), this) : Array.isArray(e) ? e.forEach((function (e) {
            this.append(e[0], e[1])
        }), this) : e && Object.getOwnPropertyNames(e).forEach((function (t) {
            this.append(t, e[t])
        }), this)
    }

    function m(e) {
        if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
        e.bodyUsed = !0
    }

    function v(e) {
        return new Promise((function (t, n) {
            e.onload = function () {
                t(e.result)
            }, e.onerror = function () {
                n(e.error)
            }
        }))
    }

    function y(e) {
        var t = new FileReader, n = v(t);
        return t.readAsArrayBuffer(e), n
    }

    function g(e) {
        var t;
        return e.slice ? e.slice(0) : ((t = new Uint8Array(e.byteLength)).set(new Uint8Array(e)), t.buffer)
    }

    function b() {
        return this.bodyUsed = !1, this._initBody = function (e) {
            var t;
            this.bodyUsed = this.bodyUsed, (this._bodyInit = e) ? "string" == typeof e ? this._bodyText = e : c && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : u && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : s && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : l && c && (t = e) && DataView.prototype.isPrototypeOf(t) ? (this._bodyArrayBuffer = g(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : l && (ArrayBuffer.prototype.isPrototypeOf(e) || r(e)) ? this._bodyArrayBuffer = g(e) : this._bodyText = e = Object.prototype.toString.call(e) : this._bodyText = "", this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : s && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
        }, c && (this.blob = function () {
            var e = m(this);
            if (e) return e;
            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
            if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            if (this._bodyFormData) throw new Error("could not read FormData body as blob");
            return Promise.resolve(new Blob([this._bodyText]))
        }, this.arrayBuffer = function () {
            return this._bodyArrayBuffer ? m(this) || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer)) : this.blob().then(y)
        }), this.text = function () {
            var e, t, n = m(this);
            if (n) return n;
            if (this._bodyBlob) return n = this._bodyBlob, t = v(e = new FileReader), e.readAsText(n), t;
            if (this._bodyArrayBuffer) return Promise.resolve(function (e) {
                for (var t = new Uint8Array(e), n = new Array(t.length), o = 0; o < t.length; o++) n[o] = String.fromCharCode(t[o]);
                return n.join("")
            }(this._bodyArrayBuffer));
            if (this._bodyFormData) throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText)
        }, u && (this.formData = function () {
            return this.text().then(S)
        }), this.json = function () {
            return this.text().then(JSON.parse)
        }, this
    }

    l && (o = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"], r = ArrayBuffer.isView || function (e) {
        return e && -1 < o.indexOf(Object.prototype.toString.call(e))
    }), f.prototype.append = function (e, t) {
        e = d(e), t = p(t);
        var n = this.map[e];
        this.map[e] = n ? n + ", " + t : t
    }, f.prototype.delete = function (e) {
        delete this.map[d(e)]
    }, f.prototype.get = function (e) {
        return e = d(e), this.has(e) ? this.map[e] : null
    }, f.prototype.has = function (e) {
        return this.map.hasOwnProperty(d(e))
    }, f.prototype.set = function (e, t) {
        this.map[d(e)] = p(t)
    }, f.prototype.forEach = function (e, t) {
        for (var n in this.map) this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this)
    }, f.prototype.keys = function () {
        var e = [];
        return this.forEach((function (t, n) {
            e.push(n)
        })), h(e)
    }, f.prototype.values = function () {
        var e = [];
        return this.forEach((function (t) {
            e.push(t)
        })), h(e)
    }, f.prototype.entries = function () {
        var e = [];
        return this.forEach((function (t, n) {
            e.push([n, t])
        })), h(e)
    }, a && (f.prototype[Symbol.iterator] = f.prototype.entries);
    var w = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

    function C(e, t) {
        if (!(this instanceof C)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
        var n, o = (t = t || {}).body;
        if (e instanceof C) {
            if (e.bodyUsed) throw new TypeError("Already read");
            this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new f(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, o || null == e._bodyInit || (o = e._bodyInit, e.bodyUsed = !0)
        } else this.url = String(e);
        if (this.credentials = t.credentials || this.credentials || "same-origin", !t.headers && this.headers || (this.headers = new f(t.headers)), this.method = (n = (e = t.method || this.method || "GET").toUpperCase(), -1 < w.indexOf(n) ? n : e), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && o) throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(o), "GET" !== this.method && "HEAD" !== this.method || "no-store" !== t.cache && "no-cache" !== t.cache || ((n = /([?&])_=[^&]*/).test(this.url) ? this.url = this.url.replace(n, "$1_=" + (new Date).getTime()) : this.url += (/\?/.test(this.url) ? "&" : "?") + "_=" + (new Date).getTime())
    }

    function S(e) {
        var t = new FormData;
        return e.trim().split("&").forEach((function (e) {
            var n;
            e && (n = (e = e.split("=")).shift().replace(/\+/g, " "), e = e.join("=").replace(/\+/g, " "), t.append(decodeURIComponent(n), decodeURIComponent(e)))
        })), t
    }

    function _(e, t) {
        if (!(this instanceof _)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
        t = t || {}, this.type = "default", this.status = void 0 === t.status ? 200 : t.status, this.ok = 200 <= this.status && this.status < 300, this.statusText = void 0 === t.statusText ? "" : "" + t.statusText, this.headers = new f(t.headers), this.url = t.url || "", this._initBody(e)
    }

    C.prototype.clone = function () {
        return new C(this, {body: this._bodyInit})
    }, b.call(C.prototype), b.call(_.prototype), _.prototype.clone = function () {
        return new _(this._bodyInit, {status: this.status, statusText: this.statusText, headers: new f(this.headers), url: this.url})
    }, _.error = function () {
        var e = new _(null, {status: 0, statusText: ""});
        return e.type = "error", e
    };
    var x = [301, 302, 303, 307, 308], O = (_.redirect = function (e, t) {
        if (-1 === x.indexOf(t)) throw new RangeError("Invalid status code");
        return new _(null, {status: t, headers: {location: e}})
    }, i.DOMException);
    try {
        new O
    } catch (e) {
        (O = function (e, t) {
            this.message = e, this.name = t, t = Error(e), this.stack = t.stack
        }).prototype = Object.create(Error.prototype), O.prototype.constructor = O
    }

    function T(e, t) {
        return new Promise((function (n, o) {
            var r = new C(e, t);
            if (r.signal && r.signal.aborted) return o(new O("Aborted", "AbortError"));
            var s = new XMLHttpRequest;

            function a() {
                s.abort()
            }

            s.onload = function () {
                var e, t, o = {
                    status: s.status, statusText: s.statusText, headers: (e = s.getAllResponseHeaders() || "", t = new f, e.replace(/\r?\n[\t ]+/g, " ").split("\r").map((function (e) {
                        return 0 === e.indexOf("\n") ? e.substr(1, e.length) : e
                    })).forEach((function (e) {
                        var n = (e = e.split(":")).shift().trim();
                        n && (e = e.join(":").trim(), t.append(n, e))
                    })), t)
                }, r = (o.url = "responseURL" in s ? s.responseURL : o.headers.get("X-Request-URL"), "response" in s ? s.response : s.responseText);
                setTimeout((function () {
                    n(new _(r, o))
                }), 0)
            }, s.onerror = function () {
                setTimeout((function () {
                    o(new TypeError("Network request failed"))
                }), 0)
            }, s.ontimeout = function () {
                setTimeout((function () {
                    o(new TypeError("Network request failed"))
                }), 0)
            }, s.onabort = function () {
                setTimeout((function () {
                    o(new O("Aborted", "AbortError"))
                }), 0)
            }, s.open(r.method, function (e) {
                try {
                    return "" === e && i.location.href ? i.location.href : e
                } catch (t) {
                    return e
                }
            }(r.url), !0), "include" === r.credentials ? s.withCredentials = !0 : "omit" === r.credentials && (s.withCredentials = !1), "responseType" in s && (c ? s.responseType = "blob" : l && r.headers.get("Content-Type") && -1 !== r.headers.get("Content-Type").indexOf("application/octet-stream") && (s.responseType = "arraybuffer")), !t || "object" != typeof t.headers || t.headers instanceof f ? r.headers.forEach((function (e, t) {
                s.setRequestHeader(t, e)
            })) : Object.getOwnPropertyNames(t.headers).forEach((function (e) {
                s.setRequestHeader(e, p(t.headers[e]))
            })), r.signal && (r.signal.addEventListener("abort", a), s.onreadystatechange = function () {
                4 === s.readyState && r.signal.removeEventListener("abort", a)
            }), s.send(void 0 === r._bodyInit ? null : r._bodyInit)
        }))
    }

    T.polyfill = !0, i.fetch || (i.fetch = T, i.Headers = f, i.Request = C, i.Response = _)
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.Main = void 0, n(251);
    var o = n(21), r = n(197), i = n(246), s = n(19), a = n(48), c = n(18), u = (l.prototype.notifyReady = function () {
        var e;
        console.log("main.ts notifyReady()"), console.log("isInIframe: " + this.state.isInIframe), this.state.isInIframe ? this.state.dispatcherService.dispatch(o.DispatchType.WidgetReady) : (document.body.classList.add("standalone"), (e = s.getUrlParameterByName("jwt")) && (this.state.webToken = e, e = s.getUrlParameterByName("conversationId"), this.state.conversationUuid = e, this.state.chatterboxService.start()))
    }, l.prototype.init = function () {
        console.log("widget main.ts init()"), this.state = new r.State, window.addEventListener("message", this.onMessage.bind(this), !1), this.notifyReady()
    }, l.prototype.onMessage = function (e) {
        if (e && e.data && "string" == typeof e.data) {
            var t = s.tryParseJson(e.data);
            if (t) switch (t.command) {
                case o.DispatchType.SetConversationId:
                    c.Guid.isValid(t.parameter) && (this.state.conversationUuid = t.parameter);
                    break;
                case o.DispatchType.SetRegistrationDefaults:
                    this.setRegistrationDefaults(t.parameter);
                    break;
                case o.DispatchType.SetWebToken:
                    this.state.webToken = t.parameter, this.state.chatterboxService.start();
                    break;
                case o.DispatchType.SetSoundEnabled:
                    this.state.soundEnabled = t.parameter;
                    break;
                case o.DispatchType.SetWindowWidth:
                    this.state.parentWidth = t.parameter;
                    break;
                case o.DispatchType.SetWindowHeight:
                    this.state.parentHeight = t.parameter;
                    break;
                case o.DispatchType.OpenWidget:
                    this.openWidget(t.parameter);
                    break;
                case o.DispatchType.CloseWidget:
                    this.closeWidget(t.parameter);
                    break;
                case o.DispatchType.HideWidget:
                    this.hideWidget(t.parameter);
                    break;
                case o.DispatchType.EndConversation:
                    this.endConversation();
                    break;
                case o.DispatchType.StartConversation:
                    this.startConversation();
                    break;
                case o.DispatchType.SkipCache:
                    this.state.chatterboxService.skipCache = !0;
                    break;
                case o.DispatchType.SetMessageInProgess:
                    this.state.messageInProgress = t.parameter;
                    break;
                case o.DispatchType.SetLastReadMessageId:
                    this.state.lastReadMessageId = t.parameter
            }
        }
    }, l.prototype.hideWidget = function (e) {
        this.state.renderer.widgetViewMode = a.WidgetViewMode.Hidden
    }, l.prototype.closeWidget = function (e) {
        this.state.renderer.widgetViewMode = a.WidgetViewMode.Closed
    }, l.prototype.openWidget = function (e) {
        this.state.renderer.widgetViewMode = a.WidgetViewMode.Open
    }, l.prototype.setRegistrationDefaults = function (e) {
        this.state.renderer.setRegistrationDefaults(e)
    }, l.prototype.startConversation = function () {
        this.state.renderer.registration.registrate()
    }, l.prototype.endConversation = function () {
        this.state.chatterboxService.endConversation()
    }, l);

    function l() {
        i.monkeyPatchConsole(), console.log("Main constructor")
    }

    t.Main = u, s.onDocumentReady((function () {
        (new u).init()
    }))
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.State = void 0;
    var o = n(45), r = n(46), i = n(223), s = n(224), a = n(233), c = n(21), u = n(32), l = n(234), d = n(242), p = n(243), h = n(244), f = n(109), m = n(18);

    function v() {
        this._conversationUuid = null, this.onWidgetConfiguration$ = new f.SimpleSubject, this._soundEnabled = !0, this._isPlayBingReady = !0, this._isPlayBongReady = !0, this._isTermsAccepted = !1, this._isProduction = !0, this.parentWidth = 0, this.parentHeight = 0, "production" === r.environment.environment && (this._isProduction = !0), this.peerNameService = new d.PeerService, this.dispatcherService = new u.DispatcherService(window.parent), this.chatterboxConfiguration = new i.ChatterboxConfiguration(r.environment.socketUrl, r.environment.apiUrlConfig, r.environment.apiUrlHistory, r.environment.apiUrlRequestReport), this.connectionState = o.ConnectionState.Idle, h.VersionService.initialize(), this.chatterboxService = new s.ChatterboxService(new a.Http, this), this.renderer = new l.Renderer(this), this.writingHandler = new p.WritingHandlerService(this)
    }

    Object.defineProperty(v.prototype, "conversationUuid", {
        get: function () {
            return this._conversationUuid
        }, set: function (e) {
            m.Guid.isValid(e) ? (e !== this._conversationUuid && this.dispatcherService.dispatch(c.DispatchType.SetConversationId, e), this._conversationUuid = e) : (this.dispatcherService.dispatch(c.DispatchType.SetConversationId, null), this._conversationUuid = null)
        }, enumerable: !1, configurable: !0
    }), Object.defineProperty(v.prototype, "widgetConfiguration", {
        get: function () {
            return this._widgetConfiguration
        }, set: function (e) {
            e && (this._widgetConfiguration = e, this.onWidgetConfiguration$.next(this._widgetConfiguration), this.dispatcherService.dispatch(c.DispatchType.WidgetConfiguration, this._widgetConfiguration))
        }, enumerable: !1, configurable: !0
    }), Object.defineProperty(v.prototype, "soundEnabled", {
        get: function () {
            return this._soundEnabled
        }, set: function (e) {
            this._soundEnabled = e, this.renderer.addVolumeIcon(), this.dispatcherService.dispatch(c.DispatchType.SetSoundEnabled, e)
        }, enumerable: !1, configurable: !0
    }), Object.defineProperty(v.prototype, "isPlayBingReady", {
        get: function () {
            return this._isPlayBingReady
        }, enumerable: !1, configurable: !0
    }), v.prototype.playBing = function () {
        var e = this;
        this._isPlayBingReady = !1, setTimeout((function () {
            e._isPlayBingReady = !0
        }), 500)
    }, Object.defineProperty(v.prototype, "isPlayBongReady", {
        get: function () {
            return this._isPlayBongReady
        }, enumerable: !1, configurable: !0
    }), v.prototype.playBong = function () {
        var e = this;
        this._isPlayBongReady = !1, setTimeout((function () {
            e._isPlayBongReady = !0
        }), 500)
    }, Object.defineProperty(v.prototype, "messageInProgress", {
        get: function () {
            return this._messageInProgress
        }, set: function (e) {
            e !== this._messageInProgress && this.dispatcherService.dispatch(c.DispatchType.SetMessageInProgess, e), this._messageInProgress = e
        }, enumerable: !1, configurable: !0
    }), Object.defineProperty(v.prototype, "lastReadMessageId", {
        get: function () {
            return this._lastReadMessageId
        }, set: function (e) {
            e !== this._messageInProgress && this.dispatcherService.dispatch(c.DispatchType.SetLastReadMessageId, e), this._lastReadMessageId = e
        }, enumerable: !1, configurable: !0
    }), Object.defineProperty(v.prototype, "areTermsAccepted", {
        get: function () {
            return this._isTermsAccepted
        }, enumerable: !1, configurable: !0
    }), Object.defineProperty(v.prototype, "isProduction", {
        get: function () {
            return this._isProduction
        }, enumerable: !1, configurable: !0
    }), Object.defineProperty(v.prototype, "isInIframe", {
        get: function () {
            return window.top !== window
        }, enumerable: !1, configurable: !0
    }), Object.defineProperty(v.prototype, "isMobile", {
        get: function () {
            return this.parentWidth <= 768
        }, enumerable: !1, configurable: !0
    }), Object.defineProperty(v.prototype, "isTablet", {
        get: function () {
            return !this.isDesktop && !this.isMobile
        }, enumerable: !1, configurable: !0
    }), Object.defineProperty(v.prototype, "isDesktop", {
        get: function () {
            return 1024 < this.parentWidth
        }, enumerable: !1, configurable: !0
    }), Object.defineProperty(v.prototype, "shouldRegister", {
        get: function () {
            return !!this.widgetConfiguration && this.widgetConfiguration.registration && !!this.widgetConfiguration.inputFields && 0 < this.widgetConfiguration.inputFields.length
        }, enumerable: !1, configurable: !0
    }), v.prototype.termsAccepted = function () {
        this._isTermsAccepted = !0, this.shouldRegister ? this.renderer.registration.updateRegistrationButtonDisabledState() : this.renderer.enableInput()
    }, t.State = v
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var o = n(10), r = (Object.defineProperty(t, "ChatterboxCommand", {
        enumerable: !0, get: function () {
            return o.ChatterboxCommand
        }
    }), n(199)), i = (Object.defineProperty(t, "CommandSerializer", {
        enumerable: !0, get: function () {
            return r.CommandSerializer
        }
    }), n(200)), s = (Object.defineProperty(t, "StartConversation", {
        enumerable: !0, get: function () {
            return i.StartConversation
        }
    }), n(201)), a = (Object.defineProperty(t, "OpenConversation", {
        enumerable: !0, get: function () {
            return s.OpenConversation
        }
    }), n(202)), c = (Object.defineProperty(t, "EndConversation", {
        enumerable: !0, get: function () {
            return a.EndConversation
        }
    }), n(203)), u = (Object.defineProperty(t, "LeaveConversation", {
        enumerable: !0, get: function () {
            return c.LeaveConversation
        }
    }), n(204)), l = (Object.defineProperty(t, "SendMessage", {
        enumerable: !0, get: function () {
            return u.SendMessage
        }
    }), n(205));
    Object.defineProperty(t, "SignalWriting", {
        enumerable: !0, get: function () {
            return l.SignalWriting
        }
    })
}, function (e, t, n) {
    "use strict";

    function o() {
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.CommandSerializer = void 0, o.prototype.serialize = function (e) {
        var t = {};
        return Object.assign(t, e), t.commandName = e.commandName, JSON.stringify(t)
    }, t.CommandSerializer = o
}, function (e, t, n) {
    "use strict";
    var o, r, i = this && this.__extends || (o = function (e, t) {
        return (o = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
            e.__proto__ = t
        } || function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        })(e, t)
    }, function (e, t) {
        function n() {
            this.constructor = e
        }

        o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    });
    Object.defineProperty(t, "__esModule", {value: !0}), t.StartConversation = void 0, n = n(10), i(s, r = n.ChatterboxCommand), s.commandName = "StartConversation", n = s;

    function s() {
        return null !== r && r.apply(this, arguments) || this
    }

    t.StartConversation = n
}, function (e, t, n) {
    "use strict";
    var o, r, i = this && this.__extends || (o = function (e, t) {
        return (o = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
            e.__proto__ = t
        } || function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        })(e, t)
    }, function (e, t) {
        function n() {
            this.constructor = e
        }

        o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    });
    Object.defineProperty(t, "__esModule", {value: !0}), t.OpenConversation = void 0, n = n(10), i(s, r = n.ChatterboxCommand), s.commandName = "OpenConversation", n = s;

    function s() {
        return null !== r && r.apply(this, arguments) || this
    }

    t.OpenConversation = n
}, function (e, t, n) {
    "use strict";
    var o, r, i = this && this.__extends || (o = function (e, t) {
        return (o = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
            e.__proto__ = t
        } || function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        })(e, t)
    }, function (e, t) {
        function n() {
            this.constructor = e
        }

        o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    });
    Object.defineProperty(t, "__esModule", {value: !0}), t.EndConversation = void 0, n = n(10), i(s, r = n.ChatterboxCommand), s.commandName = "EndConversation", n = s;

    function s() {
        return null !== r && r.apply(this, arguments) || this
    }

    t.EndConversation = n
}, function (e, t, n) {
    "use strict";
    var o, r, i = this && this.__extends || (o = function (e, t) {
        return (o = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
            e.__proto__ = t
        } || function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        })(e, t)
    }, function (e, t) {
        function n() {
            this.constructor = e
        }

        o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    });
    Object.defineProperty(t, "__esModule", {value: !0}), t.LeaveConversation = void 0, n = n(10), i(s, r = n.ChatterboxCommand), s.commandName = "LeaveConversation", n = s;

    function s() {
        return null !== r && r.apply(this, arguments) || this
    }

    t.LeaveConversation = n
}, function (e, t, n) {
    "use strict";
    var o, r, i = this && this.__extends || (o = function (e, t) {
        return (o = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
            e.__proto__ = t
        } || function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        })(e, t)
    }, function (e, t) {
        function n() {
            this.constructor = e
        }

        o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    });
    Object.defineProperty(t, "__esModule", {value: !0}), t.SendMessage = void 0, n = n(10), i(s, r = n.ChatterboxCommand), s.commandName = "SendMessage", n = s;

    function s() {
        return null !== r && r.apply(this, arguments) || this
    }

    t.SendMessage = n
}, function (e, t, n) {
    "use strict";
    var o, r, i = this && this.__extends || (o = function (e, t) {
        return (o = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
            e.__proto__ = t
        } || function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        })(e, t)
    }, function (e, t) {
        function n() {
            this.constructor = e
        }

        o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    });
    Object.defineProperty(t, "__esModule", {value: !0}), t.SignalWriting = void 0, n = n(10), i(s, r = n.ChatterboxCommand), s.commandName = "SignalWriting", n = s;

    function s() {
        return null !== r && r.apply(this, arguments) || this
    }

    t.SignalWriting = n
}, function (e, t, n) {
    "use strict";
    var o, r = this && this.__extends || (o = function (e, t) {
        return (o = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
            e.__proto__ = t
        } || function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        })(e, t)
    }, function (e, t) {
        function n() {
            this.constructor = e
        }

        o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }), i = (Object.defineProperty(t, "__esModule", {value: !0}), t.EventDeserializer = t.AbstractJsonDeserializer = void 0, n(104)), s = n(105);
    a.prototype.deserialize = function (e) {
        return e = JSON.parse(e), this.deserializeObject(e)
    }, a.prototype.deserializeArray = function (e) {
        var t = new Array;
        e = JSON.parse(e);
        if (Array.isArray(e)) for (var n = 0, o = e; n < o.length; n++) {
            var r = o[n];
            t.push(this.deserializeObject(r))
        } else t.push(this.deserializeObject(e));
        return t
    }, n = a;

    function a() {
    }

    t.AbstractJsonDeserializer = n, r(u, c = n), u.prototype.addEventFactory = function (e) {
        this.factories.set(e.eventName, (function () {
            return new e
        }))
    }, u.prototype.deserializeObject = function (e) {
        var t = e.eventName, n = this.factories.get(t);
        if (n) return n = n(), Object.assign(n, e);
        throw new Error('Factory not found for event "' + t + '".')
    };
    var c;
    r = u;

    function u() {
        var e = c.call(this) || this;
        return e.factories = new Map, e.addEventFactory(i.TermsAndConditionsAccepted), e.addEventFactory(i.TermsAndConditionsDeclined), e.addEventFactory(i.ConversationStarted), e.addEventFactory(i.ConversationOpened), e.addEventFactory(i.ConversationJoined), e.addEventFactory(i.ConversationLeft), e.addEventFactory(i.MessageSent), e.addEventFactory(i.WritingSignaled), e.addEventFactory(i.ConversationEnded), e.addEventFactory(i.ConversationQueued), e.addEventFactory(i.ConversationNotFound), e.addEventFactory(i.ConversationUnQueued), e.addEventFactory(i.QueuePosition), e.addEventFactory(i.AgentJoinedConversation), e.addEventFactory(i.MessageOptionSelected), e.addEventFactory(s.MessageOptionsSent), e.addEventFactory(i.UrlPopupMessageSent), e.addEventFactory(i.AttachmentReferenceSent), e
    }

    t.EventDeserializer = r
}, function (e, t, n) {
    "use strict";
    var o, r, i = this && this.__extends || (o = function (e, t) {
        return (o = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
            e.__proto__ = t
        } || function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        })(e, t)
    }, function (e, t) {
        function n() {
            this.constructor = e
        }

        o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    });
    Object.defineProperty(t, "__esModule", {value: !0}), t.ConversationEnded = void 0, n = n(2), i(s, r = n.ChatterboxEvent), s.eventName = "ConversationEnded", n = s;

    function s() {
        return null !== r && r.apply(this, arguments) || this
    }

    t.ConversationEnded = n
}, function (e, t, n) {
    "use strict";
    var o, r, i = this && this.__extends || (o = function (e, t) {
        return (o = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
            e.__proto__ = t
        } || function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        })(e, t)
    }, function (e, t) {
        function n() {
            this.constructor = e
        }

        o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    });
    Object.defineProperty(t, "__esModule", {value: !0}), t.ConversationStarted = void 0, n = n(2), i(s, r = n.ChatterboxEvent), s.eventName = "ConversationStarted", n = s;

    function s() {
        return null !== r && r.apply(this, arguments) || this
    }

    t.ConversationStarted = n
}, function (e, t, n) {
    "use strict";
    var o, r, i = this && this.__extends || (o = function (e, t) {
        return (o = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
            e.__proto__ = t
        } || function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        })(e, t)
    }, function (e, t) {
        function n() {
            this.constructor = e
        }

        o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    });
    Object.defineProperty(t, "__esModule", {value: !0}), t.ConversationOpened = void 0, n = n(2), i(s, r = n.ChatterboxEvent), s.eventName = "ConversationOpened", n = s;

    function s() {
        return null !== r && r.apply(this, arguments) || this
    }

    t.ConversationOpened = n
}, function (e, t, n) {
    "use strict";
    var o, r, i = this && this.__extends || (o = function (e, t) {
        return (o = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
            e.__proto__ = t
        } || function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        })(e, t)
    }, function (e, t) {
        function n() {
            this.constructor = e
        }

        o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    });
    Object.defineProperty(t, "__esModule", {value: !0}), t.ConversationNotFound = void 0, n = n(2), i(s, r = n.ChatterboxEvent), s.eventName = "ConversationNotFound", n = s;

    function s() {
        return null !== r && r.apply(this, arguments) || this
    }

    t.ConversationNotFound = n
}, function (e, t, n) {
    "use strict";
    var o, r, i = this && this.__extends || (o = function (e, t) {
        return (o = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
            e.__proto__ = t
        } || function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        })(e, t)
    }, function (e, t) {
        function n() {
            this.constructor = e
        }

        o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    });
    Object.defineProperty(t, "__esModule", {value: !0}), t.ConversationQueued = void 0, n = n(2), i(s, r = n.ChatterboxEvent), s.eventName = "ConversationQueued", n = s;

    function s() {
        return null !== r && r.apply(this, arguments) || this
    }

    t.ConversationQueued = n
}, function (e, t, n) {
    "use strict";
    var o, r, i = this && this.__extends || (o = function (e, t) {
        return (o = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
            e.__proto__ = t
        } || function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        })(e, t)
    }, function (e, t) {
        function n() {
            this.constructor = e
        }

        o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    });
    Object.defineProperty(t, "__esModule", {value: !0}), t.MessageSent = void 0, n = n(2), i(s, r = n.ChatterboxEvent), s.eventName = "MessageSent", n = s;

    function s() {
        return null !== r && r.apply(this, arguments) || this
    }

    t.MessageSent = n
}, function (e, t, n) {
    "use strict";
    var o, r, i = this && this.__extends || (o = function (e, t) {
        return (o = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
            e.__proto__ = t
        } || function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        })(e, t)
    }, function (e, t) {
        function n() {
            this.constructor = e
        }

        o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    });
    Object.defineProperty(t, "__esModule", {value: !0}), t.ConversationJoined = void 0, n = n(2), i(s, r = n.ChatterboxEvent), s.eventName = "ConversationJoined", n = s;

    function s() {
        return null !== r && r.apply(this, arguments) || this
    }

    t.ConversationJoined = n
}, function (e, t, n) {
    "use strict";
    var o, r, i = this && this.__extends || (o = function (e, t) {
        return (o = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
            e.__proto__ = t
        } || function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        })(e, t)
    }, function (e, t) {
        function n() {
            this.constructor = e
        }

        o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    });
    Object.defineProperty(t, "__esModule", {value: !0}), t.ConversationLeft = void 0, n = n(2), i(s, r = n.ChatterboxEvent), s.eventName = "ConversationLeft", n = s;

    function s() {
        return null !== r && r.apply(this, arguments) || this
    }

    t.ConversationLeft = n
}, function (e, t, n) {
    "use strict";
    var o, r, i = this && this.__extends || (o = function (e, t) {
        return (o = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
            e.__proto__ = t
        } || function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        })(e, t)
    }, function (e, t) {
        function n() {
            this.constructor = e
        }

        o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    });
    Object.defineProperty(t, "__esModule", {value: !0}), t.WritingSignaled = void 0, n = n(2), i(s, r = n.ChatterboxEvent), s.eventName = "WritingSignaled", n = s;

    function s() {
        return null !== r && r.apply(this, arguments) || this
    }

    t.WritingSignaled = n
}, function (e, t, n) {
    "use strict";
    var o, r, i = this && this.__extends || (o = function (e, t) {
        return (o = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
            e.__proto__ = t
        } || function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        })(e, t)
    }, function (e, t) {
        function n() {
            this.constructor = e
        }

        o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    });
    Object.defineProperty(t, "__esModule", {value: !0}), t.ConversationUnQueued = void 0, n = n(2), i(s, r = n.ChatterboxEvent), s.eventName = "ConversationUnQueued", n = s;

    function s() {
        return null !== r && r.apply(this, arguments) || this
    }

    t.ConversationUnQueued = n
}, function (e, t, n) {
    "use strict";
    var o, r, i = this && this.__extends || (o = function (e, t) {
        return (o = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
            e.__proto__ = t
        } || function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        })(e, t)
    }, function (e, t) {
        function n() {
            this.constructor = e
        }

        o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    });
    Object.defineProperty(t, "__esModule", {value: !0}), t.AgentJoinedConversation = void 0, n = n(2), i(s, r = n.ChatterboxEvent), s.eventName = "AgentJoinedConversation", n = s;

    function s() {
        return null !== r && r.apply(this, arguments) || this
    }

    t.AgentJoinedConversation = n
}, function (e, t, n) {
    "use strict";
    var o, r, i = this && this.__extends || (o = function (e, t) {
        return (o = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
            e.__proto__ = t
        } || function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        })(e, t)
    }, function (e, t) {
        function n() {
            this.constructor = e
        }

        o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    });
    Object.defineProperty(t, "__esModule", {value: !0}), t.MessageOptionSelected = void 0, n = n(2), i(s, r = n.ChatterboxEvent), s.eventName = "MessageOptionSelected", n = s;

    function s() {
        return null !== r && r.apply(this, arguments) || this
    }

    t.MessageOptionSelected = n
}, function (e, t, n) {
    "use strict";
    var o, r, i = this && this.__extends || (o = function (e, t) {
        return (o = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
            e.__proto__ = t
        } || function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        })(e, t)
    }, function (e, t) {
        function n() {
            this.constructor = e
        }

        o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    });
    Object.defineProperty(t, "__esModule", {value: !0}), t.UrlPopupMessageSent = void 0, n = n(2), i(s, r = n.ChatterboxEvent), s.eventName = "UrlPopupMessageSent", n = s;

    function s() {
        return null !== r && r.apply(this, arguments) || this
    }

    t.UrlPopupMessageSent = n
}, function (e, t, n) {
    "use strict";
    var o, r, i = this && this.__extends || (o = function (e, t) {
        return (o = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
            e.__proto__ = t
        } || function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        })(e, t)
    }, function (e, t) {
        function n() {
            this.constructor = e
        }

        o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    });
    Object.defineProperty(t, "__esModule", {value: !0}), t.AttachmentReferenceSent = void 0, n = n(2), i(s, r = n.ChatterboxEvent), s.eventName = "AttachmentReferenceSent", n = s;

    function s() {
        return null !== r && r.apply(this, arguments) || this
    }

    t.AttachmentReferenceSent = n
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.RegistrationField = void 0, t.RegistrationField = function () {
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.ConnectionState = void 0, (t = t.ConnectionState || (t.ConnectionState = {}))[t.Idle = 0] = "Idle", t[t.Opening = 1] = "Opening", t[t.Starting = 2] = "Starting", t[t.Connected = 3] = "Connected", t[t.Joined = 4] = "Joined"
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.ChatterboxConfiguration = void 0, t.ChatterboxConfiguration = function (e, t, n, o) {
        this.socketUrl = e, this.apiUrlConfig = t, this.apiUrlHistory = n, this.apiUrlRequestReport = o
    }
}, function (e, t, n) {
    "use strict";
    var o = this && this.__awaiter || function (e, t, n, o) {
        return new (n = n || Promise)((function (r, i) {
            function s(e) {
                try {
                    c(o.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function a(e) {
                try {
                    c(o.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function c(e) {
                var t;
                e.done ? r(e.value) : ((t = e.value) instanceof n ? t : new n((function (e) {
                    e(t)
                }))).then(s, a)
            }

            c((o = o.apply(e, t || [])).next())
        }))
    }, r = this && this.__generator || function (e, t) {
        var n, o, r, i = {
            label: 0, sent: function () {
                if (1 & r[0]) throw r[1];
                return r[1]
            }, trys: [], ops: []
        }, s = {next: a(0), throw: a(1), return: a(2)};
        return "function" == typeof Symbol && (s[Symbol.iterator] = function () {
            return this
        }), s;

        function a(s) {
            return function (a) {
                var c = [s, a];
                if (n) throw new TypeError("Generator is already executing.");
                for (; i;) try {
                    if (n = 1, o && (r = 2 & c[0] ? o.return : c[0] ? o.throw || ((r = o.return) && r.call(o), 0) : o.next) && !(r = r.call(o, c[1])).done) return r;
                    switch (o = 0, (c = r ? [2 & c[0], r.value] : c)[0]) {
                        case 0:
                        case 1:
                            r = c;
                            break;
                        case 4:
                            return i.label++, {value: c[1], done: !1};
                        case 5:
                            i.label++, o = c[1], c = [0];
                            continue;
                        case 7:
                            c = i.ops.pop(), i.trys.pop();
                            continue;
                        default:
                            if (!(r = 0 < (r = i.trys).length && r[r.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                i = 0;
                                continue
                            }
                            if (3 === c[0] && (!r || c[1] > r[0] && c[1] < r[3])) i.label = c[1]; else if (6 === c[0] && i.label < r[1]) i.label = r[1], r = c; else {
                                if (!(r && i.label < r[2])) {
                                    r[2] && i.ops.pop(), i.trys.pop();
                                    continue
                                }
                                i.label = r[2], i.ops.push(c)
                            }
                    }
                    c = t.call(e, i)
                } catch (a) {
                    c = [6, a], o = 0
                } finally {
                    n = r = 0
                }
                if (5 & c[0]) throw c[1];
                return {value: c[0] ? c[1] : void 0, done: !0}
            }
        }
    }, i = (Object.defineProperty(t, "__esModule", {value: !0}), t.ChatterboxService = void 0, n(18)), s = n(225), a = n(109), c = n(45), u = n(226), l = n(227), d = n(228), p = n(229), h = n(21), f = n(106), m = n(107), v = n(108), y = n(47), g = n(110), b = n(230), w = n(231);
    Object.defineProperty(C.prototype, "conversationUuid", {
        get: function () {
            return this.state.conversationUuid
        }, set: function (e) {
            this.state.conversationUuid = e
        }, enumerable: !1, configurable: !0
    }), Object.defineProperty(C.prototype, "peerUuid", {
        get: function () {
            return this.conversationUuid || i.Guid.empty
        }, enumerable: !1, configurable: !0
    }), Object.defineProperty(C.prototype, "registrationFields", {
        get: function () {
            return this._registrationFields
        }, enumerable: !1, configurable: !0
    }), Object.defineProperty(C.prototype, "socketUrl", {
        get: function () {
            return this.state.chatterboxConfiguration.socketUrl + "?peerId=" + this.peerUuid + "&Authorization=" + encodeURIComponent("Bearer " + this.state.webToken)
        }, enumerable: !1, configurable: !0
    }), Object.defineProperty(C.prototype, "socketIsOpen", {
        get: function () {
            return !!this.socket && 1 === this.socket.readyState
        }, enumerable: !1, configurable: !0
    }), C.prototype.start = function () {
        return o(this, void 0, void 0, (function () {
            return r(this, (function (e) {
                switch (e.label) {
                    case 0:
                        if (this.state.connectionState !== c.ConnectionState.Idle) throw new Error("Expected Idle state, got " + c.ConnectionState[this.state.connectionState] + ".");
                        return [4, this.updateWidgetConfiguration()];
                    case 1:
                        return e.sent(), this.state.stylingService = new b.StylingService(this.state), this.state.textsService = new w.TextsService(this.state), this.showTerms(), this.addWelcomeMessage(), this.showAttachmentOption(), this.conversationUuid && (this.state.connectionState = c.ConnectionState.Opening, this.initCommunication(null)), this.notifyStarted(), [2]
                }
            }))
        }))
    }, C.prototype.stop = function () {
        console.log("chatterbox service stop()"), console.log("socketIsOpen: " + this.socketIsOpen), this.state.connectionState = c.ConnectionState.Idle, this.socket.close()
    }, C.prototype.notifyStarted = function () {
        console.log("chatterbox.service.ts notifyStarted()"), this.onStart$.next(), this.state.dispatcherService.dispatch(h.DispatchType.WidgetStarted)
    }, C.prototype.stopSocketKeepAlive = function () {
        this.keepAliveInterval && window.clearInterval(this.keepAliveInterval)
    }, C.prototype.startSocketKeepAlive = function () {
        var e = this;
        this.stopSocketKeepAlive(), this.keepAliveInterval = window.setInterval((function () {
            return e.keepAlive()
        }), 54e3)
    }, C.prototype.keepAlive = function () {
        this.sendCommand(new d.KeepAlive)
    }, C.prototype.getWidgetConfiguration = function () {
        return o(this, void 0, void 0, (function () {
            var e = this;
            return r(this, (function (t) {
                switch (t.label) {
                    case 0:
                        return [4, s.PromiseUtils.retry((function () {
                            return e.httpGet(e.state.chatterboxConfiguration.apiUrlConfig + "?" + e.state.webToken.split(".")[2] + "&skipCache=" + e.skipCache)
                        }), (function (e) {
                            console.error(e)
                        }))];
                    case 1:
                        return [2, t.sent()]
                }
            }))
        }))
    }, C.prototype.updateWidgetConfiguration = function () {
        return o(this, void 0, void 0, (function () {
            var e;
            return r(this, (function (t) {
                switch (t.label) {
                    case 0:
                        return [4, this.getWidgetConfiguration()];
                    case 1:
                        return (e = t.sent()) && (this.state.widgetConfiguration = JSON.parse(e)), [2]
                }
            }))
        }))
    }, C.prototype.httpPost = function (e, t) {
        return this.http.open("POST", e, !0), this.http.setRequestHeader("Content-Type", "application/json"), this.http.setRequestHeader("Authorization", "Bearer " + this.state.webToken), this.http.post(t)
    }, C.prototype.httpGet = function (e) {
        return this.http.open("GET", e, !0), this.http.setRequestHeader("Authorization", "Bearer " + this.state.webToken), this.http.get()
    }, C.prototype.startConversation = function (e) {
        void 0 === e && (e = []), console.log("startConversation", e), this.state.connectionState === c.ConnectionState.Idle && (this._registrationFields = e, this.state.connectionState = c.ConnectionState.Starting, this.conversationUuid = i.Guid.newGuid(), this.initCommunication(e))
    }, C.prototype.initCommunication = function (e) {
        var t = this;
        console.log("initCommunication", this.conversationUuid);
        try {
            this.socket = new WebSocket(this.socketUrl), console.log(this.socket), console.log("socket.readyState: " + this.socket.readyState), this.socket.onmessage = function (e) {
                return t.onSocketMessage(e)
            }, this.socket.onopen = function () {
                return t.onSocketOpen(e)
            }, this.socket.onclose = function (e) {
                return t.onSocketClose(e)
            }, this.socket.onerror = function (e) {
                return t.onSocketError(e)
            }
        } catch (e) {
            throw console.error(e), e
        }
    }, C.prototype.onSocketOpen = function (e) {
        if (void 0 === e && (e = []), console.log("onSocketOpen", "socket.readyState: ", this.socket.readyState, this.state.connectionState), this.startSocketKeepAlive(), this.state.connectionState === c.ConnectionState.Starting) {
            var t = this.createCommand(c.StartConversation);
            t.registrationFields = e, t.acceptTerms = this.state.areTermsAccepted, this.sendCommand(t)
        } else {
            if (this.state.connectionState !== c.ConnectionState.Opening || !this.conversationUuid) throw new Error("Expected Starting or Opening state, got " + c.ConnectionState[this.state.connectionState] + ".");
            e = this.createCommand(c.OpenConversation), this.sendCommand(e)
        }
    }, C.prototype.onSocketClose = function (e) {
        console.log("onSocketClose", e), this.stopSocketKeepAlive(), this.state.renderer.disableInput(), this.state.connectionState !== c.ConnectionState.Idle && this.state.renderer.showBottomInfo("Lost connection."), this.conditionalReconnect()
    }, C.prototype.onSocketError = function (e) {
        console.log("onSocketError"), console.error(e)
    }, C.prototype.conditionalReconnect = function () {
        console.log("conditionalReconnect, connectionState:", c.ConnectionState[this.state.connectionState]), this.state.connectionState !== c.ConnectionState.Idle && (console.error("WebSocket connection lost: Reconnecting in " + this.SOCKET_RETRY_TIME / 1e3 + " seconds."), this.reconnect())
    }, C.prototype.reconnect = function () {
        var e = this;
        console.log("reconnect"), this.state.connectionState = c.ConnectionState.Opening, setTimeout((function () {
            e.initCommunication()
        }), this.SOCKET_RETRY_TIME)
    }, C.prototype.onSocketMessage = function (e) {
        console.log(e), e = this.eventDeserializer.deserialize(e.data), this.handleEvent(e)
    }, C.prototype.handleEvent = function (e, t) {
        void 0 === t && (t = !1), 0 < e.sequenceNumber && this.handledEvents.find((function (t) {
            return t.sequenceNumber === e.sequenceNumber
        })) ? console.warn("event already added", e) : e instanceof m.TermsAndConditionsAccepted ? this.state.renderer.showTerms(!1) : e instanceof v.TermsAndConditionsDeclined || (e instanceof c.ConversationStarted ? this.handleConversationStarted(e) : e instanceof c.ConversationOpened ? this.handleConversationOpened(e) : e instanceof c.ConversationNotFound ? this.handleConversationNotFound(e) : e instanceof c.MessageSent ? this.handleMessageSent(e, t) : e instanceof c.ConversationQueued ? this.handleConversationQueued(e) : e instanceof c.ConversationJoined ? this.handleConversationJoined(e) : e instanceof c.ConversationLeft ? this.handleConversationLeft(e) : e instanceof c.ConversationEnded ? this.handleConversationEnded(e) : e instanceof c.WritingSignaled ? this.handleWritingSignaled(e) : e instanceof f.QueuePosition ? this.handleQueuePosition(e) : e instanceof c.MessageOptionsSent ? this.handleMessageOptionsSent(e) : e instanceof c.MessageOptionSelected ? this.handleMessageOptionSelected(e) : e instanceof c.ConversationUnQueued ? this.handleConversationUnQueued(e) : e instanceof c.UrlPopupMessageSent ? this.handleUrlPopupMessageSent(e) : e instanceof c.AttachmentReferenceSent ? this.handleAttachmentReferenceSent(e) : console.error("Cannot read incoming event", e.eventName), this.handledEvents.push(e))
    }, C.prototype.handleEvents = function (e) {
        var t = this;
        e.forEach((function (e) {
            return t.handleEvent(e, !0)
        }))
    }, C.prototype.handleConversationOpened = function (e) {
        var t = this, n = (console.log("conversation opened"), e.events = e.events.map((function (e) {
            return t.eventDeserializer.deserialize(JSON.stringify(e))
        })), console.log(e), e.events.some((function (e) {
            return e instanceof c.ConversationEnded
        })));
        n || (this.state.widgetConfiguration.isOpen = !0, this.state.widgetConfiguration.delayTime = 0, this.state.widgetConfiguration.registration = !1), this.handleConversationStarted(e.events[0], !1), this.handleEvents(e.events.slice(1)), e.events.some((function (e) {
            return e instanceof c.ConversationJoined && e.peerId === e.conversationId
        })) && (this.state.connectionState = c.ConnectionState.Joined), n || (this.state.renderer.enableChat(), (n = (n = e.events.filter((function (e) {
            return e.eventName === c.MessageSent.eventName
        })))[n.length - 1]) && n.messageId !== this.state.lastReadMessageId && (this.state.dispatcherService.dispatch(h.DispatchType.ToggleWidgetOpen), this.state.lastReadMessageId = n.messageId)), this.onConversationOpened$.next(e)
    }, C.prototype.handleConversationNotFound = function (e) {
        console.log("conversation not found"), this.state.connectionState = c.ConnectionState.Idle, this.conversationUuid = null, window.location.reload(!0)
    }, C.prototype.handleConversationStarted = function (e, t) {
        void 0 === t && (t = !0), console.log("conversation started, enableChat: " + t), this.state.connectionState = c.ConnectionState.Connected, this.conversationUuid = e.conversationId, this.state.dispatcherService.dispatch(h.DispatchType.SetConversationId, this.conversationUuid), t && this.state.renderer.enableChat(), this.onConversationStarted$.next(e)
    }, C.prototype.handleConversationLeft = function (e) {
        console.log("handleConversationLeft"), this.state.renderer.addEventToConversation(e)
    }, C.prototype.handleConversationEnded = function (e) {
        this.state.hasConversationEnded = !0, console.log("handleConversationEnded"), this.state.connectionState = c.ConnectionState.Idle, this.lastConversationId = this.conversationUuid, this.conversationUuid = null, this.onConversationEnded$.next(e), this.socket.close()
    }, C.prototype.handleWritingSignaled = function (e) {
        console.log("handleWritingSignaled"), console.log(e), e.peerId !== e.conversationId && this.state.writingHandler.handleAgentIsWriting()
    }, C.prototype.handleMessageOptionsSent = function (e) {
        console.log("handleMessageOptionsSent"), this.state.renderer.addOptions(e)
    }, C.prototype.handleUrlPopupMessageSent = function (e) {
        console.log("handleUrlPopupMessageSent");
        var t = this.getMessageOwner(e);
        this.state.renderer.addUrlPopup(t, e)
    }, C.prototype.handleAttachmentReferenceSent = function (e) {
        console.log("AttachmentReferenceSent");
        var t = this.getMessageOwner(e);
        "text/x-uri" == e.mimeType ? this.state.renderer.addUrlButtonFromAttachment(e) : e.previewLink ? e.mimeType.startsWith("video/") ? this.state.renderer.addVideoFromAttachment(t, e) : this.state.renderer.addImageFromAttachment(t, e) : this.state.renderer.addUrlFromAttachment(t, e)
    }, C.prototype.handleMessageOptionSelected = function (e) {
        console.log("handleMessageOptionSelected"), document.querySelectorAll('div[message-id="' + e.referenceOptionList + '"').forEach((function (t) {
            t.querySelectorAll("one-time-option").forEach((function (t) {
                t.disabled = !0, t.getAttribute("option-id") === e.optionId && t.classList.add("selected")
            }))
        }))
    }, C.prototype.handleConversationUnQueued = function (e) {
        console.warn("handleConversationUnQueued unhandled")
    }, C.prototype.handleMessageSent = function (e, t) {
        void 0 === t && (t = !1);
        var n = this.getMessageOwner(e);
        this.state.renderer.newMessage(e, n, !t), t || (this.onMessageSent$.next(e), this.state.dispatcherService.dispatch(h.DispatchType.ToggleWidgetOpen), this.state.lastReadMessageId = e.messageId)
    }, C.prototype.getMessageOwner = function (e) {
        return e.peerId === this.peerUuid ? y.MessageType.EndUser : e.peerId === i.Guid.empty ? y.MessageType.System : y.MessageType.Agent
    }, C.prototype.handleConversationQueued = function (e) {
        this.state.renderer.addEventToConversation(e)
    }, C.prototype.handleConversationJoined = function (e) {
        this.state.renderer.addEventToConversation(e), this.state.renderer.startConversation(null), this.state.peerNameService.addPeer(e.peerId, new g.Peer(e.peerId, e.name, e.peerType)), e.peerId === this.peerUuid && (this.state.connectionState = c.ConnectionState.Joined), this.sendPendingMessages()
    }, C.prototype.signalWidgetIsWriting = function () {
        console.log("chatterbox.signalWidgetIsWriting");
        var e = new c.SignalWriting;
        e.conversationId = this.conversationUuid, e.peerId = this.peerUuid, this.sendCommand(e)
    }, C.prototype.handleQueuePosition = function (e) {
        this.state.renderer.queuePosition(e.position)
    }, C.prototype.requestReport = function (e) {
        return o(this, void 0, void 0, (function () {
            return r(this, (function (t) {
                switch (t.label) {
                    case 0:
                        return [4, this.sendEmailInternal(e)];
                    case 1:
                        return t.sent(), [2]
                }
            }))
        }))
    }, C.prototype.sendEmailInternal = function (e) {
        return o(this, void 0, void 0, (function () {
            var t;
            return r(this, (function (n) {
                switch (n.label) {
                    case 0:
                        return console.log('sendEmailInternal: "' + e + '"'), t = {ConversationId: this.lastConversationId, Email: e}, [4, this.httpPost(this.state.chatterboxConfiguration.apiUrlRequestReport, t)];
                    case 1:
                        return n.sent(), [2]
                }
            }))
        }))
    }, C.prototype.sendAttachment = function (e) {
        var t = this.createCommand(u.AddAttachmentCommand);
        t.messageContent = e.messageContent, t.conversationId = this.conversationUuid, t.attachmentList = e.attachmentList, this.sendCommand(t)
    }, C.prototype.sendMessage = function (e) {
        this.state.connectionState !== c.ConnectionState.Joined ? (this.addPendingMessage(e), this.state.widgetConfiguration.registration || this.state.connectionState !== c.ConnectionState.Idle || this.startConversation()) : this.sendMessageInternal(e)
    }, C.prototype.sendMessageInternal = function (e) {
        console.log('sendMessageInternal: "' + e + '"');
        var t = this.createCommand(c.SendMessage);
        t.messageContent = e, t.conversationId = this.conversationUuid, this.sendCommand(t)
    }, C.prototype.addPendingMessage = function (e) {
        this.pendingMessages.push(e)
    }, C.prototype.sendPendingMessages = function () {
        console.log("sendPendingMessages");
        for (var e = 0, t = this.pendingMessages; e < t.length; e++) {
            var n = t[e];
            console.log(n), this.sendMessageInternal(n)
        }
        this.pendingMessages = []
    }, C.prototype.sendCommand = function (e) {
        this.socketIsOpen && (e = this.commandSerializer.serialize(e), console.log("send command " + e), this.socket.send(e))
    }, C.prototype.leaveConversation = function () {
        var e = this.createCommand(c.LeaveConversation);
        this.sendCommand(e)
    }, C.prototype.endConversation = function () {
        var e = this.createCommand(l.CloseConversation);
        this.sendCommand(e)
    }, C.prototype.addWelcomeMessage = function () {
        var e;
        this.state.textsService.welcomeMessageText && ((e = new c.MessageSent).messageContent = this.state.textsService.welcomeMessageText, e.peerId = i.Guid.empty, e.created = new Date, this.state.renderer.newMessage(e, y.MessageType.System, this.state.widgetConfiguration.widgetIsOpenOnStart))
    }, C.prototype.showAttachmentOption = function () {
        var e = this.state.widgetConfiguration && this.state.widgetConfiguration.attachmentSupported;
        console.log("showAttachmentOption ", e), this.state.renderer.showAttachmentOption(e)
    }, C.prototype.showTerms = function () {
        console.log("showTerms"), this.state.widgetConfiguration.userNeedsToAcceptTerms && this.state.widgetConfiguration.isOpen && this.state.renderer.showTerms(!0)
    }, C.prototype.termsAccepted = function () {
        this.state.termsAccepted()
    }, C.prototype.onOpenExternalUrl = function (e) {
        window.open(e, "_blank")
    }, C.prototype.onOptionSelected = function (e, t, n, o) {
        this.handledEvents.some((function (e) {
            return e.eventName === c.MessageOptionSelected.eventName && e.referenceOptionList === t.messageId
        })) ? console.warn("option already selected") : (o.querySelectorAll("button.option").forEach((function (e) {
            e.classList.contains("one-time-option") && (e.classList.remove("selected"), e.disabled = !0)
        })), o.querySelectorAll('button[option-id="' + e.optionId + '"]').forEach((function (e) {
            e.classList.contains("one-time-option") && e.classList.add("selected")
        })), (o = new p.SelectMessageOption).selectedOption = e, o.referenceOptionList = t.messageId, o.messageId = i.Guid.newGuid(), console.log(o), this.sendCommand(o))
    }, C.prototype.createCommand = function (e) {
        return console.log("createCommand"), e = new e, console.log(e), e.conversationId = this.conversationUuid, e.peerId = this.peerUuid, e
    }, n = C;

    function C(e, t) {
        var n = this;
        this.http = e, this.state = t, this.eventDeserializer = new c.EventDeserializer, this.commandSerializer = new c.CommandSerializer, this.handledEvents = [], this.socket = null, this.SOCKET_RETRY_TIME = 5e3, this.onConversationOpened$ = new a.SimpleSubject, this.onConversationEnded$ = new a.SimpleSubject, this.onConversationStarted$ = new a.SimpleSubject, this.onStart$ = new a.SimpleSubject, this.onMessageSent$ = new a.SimpleSubject, this.skipCache = !1, this._registrationFields = [], this.pendingMessages = [], this.onConversationStarted$.subscribe((function (e) {
            return n.state.dispatcherService.dispatch(h.DispatchType.ConversationStarted, e)
        })), this.onConversationEnded$.subscribe((function (e) {
            return n.state.dispatcherService.dispatch(h.DispatchType.ConversationEnded, e)
        }))
    }

    t.ChatterboxService = n
}, function (e, t, n) {
    "use strict";
    var o = this && this.__awaiter || function (e, t, n, o) {
        return new (n = n || Promise)((function (r, i) {
            function s(e) {
                try {
                    c(o.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function a(e) {
                try {
                    c(o.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function c(e) {
                var t;
                e.done ? r(e.value) : ((t = e.value) instanceof n ? t : new n((function (e) {
                    e(t)
                }))).then(s, a)
            }

            c((o = o.apply(e, t || [])).next())
        }))
    }, r = this && this.__generator || function (e, t) {
        var n, o, r, i = {
            label: 0, sent: function () {
                if (1 & r[0]) throw r[1];
                return r[1]
            }, trys: [], ops: []
        }, s = {next: a(0), throw: a(1), return: a(2)};
        return "function" == typeof Symbol && (s[Symbol.iterator] = function () {
            return this
        }), s;

        function a(s) {
            return function (a) {
                var c = [s, a];
                if (n) throw new TypeError("Generator is already executing.");
                for (; i;) try {
                    if (n = 1, o && (r = 2 & c[0] ? o.return : c[0] ? o.throw || ((r = o.return) && r.call(o), 0) : o.next) && !(r = r.call(o, c[1])).done) return r;
                    switch (o = 0, (c = r ? [2 & c[0], r.value] : c)[0]) {
                        case 0:
                        case 1:
                            r = c;
                            break;
                        case 4:
                            return i.label++, {value: c[1], done: !1};
                        case 5:
                            i.label++, o = c[1], c = [0];
                            continue;
                        case 7:
                            c = i.ops.pop(), i.trys.pop();
                            continue;
                        default:
                            if (!(r = 0 < (r = i.trys).length && r[r.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                i = 0;
                                continue
                            }
                            if (3 === c[0] && (!r || c[1] > r[0] && c[1] < r[3])) i.label = c[1]; else if (6 === c[0] && i.label < r[1]) i.label = r[1], r = c; else {
                                if (!(r && i.label < r[2])) {
                                    r[2] && i.ops.pop(), i.trys.pop();
                                    continue
                                }
                                i.label = r[2], i.ops.push(c)
                            }
                    }
                    c = t.call(e, i)
                } catch (a) {
                    c = [6, a], o = 0
                } finally {
                    n = r = 0
                }
                if (5 & c[0]) throw c[1];
                return {value: c[0] ? c[1] : void 0, done: !0}
            }
        }
    }, i = (Object.defineProperty(t, "__esModule", {value: !0}), t.PromiseUtils = void 0, s.delay = function (e) {
        return new Promise((function (t, n) {
            setTimeout((function () {
                return t()
            }), e)
        }))
    }, s.retry = function (e, t, n) {
        return void 0 === n && (n = 1e3), o(this, void 0, void 0, (function () {
            var o;
            return r(this, (function (r) {
                switch (r.label) {
                    case 0:
                        r.label = 1;
                    case 1:
                        return r.trys.push([1, 3, , 5]), [4, e()];
                    case 2:
                        return [2, r.sent()];
                    case 3:
                        return o = r.sent(), t(o), [4, this.delay(n)];
                    case 4:
                        return r.sent(), n *= 2, [3, 5];
                    case 5:
                        return [3, 0];
                    case 6:
                        return [2]
                }
            }))
        }))
    }, s);

    function s() {
    }

    t.PromiseUtils = i
}, function (e, t, n) {
    "use strict";
    var o, r, i = this && this.__extends || (o = function (e, t) {
        return (o = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
            e.__proto__ = t
        } || function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        })(e, t)
    }, function (e, t) {
        function n() {
            this.constructor = e
        }

        o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    });
    Object.defineProperty(t, "__esModule", {value: !0}), t.AddAttachmentCommand = void 0, n = n(10), i(s, r = n.ChatterboxCommand), s.commandName = "AddAttachment", n = s;

    function s() {
        return null !== r && r.apply(this, arguments) || this
    }

    t.AddAttachmentCommand = n
}, function (e, t, n) {
    "use strict";
    var o, r, i = this && this.__extends || (o = function (e, t) {
        return (o = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
            e.__proto__ = t
        } || function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        })(e, t)
    }, function (e, t) {
        function n() {
            this.constructor = e
        }

        o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    });
    Object.defineProperty(t, "__esModule", {value: !0}), t.CloseConversation = void 0, n = n(10), i(s, r = n.ChatterboxCommand), s.commandName = "CloseConversation", n = s;

    function s() {
        return null !== r && r.apply(this, arguments) || this
    }

    t.CloseConversation = n
}, function (e, t, n) {
    "use strict";
    var o, r, i = this && this.__extends || (o = function (e, t) {
        return (o = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
            e.__proto__ = t
        } || function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        })(e, t)
    }, function (e, t) {
        function n() {
            this.constructor = e
        }

        o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    });
    Object.defineProperty(t, "__esModule", {value: !0}), t.KeepAlive = void 0, n = n(10), i(s, r = n.ChatterboxCommand), s.commandName = "KeepAlive", n = s;

    function s() {
        return null !== r && r.apply(this, arguments) || this
    }

    t.KeepAlive = n
}, function (e, t, n) {
    "use strict";
    var o, r, i = this && this.__extends || (o = function (e, t) {
        return (o = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
            e.__proto__ = t
        } || function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        })(e, t)
    }, function (e, t) {
        function n() {
            this.constructor = e
        }

        o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    });
    Object.defineProperty(t, "__esModule", {value: !0}), t.SelectMessageOption = void 0, n = n(10), i(s, r = n.ChatterboxCommand), s.commandName = "SelectMessageOption", n = s;

    function s() {
        return null !== r && r.apply(this, arguments) || this
    }

    t.SelectMessageOption = n
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.StylingService = void 0;
    var o = n(32), r = n(21), i = n(19);

    function s(e) {
        this.state = e, this.dispatcherService = new o.DispatcherService(window.parent), this.setStyling(this.state.widgetConfiguration.styling), this.dispatchToggleSize()
    }

    s.prototype.setStyling = function (e) {
        if (e.lengthUnit && this.dispatcherService.dispatch(r.DispatchType.SetLengthUnit, e.lengthUnit), e.width && this.dispatcherService.dispatch(r.DispatchType.SetOpenWidth, e.width), e.height && this.dispatcherService.dispatch(r.DispatchType.SetHeight, e.height), "number" == typeof e.position) switch (this.dispatcherService.dispatch(r.DispatchType.SetPosition, e.position), e.position) {
            case 0:
                document.body.classList.add("top-left");
                break;
            case 1:
                document.body.classList.add("top-right");
                break;
            case 2:
                document.body.classList.add("bottom-right");
                break;
            case 3:
                document.body.classList.add("bottom-left")
        }
        if ("number" == typeof e.toggleContainerTextLayout && 1 === e.toggleContainerTextLayout && this.state.renderer.elements.chatToggle.classList.add("reverse"), "number" == typeof e.toggleContainerInnerType) switch (e.toggleContainerInnerType) {
            case 1:
                i.hideElement(this.state.renderer.elements.chatTitle);
                break;
            case 2:
                i.hideElement(this.state.renderer.elements.chatLogo)
        }
        if ("number" == typeof e.toggleContainerStyle) switch (e.toggleContainerStyle) {
            case 1:
                break;
            case 2:
                this.state.renderer.elements.chatToggle.classList.add("circle");
                break;
            case 3:
                this.state.renderer.elements.chatToggle.classList.add("bubble")
        }
        var t, n;
        let cspNonce = document.head.querySelector("[property~=csp-nonce][content]").content;
        e.logo && this.state.renderer.setLogo(e.logo), e.stylingValues && (t = document.createElement("style"), n = "", e.stylingValues.forEach((function (e) {
            e.selector && e.propertyName && e.value && (n = n + e.selector + "{" + e.propertyName + ":" + e.value + ";}")
        })), t.appendChild(document.createTextNode(n)), t.setAttribute('nonce', cspNonce), document.body.appendChild(t)), e.customCss && (this.makeStyleElement(), this.addCustomCss(e.customCss))
    }, s.prototype.addCustomCss = function (e) {
        this.widgetStyle.appendChild(document.createTextNode(e))
    }, s.prototype.makeStyleElement = function () {
        var e = document.head || document.getElementsByTagName("head")[0];
        this.widgetStyle = document.createElement("style"), e.appendChild(this.widgetStyle)
    }, s.prototype.dispatchToggleSize = function () {
        var e = this;
        this.state.renderer.elements.chatToggle.style.setProperty("flex", "none"), this.state.renderer.elements.chatToggle.style.setProperty("opacity", "0"), this.state.renderer.elements.chatToggle.style.setProperty("display", "flex"), requestAnimationFrame((function () {
            var t, n = 0, o = 0, i = 0, s = 0, a = e.state.renderer.elements.chatToggle.getBoundingClientRect();
            (t = ((t = Math.ceil(a.width)) && (n += t), Math.ceil(a.height))) && (o += t), o && n && ((a = window.getComputedStyle(document.body)) && ((t = parseInt(a.paddingLeft, 10)) && (i += t), (t = parseInt(a.paddingRight, 10)) && (i += t), (t = parseInt(a.paddingTop, 10)) && (s += t), (t = parseInt(a.paddingBottom, 10)) && (s += t)), n && e.dispatcherService.dispatch(r.DispatchType.SetClosedWidth, n + i), o && e.dispatcherService.dispatch(r.DispatchType.SetClosedHeight, o + s)), e.state.renderer.elements.chatToggle.style.removeProperty("display"), e.state.renderer.elements.chatToggle.style.removeProperty("opacity"), e.state.renderer.elements.chatToggle.style.removeProperty("flex")
        }))
    }, t.StylingService = s
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.TextsService = void 0;
    var o = n(47), r = n(18), i = n(110), s = n(232), a = n(19);

    function c(e) {
        this.state = e, this.replaceTexts()
    }

    c.prototype.replaceTexts = function () {
        var e = this;
        this.state.widgetConfiguration.textFields && this.state.widgetConfiguration.textFields.length && (console.log("this.state.widgetConfiguration.textFields", this.state.widgetConfiguration.textFields), this.state.widgetConfiguration.textFields.forEach((function (t) {
            switch (t.textType) {
                case o.TextType.WelcomeMessage:
                    e.welcomeMessageText = t.text;
                    break;
                case o.TextType.Header:
                    e.state.renderer.elements.chatStatus.textContent = t.text;
                    break;
                case o.TextType.LogoTitle:
                    e.state.renderer.elements.chatTitle.textContent = t.text, e.state.renderer.elements.chatStatus.textContent = t.text;
                    break;
                case o.TextType.RegistrationInfo:
                    t.text && (e.state.renderer.elements.registrationInfo.textContent = t.text, a.showElement(e.state.renderer.elements.registrationInfo));
                    break;
                case o.TextType.RegistrationFooter:
                    t.text && (e.state.renderer.elements.registrationFooter.textContent = t.text, a.showElement(e.state.renderer.elements.registrationFooter));
                    break;
                case o.TextType.RegistrationStart:
                    e.state.renderer.elements.registerButton.textContent = t.text;
                    break;
                case o.TextType.ChatInputPlaceholder:
                    e.state.renderer.elements.textInput.placeholder = t.text;
                    break;
                case o.TextType.ClosedTitle:
                    e.state.renderer.elements.closedTitle.textContent = t.text;
                    break;
                case o.TextType.ClosedBody:
                    e.state.renderer.elements.closedBody.textContent = t.text;
                    break;
                case o.TextType.RequestReportEmail:
                    e.state.renderer.sendEmailConversation.elements.requestReportEmail.textContent = t.text;
                    break;
                case o.TextType.ConversationEnded:
                    e.bottomInfoText = t.text, e.state.renderer.elements.conversationEnded.textContent = t.text;
                    break;
                case o.TextType.RequestReportWasSent:
                    e.state.renderer.sendEmailConversation.elements.emailSentText.textContent = t.text;
                    break;
                case o.TextType.StartNewChat:
                    e.state.renderer.elements.refreshButton.setAttribute("title", t.text);
                    break;
                case o.TextType.ConversationJoined:
                    e.conversationJoinedText = t.text;
                    break;
                case o.TextType.ConversationLeft:
                    e.conversationLeftText = t.text;
                    break;
                case o.TextType.ConversationQueued:
                    e.conversationQueuedText = t.text;
                    break;
                case o.TextType.QueuePosition:
                    e.queuePositionText = t.text;
                    break;
                case o.TextType.DefaultSystemName:
                    e.systemPeerName = t.text, e.state.peerNameService.addPeer(r.Guid.empty, new i.Peer(r.Guid.empty, e.systemPeerName, s.PeerType.Unknown));
                    break;
                case o.TextType.Credits:
                    e.state.renderer.elements.credits.textContent = t.text;
                    break;
                case o.TextType.AcceptTermsCheckboxLable:
                    e.state.renderer.elements.termsParagraphText.innerHTML = a.convertUrlsToAnchorTags(t.text);
                    break;
                case o.TextType.AcceptTermsLinkText:
                    e.state.renderer.elements.termsLink.textContent = t.text;
                    break;
                case o.TextType.TermsLink:
                    e.state.renderer.elements.termsLink.href = t.text;
                    break;
                case o.TextType.TermsButton:
                    e.state.renderer.elements.acceptTermsButton.textContent = t.text || "OK";
                    break;
                case o.TextType.AvailableAgentsBody:
                    e.state.renderer.elements.noAgentsBody.textContent = t.text;
                    break;
                case o.TextType.AvailableAgentsHeader:
                    e.state.renderer.elements.noAgentsTitle.textContent = t.text;
                    break;
                case o.TextType.TranscriptEmailInputPlaceholder:
                    e.state.renderer.elements.sendEmailInput.placeholder = t.text
            }
        })))
    }, t.TextsService = c
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.PeerType = void 0, (t = t.PeerType || (t.PeerType = {}))[t.Unknown = -1] = "Unknown", t[t.Widget = 0] = "Widget", t[t.Agent = 1] = "Agent", t[t.AiAgent = 2] = "AiAgent"
}, function (e, t, n) {
    "use strict";

    function o() {
        this.request = new XMLHttpRequest
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.Http = void 0, o.prototype.open = function (e, t, n) {
        this.request.open(e, t, n)
    }, o.prototype.setRequestHeader = function (e, t) {
        this.request.setRequestHeader(e, t)
    }, o.prototype.get = function () {
        var e = this;
        return new Promise((function (t, n) {
            e.request.onload = function () {
                200 <= e.request.status && e.request.status < 400 ? t(e.request.response) : t("")
            }, e.request.onerror = function () {
                return n(e.request.responseText)
            }, e.request.send()
        }))
    }, o.prototype.post = function (e) {
        var t = this;
        return new Promise((function (n, o) {
            t.request.onload = function () {
                200 <= t.request.status && t.request.status < 400 ? n(t.request.response) : n("")
            }, t.request.onerror = function () {
                return o(t.request.responseText)
            }, t.request.send(JSON.stringify(e))
        }))
    }, t.Http = o
}, function (e, t, n) {
    "use strict";

    function o() {
        this.chatToggle = null, this.chatLogo = null, this.logoPath = null, this.chatTitle = null, this.closedTitle = null, this.closedBody = null, this.noAgentsTitle = null, this.noAgentsBody = null, this.registrationForm = null, this.registrationInputs = null, this.registrationInfo = null, this.registrationFooter = null, this.chatContainer = null, this.panelContainer = null, this.sendEmailPanel = null, this.sendEmailInput = null, this.chatClosed = null, this.chatRegistration = null, this.chatMain = null, this.chatSettings = null, this.chatEnd = null, this.header = null, this.footer = null, this.chatStatus = null, this.topInfo = null, this.messagesContainer = null, this.messages = null, this.phantomMessage = null, this.phantomMessageContent = null, this.bottomInfo = null, this.menu = null, this.volumeToggleMenuItem = null, this.popWindowMenuItem = null, this.volumeToggleIcon = null, this.popWindowIcon = null, this.menuToggleButton = null, this.registrationToggleButton = null, this.refreshButton = null, this.minimizeButton = null, this.closeButton = null, this.toggleEmailButton = null, this.sendButton = null, this.registerButton = null, this.textInput = null, this.textContent = null, this.inputBox = null, this.bing = null, this.bong = null, this.conversationEnded = null, this.credits = null, this.termsPanel = null, this.termsLink = null, this.termsParagraphText = null, this.acceptTermsButton = null, this.addAttachment = null, this.inputAttachment = null, this.previewWrapper = null
    }

    var r = this && this.__awaiter || function (e, t, n, o) {
        return new (n = n || Promise)((function (r, i) {
            function s(e) {
                try {
                    c(o.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function a(e) {
                try {
                    c(o.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function c(e) {
                var t;
                e.done ? r(e.value) : ((t = e.value) instanceof n ? t : new n((function (e) {
                    e(t)
                }))).then(s, a)
            }

            c((o = o.apply(e, t || [])).next())
        }))
    }, i = this && this.__generator || function (e, t) {
        var n, o, r, i = {
            label: 0, sent: function () {
                if (1 & r[0]) throw r[1];
                return r[1]
            }, trys: [], ops: []
        }, s = {next: a(0), throw: a(1), return: a(2)};
        return "function" == typeof Symbol && (s[Symbol.iterator] = function () {
            return this
        }), s;

        function a(s) {
            return function (a) {
                var c = [s, a];
                if (n) throw new TypeError("Generator is already executing.");
                for (; i;) try {
                    if (n = 1, o && (r = 2 & c[0] ? o.return : c[0] ? o.throw || ((r = o.return) && r.call(o), 0) : o.next) && !(r = r.call(o, c[1])).done) return r;
                    switch (o = 0, (c = r ? [2 & c[0], r.value] : c)[0]) {
                        case 0:
                        case 1:
                            r = c;
                            break;
                        case 4:
                            return i.label++, {value: c[1], done: !1};
                        case 5:
                            i.label++, o = c[1], c = [0];
                            continue;
                        case 7:
                            c = i.ops.pop(), i.trys.pop();
                            continue;
                        default:
                            if (!(r = 0 < (r = i.trys).length && r[r.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                i = 0;
                                continue
                            }
                            if (3 === c[0] && (!r || c[1] > r[0] && c[1] < r[3])) i.label = c[1]; else if (6 === c[0] && i.label < r[1]) i.label = r[1], r = c; else {
                                if (!(r && i.label < r[2])) {
                                    r[2] && i.ops.pop(), i.trys.pop();
                                    continue
                                }
                                i.label = r[2], i.ops.push(c)
                            }
                    }
                    c = t.call(e, i)
                } catch (a) {
                    c = [6, a], o = 0
                } finally {
                    n = r = 0
                }
                if (5 & c[0]) throw c[1];
                return {value: c[0] ? c[1] : void 0, done: !0}
            }
        }
    }, s = this && this.__asyncValues || function (e) {
        var t, n;
        if (Symbol.asyncIterator) return (t = e[Symbol.asyncIterator]) ? t.call(e) : (e = "function" == typeof __values ? __values(e) : e[Symbol.iterator](), n = {}, o("next"), o("throw"), o("return"), n[Symbol.asyncIterator] = function () {
            return this
        }, n);
        throw new TypeError("Symbol.asyncIterator is not defined.");

        function o(t) {
            n[t] = e[t] && function (n) {
                return new Promise((function (o, r) {
                    var i, s;
                    n = e[t](n), i = o, o = r, s = n.done, r = n.value, Promise.resolve(r).then((function (e) {
                        i({value: e, done: s})
                    }), o)
                }))
            }
        }
    }, a = (Object.defineProperty(t, "__esModule", {value: !0}), t.Renderer = t.ChatElements = void 0, n(48)), c = n(19), u = n(45), l = n(235), d = n(236), p = n(21), h = n(47), f = n(237), m = n(32), v = n(238), y = n(240), g = n(241);
    t.ChatElements = o, Object.defineProperty(b.prototype, "widgetViewMode", {
        set: function (e) {
            this._widgetViewMode = e, this.updateVidgetView()
        }, enumerable: !1, configurable: !0
    }), Object.defineProperty(b.prototype, "elements", {
        get: function () {
            return this._elements
        }, enumerable: !1, configurable: !0
    }), Object.defineProperty(b.prototype, "textInput", {
        get: function () {
            return this.elements.textInput
        }, enumerable: !1, configurable: !0
    }), b.prototype.onChatterboxServiceStart = function () {
        this.initWidget()
    }, b.prototype.initWidget = function () {
        if (this.addIcons(), this.showClosedPage(), this.state.widgetConfiguration.isOpen && !1 !== this.state.widgetConfiguration.agentsAreAvailable) if (this.state.widgetConfiguration.registration && this.state.widgetConfiguration.inputFields && this.state.widgetConfiguration.inputFields.length) this.makeRegistration(this.state.widgetConfiguration.inputFields); else {
            if (this.state.widgetConfiguration.registration) return;
            this.skipRegistration()
        } else this.state.widgetConfiguration.isOpen && !1 === this.state.widgetConfiguration.agentsAreAvailable ? (this.showNoAgentsAvailablePage(), this.checkAgentAvailability()) : this.setIsOpenTimer();
        this.state.isInIframe ? this.elements.header.classList.add("can-toggle") : this.openWidget(), this.initEventListeners(), c.showElement(window.document.body)
    }, b.prototype.reload = function () {
        window.location.reload(!0)
    }, b.prototype.setIsOpenTimer = function () {
        var e = this, t = Date.now();
        t = 6e4 - 1e3 * Math.round(t / 1e3) % 6e4 + 5e3;
        window.clearTimeout(this.isOpenTimer), this.isOpenTimer = window.setTimeout((function () {
            return r(e, void 0, void 0, (function () {
                return i(this, (function (e) {
                    switch (e.label) {
                        case 0:
                            return [4, this.state.chatterboxService.updateWidgetConfiguration()];
                        case 1:
                            return e.sent(), this.state.widgetConfiguration.isOpen ? this.reload() : this.setIsOpenTimer(), [2]
                    }
                }))
            }))
        }), t)
    }, b.prototype.checkAgentAvailability = function () {
        var e = this, t = Date.now();
        t = 6e4 - 1e3 * Math.round(t / 1e3) % 6e4 + 5e3;
        window.clearTimeout(this.agentsAvailableTimer), this.agentsAvailableTimer = window.setTimeout((function () {
            return r(e, void 0, void 0, (function () {
                return i(this, (function (e) {
                    switch (e.label) {
                        case 0:
                            return [4, this.state.chatterboxService.updateWidgetConfiguration()];
                        case 1:
                            return e.sent(), !0 === this.state.widgetConfiguration.agentsAreAvailable ? this.reload() : this.checkAgentAvailability(), [2]
                    }
                }))
            }))
        }), t)
    }, b.prototype.initElementVariables = function () {
        this._elements = c.getElements(o)
    }, b.prototype.createComponents = function () {
        this.registration = new y.Registration(this.state), this.sendEmailConversation = new g.SendEmailConversation(this.state)
    }, b.prototype.removePanelsFromDOM = function () {
        this.panels = Array.from(window.document.querySelectorAll("[panel]")), this.hideAllPanels()
    }, b.prototype.initEventListeners = function () {
        var e = this;
        this.elements.chatToggle.addEventListener("click", (function (t) {
            e.toggleWidget()
        })), this.elements.header.addEventListener("click", (function (t) {
            e.toggleWidget()
        })), this.elements.footer.addEventListener("click", (function (t) {
            e.toggleWidget()
        })), document.body.addEventListener("click", (function (t) {
            c.hideElement(e.elements.menu)
        })), this.elements.menuToggleButton.addEventListener("click", (function (t) {
            t.stopPropagation(), c.showElement(e.elements.menu)
        })), this.elements.closeButton.addEventListener("click", (function (t) {
            t.stopPropagation(), e.state.chatterboxService.endConversation()
        })), this.elements.refreshButton.addEventListener("click", (function (t) {
            t.stopPropagation(), c.hideElement(window.document.body), e.reload()
        })), this.elements.volumeToggleMenuItem.addEventListener("click", (function (t) {
            t.stopPropagation(), e.toggleSound()
        })), this.elements.sendButton.addEventListener("click", (function (t) {
            e.sendMessage()
        })), this.elements.addAttachment.addEventListener("click", (function (t) {
            e.elements.inputAttachment.click()
        })), this.elements.inputAttachment.addEventListener("change", (function (t) {
            return r(e, void 0, void 0, (function () {
                var e, n;
                return i(this, (function (o) {
                    switch (o.label) {
                        case 0:
                            return e = t.target.files, [4, this.getAttachments(e)];
                        case 1:
                            return e = o.sent(), (n = this.attachments).push.apply(n, e), this.visualizeFiles(), [2]
                    }
                }))
            }))
        })), this.elements.inputBox.addEventListener("drag", (function (e) {
            e.stopPropagation(), e.preventDefault(), e.dataTransfer.dropEffect = "copy"
        })), this.elements.inputBox.addEventListener("drop", (function (t) {
            return r(e, void 0, void 0, (function () {
                var e, n;
                return i(this, (function (o) {
                    switch (o.label) {
                        case 0:
                            return t.stopPropagation(), t.preventDefault(), e = t.dataTransfer.files, [4, this.getAttachments(e)];
                        case 1:
                            return e = o.sent(), (n = this.attachments).push.apply(n, e), this.visualizeFiles(), [2]
                    }
                }))
            }))
        })), this.elements.popWindowMenuItem.addEventListener("click", (function (t) {
            var n, o;
            t.stopPropagation(), e.state.webToken && (t = window.location.href + "?jwt=" + e.state.webToken, e.state.conversationUuid && (e.state.chatterboxService.stop(), t = t + "&conversationId=" + e.state.conversationUuid), o = window.innerWidth, n = window.innerHeight, n = "left=" + (e.state.parentWidth / 2 - o / 2) + ",top=" + (e.state.parentHeight / 2 - n / 2) + ",height=" + n + ",width=" + o, console.log(n), o = window.open(t, "_blank", n), e.dispatcherService.dispatch(p.DispatchType.ToggleWidgetClosed), o.addEventListener("beforeunload", (function () {
                console.log("beforeunload"), e.dispatcherService.dispatch(p.DispatchType.ReloadIframe)
            })), e.poppedWindow = o)
        })), this.elements.textInput.addEventListener("keydown", (function (t) {
            13 === t.keyCode ? (t.preventDefault(), t.ctrlKey ? e.elements.textInput.value = e.elements.textInput.value + "\r\n" : e.sendMessage()) : 27 === t.keyCode && (e.elements.textInput.value = ""), t.keyCode < 37 && 40 < t.keyCode && (e.elements.textContent.textContent = e.elements.textInput.value + t.key + "\r\n"), e.scrollToBottom()
        })), this.elements.textInput.addEventListener("keyup", (function (t) {
            e.elements.textContent.textContent = e.elements.textInput.value + "\r\n", e.state.messageInProgress = e.elements.textInput.value, e.scrollToBottom()
        })), this.elements.acceptTermsButton.addEventListener("click", (function (t) {
            c.hideElement(e.elements.termsPanel), e.state.chatterboxService.termsAccepted()
        }))
    }, b.prototype.getAttachments = function (e) {
        var t, n;
        return r(this, void 0, void 0, (function () {
            var o, r, a, u, l, p, h, f, m, v, y, g, b;
            return i(this, (function (i) {
                switch (i.label) {
                    case 0:
                        for (o = ["jpg", "png", "gif", "jpeg", "jfif", "docx", "pdf", "xls", "xlsx"], r = ["image/jpeg", "image/png", "image/gif", "application/pdf", "application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"], u = [], l = a = 0, p = e.length; l < p; l++) {
                            if (y = e[l], h = (h = y.name.split(".")[1]) && h.toLowerCase(), !o.includes(h)) return alert("File type " + h + "is not supported"), [2];
                            if (!r.includes(y.type)) return alert("File mime type " + y.type + "is not supported"), [2];
                            1e7 < y.size && alert("File size can not exceed 10MB"), a += y.size, u.push(y)
                        }
                        f = [], i.label = 1;
                    case 1:
                        i.trys.push([1, 7, 8, 13]), m = s(u), i.label = 2;
                    case 2:
                        return [4, m.next()];
                    case 3:
                        return (v = i.sent()).done ? [3, 6] : (y = v.value, [4, c.readFileAsDataUrl(y)]);
                    case 4:
                        if (b = i.sent(), (g = b.split(/[',',':',';']/))[0], g[1], g[2], g[3], 4 !== g.length) return alert("File " + y.name + " will not be included since it is empty"), [2];
                        (g = new d.FileAttachment).fileName = y.name, g.content = b, g.size = y.size, g.contentType = y.type.trim(), f.push(g), i.label = 5;
                    case 5:
                        return [3, 2];
                    case 6:
                        return [3, 13];
                    case 7:
                        return b = i.sent(), t = {error: b}, [3, 13];
                    case 8:
                        return i.trys.push([8, , 11, 12]), v && !v.done && (n = m.return) ? [4, n.call(m)] : [3, 10];
                    case 9:
                        i.sent(), i.label = 10;
                    case 10:
                        return [3, 12];
                    case 11:
                        if (t) throw t.error;
                        return [7];
                    case 12:
                        return [7];
                    case 13:
                        return a <= 0 ? (alert("Nothing to upload here!"), [2]) : 3e7 < a ? (alert("Total upload size exceeded. Max 30MB is allowed."), [2]) : [2, f]
                }
            }))
        }))
    }, b.prototype.sendMessage = function () {
        var e, t = this.elements.textInput.value.trim();
        this.attachments && 0 < this.attachments.length ? ((e = new l.AddAttachmentRequest).attachmentList = this.attachments, e.messageContent = t, this.state.chatterboxService.sendAttachment(e)) : 0 < t.length && this.state.chatterboxService.sendMessage(t), this.attachments = [], this.visualizeFiles(), this.elements.textInput.value = ""
    }, b.prototype.addIcons = function () {
        console.log("addIcons"), this.addVolumeIcon(), this.appendIcon(this.elements.menuToggleButton, "more-vert"), this.appendIcon(this.elements.sendButton, "send"), this.appendIcon(this.elements.addAttachment, "paperClip"), this.appendIcon(this.elements.refreshButton, "refresh"), this.appendIcon(this.elements.popWindowIcon, "open-in-new"), this.appendIcon(this.elements.minimizeButton, "minimize"), this.appendIcon(this.elements.closeButton, "close"), this.appendIcon(this.elements.toggleEmailButton, "email")
    }, b.prototype.appendIcon = function (e, t) {
        e.appendChild(v.Icons.getIcon(t))
    }, b.prototype.focusChatInput = function () {
        var e = this;
        requestAnimationFrame((function () {
            e.elements.textInput.focus()
        }))
    }, b.prototype.updateVidgetView = function () {
        switch (this._widgetViewMode) {
            case a.WidgetViewMode.Closed:
                this.closeWidget();
                break;
            case a.WidgetViewMode.Open:
                this.openWidget();
                break;
            case a.WidgetViewMode.Hidden:
                this.hideWidget();
                break;
            default:
                a.WidgetViewMode.Unknown, this.closeWidget()
        }
    }, b.prototype.toggleWidget = function () {
        this.state.isInIframe && (this.poppedWindow ? this.poppedWindow.focus() : this._widgetViewMode === a.WidgetViewMode.Closed ? (this.dispatcherService.dispatch(p.DispatchType.ToggleWidgetOpen), this.panelState === f.PanelState.Registration ? this.registration.focusFirstRegistrationInput() : this.state.hasConversationEnded || void 0 === this.state.hasConversationEnded || this.state.chatterboxService.startConversation()) : this.dispatcherService.dispatch(p.DispatchType.ToggleWidgetClosed))
    }, b.prototype.openWidget = function () {
        var e = this;
        this.elements.header.classList.remove("new-message"), document.body.classList.remove("closed"), document.body.classList.add("open"), setTimeout((function () {
            e.focusChatInput()
        }), 500), this.scrollToBottom()
    }, b.prototype.closeWidget = function () {
        document.body.classList.remove("open"), document.body.classList.add("closed")
    }, b.prototype.hideWidget = function () {
        document.body.classList.remove("open"), document.body.classList.remove("closed")
    }, b.prototype.getPanelElement = function (e) {
        return this.panels.find((function (t) {
            return t.getAttribute("panel").toLowerCase() === e.toLowerCase()
        }))
    }, b.prototype.hidePanelElement = function (e) {
        e = this.getPanelElement(e), c.hideElement(e), e.parentElement && e.parentElement.removeChild(e)
    }, b.prototype.showPanelElement = function (e, t) {
        (t = void 0 === t || t) && this.hideAllPanels(), t = this.getPanelElement(e), this.elements.panelContainer.appendChild(t), c.showElement(t)
    }, b.prototype.hideAllPanels = function () {
        var e = this;
        this.panels.forEach((function (t) {
            e.hidePanelElement(t.getAttribute("panel"))
        }))
    }, b.prototype.showPanel = function (e, t) {
        switch (void 0 === t && (t = !0), e) {
            case f.PanelState.Registration:
                this.showPanelElement("registration");
                break;
            case f.PanelState.Chat:
                this.showPanelElement("chat");
                break;
            case f.PanelState.Conversation:
                this.showPanelElement("conversation");
                break;
            case f.PanelState.Menu:
                break;
            case f.PanelState.Closed:
                this.showPanelElement("closed");
                break;
            case f.PanelState.NoAgentsAvailable:
                this.showPanelElement("noAgentsAvailable");
                break;
            case f.PanelState.Settings:
                this.showPanelElement("settings");
                break;
            case f.PanelState.End:
                this.showPanelElement("emailReport", t)
        }
        this.panelState = e
    }, b.prototype.enableChat = function (e) {
        void 0 === e && (e = !0), this.chatEnabled || (this.chatEnabled = !0, this.state.isInIframe ? c.showElement(this.elements.popWindowMenuItem) : c.hideElement(this.elements.minimizeButton), this.showPanel(f.PanelState.Conversation), this.state.messageInProgress && (this.elements.textInput.value = this.state.messageInProgress)), e && c.showElement(this.elements.closeButton), c.showElement(this.elements.menuToggleButton), this.hideBottomInfo(), this.scrollToBottom(), this.enableInput(), this.focusChatInput()
    }, b.prototype.newMessage = function (e, t, n) {
        this.addMessageToConversation(e, t, n = void 0 === n || n)
    }, b.prototype.addEventToConversation = function (e) {
        var t, n = this.createEventElement(e), o = "", r = "Agent";
        e.name ? r = e.name : (t = this.state.peerNameService.getPeer(e.peerId)) && t.name && (r = t.name), e instanceof u.ConversationJoined ? e.peerId !== e.conversationId && (o = this.state.textsService.conversationJoinedText.replace("{name}", r)) : e instanceof u.ConversationLeft ? e.peerId !== e.conversationId && (o = this.state.textsService.conversationLeftText.replace("{name}", r)) : e instanceof u.ConversationQueued && (t = (t = e.queueName) || "", o = this.state.textsService.conversationQueuedText.replace("{name}", t)), o && (n.appendChild(document.createTextNode(o)), this.elements.messages.appendChild(n))
    }, b.prototype.addButtonUrlPopup = function (e, t) {
        var n = this.anchorFactory("url-popup", t.link);
        e = this.messageWithContentFactory(e, t, n);
        this.elements.messages.appendChild(e), this.scrollToBottom()
    }, b.prototype.addUrlPopup = function (e, t) {
        var n = this.anchorFactory("url-popup", t.link);
        e = this.messageWithContentFactory(e, t, n);
        this.elements.messages.appendChild(e), this.scrollToBottom()
    }, b.prototype.addUrlButtonFromAttachment = function (e) {
        var t = this, n = this.getLinkWithFallback(e);
        (e = this.createButton(e.name)).classList.add("zw-button"), e.classList.add("url-button"), e.insertAdjacentHTML("afterbegin", '<span class="url-button-icon"></span>'), this.appendIcon(e.getElementsByTagName("span")[0], "open-in-new"), e.title = n, e.addEventListener("click", (function () {
            return t.state.chatterboxService.onOpenExternalUrl(n)
        })), this.elements.messages.appendChild(e), this.scrollToBottom()
    }, b.prototype.addUrlFromAttachment = function (e, t) {
        var n = t.name || null;
        n = this.anchorFactory("url-popup", this.getLinkWithFallback(t), n), e = this.messageWithContentFactory(e, t, n);
        this.elements.messages.appendChild(e), this.scrollToBottom()
    }, b.prototype.addImageFromAttachment = function (e, t) {
        var n = t.name || null, o = this.imageFactory("image-attachment", this.getPreviewLinkWithFallback(t), n);
        (n = this.anchorFactory("image-attachment-link", this.getLinkWithFallback(t), null, n)).appendChild(o), o = this.messageWithContentFactory(e, t, n);
        this.elements.messages.appendChild(o), this.scrollToBottom()
    }, b.prototype.addVideoFromAttachment = function (e, t) {
        var n = this.videoEmbedFactory("video-attachment", this.getPreviewLinkWithFallback(t), t.mimeType);
        e = this.messageWithContentFactory(e, t, n);
        this.elements.messages.appendChild(e), this.scrollToBottom()
    }, b.prototype.getLinkWithFallback = function (e) {
        return e.link || e.previewLink
    }, b.prototype.getPreviewLinkWithFallback = function (e) {
        return e.previewLink || e.link
    }, b.prototype.addOptions = function (e) {
        var t = this, n = document.createElement("div");
        n.classList.add("option-container"), n.setAttribute("message-id", e.messageId), e.messageOptions.forEach((function (o) {
            var r, i = t.createButton(o.message);
            i.setAttribute("option-id", o.optionId), i.classList.add("zw-button"), o.type === h.OptionType.textXUri ? (r = o.externalReference, i.title = r, i.addEventListener("click", (function () {
                return t.state.chatterboxService.onOpenExternalUrl(r)
            }))) : (i.classList.add("option"), i.classList.add("one-time-option"), i.addEventListener("click", (function () {
                return t.state.chatterboxService.onOptionSelected(o, e, i, n)
            }))), n.appendChild(i)
        })), this.elements.messages.appendChild(n), this.scrollToBottom()
    }, b.prototype.createEventElement = function (e) {
        var t = document.createElement("div");
        return t.classList.add("event"), t
    }, b.prototype.createMessageElement = function (e, t) {
        var n = document.createElement("div");
        switch (n.classList.add("message"), t) {
            case h.MessageType.Agent:
                n.classList.add("agent"), this.elements.phantomMessage.classList.remove("writing");
                break;
            case h.MessageType.EndUser:
                n.classList.add("end-user");
                break;
            case h.MessageType.System:
                n.classList.add("system")
        }
        var o, r = ((o = ((o = this.senderNameFactory(e)) && (n.classList.add("with-name"), n.appendChild(o)), document.createElement("span"))).classList.add("content"), e.messageContent);
        t === h.MessageType.EndUser && (r = c.htmlEntities(e.messageContent)), o.innerHTML = c.convertUrlsToAnchorTags(r), n.appendChild(o), t = this.timeStampFactory(e);
        return n.appendChild(t), n
    }, b.prototype.getTimeStamp = function (e) {
        return ("0" + e.getHours().toString()).slice(-2) + ":" + ("0" + e.getMinutes().toString()).slice(-2) + ":" + ("0" + e.getSeconds().toString()).slice(-2)
    }, b.prototype.addMessageToConversation = function (e, t, n) {
        if (void 0 === n && (n = !0), e = this.createMessageElement(e, t), n) switch (t) {
            case h.MessageType.Agent:
                this.playBong();
                break;
            case h.MessageType.EndUser:
                this.playBing()
        }
        this.elements.messages.appendChild(e), this.scrollToBottom()
    }, b.prototype.playBing = function () {
        this.state.soundEnabled && this.state.isPlayBingReady && (this.state.playBing(), new Audio(this.elements.bing.getAttribute("src")).play())
    }, b.prototype.playBong = function () {
        this.state.soundEnabled && this.state.isPlayBongReady && (this.state.playBong(), new Audio(this.elements.bong.getAttribute("src")).play())
    }, b.prototype.scrollToBottom = function () {
        this.elements.messagesContainer.scrollTop = this.elements.messagesContainer.scrollHeight - this.elements.messagesContainer.offsetHeight
    }, b.prototype.makeRegistration = function (e) {
        this.registration.makeRegistration(e), this.showPanel(f.PanelState.Registration)
    }, b.prototype.showClosedPage = function () {
        this.showPanel(f.PanelState.Closed)
    }, b.prototype.showNoAgentsAvailablePage = function () {
        this.showPanel(f.PanelState.NoAgentsAvailable)
    }, b.prototype.skipRegistration = function () {
        console.log("skipRegistration"), this.enableChat(!1)
    }, b.prototype.setStatus = function (e) {
        this.elements.chatStatus.textContent = e
    }, b.prototype.queuePosition = function (e) {
        if ("number" == typeof e) {
            for (var t = this.state.textsService.queuePositionText.split(" "), n = 0; n < t.length; n++) "{number}" === t[n] && (t[n] = e.toString());
            this.elements.topInfo.textContent = t.join(" ")
        }
        this.scrollToBottom()
    }, b.prototype.startConversation = function (e) {
        console.log("renderer startConversation"), this.elements.topInfo.textContent = ""
    }, b.prototype.enableInput = function () {
        this.elements.textInput.disabled = !1, this.elements.sendButton.disabled = !1, c.showElement(this.elements.inputBox)
    }, b.prototype.disableInput = function (e) {
        void 0 === e && (e = !1), this.elements.textInput.disabled = !0, this.elements.sendButton.disabled = !0, e && this.hideInput()
    }, b.prototype.hideInput = function () {
        c.hideElement(this.elements.inputBox)
    }, b.prototype.onConversationEnded = function () {
        this.elements.chatMain.classList.add("ended"), c.hideElement(this.elements.menuToggleButton), c.hideElement(this.elements.menu), c.hideElement(this.elements.closeButton), this.state.isInIframe && c.showElement(this.elements.refreshButton), this.disableInput(!0), this.state.widgetConfiguration.offerWidgetMailReport || this.showBottomInfo(this.state.textsService.bottomInfoText)
    }, b.prototype.showBottomInfo = function (e) {
        this.elements.bottomInfo.textContent = e, c.showElement(this.elements.bottomInfo)
    }, b.prototype.hideBottomInfo = function () {
        c.hideElement(this.elements.bottomInfo), this.elements.bottomInfo.textContent = ""
    }, b.prototype.toggleSound = function () {
        this.state.soundEnabled = !this.state.soundEnabled
    }, b.prototype.addVolumeIcon = function () {
        this.removeChildren(this.elements.volumeToggleIcon), this.appendIcon(this.elements.volumeToggleIcon, this.state.soundEnabled ? "volume-high" : "volume-off")
    }, b.prototype.setRegistrationDefaults = function (e) {
        this.registration.setDefaults(e)
    }, b.prototype.setTitle = function (e) {
        this.elements.chatTitle.innerText = e || ""
    }, b.prototype.setLogo = function (e) {
        v.Icons.addIcon("logo", e), this.appendIcon(this.elements.chatLogo, "logo")
    }, b.prototype.removeChildren = function (e) {
        for (; e.lastChild;) e.removeChild(e.lastChild)
    }, b.prototype.showAttachmentOption = function (e) {
        e ? c.showElement(this.elements.addAttachment) : c.hideElement(this.elements.addAttachment)
    }, b.prototype.showTerms = function (e) {
        e ? (this.disableInput(), c.showElement(this.elements.termsPanel)) : (this.enableInput(), c.hideElement(this.elements.termsPanel))
    }, b.prototype.createButton = function (e) {
        var t = document.createElement("button"), n = document.createElement("span");
        return n.classList.add("content"), n.appendChild(document.createTextNode(e)), t.appendChild(n), t
    }, b.prototype.messageWithContentFactory = function (e, t, n) {
        e = this.messageContainerFactory(e, "attachment-container");
        var o = this.senderNameFactory(t);
        t = this.timeStampFactory(t);
        return o && (e.classList.add("with-name"), e.appendChild(o)), e.appendChild(n), e.appendChild(t), e
    }, b.prototype.messageContainerFactory = function (e, t) {
        var n = "agent";
        switch (e) {
            case h.MessageType.Agent:
                n = "agent";
                break;
            case h.MessageType.EndUser:
                n = "end-user";
                break;
            case h.MessageType.System:
                n = "system"
        }
        return (e = document.createElement("div")).classList.add("message", n, t), e
    }, b.prototype.senderNameFactory = function (e) {
        var t = null;
        return (e = this.state.peerNameService.getPeer(e.peerId)) && e.name && ((t = document.createElement("span")).classList.add("name"), t.appendChild(document.createTextNode(e.name))), t
    }, b.prototype.timeStampFactory = function (e) {
        var t = document.createElement("span");
        t.classList.add("timestamp"), e = new Date(e.created);
        return t.appendChild(document.createTextNode(this.getTimeStamp(e))), t
    }, b.prototype.anchorFactory = function (e, t, n, o, r) {
        var i = document.createElement("a");
        return i.classList.add(e), i.href = t, i.title = o || t, i.target = r || "_blank", n && (e = document.createTextNode(n), i.appendChild(e)), i
    }, b.prototype.imageFactory = function (e, t, n) {
        var o = document.createElement("img");
        return o.classList.add(e), o.src = t, n && (o.alt = n), o
    }, b.prototype.videoEmbedFactory = function (e, t, n) {
        var o = this.iframeFactory(e);
        switch (n = n.toLowerCase()) {
            case h.customMimeType.videoYoutube:
                o.src = i(t, "youtube"), o.allow = "accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen", o.setAttribute("allowfullscreen", "");
                break;
            case h.customMimeType.videoVimeo:
                r(o, i(t, "vimeo"));
                break;
            case h.customMimeType.videoWistia:
                r(o, i(t, "wistia")), o.classList.add("wistia_embed"), o.name = "wistia_embed", o.setAttribute("allowtransparency", "true");
                break;
            case h.customMimeType.videoMsStream:
                r(o, t), o.classList.add("VideoPreview-iframe"), o.setAttribute("referrerpolicy", "no-referrer");
                break;
            default:
                console.warn('The video format "' + n + '" is not supported'), o.height = "0px"
        }
        return o;

        function r(e, t) {
            e.src = t, e.setAttribute("allowfullscreen", ""), e.allow = "fullscreen"
        }

        function i(e, t) {
            var n = new URL(e);
            switch (t) {
                case"youtube":
                    if (n.pathname.startsWith("/embed")) return e;
                    var o = c.getUrlParameterByName("v", e), r = n.origin + "/embed/" + o;
                    break;
                case"vimeo":
                    if (n.pathname.startsWith("/video")) return e;
                    r = n.origin + "/video" + n.pathname;
                    break;
                case"wistia":
                    if (n.pathname.startsWith("/embed")) return e;
                    r = "https://fast.wistia.net/embed/iframe" + n.pathname;
                    break;
                default:
                    throw new Error("missing video type:" + t)
            }
            return r
        }
    }, b.prototype.iframeFactory = function (e, t, n, o) {
        var r = document.createElement("iframe");
        return r.classList.add(e), t && (r.width = t + "px"), n && (r.height = n + "px"), r.frameBorder = o || "0", r
    }, b.prototype.removeUploadFile = function (e) {
        e = e.currentTarget.className, this.attachments.splice(+e.split(".")[1], 1), this.visualizeFiles()
    }, b.prototype.visualizeFiles = function () {
        for (var e = this, t = this.elements.previewWrapper; t.hasChildNodes();) t.lastChild.removeEventListener("click", this.removeUploadFile), t.removeChild(t.lastChild);
        for (var n = 0; n < this.attachments.length; n++) {
            var o, r = this.attachments[n], i = document.createElement("div");
            r = ((o = (i.classList.add("preview"), document.createElement("p"))).classList.add("preview-text"), document.createTextNode(r.fileName)), r = (o.appendChild(r), i.appendChild(o), document.createElement("span"));
            (o = (r.style.display = "flex", r.style.alignItems = "center", v.Icons.getIcon("trash-can-outline"))).style.cursor = "pointer", r.appendChild(o), r.classList.add("delete-index." + n), r.addEventListener("click", (function (t) {
                e.removeUploadFile(t)
            })), i.append(r), this.elements.previewWrapper.appendChild(i)
        }
    }, n = b;

    function b(e) {
        var t = this;
        this.state = e, this.attachments = [], this.dispatcherService = new m.DispatcherService(window.parent), this.panels = [], this.panelState = f.PanelState.Unknown, this.chatEnabled = !1, this.initElementVariables(), this.createComponents(), this.removePanelsFromDOM(), this.state.chatterboxService.onStart$.subscribe((function () {
            return t.onChatterboxServiceStart()
        })), this.state.chatterboxService.onConversationEnded$.subscribe((function () {
            return t.onConversationEnded()
        }))
    }

    t.Renderer = n
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.AddAttachmentRequest = void 0, t.AddAttachmentRequest = function () {
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.FileAttachment = void 0, t.FileAttachment = function () {
    }
}, function (e, t, n) {
    "use strict";
    var o;
    Object.defineProperty(t, "__esModule", {value: !0}), t.PanelState = t.WidgetState = t.WindowState = void 0, (o = t.WindowState || (t.WindowState = {}))[o.Unknown = 0] = "Unknown", o[o.Closed = 1] = "Closed", o[o.Open = 2] = "Open", (o = t.WidgetState || (t.WidgetState = {}))[o.Unknown = 0] = "Unknown", o[o.Open = 1] = "Open", o[o.Closed = 2] = "Closed", o[o.Registration = 3] = "Registration", o[o.Queued = 4] = "Queued", (o = t.PanelState || (t.PanelState = {}))[o.Unknown = 0] = "Unknown", o[o.Registration = 1] = "Registration", o[o.Chat = 2] = "Chat", o[o.Menu = 3] = "Menu", o[o.Closed = 4] = "Closed", o[o.NoAgentsAvailable = 5] = "NoAgentsAvailable", o[o.Settings = 6] = "Settings", o[o.Conversation = 7] = "Conversation", o[o.End = 8] = "End"
}, function (e, t, n) {
    "use strict";

    function o() {
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.Icons = void 0, n = n(239), o.getIcon = function (e) {
        return e = o._icons[e], this.makeIcon(e)
    }, o.makeIcon = function (e) {
        var t = "http://www.w3.org/2000/svg", n = document.createElementNS(t, "svg");
        return (t = (n.setAttributeNS(null, "viewBox", "0 0 24 24"), n.style.width = "24px", n.style.height = "24px", document.createElementNS(t, "path"))).setAttributeNS(null, "d", e), n.appendChild(t), n
    }, o.addIcon = function (e, t) {
        o._icons[e] = t
    }, o._icons = n, t.Icons = o
}, function (e) {
    e.exports = JSON.parse('{"paperClip":"M16.5,6V17.5A4,4 0 0,1 12.5,21.5A4,4 0 0,1 8.5,17.5V5A2.5,2.5 0 0,1 11,2.5A2.5,2.5 0 0,1 13.5,5V15.5A1,1 0 0,1 12.5,16.5A1,1 0 0,1 11.5,15.5V6H10V15.5A2.5,2.5 0 0,0 12.5,18A2.5,2.5 0 0,0 15,15.5V5A4,4 0 0,0 11,1A4,4 0 0,0 7,5V17.5A5.5,5.5 0 0,0 12.5,23A5.5,5.5 0 0,0 18,17.5V6H16.5Z","requestReport":"M20 9H4v2h16V9zM4 15h16v-2H4v2z","close":"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z","settings":"M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z","chat":"M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M6,9H18V11H6M14,14H6V12H14M18,8H6V6H18","bell":"M14,20A2,2 0 0,1 12,22A2,2 0 0,1 10,20H14M12,2A1,1 0 0,1 13,3V4.08C15.84,4.56 18,7.03 18,10V16L21,19H3L6,16V10C6,7.03 8.16,4.56 11,4.08V3A1,1 0 0,1 12,2Z","bell-off":"M14,20A2,2 0 0,1 12,22A2,2 0 0,1 10,20H14M19.74,21.57L17.17,19H3L6,16V10C6,9.35 6.1,8.72 6.3,8.13L3.47,5.3L4.89,3.89L7.29,6.29L21.15,20.15L19.74,21.57M11,4.08V3A1,1 0 0,1 12,2A1,1 0 0,1 13,3V4.08C15.84,4.56 18,7.03 18,10V14.17L8.77,4.94C9.44,4.5 10.19,4.22 11,4.08Z","bell-ring":"M11.5,22C11.64,22 11.77,22 11.9,21.96C12.55,21.82 13.09,21.38 13.34,20.78C13.44,20.54 13.5,20.27 13.5,20H9.5A2,2 0 0,0 11.5,22M18,10.5C18,7.43 15.86,4.86 13,4.18V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V4.18C7.13,4.86 5,7.43 5,10.5V16L3,18V19H20V18L18,16M19.97,10H21.97C21.82,6.79 20.24,3.97 17.85,2.15L16.42,3.58C18.46,5 19.82,7.35 19.97,10M6.58,3.58L5.15,2.15C2.76,3.97 1.18,6.79 1,10H3C3.18,7.35 4.54,5 6.58,3.58Z","send":"M2,21L23,12L2,3V10L17,12L2,14V21Z","minimize":"M6 19h12v2H6z","refresh":"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z","message-bulleted-off":"M1.27,1.73L0,3L2,5V22L6,18H15L20.73,23.73L22,22.46L1.27,1.73M8,14H6V12H8V14M6,11V9L8,11H6M20,2H4.08L10,7.92V6H18V8H10.08L11.08,9H18V11H13.08L20.07,18C21.14,17.95 22,17.08 22,16V4A2,2 0 0,0 20,2Z","open-in-new":"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z","menu":"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z","more-vert":"M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z","volume-off":"M12,4L9.91,6.09L12,8.18M4.27,3L3,4.27L7.73,9H3V15H7L12,20V13.27L16.25,17.53C15.58,18.04 14.83,18.46 14,18.7V20.77C15.38,20.45 16.63,19.82 17.68,18.96L19.73,21L21,19.73L12,10.73M19,12C19,12.94 18.8,13.82 18.46,14.64L19.97,16.15C20.62,14.91 21,13.5 21,12C21,7.72 18,4.14 14,3.23V5.29C16.89,6.15 19,8.83 19,12M16.5,12C16.5,10.23 15.5,8.71 14,7.97V10.18L16.45,12.63C16.5,12.43 16.5,12.21 16.5,12Z","volume-high":"M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z","email":"M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z","trash-can-outline":"M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"}')
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.Registration = void 0;
    var o = n(45);
    r.prototype.initEventListeners = function () {
        var e = this;
        this.state.renderer.elements.registrationForm.addEventListener("submit", (function (t) {
            return e.onSubmit(t)
        }))
    }, Object.defineProperty(r.prototype, "allRegistrationInputsAreValid", {
        get: function () {
            return this.inputs.every((function (e) {
                return e.validity.valid
            }))
        }, enumerable: !1, configurable: !0
    }), r.prototype.removeErrorMessage = function (e) {
        e.parentElement.querySelectorAll(".error").forEach((function (e) {
            return e.remove()
        }))
    }, r.prototype.showErrorMessage = function (e) {
        var t, n = e.parentElement;
        e.placeholder && 0 === n.querySelectorAll(".error").length && ((t = document.createElement("p")).className = "error", t.appendChild(document.createTextNode(e.placeholder)), n.appendChild(t))
    }, r.prototype.onInputOrBlur = function (e) {
        (e = e.target).classList.add("touched"), e.validity.valid ? this.removeErrorMessage(e) : this.showErrorMessage(e), this.updateRegistrationButtonDisabledState()
    }, r.prototype.updateRegistrationButtonDisabledState = function () {
        this.state.renderer.elements.registerButton.disabled = !this.canRegister
    }, r.prototype.onSubmit = function (e) {
        e.preventDefault(), this.registrate()
    }, Object.defineProperty(r.prototype, "canRegister", {
        get: function () {
            return !(this.state.widgetConfiguration.userNeedsToAcceptTerms && !this.state.areTermsAccepted) && this.state.widgetConfiguration.registration && this.state.connectionState === o.ConnectionState.Idle && this.allRegistrationInputsAreValid
        }, enumerable: !1, configurable: !0
    }), r.prototype.registrate = function () {
        var e;
        this.canRegister && (this.state.renderer.elements.registerButton.disabled = !0, this.inputs.forEach((function (e) {
            return e.disabled = !0
        })), e = this.getRegistrationFields(), this.state.chatterboxService.startConversation(e))
    }, r.prototype.focusFirstRegistrationInput = function () {
        var e = this;
        setTimeout((function () {
            e.state.renderer.elements.registrationForm && e.state.renderer.elements.registrationForm.elements && 0 < e.state.renderer.elements.registrationForm.elements.length && e.state.renderer.elements.registrationForm.elements[0].focus()
        }), 200)
    }, r.prototype.makeRegistration = function (e) {
        var t = this;
        (this.inputFields = e).forEach((function (e) {
            var n = document.createElement("div"), o = (n.className = "div-container", document.createElement("input")), r = (o.addEventListener("input", (function () {
                return t.updateRegistrationButtonDisabledState()
            })), o.addEventListener("blur", (function (e) {
                return t.onInputOrBlur(e)
            })), e.name.toLowerCase()), i = r + "Input";
            if (o.id = i, o.name = r, o.type = e.inputType.toLowerCase(), o.autocomplete = "off", "Hidden" !== e.inputType) {
                switch ((r = document.createElement("label")).setAttribute("for", i), i = e.label, e.isRequired && (i += " *"), r.appendChild(document.createTextNode(i)), e.fieldType) {
                    case"Phonenumber":
                        o.type = "tel", o.autocomplete = "tel", o.pattern = "^\\+?[0-9]{6,99}$", o.title = e.placeholder, o.addEventListener("input", (function (e) {
                            return t.onInputOrBlur(e)
                        }));
                        break;
                    case"Email":
                        o.type = "email", o.autocomplete = "email";
                        break;
                    case"Name":
                        o.autocomplete = "name"
                }
                e.placeholder && (o.placeholder = e.placeholder), o.required = e.isRequired, n.appendChild(r)
            }
            n.appendChild(o), t.divContainers.push(n), t.state.renderer.elements.registrationInputs.appendChild(n), t.inputs.push(o)
        })), this.updateRegistrationButtonDisabledState(), this.initEventListeners()
    }, r.prototype.getRegistrationFields = function () {
        for (var e = [], t = this.state.renderer.elements.registrationForm.elements, n = 0, r = this, i = 0; i < t.length; i++) !function () {
            var s, a, c = t[i];
            "input" === c.localName && (s = r.inputFields.find((function (e) {
                return e.name.toLowerCase() === c.name
            })), (a = new o.RegistrationField).name = s.name, a.content = c.value, a.fieldType = s.fieldType, a.label = s.label, a.lookupKey = s.lookupKey, e[n] = a, n++)
        }();
        return e
    }, r.prototype.setDefaults = function (e) {
        this.defaults = e, this.updateDefaults()
    }, r.prototype.updateDefaults = function () {
        var e = this;
        this.state.renderer.elements.registrationForm && Object.keys(this.defaults).forEach((function (t) {
            var n = e.state.renderer.elements.registrationForm.elements[t.toLowerCase()];
            n && (n.value = e.defaults[t])
        })), this.updateRegistrationButtonDisabledState()
    }, n = r;

    function r(e) {
        this.state = e, this.inputs = [], this.divContainers = []
    }

    t.Registration = n
}, function (e, t, n) {
    "use strict";
    var o = this && this.__awaiter || function (e, t, n, o) {
        return new (n = n || Promise)((function (r, i) {
            function s(e) {
                try {
                    c(o.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function a(e) {
                try {
                    c(o.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function c(e) {
                var t;
                e.done ? r(e.value) : ((t = e.value) instanceof n ? t : new n((function (e) {
                    e(t)
                }))).then(s, a)
            }

            c((o = o.apply(e, t || [])).next())
        }))
    }, r = this && this.__generator || function (e, t) {
        var n, o, r, i = {
            label: 0, sent: function () {
                if (1 & r[0]) throw r[1];
                return r[1]
            }, trys: [], ops: []
        }, s = {next: a(0), throw: a(1), return: a(2)};
        return "function" == typeof Symbol && (s[Symbol.iterator] = function () {
            return this
        }), s;

        function a(s) {
            return function (a) {
                var c = [s, a];
                if (n) throw new TypeError("Generator is already executing.");
                for (; i;) try {
                    if (n = 1, o && (r = 2 & c[0] ? o.return : c[0] ? o.throw || ((r = o.return) && r.call(o), 0) : o.next) && !(r = r.call(o, c[1])).done) return r;
                    switch (o = 0, (c = r ? [2 & c[0], r.value] : c)[0]) {
                        case 0:
                        case 1:
                            r = c;
                            break;
                        case 4:
                            return i.label++, {value: c[1], done: !1};
                        case 5:
                            i.label++, o = c[1], c = [0];
                            continue;
                        case 7:
                            c = i.ops.pop(), i.trys.pop();
                            continue;
                        default:
                            if (!(r = 0 < (r = i.trys).length && r[r.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                i = 0;
                                continue
                            }
                            if (3 === c[0] && (!r || c[1] > r[0] && c[1] < r[3])) i.label = c[1]; else if (6 === c[0] && i.label < r[1]) i.label = r[1], r = c; else {
                                if (!(r && i.label < r[2])) {
                                    r[2] && i.ops.pop(), i.trys.pop();
                                    continue
                                }
                                i.label = r[2], i.ops.push(c)
                            }
                    }
                    c = t.call(e, i)
                } catch (a) {
                    c = [6, a], o = 0
                } finally {
                    n = r = 0
                }
                if (5 & c[0]) throw c[1];
                return {value: c[0] ? c[1] : void 0, done: !0}
            }
        }
    }, i = (Object.defineProperty(t, "__esModule", {value: !0}), t.EmailElements = t.SendEmailConversation = void 0, n(19));

    function s(e) {
        var t = this;
        this.state = e, this.emailSent = !1, this.initElementVariables(), this.addEventListeners(), this.state.chatterboxService.onConversationEnded$.subscribe((function () {
            return t.onConversationEnded()
        }))
    }

    Object.defineProperty(s.prototype, "elements", {
        get: function () {
            return this._elements
        }, enumerable: !1, configurable: !0
    }), s.prototype.initElementVariables = function () {
        this._elements = i.getElements(a)
    }, s.prototype.onConversationEnded = function () {
        console.log("onConversationEnded"), this.state.widgetConfiguration.offerWidgetMailReport && (this.getEmailFromRegistrationFields(), i.showElement(this.elements.sendEmailPanel), i.showElement(this.elements.toggleEmailButton))
    }, s.prototype.getEmailFromRegistrationFields = function () {
        var e = this.state.chatterboxService.registrationFields.find((function (e) {
            return "Email" === e.fieldType
        }));
        e && e.content && (this._elements.sendEmailInput.value = e.content.trim(), this.updateButtonDisabledState())
    }, s.prototype.onSubmit = function (e) {
        e.preventDefault(), this.sendEmail()
    }, s.prototype.addEventListeners = function () {
        var e = this;
        this._elements.sendEmailPanelOverlayBox.addEventListener("click", (function (e) {
            return e.stopPropagation()
        })), document.body.addEventListener("click", (function () {
            return i.hideElement(e.elements.sendEmailPanel)
        })), this._elements.sendEmailInput.addEventListener("keyup", (function (t) {
            return e.onKeyup(t)
        })), this._elements.emailReportForm.addEventListener("submit", (function (t) {
            return e.onSubmit(t)
        })), this._elements.toggleEmailButton.addEventListener("click", (function (t) {
            t.stopPropagation(), i.showElement(e.elements.sendEmailPanel)
        }))
    }, Object.defineProperty(s.prototype, "emailIsValid", {
        get: function () {
            return this._elements.sendEmailInput.validity.valid
        }, enumerable: !1, configurable: !0
    }), s.prototype.onKeyup = function (e) {
        this.updateButtonDisabledState()
    }, s.prototype.updateButtonDisabledState = function () {
        this._elements.sendEmailButton.disabled = !this.emailIsValid
    }, s.prototype.sendEmail = function () {
        return o(this, void 0, void 0, (function () {
            var e;
            return r(this, (function (t) {
                switch (t.label) {
                    case 0:
                        if (!this.emailIsValid) return [3, 4];
                        if (!(0 < (e = this._elements.sendEmailInput.value.trim()).length)) return [3, 4];
                        t.label = 1;
                    case 1:
                        return t.trys.push([1, 3, , 4]), this._elements.sendEmailInput.disabled = !0, this._elements.sendEmailButton.disabled = !0, [4, this.state.chatterboxService.requestReport(e)];
                    case 2:
                        return t.sent(), this.emailSent = !0, i.hideElement(this._elements.sendEmailButton), i.hideElement(this._elements.requestReportEmail), i.showElement(this._elements.emailSentText), [3, 4];
                    case 3:
                        return t.sent(), this._elements.sendEmailInput.disabled = !1, [3, 4];
                    case 4:
                        return this.updateButtonDisabledState(), [2]
                }
            }))
        }))
    }, t.SendEmailConversation = s;
    var a = function () {
        this.sendEmailInput = null, this.sendEmailButton = null, this.sendEmailPanel = null, this.emailSentText = null, this.chatMain = null, this.emailReportForm = null, this.conversationEnded = null, this.requestReportEmail = null, this.toggleEmailButton = null, this.sendEmailPanelOverlayBox = null
    };
    t.EmailElements = a
}, function (e, t, n) {
    "use strict";

    function o() {
        this.peers = new Map
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.PeerService = void 0, o.prototype.addPeer = function (e, t) {
        this.peers.set(e, t)
    }, o.prototype.getPeer = function (e) {
        return this.peers.get(e)
    }, t.PeerService = o
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.WritingHandlerService = void 0;
    var o = n(19), r = n(47), i = n(18);

    function s(e) {
        this.state = e, this._writingInterval = 5e3, this.lastWriteEvent = 0, this.writingStart = 0, this.lastAgentIsWriting = 0, this.agentIsWriting = !1, this.initEventListeners()
    }

    s.prototype.initEventListeners = function () {
        var e = this;
        this.state.renderer.textInput.addEventListener("keyup", (function (t) {
            13 !== t.keyCode || t.ctrlKey ? (e.writingStart = Date.now(), e.writing()) : e.lastWriteEvent = 0
        })), this.state.chatterboxService.onMessageSent$.subscribe((function (t) {
            (t.peerId === e.state.conversationUuid ? r.MessageType.EndUser : t.peerId === i.Guid.empty ? r.MessageType.System : r.MessageType.Agent) === r.MessageType.Agent && e.onAgentMessage()
        }))
    }, Object.defineProperty(s.prototype, "isWriting", {
        get: function () {
            return this.lastWriteEvent + this.writingInterval < Date.now()
        }, enumerable: !1, configurable: !0
    }), s.prototype.writing = function () {
        var e, t = this;
        this.state.chatterboxService.socketIsOpen && (e = Date.now(), this.lastWriteEvent + this.writingInterval >= e || 0 !== this.state.renderer.textInput.value.trim().length && (this.lastWriteEvent = e, console.log("send writing event from widget"), this.state.chatterboxService.signalWidgetIsWriting(), e < this.writingStart + 5 * this.writingInterval && setTimeout((function () {
            t.writing()
        }), this.writingInterval)))
    }, Object.defineProperty(s.prototype, "writingInterval", {
        get: function () {
            return this._writingInterval - 1e3
        }, enumerable: !1, configurable: !0
    }), s.prototype.handleAgentIsWriting = function () {
        var e = this;
        console.log("WritingHandlerService.handleAgentIsWriting"), this.lastAgentIsWriting = Date.now(), this.agentIsWriting || (this.agentIsWriting = !0, this.state.renderer.elements.phantomMessageContent.textContent = "...", this.phantomMessageContentInterval = window.setInterval((function () {
            e.state.renderer.elements.phantomMessageContent.textContent = e.state.renderer.elements.phantomMessageContent.textContent + "."
        }), 1e3)), o.showElement(this.state.renderer.elements.phantomMessage), this.state.renderer.scrollToBottom(), window.clearTimeout(this.writingTimeout), this.writingTimeout = window.setTimeout((function () {
            console.log("writingTimeout"), 5e3 < Date.now() - e.lastAgentIsWriting && e.agentStoppedWriting()
        }), 5e3)
    }, s.prototype.agentStoppedWriting = function () {
        this.agentIsWriting = !1, o.hideElement(this.state.renderer.elements.phantomMessage), window.clearInterval(this.phantomMessageContentInterval)
    }, s.prototype.onAgentMessage = function () {
        window.clearTimeout(this.writingTimeout), this.agentStoppedWriting()
    }, t.WritingHandlerService = s
}, function (e, t, n) {
    "use strict";
    var o = this && this.__awaiter || function (e, t, n, o) {
        return new (n = n || Promise)((function (r, i) {
            function s(e) {
                try {
                    c(o.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function a(e) {
                try {
                    c(o.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function c(e) {
                var t;
                e.done ? r(e.value) : ((t = e.value) instanceof n ? t : new n((function (e) {
                    e(t)
                }))).then(s, a)
            }

            c((o = o.apply(e, t || [])).next())
        }))
    }, r = this && this.__generator || function (e, t) {
        var n, o, r, i = {
            label: 0, sent: function () {
                if (1 & r[0]) throw r[1];
                return r[1]
            }, trys: [], ops: []
        }, s = {next: a(0), throw: a(1), return: a(2)};
        return "function" == typeof Symbol && (s[Symbol.iterator] = function () {
            return this
        }), s;

        function a(s) {
            return function (a) {
                var c = [s, a];
                if (n) throw new TypeError("Generator is already executing.");
                for (; i;) try {
                    if (n = 1, o && (r = 2 & c[0] ? o.return : c[0] ? o.throw || ((r = o.return) && r.call(o), 0) : o.next) && !(r = r.call(o, c[1])).done) return r;
                    switch (o = 0, (c = r ? [2 & c[0], r.value] : c)[0]) {
                        case 0:
                        case 1:
                            r = c;
                            break;
                        case 4:
                            return i.label++, {value: c[1], done: !1};
                        case 5:
                            i.label++, o = c[1], c = [0];
                            continue;
                        case 7:
                            c = i.ops.pop(), i.trys.pop();
                            continue;
                        default:
                            if (!(r = 0 < (r = i.trys).length && r[r.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                i = 0;
                                continue
                            }
                            if (3 === c[0] && (!r || c[1] > r[0] && c[1] < r[3])) i.label = c[1]; else if (6 === c[0] && i.label < r[1]) i.label = r[1], r = c; else {
                                if (!(r && i.label < r[2])) {
                                    r[2] && i.ops.pop(), i.trys.pop();
                                    continue
                                }
                                i.label = r[2], i.ops.push(c)
                            }
                    }
                    c = t.call(e, i)
                } catch (a) {
                    c = [6, a], o = 0
                } finally {
                    n = r = 0
                }
                if (5 & c[0]) throw c[1];
                return {value: c[0] ? c[1] : void 0, done: !0}
            }
        }
    }, i = (Object.defineProperty(t, "__esModule", {value: !0}), t.VersionService = void 0, n(245));

    function s() {
    }

    s.checkVersion = function () {
        return o(this, void 0, void 0, (function () {
            var e, t, n;
            return r(this, (function (o) {
                switch (o.label) {
                    case 0:
                        return o.trys.push([0, 4, , 5]), t = Math.round(Date.now() / s.INTERVAL) * s.INTERVAL, (e = localStorage.getItem(s.localStorageLastVersionCheckTimestampKey)) && (e = JSON.parse(e), t - e < s.INTERVAL) ? [2] : (localStorage.setItem(s.localStorageLastVersionCheckTimestampKey, JSON.stringify(t)), [4, fetch("assets/version.json?" + t, {cache: "no-cache"})]);
                    case 1:
                        return (e = o.sent()) ? [4, e.json()] : [3, 3];
                    case 2:
                        (t = o.sent()) && t.gitCommitHash !== i.gitCommitHash && window.location.reload(!0), o.label = 3;
                    case 3:
                        return [3, 5];
                    case 4:
                        return n = o.sent(), console.error(n), [3, 5];
                    case 5:
                        return [2]
                }
            }))
        }))
    }, s.initialize = function () {
        window.clearInterval(s.versionInterval), s.versionInterval = window.setInterval((function () {
            s.checkVersion()
        }), s.INTERVAL), s.checkVersion()
    }, s.INTERVAL = 6e4, s.localStorageLastVersionCheckTimestampKey = "zissonLastVersion", t.VersionService = s
}, function (e) {
    e.exports = JSON.parse('{"buildTime":1662623213529,"gitCommitHash":"e58ac99e06978b850d55933fa1553f3cc19ac9d8","gitTag":"22.05.0"}')
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.monkeyPatchConsole = void 0;
    var o = n(46);
    t.monkeyPatchConsole = function () {
        "production" === o.environment.environment.toLowerCase() && (window.console.log = function (e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]
        }, window.console.info = function (e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]
        }, window.console.error = function (e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]
        })
    }
}, , , , , function (e, t) {
}]);