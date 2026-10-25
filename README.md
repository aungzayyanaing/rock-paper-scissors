# Rock Paper Scissors (JavaScript)

A polished, playable Rock Paper Scissors game in plain HTML, CSS and
JavaScript. No build step, no packages.

## Play

Open `index.html` in any browser, or serve the folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## How it plays

- Best of 5 rounds, with a live scoreboard and round history.
- Both hands shake three times, then reveal at the same moment,
  just like a real shoot.
- The winning hand glows gold. The match result shows after round 5.
- **Play again** resets the score, round and history.

## Files

- `index.html` — structure
- `style.css` — dark arena styling, shake and glow animations
- `script.js` — game logic, random computer choice, scoring
