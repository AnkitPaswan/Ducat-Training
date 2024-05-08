//enum types

enum OrderStatus {
    pending = 100,
    delivered,
    canceled
}

console.log(OrderStatus);
console.log(OrderStatus[100]);
console.log(OrderStatus.pending);
