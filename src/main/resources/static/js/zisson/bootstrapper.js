!function (e) {
    var t = {};

    function i(n) {
        var o;
        return (t[n] || (o = t[n] = {i: n, l: !1, exports: {}}, e[n].call(o.exports, o, o.exports, i), o.l = !0, o)).exports
    }

    i.m = e, i.c = t, i.d = function (e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
    }, i.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, i.t = function (e, t) {
        if (1 & t && (e = i(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {enumerable: !0, value: e}), 2 & t && "string" != typeof e) for (var o in e) i.d(n, o, function (t) {
            return e[t]
        }.bind(null, o));
        return n
    }, i.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "", i(i.s = 247)
}({
    18: function (e, t, i) {
        "use strict";

        function n() {
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.Guid = void 0, n.newGuid = function () {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function (e) {
                var t = 16 * Math.random() | 0;
                return ("x" === e ? t : 3 & t | 8).toString(16)
            }))
        }, n.isNullOrEmpty = function (e) {
            return !e || e === this.empty
        }, n.isValid = function (e) {
            return !(!e || !e.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i))
        }, n.empty = "00000000-0000-0000-0000-000000000000", t.Guid = n
    }, 19: function (e, t, i) {
        "use strict";
        var n = this && this.__awaiter || function (e, t, i, n) {
            return new (i = i || Promise)((function (o, s) {
                function a(e) {
                    try {
                        d(n.next(e))
                    } catch (e) {
                        s(e)
                    }
                }

                function r(e) {
                    try {
                        d(n.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }

                function d(e) {
                    var t;
                    e.done ? o(e.value) : ((t = e.value) instanceof i ? t : new i((function (e) {
                        e(t)
                    }))).then(a, r)
                }

                d((n = n.apply(e, t || [])).next())
            }))
        }, o = this && this.__generator || function (e, t) {
            var i, n, o, s = {
                label: 0, sent: function () {
                    if (1 & o[0]) throw o[1];
                    return o[1]
                }, trys: [], ops: []
            }, a = {next: r(0), throw: r(1), return: r(2)};
            return "function" == typeof Symbol && (a[Symbol.iterator] = function () {
                return this
            }), a;

            function r(a) {
                return function (r) {
                    var d = [a, r];
                    if (i) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (i = 1, n && (o = 2 & d[0] ? n.return : d[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, d[1])).done) return o;
                        switch (n = 0, (d = o ? [2 & d[0], o.value] : d)[0]) {
                            case 0:
                            case 1:
                                o = d;
                                break;
                            case 4:
                                return s.label++, {value: d[1], done: !1};
                            case 5:
                                s.label++, n = d[1], d = [0];
                                continue;
                            case 7:
                                d = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(o = 0 < (o = s.trys).length && o[o.length - 1]) && (6 === d[0] || 2 === d[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === d[0] && (!o || d[1] > o[0] && d[1] < o[3])) s.label = d[1]; else if (6 === d[0] && s.label < o[1]) s.label = o[1], o = d; else {
                                    if (!(o && s.label < o[2])) {
                                        o[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                    }
                                    s.label = o[2], s.ops.push(d)
                                }
                        }
                        d = t.call(e, s)
                    } catch (r) {
                        d = [6, r], n = 0
                    } finally {
                        i = o = 0
                    }
                    if (5 & d[0]) throw d[1];
                    return {value: d[0] ? d[1] : void 0, done: !0}
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
            var t, i;
            return "URL" in window ? (/:/.test(t = e || "") && (i = function (e, t, i) {
                var n;
                try {
                    n = new URL(e)
                } catch (e) {
                }
                n && (n.host || n.pathname) && (i[t] = '<a href="' + n.href + '" target="_blank">' + n.href + "</a>")
            }, [" ", "\r\n", "\n"].forEach((function (e) {
                var n = t.split(e);
                n.forEach(i), t = n.join(e)
            }))), t) : e
        }, t.readFileAsDataUrl = function (e) {
            return n(this, void 0, void 0, (function () {
                return o(this, (function (t) {
                    return [2, new Promise((function (t, i) {
                        var n = new FileReader;
                        n.onload = function (e) {
                            e = e.target.result, t(e)
                        }, n.onerror = function () {
                            return i()
                        }, n.readAsDataURL(e)
                    }))]
                }))
            }))
        }
    }, 21: function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.DispatchType = void 0, (t = t.DispatchType || (t.DispatchType = {}))[t.ToggleWidgetOpen = 0] = "ToggleWidgetOpen", t[t.ToggleWidgetClosed = 1] = "ToggleWidgetClosed", t[t.ToggleWidgetHidden = 2] = "ToggleWidgetHidden", t[t.NewMessage = 3] = "NewMessage", t[t.WidgetReady = 4] = "WidgetReady", t[t.WidgetStarted = 5] = "WidgetStarted", t[t.SetLengthUnit = 6] = "SetLengthUnit", t[t.SetClosedWidth = 7] = "SetClosedWidth", t[t.SetClosedHeight = 8] = "SetClosedHeight", t[t.SetOpenWidth = 9] = "SetOpenWidth", t[t.SetHeight = 10] = "SetHeight", t[t.SetPosition = 11] = "SetPosition", t[t.SetConversationId = 12] = "SetConversationId", t[t.SetWebToken = 13] = "SetWebToken", t[t.SetRegistrationDefaults = 14] = "SetRegistrationDefaults", t[t.SetFontSize = 15] = "SetFontSize", t[t.SetBorderRadius = 16] = "SetBorderRadius", t[t.SetSoundEnabled = 17] = "SetSoundEnabled", t[t.SetMessageInProgess = 18] = "SetMessageInProgess", t[t.SetLastReadMessageId = 19] = "SetLastReadMessageId", t[t.SetWidgetViewMode = 20] = "SetWidgetViewMode", t[t.SetWindowWidth = 21] = "SetWindowWidth", t[t.SetWindowHeight = 22] = "SetWindowHeight", t[t.Reload = 23] = "Reload", t[t.ReloadIframe = 24] = "ReloadIframe", t[t.OpenWindow = 25] = "OpenWindow", t[t.CloseWindow = 26] = "CloseWindow", t[t.OpenWidget = 27] = "OpenWidget", t[t.CloseWidget = 28] = "CloseWidget", t[t.HideWidget = 29] = "HideWidget", t[t.EndConversation = 30] = "EndConversation", t[t.StartConversation = 31] = "StartConversation", t[t.SkipCache = 32] = "SkipCache", t[t.WidgetConfiguration = 33] = "WidgetConfiguration", t[t.ConversationStarted = 34] = "ConversationStarted", t[t.ConversationEnded = 35] = "ConversationEnded"
    }, 247: function (e, t, i) {
        i(248), e.exports = i(250)
    }, 248: function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), i(249)
    }, 249: function (e, t) {
        function i(e, t) {
            t = t || {bubbles: !1, cancelable: !1, detail: void 0};
            var i = document.createEvent("CustomEvent");
            return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i
        }

        "function" != typeof window.CustomEvent && (i.prototype = window.Event.prototype, window.CustomEvent = i)
    }, 250: function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.LocalStorageKey = t.EventName = void 0;
        var n, o, s = i(46), a = i(32), r = i(21), d = i(19), c = i(48), h = i(18);

        function p() {
            var e = this;
            if (this.started = !1, this.widgetIsStarted = !1, this.skipCache = !1, this.openHeight = 40, this.openWidth = 30, this.closedWidth = 1e3, this.closedHeight = 78, this.lengthUnit = "em", this.fontSize = "12px", this.position = 2, this.storedViewMode = c.WidgetViewMode.Unknown, this._widgetViewMode = c.WidgetViewMode.Unknown, document) {
                if (document.currentScript) this.getAttributesFromScript(document.currentScript); else {
                    var t = document.scripts;
                    if (0 < t.length) for (var i = 0; i < t.length && (this.getAttributesFromScript(t[i]), !this.jsonWebToken); i++) ;
                }
                d.onDocumentReady((function () {
                    e.start()
                }))
            }
        }

        var g = new (t = ((i = n = t.EventName || (t.EventName = {})).ConfigIsLoaded = "configIsLoaded", i.Config = "zConfig", i.ConversationStarted = "zConversationStarted", i.ConversationEnded = "zConversationEnded", i.ZissonWebChat = "zissonWebChat", i.Ready = "zReady", (i = o = t.LocalStorageKey || (t.LocalStorageKey = {})).ConversationId = "zConversationId", i.StandaloneConversationId = "zStandaloneConversationId", i.ViewMode = "zViewMode", i.MessageInProgess = "zMessageInProgress", i.LastMessage = "zLastMessage", i.LastReadMessageId = "zLastReadMessageId", i.SoundEnabled = "zSoundEnabled", Object.defineProperty(p.prototype, "widgetViewMode", {
            get: function () {
                return this._widgetViewMode
            }, set: function (e) {
                this._widgetViewMode = e, [c.WidgetViewMode.Open, c.WidgetViewMode.Closed].some((function (t) {
                    return t === e
                })) && sessionStorage.setItem(o.ViewMode, JSON.stringify(this._widgetViewMode))
            }, enumerable: !1, configurable: !0
        }), p.prototype.start = function () {
            sessionStorage.getItem(o.StandaloneConversationId) || this.jsonWebToken && !this.started && (this.started = !0, this.makeStyleElement(), this.makeIframe())
        }, p.prototype.makeIframe = function () {
            var e = this;
            this.widgetContainer = document.createElement("div"), this.widgetContainer.id = p.uniqueId, this.widgetContainer.className="closed", this.iframe = document.createElement("iframe"), this.iframe.src = s.environment.bootstrapperUrl, this.iframe.title="Zisson Chat Client", this.iframe.style.width = "100%", this.iframe.style.height = "100%", this.iframe.name = p.uniqueId, this.iframe.style.border = "none", this.widgetContainer.appendChild(this.iframe), document.body.appendChild(this.widgetContainer), this.dispatcherService = new a.DispatcherService(this.iframe.contentWindow), window.addEventListener("message", (function (t) {
                return e.iframeMessageHandler(t)
            }), !1), window.addEventListener("message", (function (t) {
                if (t && t.data && "string" == typeof t.data && (t = d.tryParseJson(t.data))) switch (t.command) {
                    case r.DispatchType.WidgetReady:
                        e.onWidgetReady();
                        break;
                    case r.DispatchType.WidgetStarted:
                        e.widgetIsStarted = !0, e.defaults && e.dispatcherService.dispatch(r.DispatchType.SetRegistrationDefaults, e.defaults)
                }
            }), !1)
        }, p.prototype.onWidgetReady = function () {
            this.emitEvent(n.ZissonWebChat), this.emitEvent(n.Ready), this.checkStorage(), this.skipCache && this.dispatcherService.dispatch(r.DispatchType.SkipCache), this.dispatcherService.dispatch(r.DispatchType.SetWebToken, this.jsonWebToken), this.listenToResize()
        }, p.prototype.listenToResize = function () {
            var e = this;
            window.addEventListener("resize", (function (t) {
                e.dispatcherService.dispatch(r.DispatchType.SetWindowWidth, window.innerWidth), e.dispatcherService.dispatch(r.DispatchType.SetWindowHeight, window.innerHeight)
            }), !1), this.dispatcherService.dispatch(r.DispatchType.SetWindowWidth, window.innerWidth), this.dispatcherService.dispatch(r.DispatchType.SetWindowHeight, window.innerHeight)
        }, p.prototype.iframeMessageHandler = function (e) {
            if (e && e.data && "string" == typeof e.data) {
                var t = d.tryParseJson(e.data);
                if (t) switch (t.command) {
                    case r.DispatchType.ToggleWidgetOpen:
                        this.openWidget();
                        break;
                    case r.DispatchType.ToggleWidgetClosed:
                        this.closeWidget();
                        break;
                    case r.DispatchType.ToggleWidgetHidden:
                        this.hideWidget();
                        break;
                    case r.DispatchType.NewMessage:
                        this._widgetViewMode === c.WidgetViewMode.Closed && this.widgetContainer.classList.add("new-message");
                        break;
                    case r.DispatchType.SetHeight:
                        this.openHeight = t.parameter, this.setStyle();
                        break;
                    case r.DispatchType.SetOpenWidth:
                        this.openWidth = t.parameter, this.setStyle();
                        break;
                    case r.DispatchType.SetClosedWidth:
                        this.closedWidth = t.parameter, this.setStyle();
                        break;
                    case r.DispatchType.SetClosedHeight:
                        this.closedHeight = t.parameter, this.setStyle();
                        break;
                    case r.DispatchType.SetLengthUnit:
                        this.lengthUnit = t.parameter, this.setStyle();
                        break;
                    case r.DispatchType.SetFontSize:
                        this.fontSize = t.parameter, this.setStyle();
                        break;
                    case r.DispatchType.SetPosition:
                        this.position = t.parameter, this.setStyle();
                        break;
                    case r.DispatchType.SetConversationId:
                        this.setConversationIdInSessionStorage(t.parameter);
                        break;
                    case r.DispatchType.SetSoundEnabled:
                        sessionStorage.setItem(o.SoundEnabled, t.parameter);
                        break;
                    case r.DispatchType.SetMessageInProgess:
                        sessionStorage.setItem(o.MessageInProgess, t.parameter);
                        break;
                    case r.DispatchType.SetLastReadMessageId:
                        var i = sessionStorage.getItem(o.LastReadMessageId);
                        sessionStorage.setItem(o.LastReadMessageId, t.parameter), i && i === t.parameter || this.openWidget();
                        break;
                    case r.DispatchType.Reload:
                        break;
                    case r.DispatchType.ReloadIframe:
                        this.reloadIframe();
                        break;
                    case r.DispatchType.OpenWindow:
                        (i = this.getConversationIdFromSessionStorage()) && sessionStorage.setItem(o.StandaloneConversationId, i);
                        break;
                    case r.DispatchType.CloseWindow:
                        sessionStorage.removeItem(o.StandaloneConversationId);
                        break;
                    case r.DispatchType.SkipCache:
                        break;
                    case r.DispatchType.WidgetConfiguration:
                        this.handleWidgetConfiguration(t.parameter);
                        break;
                    case r.DispatchType.ConversationStarted:
                        this.handleConversationStarted(t.parameter);
                        break;
                    case r.DispatchType.ConversationEnded:
                        this.emitEvent(n.ConversationEnded, t.parameter)
                }
            }
        }, Object.defineProperty(p.prototype, "isInIframe", {
            get: function () {
                return window.top !== window
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(p.prototype, "isMobile", {
            get: function () {
                return window.innerWidth <= 768
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(p.prototype, "isTablet", {
            get: function () {
                return !this.isDesktop && !this.isMobile
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(p.prototype, "isDesktop", {
            get: function () {
                return 1024 < window.innerWidth
            }, enumerable: !1, configurable: !0
        }), p.prototype.handleConversationStarted = function (e) {
            this.emitEvent(n.ConversationStarted, e), e.conversationId === this.storedConversationId && (this.widgetViewMode = this.storedViewMode, this.updateWidgetView())
        }, p.prototype.handleWidgetConfiguration = function (e) {
            var t;
            e && (this.widgetConfiguration = e, c.WidgetViewMode.Unknown, t = e.hideChatOnStart || !e.agentsAreAvailable && !e.showChatWhenClosed || !e.isOpen && !e.showChatWhenClosed ? c.WidgetViewMode.Hidden : this.isDesktop && e.widgetIsOpenOnStart ? c.WidgetViewMode.Open : c.WidgetViewMode.Closed, this.widgetViewMode !== c.WidgetViewMode.Unknown && t !== c.WidgetViewMode.Hidden || (this.widgetViewMode = t), this.emitEvent(n.ConfigIsLoaded, this.configDetails), this.emitEvent(n.Config, this.configDetails)), console.log("widgetViewMode", this.widgetViewMode, c.WidgetViewMode[this.widgetViewMode]), this.updateWidgetView()
        }, p.prototype.reloadIframe = function () {
            var e;
            this.iframe && (e = this.iframe.src, this.iframe.src = "", this.iframe.src = e)
        }, p.prototype.hideWidget = function () {
            this.widgetContainer.classList.remove("open"), this.widgetContainer.classList.remove("closed"), this.widgetViewMode = c.WidgetViewMode.Hidden, this.dispatcherService.dispatch(r.DispatchType.HideWidget)
        }, p.prototype.openWidget = function () {
            this.widgetContainer.classList.add("open"), this.widgetContainer.classList.remove("closed"), this.widgetContainer.classList.remove("new-message"), this.widgetViewMode = c.WidgetViewMode.Open, this.dispatcherService.dispatch(r.DispatchType.OpenWidget)
        }, p.prototype.closeWidget = function () {
            this.widgetContainer.classList.add("closed"), this.widgetContainer.classList.remove("open"), this.widgetViewMode = c.WidgetViewMode.Closed, this.dispatcherService.dispatch(r.DispatchType.CloseWidget)
        }, p.prototype.endConversation = function () {
            this.dispatcherService.dispatch(r.DispatchType.EndConversation, !0)
        }, p.prototype.startConversation = function () {
            this.dispatcherService.dispatch(r.DispatchType.StartConversation, !0)
        }, p.prototype.reload = function () {
            this.reloadIframe()
        }, p.prototype.setStyle = function () {
            this.widgetStyle.innerHTML = "";
            var e = "#" + p.uniqueId + "{            font-size: " + this.fontSize + ";            position: fixed;            height: 0;            width: " + this.openWidth + this.lengthUnit + ";            z-index: 99;            max-width: 100%;            max-width: 100vw;            max-height: 100%;            max-height: 100vh;        }        #" + p.uniqueId + ".open{            height: " + this.openHeight + this.lengthUnit + ";            width: " + this.openWidth + this.lengthUnit + ";        }        #" + p.uniqueId + ".closed{            width: " + this.closedWidth + "px;            height: " + this.closedHeight + "px;        }";
            switch (this.position) {
                case 0:
                    e += "#" + p.uniqueId + "{\n                    top: 0;\n                    left: 0;\n                }";
                    break;
                case 1:
                    e += "#" + p.uniqueId + "{\n                    top: 0;\n                    right: 0;\n                }";
                    break;
                case 2:
                    e += "#" + p.uniqueId + "{\n                    right: 0;\n                    bottom: 0;\n                }";
                    break;
                case 3:
                    e += "#" + p.uniqueId + "{\n                    left: 0;\n                    bottom: 0;\n                }"
            }
            let cspNonce = document.head.querySelector("[property~=csp-nonce][content]").content;
            this.widgetStyle.setAttribute("nonce", cspNonce);
            this.widgetStyle.appendChild(document.createTextNode(e))
        }, p.prototype.makeStyleElement = function () {
            var e = document.head || document.getElementsByTagName("head")[0];
            let cspNonce = document.head.querySelector("[property~=csp-nonce][content]").content;
            this.widgetStyle = document.createElement("style"), this.widgetStyle.setAttribute("nonce", cspNonce), e.appendChild(this.widgetStyle), this.setStyle()
        }, p.prototype.setConversationIdInSessionStorage = function (e) {
            h.Guid.isValid(e) ? sessionStorage.setItem(o.ConversationId, e) : sessionStorage.removeItem(o.ConversationId)
        }, p.prototype.getConversationIdFromSessionStorage = function () {
            var e = sessionStorage.getItem(o.ConversationId);
            return h.Guid.isValid(e) ? e : (e && sessionStorage.removeItem(o.ConversationId), null)
        }, p.prototype.checkStorage = function () {
            this.checkStorageForConversationId(), this.checkStorageForMessageInProgress(), this.checkStorageForLastReadMessageId(), this.checkStorageForSoundSetting(), this.checkStorageForViewMode()
        }, p.prototype.checkStorageForConversationId = function () {
            var e = this.getConversationIdFromSessionStorage();
            this.storedConversationId = e, this.dispatcherService.dispatch(r.DispatchType.SetConversationId, e)
        }, p.prototype.checkStorageForMessageInProgress = function () {
            var e = sessionStorage.getItem(o.MessageInProgess);
            e && this.dispatcherService.dispatch(r.DispatchType.SetMessageInProgess, e)
        }, p.prototype.checkStorageForLastReadMessageId = function () {
            var e = sessionStorage.getItem(o.LastReadMessageId);
            e && this.dispatcherService.dispatch(r.DispatchType.SetLastReadMessageId, e)
        }, p.prototype.checkStorageForSoundSetting = function () {
            var e = sessionStorage.getItem(o.SoundEnabled);
            if (e) try {
                this.dispatcherService.dispatch(r.DispatchType.SetSoundEnabled, JSON.parse(e))
            } catch (e) {
            }
        }, p.prototype.checkStorageForViewMode = function () {
            var e = sessionStorage.getItem(o.ViewMode);
            e && (e = JSON.parse(e), this.storedViewMode = e, this.widgetViewMode = e)
        }, p.prototype.updateWidgetView = function () {
            switch (this._widgetViewMode) {
                default:
                case c.WidgetViewMode.Unknown:
                case c.WidgetViewMode.Closed:
                    this.closeWidget();
                    break;
                case c.WidgetViewMode.Open:
                    this.openWidget();
                    break;
                case c.WidgetViewMode.Hidden:
                    this.hideWidget()
            }
        }, p.prototype.setDefaults = function (e) {
            this.widgetIsStarted ? this.dispatcherService.dispatch(r.DispatchType.SetRegistrationDefaults, e) : this.defaults = e
        }, p.prototype.getAttributesFromScript = function (e) {
            e.hasAttribute("skip-cache") && (this.skipCache = !0);
            for (var t = 0; t < p.jwtAttributeNames.length; t++) {
                var i = p.jwtAttributeNames[t];
                if (i = e.getAttribute(i)) {
                    this.jsonWebToken = i;
                    break
                }
            }
        }, p.prototype.emitEvent = function (e, t) {
            void 0 === t && (t = null), window.postMessage({type: "zEvent", name: e, data: t}, "*"), this.emitCustomEvent(e, t)
        }, p.prototype.emitCustomEvent = function (e, t) {
            void 0 === t && (t = null), e = new CustomEvent(e, {bubbles: !0, cancelable: !0, detail: t}), window.dispatchEvent(e)
        }, Object.defineProperty(p.prototype, "configDetails", {
            get: function () {
                return this.widgetConfiguration ? {agentsAreAvailable: this.agentsAreAvailable, isOpen: this.isOpen} : null
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(p.prototype, "agentsAreAvailable", {
            get: function () {
                return !!this.widgetConfiguration && this.widgetConfiguration.agentsAreAvailable
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(p.prototype, "isOpen", {
            get: function () {
                return !!this.widgetConfiguration && this.widgetConfiguration.isOpen
            }, enumerable: !1, configurable: !0
        }), p.uniqueId = n.ZissonWebChat, p.names = ["zChat", "zWebChat", "zissonWebChat"], p.jwtAttributeNames = ["data-jwt", "jwt"], p));

        function u() {
        }

        Object.defineProperty(u.prototype, "eventName", {
            get: function () {
                return n
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(u.prototype, "EventName", {
            get: function () {
                return n
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(u.prototype, "config", {
            get: function () {
                return g.configDetails
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(u.prototype, "agentsAreAvailable", {
            get: function () {
                return g.agentsAreAvailable
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(u.prototype, "isOpen", {
            get: function () {
                return g.isOpen
            }, enumerable: !1, configurable: !0
        }), u.prototype.setDefaults = function (e) {
            g.setDefaults(e)
        }, u.prototype.openWidget = function () {
            g.openWidget()
        }, u.prototype.closeWidget = function () {
            g.closeWidget()
        }, u.prototype.hideWidget = function () {
            g.hideWidget()
        }, u.prototype.endConversation = function () {
            g.endConversation()
        }, u.prototype.startConversation = function () {
            g.startConversation()
        }, u.prototype.reload = function () {
            g.reload()
        };
        var l = new u;
        t.names.forEach((function (e) {
            window[e] = l, window["$" + e] = l
        }))
    }, 32: function (e, t, i) {
        "use strict";

        function n(e) {
            this.receiverWindow = e
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.DispatcherService = void 0, n.prototype.dispatch = function (e, t) {
            this.receiverWindow.postMessage(JSON.stringify({command: e, parameter: t}), "*")
        }, t.DispatcherService = n
    }, 46: function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.environment = void 0, t.environment = void 0, t.environment = {
            bootstrapperUrl: "/js/zisson/chat2.zisson.no-index.html",
            socketUrl: "wss://skravle.zisson.no/ws-widget",
            apiUrlConfig: "https://skravle.zisson.no/api/chat/config",
            apiUrlHistory: "https://skravle.zisson.no/api/chat/conversation",
            apiUrlRequestReport: "https://skravle.zisson.no/api/chat/request-report",
            environment: "production"
        }
    }, 48: function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.WidgetViewMode = void 0, (t = t.WidgetViewMode || (t.WidgetViewMode = {}))[t.Unknown = 0] = "Unknown", t[t.Open = 1] = "Open", t[t.Closed = 2] = "Closed", t[t.Hidden = 3] = "Hidden"
    }
});