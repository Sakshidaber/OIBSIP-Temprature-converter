document.getElementById('convertButton').addEventListener('click', function() {
    var temperature = parseFloat(document.getElementById('temperature').value);
    var type = document.getElementById('type').value;
    var result = document.getElementById('result');

    if (isNaN(temperature)) {
        result.textContent = 'Please enter a valid number';
        return;
    }

    let convertedTemp;

    // Convert from Fahrenheit
    if (type === 'fahrenheit') {
        let celsius = (temperature - 32) * 5 / 9;
        let kelvin = (temperature + 459.67) * 5 / 9;
        convertedTemp = `${temperature}°F = ${celsius.toFixed(2)}°C = ${kelvin.toFixed(2)}K`;
    }
    
    // Convert from Celsius
    else if (type === 'celsius') {
        let fahrenheit = (temperature * 9 / 5) + 32;
        let kelvin = temperature + 273.15;
        convertedTemp = `${temperature}°C = ${fahrenheit.toFixed(2)}°F = ${kelvin.toFixed(2)}K`;
    }
    
    // Convert from Kelvin
    else if (type === 'kelvin') {
        let celsius = temperature - 273.15;
        let fahrenheit = (temperature * 9 / 5) - 459.67;
        convertedTemp = `${temperature}K = ${celsius.toFixed(2)}°C = ${fahrenheit.toFixed(2)}°F`;
    }

    result.textContent = convertedTemp;
});
