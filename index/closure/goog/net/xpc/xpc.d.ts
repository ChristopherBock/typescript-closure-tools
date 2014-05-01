// Generated Wed Apr 30 22:40:15 PDT 2014

/// <reference path="../../../goog/base.d.ts" />
/// <reference path="../../../goog/string/string.d.ts" />
/// <reference path="../../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../../goog/dom/nodetype.d.ts" />
/// <reference path="../../../goog/debug/error.d.ts" />
/// <reference path="../../../goog/asserts/asserts.d.ts" />
/// <reference path="../../../goog/array/array.d.ts" />
/// <reference path="../../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../goog/useragent/useragent.d.ts" />
/// <reference path="../../../goog/structs/collection.d.ts" />
/// <reference path="../../../goog/object/object.d.ts" />
/// <reference path="../../../goog/structs/structs.d.ts" />
/// <reference path="../../../goog/math/math.d.ts" />
/// <reference path="../../../goog/functions/functions.d.ts" />
/// <reference path="../../../goog/iter/iter.d.ts" />
/// <reference path="../../../goog/structs/map.d.ts" />
/// <reference path="../../../goog/structs/set.d.ts" />
/// <reference path="../../../goog/debug/debug.d.ts" />
/// <reference path="../../../goog/debug/logrecord.d.ts" />
/// <reference path="../../../goog/debug/logbuffer.d.ts" />
/// <reference path="../../../goog/debug/logger.d.ts" />
/// <reference path="../../../goog/log/log.d.ts" />

declare module goog.net.xpc {

    /**
     * Enum used to identify transport types.
     * @enum {number}
     */
    enum TransportTypes { NATIVE_MESSAGING, FRAME_ELEMENT_METHOD, IFRAME_RELAY, IFRAME_POLLING, FLASH, NIX, DIRECT } 

    /**
     * Enum containing transport names. These need to correspond to the
     * transport class names for createTransport_() to work.
     * @type {Object}
     */
    var TransportNames: Object;

    /**
     * Field names used on configuration object.
     * @type {Object}
     */
    var CfgFields: Object;

    /**
     * Config properties that need to be URL sanitized.
     * @type {Array}.<string>
     */
    var UriCfgFields: any[];

    /**
     * @enum {number}
     */
    enum ChannelStates { NOT_CONNECTED, CONNECTED, CLOSED } 

    /**
     * The name of the transport service (used for internal signalling).
     * @type {string}
     * @suppress {underscore|visibility}
     */
    var TRANSPORT_SERVICE_: string;

    /**
     * Transport signaling message: setup.
     * @type {string}
     */
    var SETUP: string;

    /**
     * Transport signaling message: setup for native transport protocol v2.
     * @type {string}
     */
    var SETUP_NTPV2: string;

    /**
     * Transport signaling message: setup acknowledgement.
     * @type {string}
     * @suppress {underscore|visibility}
     */
    var SETUP_ACK_: string;

    /**
     * Transport signaling message: setup acknowledgement.
     * @type {string}
     */
    var SETUP_ACK_NTPV2: string;

    /**
     * Object holding active channels.
     * Package private. Do not call from outside goog.net.xpc.
     *
     * @type {Object.<string, goog.net.xpc.CrossPageChannel>}
     */
    var channels: { [key: string]: goog.net.xpc.CrossPageChannel };

    /**
     * Returns a random string.
     * @param {number} length How many characters the string shall contain.
     * @param {string=} opt_characters The characters used.
     * @return {string} The random string.
     */
    function getRandomString(length: number, opt_characters?: string): string;

    /**
     * The logger.
     * @type {goog.log.Logger}
     */
    var logger: goog.log.Logger;
}
