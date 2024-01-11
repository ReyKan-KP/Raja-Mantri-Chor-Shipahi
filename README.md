# RMCS Game

RMCS (Raja Mantri Chor Shipahi) is a simple browser-based game where players take on different roles and try to catch the Chor (thief) while accumulating points based on their roles and actions. This README.md file provides information on how to play the game and understand the code structure.

## How to Play

1. Open the `index.html` file in a web browser.
2. Click on the "Start Game" button to initiate the game.
3. Each player will be assigned a role randomly - Raja, Mantri, Chor, or Shipahi.
4. Players can make guesses about who the Chor is.
5. The game will reveal whether the guess is correct or not and update the points accordingly.
6. Players can also view the points by clicking the "Show Points" button.

## Game Structure

### HTML Structure

- **Head Section:** Contains metadata, including title, character set, viewport, and font styles.
- **Body Section:**
  - Header: Displays the game title.
  - Container: Contains buttons to start a new game and display points.
  - Moves: Displays the roles (Raja, Mantri, Chor, Shipahi) and their points.
  - Result Boxes: Display results of the game and user guesses.
  - Point Box: Displays points earned by each player.
  - JavaScript and CSS files are linked at the end.

### CSS

The game styling is defined in the `RMCS.css` file. It includes styles for buttons, boxes, and layout.

### JavaScript (RMCS.js)

The game logic is implemented in JavaScript. Key functions include:

- `shuffle`: Shuffles an array randomly.
- `startGame`: Initiates the game by hiding the start button, revealing results, and shuffling roles.
- `thiefIsP2`, `thiefIsP3`, `thiefIsP4`: Handles user guesses about the Chor and updates the result.
- `userMove`: Assigns roles to each player randomly and displays the new game button.
- `newGame`: Resets the game by hiding/showing appropriate elements and clearing previous results.
- `clear`: Clears the displayed points and results.
- `pointAllocation`: Allocates points based on player roles and actions.
- `catchThief`: Determines if the Chor is caught by a player and updates the caught/not caught status.
- `showPtsBtn`: Displays the points box and triggers point allocation.
- `isToBack`: Hides the points box and shows the "Show Points" button.

## Additional Information

- The game uses simple logic to allocate points based on roles and actions.
- Players can make guesses about the Chor, and the game will reveal whether the guess is correct or not.
- The points are displayed in a box, and players can view them by clicking the "Show Points" button.

Feel free to customize and enhance the game based on your preferences or requirements.
