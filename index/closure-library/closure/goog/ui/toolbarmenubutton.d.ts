/// <reference path="../../../globals.d.ts" />
/// <reference path="./menubutton.d.ts" />
/// <reference path="./controlcontent.d.ts" />
/// <reference path="./menu.d.ts" />
/// <reference path="./buttonrenderer.d.ts" />
/// <reference path="../dom/dom.d.ts" />

declare module goog.ui {

    class ToolbarMenuButton extends ToolbarMenuButton__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class ToolbarMenuButton__Class extends goog.ui.MenuButton__Class  { 
    
            /**
             * A menu button control for a toolbar.
             *
             * @param {goog.ui.ControlContent} content Text caption or existing DOM
             *     structure to display as the button's caption.
             * @param {goog.ui.Menu=} opt_menu Menu to render under the button when clicked.
             * @param {goog.ui.ButtonRenderer=} opt_renderer Optional renderer used to
             *     render or decorate the button; defaults to
             *     {@link goog.ui.ToolbarMenuButtonRenderer}.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for
             *     document interaction.
             * @constructor
             * @extends {goog.ui.MenuButton}
             */
            constructor(content: goog.ui.ControlContent, opt_menu?: goog.ui.Menu, opt_renderer?: goog.ui.ButtonRenderer, opt_domHelper?: goog.dom.DomHelper);
    } 
    
}
