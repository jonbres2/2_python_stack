class BankAccount:
    def __init__ (self, int_rate, balance = 0):
        self.int_rate = int_rate
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        return self

    def withdraw(self, amount):
        if amount > self.balance:
            print("Insufficient funds: Charging a $5 fee")
            self.balance -= 5
            return self
        else:
            self.balance -= amount
            return self

    def display_account_info(self):
        print(f"Balance: ${self.balance}")
        return self

    def yield_interest(self):
        if self.balance >= 0:
            self.balance += self.balance * (self.int_rate + 1)
            return self
        else:
            return self

account1 = BankAccount(0.02, 4000)
account2 = BankAccount(0.03, 300)

account1.deposit(200).deposit(30).deposit(92).yield_interest().display_account_info()
account2.deposit(20).deposit(15).withdraw(100).withdraw(150).withdraw(50).withdraw(100).display_account_info()