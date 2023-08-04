import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Initial balance is set to 0
  balance : 0,
  // Initial transactions array is empty
  transactions : []
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit: (state, action) => {
      const { amount } = action.payload; // Get the deposit amount from the action payload
      state.balance += amount; // Increase the balance by the deposit amount
      state.transactions.push({
        // Add a new transaction object to the transactions array
        action: "Deposit", // Action type is "Deposit"
        amount, // Deposit amount
        balance: state.balance, // Updated balance after the deposit
      });
    },
    withdrawal: (state, action) => {
      const { amount } = action.payload;
      state.balance -= amount; 
      state.transactions.push({
        actions: "Withdrawal",
        amount: { amount },
        balance: state.balance,
         // ***TODO***
      });
    },
    transfer: (state, action) => {
      const { name, amount } = action.payload; // Get the recipient name and transfer amount from the action payload
      // ***TODO***
      // Decrease the balance by the transfer amount
      state.balance -= amount;
      state.transactions.push({
        actions: "Transfer to ${name}",
        amount: { amount },
        balance: state.balance,
        // ***TODO***
        // Add a new transaction object to the transactions array
         // Action type is "Transfer to [Recipient Name]"      
         // Transfer amount
         // Updated balance after the transfer
      });
    },
  },
});



// Exporting the deposit, withdrawal, and transfer actions from the accountSlice
export const { deposit, withdrawal, transfer } = accountSlice.actions;

// Exporting the accountSlice.reducer as the default export

export default accountSlice.reducer