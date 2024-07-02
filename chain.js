// data access
const data = [{id:1, name: 'abul', address: 'kochu khet'}];

console.log(data[0].address);

const products = {
    count: 5000,
    data: [
        {id: 1, name: 'Lenovo laptop', price: 6500},
        {id: 2, name: 'MacBook', price: 165000},
    ]
}
// find the second product price
/**
 * console.log(products);
 * Output: {
  count: 5000,
  data: [
    { id: 1, name: 'Lenovo laptop', price: 6500 },
    { id: 2, name: 'MacBook', price: 165000 }
  ]
}
 * console.log(products.data);
 * Output:  data: [
    { id: 1, name: 'Lenovo laptop', price: 6500 },
    { id: 2, name: 'MacBook', price: 165000 }
  ] 
 * console.log(products.data[1]);
  Output: { id: 2, name: 'MacBook', price: 165000 }
 * console.log(products.data[1].price);
 * Output: 165000
 */
console.log(products.data[1].price);

const user = {
    id: 5001,
    name: 'Shoriful Raj',
    address: {
        street: {
            first: '54/1 uttor side',
            second: 'poribag er goli',
            third: 'no dorai'
        },
        city: 'Dhaka'
    }
}
// console.log(user)
// console.log(user.address)
// console.log(user.address.street)
console.log(user.address.street.second)