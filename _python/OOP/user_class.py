class User:
    def __init__ (self, name, email):
        self.name = name
        self.email = email
        self.account_balance = 0
    
    def make_deposit(self, amount):
        self.account_balance += amount
        return self

    def make_withdrawal(self, amount):
        self.account_balance -= amount
        return self

    def display_user_balance(self):
        print(f"User: {self.name}, Balance: ${self.account_balance}")
        return self

    def transfer_money(self, amount, receiver):
        self.account_balance -= amount
        receiver.account_balance += amount
        return self


jon = User("Jonathan Bresolin", "jonbres2@gmail.com")
lindsay = User("Lindsay Smith", "lsmith3@gmail.com")
chelsea = User("Chelsea Jones", "cjones9@gmail.com")

jon.make_deposit(50).make_deposit(25).make_deposit(100).display_user_balance()

lindsay.make_deposit(200).make_deposit(300).make_withdrawal(100).make_withdrawal(25).display_user_balance()

chelsea.make_deposit(500).make_withdrawal(300).make_withdrawal(100).make_withdrawal(150).display_user_balance()

jon.transfer_money(50, chelsea).display_user_balance()
chelsea.display_user_balance()