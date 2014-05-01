// Generated Wed Apr 30 22:43:34 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/events/eventid.d.ts" />
/// <reference path="../../goog/events/listenable.d.ts" />
/// <reference path="../../goog/events/listener.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/events/listenermap.d.ts" />
/// <reference path="../../goog/events/browserfeature.d.ts" />
/// <reference path="../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../goog/events/eventtype.d.ts" />
/// <reference path="../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../goog/disposable/disposable.d.ts" />
/// <reference path="../../goog/events/event.d.ts" />
/// <reference path="../../goog/reflect/reflect.d.ts" />
/// <reference path="../../goog/events/browserevent.d.ts" />
/// <reference path="../../goog/events/events.d.ts" />
/// <reference path="../../goog/events/keycodes.d.ts" />
/// <reference path="../../goog/events/eventtarget.d.ts" />

declare module goog.events.ActionHandler {

    /**
     * Enum type for the events fired by the action handler
     * @enum {string}
     */
    enum EventType { ACTION, BEFOREACTION } 
}

declare module goog.events {

    /**
     * A wrapper around an element that you want to listen to ACTION events on.
     * @param {Element|Document} element The element or document to listen on.
     * @constructor
     * @extends {goog.events.EventTarget}
     * @final
     */
    class ActionHandler extends goog.events.EventTarget {
        /**
         * A wrapper around an element that you want to listen to ACTION events on.
         * @param {Element|Document} element The element or document to listen on.
         * @constructor
         * @extends {goog.events.EventTarget}
         * @final
         */
        constructor(element: any /*Element|Document*/);
    }

    /**
     * This class is used for the goog.events.ActionHandler.EventType.ACTION event.
     * @param {!goog.events.BrowserEvent} browserEvent Browser event object.
     * @constructor
     * @extends {goog.events.BrowserEvent}
     * @final
     */
    class ActionEvent extends goog.events.BrowserEvent {
        /**
         * This class is used for the goog.events.ActionHandler.EventType.ACTION event.
         * @param {!goog.events.BrowserEvent} browserEvent Browser event object.
         * @constructor
         * @extends {goog.events.BrowserEvent}
         * @final
         */
        constructor(browserEvent: goog.events.BrowserEvent);
    }

    /**
     * This class is used for the goog.events.ActionHandler.EventType.BEFOREACTION
     * event. BEFOREACTION gives a chance to the application so the keyboard focus
     * can be restored back, if required.
     * @param {!goog.events.BrowserEvent} browserEvent Browser event object.
     * @constructor
     * @extends {goog.events.BrowserEvent}
     * @final
     */
    class BeforeActionEvent extends goog.events.BrowserEvent {
        /**
         * This class is used for the goog.events.ActionHandler.EventType.BEFOREACTION
         * event. BEFOREACTION gives a chance to the application so the keyboard focus
         * can be restored back, if required.
         * @param {!goog.events.BrowserEvent} browserEvent Browser event object.
         * @constructor
         * @extends {goog.events.BrowserEvent}
         * @final
         */
        constructor(browserEvent: goog.events.BrowserEvent);
    }
}
