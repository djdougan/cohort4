from student import StudentDB

import pytest


@pytest.mark.parametrize('id, name, result', [
    (1, "Scott", "pass"),
    (2, "Mark", "fail")
])
def test_mark_data(id, name, result):
    db = StudentDB()
    db.connect('data.json')
    mark_data = db.get_data(name)
    assert mark_data['id'] == id
    assert mark_data['name'] == name
    assert mark_data['result'] == result
