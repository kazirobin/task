### Day 11 – Advanced Array Practice
const users = [ { name: "Ayesha", age: 22, active: true }, { name: "Rahim", age: 30, active: false }, { name: "Karim", age: 25, active: true }, { name: "Fatima", age: 28, active: false }, ];
Given user dataset:
- Sort by age
- Filter active users
- Count totals using reduce
**Commit**
feat: practice advanced array methods
Step-by-step explanation:
1. Sort: users.sort((a, b) => a.age - b.age).
2. Filter: users.filter(user => user.active).
3. Reduce: users.reduce((total, user) => total + 1, 0) for count, or more complex.
4. Apply to the given array.
5. Output results.
6. Commit your code.