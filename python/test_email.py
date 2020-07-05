import pytest
from funcs import email


class TestEmail():

    def test_email(self):
        first_name = "John"  # setup
        last_name = "Cook"
        result = email(first_name, last_name)  # action
        assert result == "john.cook@gmail.com"  # assert


if __name__ == '__main__':
    pytest.main()
