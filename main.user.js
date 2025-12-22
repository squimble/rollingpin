// ==UserScript==
// @name         RollingPin
// @namespace    rollingpin
// @version      1
// @description  Cookie Clicker automater
// @author       squimble
// @match        https://orteil.dashnet.org/cookieclicker/
// @match        http://orteil.dashnet.org/cookieclicker/
// @homepageURL  https://github.com/squimble/rollingpin
// @supportURL   https://github.com/squimble/rollingpin/issues
// ==/UserScript==

// Run
 (function() {
    'use strict';

let cps=10000;
   
    setInterval(function() {
        Game.ClickCookie();
    }, cps);

})();

