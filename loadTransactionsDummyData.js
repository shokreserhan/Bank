const mongoose = require('mongoose')
const Transaction = require('./server/model/transactionSchema')
mongoose.connect('mongodb://localhost/Bank', { useNewUrlParser: true })


const transactions = [
    { amount: 3200, vendor: "Elevation", category: "Salary" },
    { amount: -7, vendor: "Runescape", category: "Entertainment" },
    { amount: -20, vendor: "Subway", category: "Food" },
    { amount: -98, vendor: "La Baguetterie", category: "Food" },
]

function loadTransactions(transactions) {
    transactions.map(({ amount, category, vendor }) => {
        new Transaction({ amount, category, vendor }).save()
    })
}

loadTransactions(transactions);