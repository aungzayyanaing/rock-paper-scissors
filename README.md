# Rock Paper Scissors (JavaScript)

A single-player Rock Paper Scissors game in plain HTML, CSS, and JavaScript. You play against the computer in a best-of-5 match. No build step, no packages, no installation, and no server is required to play — just open the page in a browser.

## Play

Open `index.html` in any browser, or serve the folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## How it plays

- Click Rock (✊), Paper (✋), or Scissors (✌️). The computer picks one of the three at random.
- Rock beats Scissors, Paper beats Rock, and Scissors beats Paper. Matching hands are a draw.
- Best of 5 rounds, with a live scoreboard showing your score, the computer's score, and the current round (Round 1 / 5, and so on).
- Both hands shake three times, then reveal at the same moment, just like a real shoot. The choice buttons are disabled while the hands are shaking.
- The winning hand glows gold. The match result — win, lose, or tie overall — shows after round 5.
- Each round is added to a round history list, showing what you and the computer played and the result.
- **Play again** resets the score, round, and history.

## Scope

- Single player only: you against the computer. There is no two-player or online mode.
- Scores and round history are kept only while the page is open. Reloading the page, or starting a new match with **Play again**, clears them.

## Files

- `index.html` — page structure: scoreboard, hands, choice buttons, round history, and the Play again button
- `style.css` — dark arena styling, shake and glow animations
- `script.js` — game logic, random computer choice, scoring, and round history
- `LICENSE` — MIT License
