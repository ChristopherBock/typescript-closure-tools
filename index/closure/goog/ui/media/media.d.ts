// Generated Fri May  2 15:00:15 PDT 2014

/// <reference path="../../../goog/base.d.ts" />
/// <reference path="../../../goog/dom/nodetype.d.ts" />
/// <reference path="../../../goog/debug/error.d.ts" />
/// <reference path="../../../goog/string/string.d.ts" />
/// <reference path="../../../goog/asserts/asserts.d.ts" />
/// <reference path="../../../goog/object/object.d.ts" />
/// <reference path="../../../goog/array/array.d.ts" />
/// <reference path="../../../goog/math/math.d.ts" />
/// <reference path="../../../goog/math/coordinate.d.ts" />
/// <reference path="../../../goog/math/box.d.ts" />
/// <reference path="../../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../goog/useragent/useragent.d.ts" />
/// <reference path="../../../goog/math/size.d.ts" />
/// <reference path="../../../goog/math/rect.d.ts" />
/// <reference path="../../../goog/dom/vendor.d.ts" />
/// <reference path="../../../goog/dom/classes.d.ts" />
/// <reference path="../../../goog/dom/tagname.d.ts" />
/// <reference path="../../../goog/functions/functions.d.ts" />
/// <reference path="../../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../../goog/dom/dom.d.ts" />
/// <reference path="../../../goog/style/style.d.ts" />
/// <reference path="../../../goog/events/eventid.d.ts" />
/// <reference path="../../../goog/events/listenable.d.ts" />
/// <reference path="../../../goog/events/listener.d.ts" />
/// <reference path="../../../goog/events/listenermap.d.ts" />
/// <reference path="../../../goog/events/browserfeature.d.ts" />
/// <reference path="../../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../goog/events/eventtype.d.ts" />
/// <reference path="../../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../../goog/disposable/disposable.d.ts" />
/// <reference path="../../../goog/events/event.d.ts" />
/// <reference path="../../../goog/reflect/reflect.d.ts" />
/// <reference path="../../../goog/events/browserevent.d.ts" />
/// <reference path="../../../goog/events/events.d.ts" />
/// <reference path="../../../goog/events/eventhandler.d.ts" />
/// <reference path="../../../goog/ui/idgenerator.d.ts" />
/// <reference path="../../../goog/events/eventtarget.d.ts" />
/// <reference path="../../../goog/ui/component.d.ts" />
/// <reference path="../../../goog/dom/classlist.d.ts" />
/// <reference path="../../../goog/ui/registry.d.ts" />
/// <reference path="../../../goog/ui/decorate.d.ts" />
/// <reference path="../../../goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../../goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../../goog/a11y/aria/roles.d.ts" />
/// <reference path="../../../goog/a11y/aria/aria.d.ts" />
/// <reference path="../../../goog/ui/controlrenderer.d.ts" />
/// <reference path="../../../goog/ui/controlcontent.d.ts" />
/// <reference path="../../../goog/events/keycodes.d.ts" />
/// <reference path="../../../goog/events/keyhandler.d.ts" />
/// <reference path="../../../goog/ui/control.d.ts" />

declare module goog.ui.media {

    /**
     * Provides the control mechanism of media types.
     *
     * @param {goog.ui.media.MediaModel} dataModel The data model to be used by the
     *     renderer.
     * @param {goog.ui.ControlRenderer=} opt_renderer Renderer used to render or
     *     decorate the component; defaults to {@link goog.ui.ControlRenderer}.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
     *     document interaction.
     * @constructor
     * @extends {goog.ui.Control}
     * @final
     */
    class Media extends goog.ui.Control {
        /**
         * Provides the control mechanism of media types.
         *
         * @param {goog.ui.media.MediaModel} dataModel The data model to be used by the
         *     renderer.
         * @param {goog.ui.ControlRenderer=} opt_renderer Renderer used to render or
         *     decorate the component; defaults to {@link goog.ui.ControlRenderer}.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
         *     document interaction.
         * @constructor
         * @extends {goog.ui.Control}
         * @final
         */
        constructor(dataModel: goog.ui.media.MediaModel, opt_renderer?: goog.ui.ControlRenderer, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Sets the media model to be used on the renderer.
         * @param {goog.ui.media.MediaModel} dataModel The media model the renderer
         *     should use.
         */
        setDataModel(dataModel: goog.ui.media.MediaModel): void;
    
        /**
         * Gets the media model renderer is using.
         * @return {goog.ui.media.MediaModel} The media model being used.
         */
        getDataModel(): goog.ui.media.MediaModel;
    }

    /**
     * Base class of all media renderers. Provides the common renderer functionality
     * of medias.
     *
     * The current common functionality shared by Medias is to have an outer frame
     * that gets highlighted on mouse hover.
     *
     * TODO(user): implement more common UI behavior, as needed.
     *
     * NOTE(user): I am not enjoying how the subclasses are changing their state
     * through setState() ... maybe provide abstract methods like
     * goog.ui.media.MediaRenderer.prototype.preview = goog.abstractMethod;
     * goog.ui.media.MediaRenderer.prototype.play = goog.abstractMethod;
     * goog.ui.media.MediaRenderer.prototype.minimize = goog.abstractMethod;
     * goog.ui.media.MediaRenderer.prototype.maximize = goog.abstractMethod;
     * and call them on this parent class setState ?
     *
     * @constructor
     * @extends {goog.ui.ControlRenderer}
     */
    class MediaRenderer extends goog.ui.ControlRenderer {
        /**
         * Base class of all media renderers. Provides the common renderer functionality
         * of medias.
         *
         * The current common functionality shared by Medias is to have an outer frame
         * that gets highlighted on mouse hover.
         *
         * TODO(user): implement more common UI behavior, as needed.
         *
         * NOTE(user): I am not enjoying how the subclasses are changing their state
         * through setState() ... maybe provide abstract methods like
         * goog.ui.media.MediaRenderer.prototype.preview = goog.abstractMethod;
         * goog.ui.media.MediaRenderer.prototype.play = goog.abstractMethod;
         * goog.ui.media.MediaRenderer.prototype.minimize = goog.abstractMethod;
         * goog.ui.media.MediaRenderer.prototype.maximize = goog.abstractMethod;
         * and call them on this parent class setState ?
         *
         * @constructor
         * @extends {goog.ui.ControlRenderer}
         */
        constructor();
    
        /**
         * Returns a renamable CSS class name for a numbered thumbnail. The default
         * implementation generates the class names goog-ui-media-thumbnail0,
         * goog-ui-media-thumbnail1, and the generic goog-ui-media-thumbnailn.
         * Subclasses can override this method when their media requires additional
         * specific class names (Applications are supposed to know how many thumbnails
         * media will have).
         *
         * @param {number} index The thumbnail index.
         * @return {string} CSS class name.
         * @protected
         */
        getThumbnailCssName(index: number): string;
    }
}

