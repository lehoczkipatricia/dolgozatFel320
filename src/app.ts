const radius=document.querySelector("#radius") as HTMLInputElement;
const height=document.querySelector("#height") as HTMLInputElement;
const result=document.querySelector("#result") as HTMLInputElement;

const calcButton=document.querySelector("#calcButton");

function calcVolume(radius:number, height:number):number {
    return 1.0/3.0 * Math.pow(radius,2) * Math.PI*height;
}

// console.log(add(2,4));

calcButton.addEventListener("click", event => {
    let res = calcVolume(+radius.value, +height.value);
    result.value = String(res);
});
