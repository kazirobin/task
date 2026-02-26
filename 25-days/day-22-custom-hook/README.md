### Day 22 – Custom Hook
Create: useLocalStorage()
Refactor app to use it.
**Commit**
feat: add custom hook useLocalStorage
Step-by-step explanation:
1. function useLocalStorage(key, initialValue) { const [value, setValue] = useState(() => { const stored = localStorage.getItem(key); return stored ? JSON.parse(stored) : initialValue; }); useEffect(() => { localStorage.setItem(key, JSON.stringify(value)); }, [value]); return [value, setValue]; }
2. Replace useState for tasks with useLocalStorage('tasks', []).
3. Refactor the app.
4. Commit your code.