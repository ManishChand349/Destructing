function extractNameAndStreet(person) {
  const { name, address: { street } } = person;
  return { name, street };
}
const person = {
  name: 'Manish Chand',
  age: 21,
  address: {
    street: 'B8, Block E, Industrail Area',
    city: 'New Delhi',
    state: 'Delhi',
  }
};

const { name, street } = extractNameAndStreet(person);
console.log(name); 
console.log(street); 
