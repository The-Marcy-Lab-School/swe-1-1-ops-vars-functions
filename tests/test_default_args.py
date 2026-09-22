from default_args import greet

TEST_SUITE_NAME = "Default Args Tests"


def test_greet_uses_defaults():
    """greet - works with one argument, and lets any of them be overridden"""
    # only name is required
    assert greet("Alice") == "Hello, Alice!"

    # positionally
    assert greet("Bob", "Hi") == "Hi, Bob!"
    assert greet("Cleo", "Hey", "?") == "Hey, Cleo?"

    # by keyword, in any order
    assert greet("Dev", punctuation=".") == "Hello, Dev."
    assert greet(name="Eve", greeting="Yo") == "Yo, Eve!"
    assert greet(punctuation="!!", greeting="Welcome", name="Fin") == "Welcome, Fin!!"
