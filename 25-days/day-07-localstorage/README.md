### Day 7 – LocalStorage
Enhance counter:
- Persist count
- Reset storage
- Display saved value on reload
**Commit**
refactor: add localStorage persistence to counter
Step-by-step explanation:
1. Use localStorage.setItem('key', value) to save data.
2. Use localStorage.getItem('key') to retrieve.
3. Use localStorage.removeItem('key') to reset.
4. On page load, check and set count from storage.
5. Update storage on every count change.
6. Enhance the Day 6 counter app.
7. Commit your code.