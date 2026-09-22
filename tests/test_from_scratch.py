import pytest
from from_scratch import (
    calculate_area,
    convert_to_fahrenheit,
    create_greeting,
    format_price,
    get_initials,
    get_larger,
    is_even,
    is_valid_age,
)

TEST_SUITE_NAME = "From Scratch Tests"


def test_calculate_area():
    """calculate_area - calculates rectangle area correctly"""
    assert calculate_area(5, 3) == 15
    assert calculate_area(10, 7) == 70
    assert calculate_area(2, 8) == 16
    assert calculate_area(0, 5) == 0


def test_is_even():
    """is_even - returns True for even numbers, False for odd"""
    assert is_even(2) is True
    assert is_even(4) is True
    assert is_even(6) is True
    assert is_even(0) is True
    assert is_even(1) is False
    assert is_even(3) is False
    assert is_even(5) is False
    assert is_even(-2) is True
    assert is_even(-1) is False


def test_convert_to_fahrenheit():
    """convert_to_fahrenheit - converts celsius to fahrenheit correctly"""
    assert convert_to_fahrenheit(0) == 32
    assert convert_to_fahrenheit(100) == 212
    assert convert_to_fahrenheit(37) == pytest.approx(98.6, abs=0.1)
    assert convert_to_fahrenheit(-40) == -40
    assert convert_to_fahrenheit(25) == 77


def test_create_greeting():
    """create_greeting - creates proper greeting with name"""
    assert create_greeting("Alice") == "Hello, Alice!"
    assert create_greeting("Bob") == "Hello, Bob!"
    assert create_greeting("") == "Hello, !"
    assert create_greeting("John Doe") == "Hello, John Doe!"


def test_get_initials():
    """get_initials - extracts initials from first and last name"""
    assert get_initials("John", "Doe") == "JD"
    assert get_initials("Mary", "Jane") == "MJ"
    assert get_initials("A", "B") == "AB"
    assert get_initials("Xavier", "Yamamoto") == "XY"


def test_format_price():
    """format_price - formats number as price string"""
    assert format_price(5) == "$5.00"
    assert format_price(10) == "$10.00"
    assert format_price(0) == "$0.00"
    assert format_price(25) == "$25.00"
    assert format_price(100) == "$100.00"


def test_get_larger():
    """get_larger - returns the larger of two numbers"""
    assert get_larger(5, 3) == 5
    assert get_larger(3, 5) == 5
    assert get_larger(10, 10) == 10
    assert get_larger(-5, -3) == -3


def test_is_valid_age():
    """is_valid_age - returns True for valid ages, False for invalid"""
    assert is_valid_age(0) is True
    assert is_valid_age(25) is True
    assert is_valid_age(120) is True
    assert is_valid_age(-1) is False
    assert is_valid_age(121) is False
