QUE3:What will be the output of the following code?
var Employee =
{
company: 'Rohit'
}
var Emp1 = Object.create(employee);
delete Emp1.company Console.log(emp1.company);





Ans3 : Rohit.

The code above will output Rohit as output. Here emp1 object got company as prototype property. delete operator doesn't delete prototype property.

emp1 object doesn't have company as its own property.