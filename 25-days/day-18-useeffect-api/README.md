### Day 18 – useEffect + API
Fetch data from:
- JSONPlaceholder API
- Fetch posts
- Display them beautifully
- Add loading state
- Add error handling
- Make it interactive (bonus)
**Commit**
feat: fetch posts using useEffect with loading and error states
Step-by-step explanation:
1. Import useEffect, useState.
2. useEffect(() => { async function fetchData() { try { setLoading(true); const res = await fetch('https://jsonplaceholder.typicode.com/posts'); const data = await res.json(); setPosts(data); } catch (err) { setError(err); } finally { setLoading(false); } } fetchData(); }, []);
3. Render posts list.
4. Add loading and error states from Day 17.
5. Bonus: click to view details.
6. Commit your code.