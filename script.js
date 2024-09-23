// console.log("hi");
const celsiusInputElement = document.querySelector('#celsius')
// console.log(celsiusInputElement);
const fahrenheitInputElement = document.querySelector('#fahrenheit')
// console.log(fahrenheitInputElement);



const converterTemp = function (e) {
    // console.log(e);
    const celsiusInput = Number(celsiusInputElement.value)
    // console.log(celsiusInput);
    const fahrenheitInput =  Number(fahrenheitInputElement.value)
    // console.log(fahrenheitInput);
    if(e.target === celsiusInputElement && celsiusInputElement.value !== ''){
        let convertToFahrenheit = ( celsiusInput * 1.8 ) + 32
        fahrenheitInputElement.value = convertToFahrenheit.toFixed(2)
    }else if(e.target === fahrenheitInputElement && fahrenheitInputElement.value !== ''){
        let convertToCelsius = ( fahrenheitInput - 32 ) / 1.8
        celsiusInputElement.value = convertToCelsius.toFixed(2)
    }else{
        if (e.target === celsiusInputElement) {
            fahrenheitInputElement.value = ''
        }else {
            celsiusInputElement.value = ''
        }
    }
}


celsiusInputElement.addEventListener('input', converterTemp)
fahrenheitInputElement.addEventListener('input', converterTemp)




