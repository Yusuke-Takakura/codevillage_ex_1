// const items = [
//     { n: 100 },
//     { a: { b: ['abc'] }, c: { '100': 'foobar' } },
// ]

// const json = JSON.stringify(items);
// console.log(json);

// const gorilla = JSON.parse(json);
// console.log(gorilla);

// const total = 2;
// const items = [
//     { id: 123, name: 'Item 123' },
//     { id: 456, name: 'Item 456' },
//     { next: { id: 789, name: 'Item 789' } },
// ];

const json = `
{
    "total":2,
    "items":[{"name":"Item123","id":123},{"name":"Item456","id":456}],
    "next":{"id":789}
}
`;
const obj = JSON.parse(json);
console.log(obj);