### Day 5 – ES6+ Modern JS
**Concepts**
- Spread operator
- Rest operator
- Template literals
- Default parameters
**Task**
Create a Function: createUser(name, age = 18, ...skills)
Returns an object with:
- name → from argument
- age → default 18 if not provided
- skills → array of skills using rest operator
- bio → string like "X is 22 years old and knows React, JS" using template literals
Use spread operator if needed to return object.
Example: createUser("X", 22, "React", "JavaScript") → { name: "X", age: 22, skills: ["React", "JavaScript"], bio: "X is 22 years old and knows React, JavaScript" }
**Commit**
feat: built a profile generator
Step-by-step explanation:
1. Use spread (...) to copy arrays/objects.
2. Use rest (...) in parameters to collect arguments into an array.
3. Use template literals for string interpolation (`${var}`).
4. Set default parameters in function definition.
5. Implement the createUser function as specified.
6. Test with the example.
7. Commit your code.