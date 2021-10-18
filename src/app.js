/*
* File: app.ts/app.js
* Author: Lehoczki Patricia,Madarász Dávid
* Copyright: 2021, Lehoczki Patricia,Madarász Dávid
* Group: Szoft II N
* Date: 2021-10-15
-----------------
* Last Modified Date: 2021-10-15
* Last Modified by: Madarász Dávid
* Github: https://github.com/lehoczkipatricia/labmet
* Licenc: MIT
*/
var foot = document.querySelector('#footInput');
var result = document.querySelector('#result');
var calcButton = document.querySelector('#calcButton');
function calculateMeterFromFoot() {
    return (+foot.value * 0.3048);
}
calcButton.addEventListener('click', function () {
    var res = Number(calculateMeterFromFoot()).toFixed(4);
    result.value = String(res + " méter");
});
