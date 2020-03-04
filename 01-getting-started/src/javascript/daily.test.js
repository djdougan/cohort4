import temp from './daily.js'

test("Test: convertToFahrenheit(celsius) return fahrenheit  ", () => {
    expect(temp.convertToFahrenheit(24)).toBe(75.2);
    expect(temp.convertToFahrenheit(50)).toBe(122);
    expect(temp.convertToFahrenheit(212)).toBe(413.6);

})
