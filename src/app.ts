/*
* File: app.ts/app.js
* Author: Lehoczki Patricia,Madarász Dávid
* Copyright: 2021, Lehoczki Patricia,Madarász Dávid
* Group: Szoft II N
* Date: 2021-10-15
-----------------
* Last Modified Date: 2021-10-15
* Last Modified by: Madarász Dávid
* Github: https://github.com/lehoczkipatricia/dolgozatFel320
* Licenc: MIT
*/
const foot = document.querySelector('#footInput') as HTMLInputElement;
const result = document.querySelector('#result') as HTMLInputElement;
const calcButton = document.querySelector('#calcButton') as HTMLInputElement;

function calculateMeterFromFoot():number {
    return (+foot.value * 0.3048);
}

calcButton.addEventListener('click', () => {
    let res = Number(calculateMeterFromFoot()).toFixed(4);
    result.value = res;
});