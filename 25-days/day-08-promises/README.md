### Day 8 – Promises
Create fake API using new Promise()
- Make a function getPosts()
- It should wait 1 second and then either:
- Return posts (success)
- Return an error (failure)
- Use .then() to show posts
- Use .catch() to show error
**Commit**
feat: practice promises with fake API
Step-by-step explanation:
1. Create a Promise: new Promise((resolve, reject) => {}).
2. Use setTimeout to simulate delay.
3. Resolve with data or reject with error randomly.
4. Call getPosts().then(data => console.log(data)).catch(err => console.log(err)).
5. Implement and test.
6. Commit your code.