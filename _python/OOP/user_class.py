class User:
    def __init__ (self, name, email):
        self.name = name
        self.email = email
        self.account_balance = 0
    
    def make_deposit(self, amount):
        self.account_balance += amount

    def make_withdrawal(self, amount):
        self.account_balance -= amount

    def display_user_balance(self):
        print(f"User: {self.name}, Balance: ${self.account_balance}")

    def transfer_money(self, amount, receiver):
        self.account_balance -= amount
        receiver.account_balance += amount


jon = User("Jonathan Bresolin", "jonbres2@gmail.com")
lindsay = User("Lindsay Smith", "lsmith3@gmail.com")
chelsea = User("Chelsea Jones", "cjones9@gmail.com")

jon.make_deposit(50)
jon.make_deposit(25)
jon.make_deposit(100)
jon.display_user_balance()

lindsay.make_deposit(200)
lindsay.make_deposit(300)
lindsay.make_withdrawal(100)
lindsay.make_withdrawal(25)
lindsay.display_user_balance()

chelsea.make_deposit(500)
chelsea.make_withdrawal(300)
chelsea.make_withdrawal(100)
chelsea.make_withdrawal(150)
chelsea.display_user_balance()

jon.transfer_money(50, chelsea)
jon.display_user_balance()
chelsea.display_user_balance()