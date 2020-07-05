import temp
import pytest


@pytest.mark.parametrize('x, y, result',
                         [
                             (7, 3, 10),
                             ("Hello", " World", "Hello World"),
                             ("Hello", " World", "Hello World"),
                             (10.5, 25.5, 36)
                         ]
                         )
def test_add_param(x, y, result):
    assert temp.add(x, y) == result
