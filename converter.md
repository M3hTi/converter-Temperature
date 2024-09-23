# Temperature Converter JavaScript Documentation

This document explains the JavaScript code for a Fahrenheit to Celsius temperature converter.

## Code Overview

```javascript
const celsiusInputElement = document.querySelector('#celsius')
const fahrenheitInputElement = document.querySelector('#fahrenheit')

const converterTemp = function (e) {
    const celsiusInput = Number(celsiusInputElement.value)
    const fahrenheitInput = Number(fahrenheitInputElement.value)
    
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
```

## Detailed Explanation

1. **Element Selection**:
   ```javascript
   const celsiusInputElement = document.querySelector('#celsius')
   const fahrenheitInputElement = document.querySelector('#fahrenheit')
   ```
   These lines select the input elements for Celsius and Fahrenheit from the HTML using their IDs.

2. **Conversion Function**:
   ```javascript
   const converterTemp = function (e) { ... }
   ```
   This function handles the temperature conversion. It takes an event `e` as a parameter, which is used to determine which input field triggered the conversion.

3. **Input Value Retrieval**:
   ```javascript
   const celsiusInput = Number(celsiusInputElement.value)
   const fahrenheitInput = Number(fahrenheitInputElement.value)
   ```
   These lines get the current values from both input fields and convert them to numbers.

4. **Celsius to Fahrenheit Conversion**:
   ```javascript
   if(e.target === celsiusInputElement && celsiusInputElement.value !== ''){ ... }
   ```
   This block checks if the Celsius input was changed and is not empty. If true, it converts Celsius to Fahrenheit using the formula: `F = (C * 1.8) + 32`

5. **Fahrenheit to Celsius Conversion**:
   ```javascript
   else if(e.target === fahrenheitInputElement && fahrenheitInputElement.value !== ''){ ... }
   ```
   This block checks if the Fahrenheit input was changed and is not empty. If true, it converts Fahrenheit to Celsius using the formula: `C = (F - 32) / 1.8`

6. **Handling Empty Input**:
   ```javascript
   else{ ... }
   ```
   This block handles the case when an input is cleared. It clears the other input field to keep them in sync.

7. **Event Listeners**:
   ```javascript
   celsiusInputElement.addEventListener('input', converterTemp)
   fahrenheitInputElement.addEventListener('input', converterTemp)
   ```
   These lines add event listeners to both input fields. They trigger the `converterTemp` function whenever the user types in either input field.

## Key Points

- The code uses the 'input' event, which triggers as soon as the user types or modifies the input, providing real-time conversion.
- The conversion formulas are:
  - Celsius to Fahrenheit: `F = (C * 1.8) + 32`
  - Fahrenheit to Celsius: `C = (F - 32) / 1.8`
- The `.toFixed(2)` method is used to round the converted temperatures to two decimal places.
- The code handles empty inputs by clearing both fields when one is emptied.

This temperature converter provides a simple, user-friendly way to convert between Celsius and Fahrenheit temperatures in real-time.