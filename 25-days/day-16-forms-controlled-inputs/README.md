### Day 16 – Forms & Controlled Inputs
Build:
- Login form
- Validation
- Show errors
Understand:
- Controlled components
**Commit**
feat: build controlled form with validation
Step-by-step explanation:
1. Use state for input values: [username, setUsername] = useState('').
2. <input value={username} onChange={e => setUsername(e.target.value)} />.
3. On submit, validate (e.g., if empty, set error state).
4. Display error messages conditionally.
5. Prevent default form submit.
6. Commit your code.