const students = [
    
    { id :13,  name : 'samiul sany' },
    { id :14, name : 'samiul sam' },
    { id :15,  name : 'samiul robert' },
    { id :16,  name : 'samiul hasu' },
];

const studentsList = students.map ( s => s.name )

const ids = students.map( s => s.id);
// const biggerId = students.filter( s => s.id >14)
const biggerId = students.find( s => s.id >14)
console.log(biggerId);