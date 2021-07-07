Que6: const set = new Set(['Beethoven', 'Mozart', 'Chopin', 'Chopin'])
How to delete 'Beethoven' from set

Ans6: // Initialize a Set from an Array

const set = new Set(['Beethoven', 'Mozart', 'Chopin', 'Chopin'])
Set(3) {"Beethoven", "Mozart", "Chopin"}
const arr = [...set]
(3) ["Beethoven", "Mozart", "Chopin"]
set.delete('Beethoven') 