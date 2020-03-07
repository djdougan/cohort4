import myDictionary from "./workingWithDictionaries.js"
let dictionary = new myDictionary();

test("Test: LookUp should return province name", () => {
    expect(dictionary.lookUp("AB")).toBe("Alberta");
    expect(dictionary.lookUp("Ab")).toBe("Alberta");
    expect(dictionary.lookUp("ab")).toBe("Alberta");
    expect(dictionary.lookUp("BC")).toBe("British Columbia");
    expect(dictionary.lookUp("Bc")).toBe("British Columbia");
    expect(dictionary.lookUp("bc")).toBe("British Columbia");
    expect(dictionary.lookUp("NT")).toBe("Northwest Territories");
    expect(dictionary.lookUp("Nt")).toBe("Northwest Territories");
    expect(dictionary.lookUp("nt")).toBe("Northwest Territories");
    expect(dictionary.lookUp("abc")).toBe("Province abbreviation should be 2 characters long.");
    expect(dictionary.lookUp("Alberta")).toBe("Province abbreviation should be 2 characters long.");
    expect(dictionary.lookUp("NY")).toBe("Province not found.");
    expect(dictionary.lookUp("AZ")).toBe("Province not found.");
});

