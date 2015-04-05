// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/*
 * @package    atto_cssfontsize
 * @copyright  2014 Andrew Nicols 2015 Adam Jenkins
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

/**
 * @module moodle-atto_cssfontsize-button
 */

/**
 * Atto text editor fontsize plugin that uses CSS.
 *
 * @namespace M.atto_cssfontsize
 * @class button
 * @extends M.editor_atto.EditorPlugin
 */

var sizes = [
        {
            value: 1,
            name: "xx-small"
        }, {
            value: 2,
            name: "x-small"
        }, {
            value: 3,
            name: "small"
        }, {
            value: 4,
            name: "medium"
        }, {
            value: 5,
            name: "large"
        }, {
            value: 6,
            name: "x-large"
        }, {
            value: 7,
            name: "xx-large"
        }
    ];
/* Changed the array to allow size names that are consistent with CSS output */
Y.namespace('M.atto_cssfontsize').Button = Y.Base.create('button', Y.M.editor_atto.EditorPlugin, [], {
    initializer: function() {
        var items = [];
        Y.Array.each(sizes, function(size) {
            items.push({
                text: '<span style="font-size:' + size.name + ';">' + size.name + '</span>',
                callbackArgs: size.name,
                callback: this._changeStyle
            });
        });

        this.addToolbarMenu({
            globalItemConfig: {
                callback: this._changeStyle
            },
            icon: 'icon',
            iconComponent: 'atto_cssfontsize',
            items: items
        });
    },

    /**
     * Change the font size to the specified size.
     *
     * @method _changeStyle
     * @param {EventFacade} e
     * @param {string} size The new font size
     * @private
OLD function that changed font tags below
    _changeStyle: function(e, size) {
        document.execCommand("fontSize", false, size);
    }

Added a new function that adds a span tag below
     */

    _changeStyle: function(e, size) {
        document.execCommand("insertHTML", false, '<span style="font-size:'+size+'">'+document.getSelection()+'</span>');
    }

});
