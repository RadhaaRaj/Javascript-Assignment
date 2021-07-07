Que10:Consider below as an example of constructor function where we want name and level to be
referred to a function itself, is below example correct or not? Please explain?

function Hero(name, level)
{
name = name;
level = level;
}


Ans10:its Incorrect because 

In JavaScript, the thing called this is the object that "owns" the code.

The value of this, when used in an object, is the object itself.

In a constructor function this does not have a value. It is a substitute for the new object. The value of this will become the new object when a new object is created.

correct one:

function Hero(name, level)
{
this.name = name;
this.level = level;
}


