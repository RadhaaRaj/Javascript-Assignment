Que8: const name = { firstName: 'Philip',lastName: 'Fry' };
const details = {job: 'Delivery Boy',employer: 'Planet Express'};
How to copy values from one object to another in above mentioned example , merge and
print them?

Ans8:
const name = { firstName: 'Philip',lastName: 'Fry' };
const details = {job: 'Delivery Boy',employer: 'Planet Express'};

const nameDetails = Object.assign(name,details);

console.log(name);
// expected output: Object { firstName: 'Philip',lastName: 'Fry' };

console.log(nameDetails);
// expected output: Object { firstName: 'Philip',lastName: 'Fry',job: 'Delivery Boy',employer: 'Planet Express'};
