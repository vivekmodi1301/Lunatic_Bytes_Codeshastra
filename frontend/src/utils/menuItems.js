import {dashboard, expenses, transactions, trend} from '../utils/Icons'

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
        id: 5,
        title: "Voice Assistance",
        icon: expenses,
        link: "/dashboard",
    },
    {
        id: 6,
        title: "Image to Text",
        icon: expenses,
        link: "/imagetotext",
    },
]