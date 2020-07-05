
import pytest

from syntax import MySyntax


class TestSyntax():
    def setUp(self):
        self.ms = MySyntax

    def test_pow(self):
        x = 2  # setup
        y = 3
        result = MySyntax.pow(x, y)  # action
        assert result == 8  # assert

    def test_remove(self):
        string = "Full Stack Developer"  # setup
        word = "Stack"
        result = MySyntax.remove(string, word)  # action
        assert result == "Full  Developer"  # assert

    def test_inRange(self):
        min = 4  # setup
        max = 10
        testNum = 4
        result = MySyntax.inRange(min, max, testNum)  # action
        assert result == str(testNum) + " is in the range"  # assert

    def test_onlyNumbersInArray(self):
        numberArray = [1, 2, 3, 45, 67, 89]  # setup
        result = MySyntax.onlyNumbersInArray(numberArray)  # action
        assert result == True  # assert

    def test_ageCheck(self):
        age = 21
        testAge = 18
        result = MySyntax.ageCheck(testAge, age)
        assert result == True

    def test_isDefined(self):
        b = None
        result = MySyntax.isDefined(b)
        assert result == False

    def test_isMatchIgnoreCase(self):
        string1 = "Test String"
        string2 = "TEST STRING"
        result = MySyntax.isMatchIgnoreCase(string2, string1)
        assert result == True

    def test_countArgs(self):
        result = MySyntax.countArgs(1, 2, 3, "a", "B")
        assert result == 5

    def test_concatandSortLists(self):
        list1 = ["Ford", "Chev", "Pontiac"]
        list2 = ["Toyota", "Nissan", "BMW"]
        result = MySyntax.concatAndSortLists(list1, list2)
        assert result == ["BMW", "Chev", "Ford", "Nissan", "Pontiac", "Toyota"]

    def test_updateArrayElement(self):
        cars = ["Mustang", "Corvette", "F150", "Cadillac"]
        newItem = "Honda Accord"
        result = MySyntax.updateArrayElement(cars, 2, newItem)
        assert result == ["Mustang", "Corvette", "Honda Accord", "Cadillac"]

    def test_addToEach(self):
        list1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        num = 1
        result = MySyntax.addToEach(list1, num)
        assert result == [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

    def test_fillList(self):
        size = 10
        result = MySyntax.fillList(size)
        assert result == [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    def test_reduce(self):
        list1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        result = MySyntax.reduce(list1)
        assert result == 55

    def test_toUpperArray(self):
        list1 = ["Canada", "alberta", "calgary"]  # setup
        result = MySyntax.toUpperCaseArray(list1)  # action
        assert result <= ["CANADA", "ALBERTA", "CALGARY"]

    def test_createDictionary(self):
        F150 = {"brand": "Ford", "model": "F150", "year": 1990}
        result = MySyntax.createCar("Ford", "F150", 1990)
        assert result.items() <= F150.items()

    def test_keyValueLookup(self):
        F150 = {"brand": "Ford", "model": "F150", "year": 1990}
        result = MySyntax.keyValueLookUp(F150, "model")
        test = {"model": "F150"}
        assert result.items() <= test.items()


if __name__ == '__main__':
    pytest.main()
