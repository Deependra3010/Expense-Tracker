export const categories = [
    'Food & Drinks',
    'Shopping',
    'Housing',
    'Transportation',
    'Vehicle',
    'Life & Entertainment',
    'Communication & PC',
    'Financial Expense',
    'Investments',
    'Income',
    'Others',
];

export const paymentType = ['UPI', 'Cash', 'Debit Card', 'Credit Card'];

export const paymentStatus = ['Cleared', 'Uncleared'];

export function getDate() {
    const curr = new Date();
    curr.setDate(curr.getDate() + 3);
    const date = curr.toISOString().substring(0, 10);
    return date;
}

export function dateToDateString(date) {
    return date.toISOString().substring(0, 10);
}

export function getTime() {
    const curr = new Date();
    const time = curr.toISOString().slice(11, 16);
    return time;
}

export function timeToTimeString(time) {
    const hours = time.slice(0, 2);
    const minutes = time.slice(3, 5);
    return `${hours}:${minutes} ${hours > 12 ? 'pm' : 'am'}`;
}
