import temp
import pytest
import sys

# pytest test_temp.py -v
# pytest test_temp.py::test_add ## runs test test_add only
# pytest test_temp.py::test_add -v ## runs test test_add only verbose (more info)
# pytest test_temp.py -v -k "add"  ## runs test with keyword add
# pytest test_temp.py -v -k "add or string" ## runs test on test with words add or string
# pytest test_temp.py -v -k "add and string" ## runs tests with words add and string
# pytest test_temp.py -v -m string
# pytest test_temp.py -v -x ## exits on first error
# pytest test_temp.py -v --maxfail=2 ## exits on first error
# pytest test_temp.py -v -s ## prints output from print statement
# pytest test_temp.py -v -q ## quite mode, no output is printed
# pytest test_temp.py -q ## quite mode, no output is printed


@pytest.mark.number
def test_add():
    assert temp.add(7, 3) == 10
    assert temp.add(7) == 9
    assert temp.add(5) == 7
    print(temp.add(5), '---------------------------------------')


@pytest.mark.number
def test_product():
    assert temp.product(5, 5) == 25
    assert temp.product(5) == 10
    assert temp.product(7) == 14


@pytest.mark.skipif(sys.version_info < (3, 3), reason="do not run string add")
@pytest.mark.string
def test_add_strings():
    result = temp.add("Hello", " World")
    assert result == "Hello World"
    assert type(result) is str
    assert "Heldlo" not in result


@pytest.mark.string
def test_product_strings():
    assert temp.product('Hello ', 3) == "Hello Hello Hello "
    result = temp.product("Hello ")
    assert result == "Hello Hello "
    assert type(result) is str
    assert "Hello" in result
