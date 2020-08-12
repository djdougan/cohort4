const TemperatureConvertor = {
  convertToFahrenheit: (celsius) => {
    let result = (celsius * 9) / 5 + 32;
    return result;
  },
};

export default TemperatureConvertor;
