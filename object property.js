const students = [{
    id: 21,
    name: 'Omar'
}, {
    id: 31,
    name: 'Manat'
}, {
    id: 41,
    name: 'Mou'
}, {
    id: 71,
    name: 'Sale'
}];

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id > 40);
console.log(bigger);