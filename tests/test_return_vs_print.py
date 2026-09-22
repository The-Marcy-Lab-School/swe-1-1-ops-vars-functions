from return_vs_print import add, multiply, power, subtract

TEST_SUITE_NAME = "Return vs Print Tests"


def test_each_function_returns_and_prints(capsys):
    """each function returns its result as well as printing it"""
    assert add(2, 3) == 5
    assert subtract(10, 4) == 6
    assert multiply(3, 5) == 15
    assert power(2, 8) == 256

    # the messages must still print, unchanged
    lines = [line for line in capsys.readouterr().out.splitlines() if line.strip()]
    assert lines == [
        "The sum of 2 and 3 is 5",
        "The difference between 10 and 4 is 6",
        "The product of 3 and 5 is 15",
        "2 to the power of 8 is 256",
    ]

    # a returned value can be used in another expression
    assert add(add(1, 2), 3) == 6
