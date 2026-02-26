### Day 23 – Context API
Add:
- Dark / Light theme
- Wrap app with ThemeProvider
**Commit**
feat: implement context API with theme toggle
Step-by-step explanation:
1. Create ThemeContext = createContext();
2. ThemeProvider: [theme, setTheme] = useState('light'); provide value={{ theme, toggleTheme: () => setTheme(theme === 'light' ? 'dark' : 'light') }}.
3. Wrap <App /> with <ThemeProvider><ThemeContext.Provider value={...}>...</ThemeContext.Provider></ThemeProvider>.
4. Use useContext(ThemeContext) in components to access theme.
5. Apply classes based on theme.
6. Add toggle button.
7. Commit your code.