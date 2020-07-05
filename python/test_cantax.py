
from cantax import TaxFunctions
import pytest


@pytest.mark.parametrize('income, result', [
    (1, 0.15),
    (2, 0.30),
    (48535, 7280.25),
    (99870, 17957.51),
])
def test_calculateTaxRate(income, result):
    assert TaxFunctions.calculateTaxRate(income) == result
