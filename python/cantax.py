
taxCodes = [
    {"lower": 0, "upper": 48535, "tax": .15},
    {"lower": 48536, "upper": 97069, "tax": .205},
    {"lower": 97070, "upper": 150473, "tax": .26},
    {"lower": 150474, "upper": 214368, "tax": .29},
    {"lower": 214369, "upper": 10000000, "tax": .33}
]


class TaxFunctions:
    def calculateTaxRate(self, income):
        index = 0
        tax = 0.0
        remainder = 0

        for i in taxCodes:
            if i["lower"] < income and i["upper"] >= income:
                index = taxCodes.index(i)
                remainder = income - i["lower"]

        tax = round(taxCodes[index]["tax"] * remainder, 2)

        for i in range(0, index, 1):
            tax += round((taxCodes[i]["tax"] *
                          (taxCodes[i]["upper"]-taxCodes[i]["lower"])), 2)
        return round(tax, 2)
