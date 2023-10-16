let buttons = document.querySelectorAll('.btn');
let input = document.querySelector('.input');
let output = document.querySelector('.output');
let option = document.querySelector('.options');

function calcFaren(c){
    return ((c*9)/5 + 32).toFixed(3);
}

function toKelvin(c){
    return Number(c)+273.15;
}
function calcCelsius(f){
    return ((f-32)*5/9).toFixed(3);
}

buttons.forEach(button => {
    button.addEventListener('click',(e)=>{
        let selected = option.options[option.selectedIndex];
        let unit = ' ' + selected.text;
        if((e.target.value === 'f2' && selected.value ==='f1') || (e.target.value === 'c2' && selected.value ==='c1') || (e.target.value === 'k2' && selected.value==='k1')){
            output.innerHTML = input.value + unit;
        }
        else if(selected.value === 'f1' && e.target.value === 'c2'){
            output.innerHTML= calcCelsius(input.value) + ' °C';
        }
        else if(selected.value === 'c1' && e.target.value === 'f2'){
            output.innerHTML= calcFaren(input.value) + ' °F';
        }
        else if(selected.value === 'c1' && e.target.value ==='k2'){
            output.innerHTML = toKelvin(input.value) + ' °K';
        }
        else if(selected.value === 'f1' && e.target.value ==='k2'){
            output.innerHTML = (Number(calcCelsius(input.value)) + 273.15) + ' °K';
        }
        else if(selected.value === 'k1' && e.target.value === 'c2'){
            output.innerHTML = (input.value - 273.15).toFixed(3) + ' °C';
        }
        else if(selected.value === 'k1' && e.target.value === 'f2'){
            output.innerHTML = (Number(calcCelsius(input.value)) - 273.15).toFixed(3) + ' °F';
        }
        else{
            output.innerHTML = "INVALID INPUT";
        }
    })
});