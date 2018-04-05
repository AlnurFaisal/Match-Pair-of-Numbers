What was good:
- Overall, nice work! You solved many challenging problems to create a game that's usable and useful.


Suggestions for improvement:
- See inline comments in this commit
- Try to simplify your code. There are many places where you copy a data and use it to reassign it. That just makes things more confusing for yourself and harder to read. Always do the simplest thing.
- Before writing more code and adding more logic, refactor, reduce code, simplify code. This will make things easier for you.
- You should put `render()` as the first method in any React component (if there's a `constructor()` then `render()` should come immediately after `constructor()`)