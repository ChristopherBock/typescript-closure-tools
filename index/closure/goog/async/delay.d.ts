// Generated Fri May  2 15:02:21 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../goog/disposable/disposable.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/events/eventid.d.ts" />
/// <reference path="../../goog/events/listenable.d.ts" />
/// <reference path="../../goog/events/listener.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/events/listenermap.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/events/browserfeature.d.ts" />
/// <reference path="../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../goog/events/eventtype.d.ts" />
/// <reference path="../../goog/events/event.d.ts" />
/// <reference path="../../goog/reflect/reflect.d.ts" />
/// <reference path="../../goog/events/browserevent.d.ts" />
/// <reference path="../../goog/events/events.d.ts" />
/// <reference path="../../goog/events/eventtarget.d.ts" />
/// <reference path="../../goog/timer/timer.d.ts" />

declare module goog.async {

    /**
     * A Delay object invokes the associated function after a specified delay. The
     * interval duration can be specified once in the constructor, or can be defined
     * each time the delay is started. Calling start on an active delay will reset
     * the timer.
     *
     * @param {Function} listener Function to call when the delay completes.
     * @param {number=} opt_interval The default length of the invocation delay (in
     *     milliseconds).
     * @param {Object=} opt_handler The object scope to invoke the function in.
     * @constructor
     * @extends {goog.Disposable}
     * @final
     */
    class Delay extends goog.Disposable {
        /**
         * A Delay object invokes the associated function after a specified delay. The
         * interval duration can be specified once in the constructor, or can be defined
         * each time the delay is started. Calling start on an active delay will reset
         * the timer.
         *
         * @param {Function} listener Function to call when the delay completes.
         * @param {number=} opt_interval The default length of the invocation delay (in
         *     milliseconds).
         * @param {Object=} opt_handler The object scope to invoke the function in.
         * @constructor
         * @extends {goog.Disposable}
         * @final
         */
        constructor(listener: Function, opt_interval?: number, opt_handler?: Object);
    
        /**
         * Starts the delay timer. The provided listener function will be called after
         * the specified interval. Calling start on an active timer will reset the
         * delay interval.
         * @param {number=} opt_interval If specified, overrides the object's default
         *     interval with this one (in milliseconds).
         */
        start(opt_interval?: number): void;
    
        /**
         * Stops the delay timer if it is active. No action is taken if the timer is not
         * in use.
         */
        stop(): void;
    
        /**
         * Fires delay's action even if timer has already gone off or has not been
         * started yet; guarantees action firing. Stops the delay timer.
         */
        fire(): void;
    
        /**
         * Fires delay's action only if timer is currently active. Stops the delay
         * timer.
         */
        fireIfActive(): void;
    
        /**
         * @return {boolean} True if the delay is currently active, false otherwise.
         */
        isActive(): boolean;
    }
}

declare module goog {

    /**
     * A deprecated alias.
     * @deprecated Use goog.async.Delay instead.
     * @constructor
     * @final
     */
    class Delay {
        /**
         * A deprecated alias.
         * @deprecated Use goog.async.Delay instead.
         * @constructor
         * @final
         */
        constructor();
    }
}

