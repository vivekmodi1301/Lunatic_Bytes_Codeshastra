import {dashboard, expenses, transactions, trend , chat, comment} from '../utils/Icons'

export const menuItems = [
    {
        id: 1,
        title: 'Dashboard',
        icon: dashboard,
        link: '/dashboard'
    },
    {
        id: 2,
        title: "Loan Management",
        icon: transactions,
        link: "/loan-management",
    },
    {
        id: 3,
        title: "Incomes",
        icon: trend,
        link: "/dashboard",
    },
    {
        id: 4,
        title: "Expenses",
        icon: expenses,
        link: "/dashboard",
    },
    {
        id: 7,
        title: "FAQs",
        icon: comment,
        link: "/chat",
    },
]