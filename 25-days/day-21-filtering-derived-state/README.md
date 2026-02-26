### Day 21 – Filtering + Derived State
- All / Completed / Pending
- Calculate completion %
**Commit**
feat: add task filtering and completion calculation
Step-by-step explanation:
1. [filter, setFilter] = useState('all');
2. Filtered tasks: based on filter, use .filter().
3. Derived: const completed = tasks.filter(t => t.isComplete).length; const percent = (completed / tasks.length) * 100;
4. Buttons to change filter.
5. Display percent.
6. Commit your code.