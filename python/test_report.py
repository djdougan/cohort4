import pytest
import os.path
from os import path
from report import Report_Genterator


file_name = os.getcwd() + '\\data\\Census_by_Community_2018.csv'
output_file = os.getcwd() + '\\data\\report.txt'

rg = None


def setup_module(module):
    global rg
    rg = Report_Genterator(file_name, output_file)


def teardown_module(module):
    rg.destruct()


def test_generate_output():
    rg.generate_output()
    assert path.exists(rg.output_file) == True


@pytest.mark.parametrize('name, res_type, count, result', [
    ("Residential", "CLASS", 100000,
     "The RESIDENTIAL CLASS has a total count of 100000"),
    ("Industrial", "CLASS", 110000,
     "The INDUSTRIAL CLASS has a total count of 110000"),
    ("Major Park", "CLASS", 80,
     "The MAJOR PARK CLASS has a total count of 80"),
    ("NORTHEAST", "SECTOR", 102000,
     "The NORTHEAST SECTOR has a total count of 102000"),
])
def test_format_output(name, res_type, count, result):
    assert rg.format_output(name, res_type, count) == result
