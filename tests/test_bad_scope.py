import inspect

from bad_scope import debug_func

TEST_SUITE_NAME = "Debug Tests"


def test_does_not_use_global():
    """does not reach outside the function with global"""
    source = inspect.getsource(debug_func)
    assert "global" not in source


def test_assigns_before_use():
    """assigns every name before reading it"""
    # Reading a local before assigning it raises UnboundLocalError.
    debug_func()


def test_uses_an_f_string():
    """uses an f-string instead of + concatenation"""
    source = inspect.getsource(debug_func)
    assert 'f"' in source or "f'" in source
    assert " + " not in source

    # don't just print the finished strings
    assert "Hello Zo, are you feeling happy today?" not in source
    assert "Oh no, I'm sorry you're feeling sad today." not in source


def test_prints_the_correct_output(capsys):
    """prints the correct output"""
    debug_func()
    lines = [line for line in capsys.readouterr().out.splitlines() if line.strip()]
    assert lines == [
        "Hello Zo, are you feeling happy today?",
        "Oh no, I'm sorry you're feeling sad today.",
    ]
