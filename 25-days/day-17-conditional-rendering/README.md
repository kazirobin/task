### Day 17 – Conditional Rendering
Practice:
- Loading spinner
- Empty state
- Error state
**Commit**
feat: add loading, empty, and error state handling
Step-by-step explanation:
1. Use state for loading, error, data.
2. {loading && <Spinner />}
3. {!loading && data.length === 0 && <EmptyState />}
4. {error && <ErrorMessage />}
5. Apply to a component, e.g., list renderer.
6. Commit your code.