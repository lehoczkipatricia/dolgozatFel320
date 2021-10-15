var radius = document.querySelector("#radius");
var height = document.querySelector("#height");
var result = document.querySelector("#result");
var calcButton = document.querySelector("#calcButton");
function calcVolume(radius, height) {
    return 1.0 / 3.0 * Math.pow(radius, 2) * Math.PI * height;
}
// console.log(add(2,4));
calcButton.addEventListener("click", function (event) {
    var res = calcVolume(+radius.value, +height.value);
    result.value = String(res);
});
