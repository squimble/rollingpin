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
let bps=1000;
   
    setInterval(function() {
        Game.ClickCookie();
    }, cps);
  //thanks to Nine_Gates plus [deleted] on reddit for making this crude autotrader
   double trend_decider[15] =0;
double weight=2.5;
double boundary_sell=0.015%;
double boundary_buy=-0.015;

setInterval(function() {  for (var i=0;i<15;i++) {  	
trend_decider[i] = trend_decider[i] / weight + XXX_last_delta&
if (Game.Objects.Bank.minigame.getGoodPrice(Game.Objects.Bank.minigame.goodsById[i])<10*i + Game.Objects.Bank.level - 1 && trend_decider[i]>boundary_buy%) 

{ 			Game.Objects.Bank.minigame.buyGood(i, Game.Objects.Bank.minigame.getGoodMaxStock(Game.Objects.Bank.minigame.goodsById[i])) 		}   		

if (Game.Objects.Bank.minigame.getGoodPrice(Game.Objects.Bank.minigame.goodsById[i])>10*i + Game.Objects.Bank.level + 9 && trend_decider[i]<boundary_sell) 

{ 			Game.Objects.Bank.minigame.sellGood(i, Game.Objects.Bank.minigame.getGoodMaxStock(Game.Objects.Bank.minigame.goodsById[i])) 		}   	}  }, 1800000);
})();

