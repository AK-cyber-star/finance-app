export type ExpensesByCategory = {
    salaries: number;
    supplies: number;
    services: number;
};

export type MonthlyData = {
    id: string;
    month: string;
    revenue: number;
    expenses: number;
    operationalExpenses: number;
    nonOperationalExpenses: number;
};

export type Day = {
    id: string;
    month: string;
    revenue: number;
    expenses: number;
};

export type GetKpisResponse = {
    id: string;
    _id: string;
    __v: string;
    totalProfit: number;
    totalRevenue: number;
    totalExpenses: number;

    expensesByCategory: ExpensesByCategory;
    monthlyData: Array<MonthlyData>;
    dailyData: Array<Day>;
    createdAt: string;
    updatedAt: string;
};

export type GetProductsResponse = {
    id: string;
    _id: string;
    __v: string;
    price: number,
    expense: number;
    transactions: Array<string>;
    createdAt: string;
    updatedAt: string;
};

export type GetTransactionsResponse = {
    id: string;
    _id: string;
    __v: string;
    buyer: string;
    amount: number;
    productIds: Array<string>;
    createdAt: string;
    updatedAt: string;
};