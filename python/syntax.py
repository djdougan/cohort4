import re


class MySyntax():

    @staticmethod
    def pow(number, power):
        return number ** power

    @staticmethod
    def remove(string, character):
        r = re.sub(character, "", string)
        return r

    @staticmethod
    def inRange(min, max, testNum):
        if testNum in range(min, max):
            return "%s is in the range" % str(testNum)
        return "The number is outside the given range."

    @staticmethod
    def onlyNumbersInArray(numberArray):
        for num in numberArray:
            if isinstance(num, int):
                return True
            else:
                return False

    @staticmethod
    def ageCheck(testAge, age):
        return age >= testAge

    @staticmethod
    def isDefined(aType):
        if aType is None:
            return False
        else:
            True

    @staticmethod
    def isMatchIgnoreCase(string1, string2):
        return string1.lower() == string2.lower()

    @staticmethod
    def countArgs(*args):
        return len(args)

    @staticmethod
    def concatAndSortLists(list1, list2):
        list1.extend(list2)
        list1.sort()
        return list1

    @staticmethod
    def updateArrayElement(arr, index, newValue):
        arr[index] = newValue
        return arr

    @staticmethod
    def addToEach(numberlist, num):
        for i in range(0, len(numberlist)):
            numberlist[i] += num
        return numberlist

    @staticmethod
    def fillList(size):
        result = []
        i = 0
        while i < size:
            result.append(i)
            i += 1
        return result

    @staticmethod
    def reduce(list):
        result = 0
        for n in list:
            result += n
        return result

    @staticmethod
    def toUpperCaseArray(list):
        for i in range(0, len(list)):
            s = list[i]
            list[i] = s.upper()
        return list

    @staticmethod
    def createCar(brand, model, year):
        dict = {
            "brand": brand,
            "model": model,
            "year": year
        }
        return dict

    @staticmethod
    def keyValueLookUp(dictionary, key):
        value = dictionary.get(key)
        result = {key: value}
        return result
