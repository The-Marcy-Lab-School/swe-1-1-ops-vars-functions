def debug_func():
    global time
    time = "today"
    print("Hello " + their_name + ", are you feeling " + mood + " " + time + "?")
    their_name = "Zo"
    mood = "happy"

    print("Oh no, I'm sorry you're feeling " + mood + " " + time + ".")
    mood = "sad"
