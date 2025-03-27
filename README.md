# Knight's Travails

## 📌 About

Knight's Travails is a small JavaScript project that finds the shortest path a knight can take on a standard 8×8 chessboard using **Breadth-First Search (BFS)**. This project is part of **The Odin Project** curriculum.

## 🚀 How It Works
- The user provides a **starting position** and a **target position** (e.g., `[0,0]` to `[3,3]`).
- The program uses **BFS** to explore all possible moves level by level.
- Once the shortest path is found, it is returned as an array of moves.

## 🛠️ Technologies Used
- JavaScript (ES6)

## 🏗️ How to Use
1. Clone this repository:
   ```sh
   git clone https://github.com/AhmedMand0ur/knights-travails.git
   cd knights-travails
   ```
2. Open the `index.js` file in a code editor.
3. Run the script using main.js:
   ```sh
   node main.js
   ```
4. Example usage inside the script:
   ```js
   console.log(knightMoves([0, 0], [3, 3]));
   ```
   **Output:**
   ```
   You made it in 2 moves! Here's your path:
   [[0,0], [2,1], [3,3]]
   ```

## 📝 Features
✅ Finds the shortest path for a knight's movement.  
✅ Uses **BFS** for optimal efficiency.  
✅ Prevents revisiting already explored positions.  
✅ Handles all valid inputs on an 8×8 board.  

## 📌 Future Improvements
🔹 Add a visual representation of the chessboard and path.  
🔹 Allow user interaction via a web UI.  

## 🎯 Credits
This project was built as part of [The Odin Project](https://www.theodinproject.com/) curriculum. 🎓🚀

---
Happy coding! ✨♞

