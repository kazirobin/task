### Day 24 – React Router
Add:
- Dashboard page
- Stats page
Stats page:
- Total tasks
- Completed tasks
- Percentage
**Commit**
feat: add React Router with Dashboard and Stats pages
Step-by-step explanation:
1. Install react-router-dom.
2. Import BrowserRouter, Routes, Route.
3. <BrowserRouter><Routes><Route path="/" element={<Dashboard />} /><Route path="/stats" element={<Stats />} /></Routes></BrowserRouter>
4. Dashboard: main app.
5. Stats: display totals, completed, percent (use context or props).
6. Add navigation links.
7. Commit your code.