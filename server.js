# User information
user_info = {
    "name": "Maninder Singh",
    "email": "maninder0849.be21@chitkara.edu.in",
    "rollNumber": 2110990849,
    "phone": 9671504084,
}

# Function to create an investment account
def create_investment_account(create_url, user_data):
    response = requests.post(create_url, json=user_data)
    if response.ok:
        account_number = response.json().get("accountNumber")
        print("Investment account created successfully. Account number:", account_number)
        return account_number
    else:
        print("Failed to create investment account.")
        return None

# Function to get current stock price of a company
def get_current_stock_price(company_name):
    # Perform web scraping or use an API to get the current stock price
    # For demonstration purposes, I'm using a placeholder value
    return 6521.40  # Placeholder value

# Function to buy stocks in a company
def buy_stocks(buy_url, headers, data):
    response = requests.post(buy_url, headers=headers, json=data)
    if response.ok:
        print("Successfully bought stocks in", COMPANY_NAME)
    else:
        print("Failed to buy stocks.")

# Main function
def main():
    # Step 1: Create investment account
    account_number = create_investment_account(CREATE_ACCOUNT_URL, user_info)
    if not account_number:
        return

    # Step 2: Get current stock price
    current_price = get_current_stock_price(COMPANY_NAME)
    if not current_price:
        return

    # Step 3: Buy stocks
    headers = {
        "content-type": "application/json",
        "bfhl-auth": str(ROLL_NUMBER)
    }
    data = {
        "company": COMPANY_NAME,
        "currentPrice": current_price,
        "accountNumber": account_number,
        "githubRepoLink": GITHUB_REPO_LINK
    }
    buy_stocks(BUY_STOCKS_URL, headers, data)

if __name__ == "__main__":
    main()
