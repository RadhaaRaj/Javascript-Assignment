Que9:const gimli ={ name: "Gimli",race: "dwarf",weapon: "axe",greet: function() 
        { return `Hi, my name is ${this.name}!`; }, };

How to access and print greet function from the above object code?




Ans9: In order to retrieve an object method, I would call a regular function, just attached to the object variable.

const gimli ={ name: "Gimli",race: "dwarf",weapon: "axe",greet: function() 
        { return `Hi, my name is ${this.name}!`; }, };

gimli.greet();

Output
"Hi, my name is Gimli!";