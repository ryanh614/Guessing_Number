randNum = random.randint(1, 20)
print("I'm thinking of a number between 1 and 20.")
guess = int(input("Take a guess: "))
while guess != randNum:
    if guess > randNum:
        print("Too high, guess lower.")
    else:
        print("Too low, guess higher.")
    guess = int(input("Take a guess: "))