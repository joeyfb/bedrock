/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

window.Mzp.Details.init('.mzp-c-article .mzp-c-details > h3');

(function($) {
    'use strict';

    // open a section on pageload if URL has a fragment identifier
    if (window.location.hash) {
        var $target = $(window.location.hash + '> .is-summary > button');

        if ($target.length) {
            $target.trigger('click');
        }
    }

})(window.jQuery);
