const temperaturesCelsius = [0, 25, 10, -5, 15];
const celsiusToFahrenheit =(celsius=>(celsius * 9/5) + 32);
const temperaturesFahrenheit=temperaturesCelsius.map(celsiusToFahrenheit);
const validTemperaturesFahrenheit = temperaturesFahrenheit.filter(fahrenheit => !isNaN(fahrenheit));//to remove any invalid entry
const averageTemperatureFahrenheit = validTemperaturesFahrenheit.reduce((sum, temperature) => sum + temperature, 0) / validTemperaturesFahrenheit.length;
console.log(averageTemperatureFahrenheit);