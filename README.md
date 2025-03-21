# Task Manager Kanban Board

A simple task management application using React, Redux Toolkit, and Drag & Drop functionality.

## Features
- Add, update, and delete tasks
- Drag and drop tasks between columns (TODO, DOING, DONE)
- Uses Redux Toolkit for state management
- Responsive UI

## Technologies Used
- React.js
- Redux Toolkit
- JavaScript (ES6+)
- CSS (for styling)
- Vite (for development)

## Folder Structure
```
├── src
│   ├── components
│   │   ├── TaskBoard.jsx
│   │   ├── TaskColumn.jsx
│   │   ├── TaskItem.jsx
│   │   ├── TaskInput.jsx
│   ├── constants
│   │   ├── appConstants.js
│   ├── redux
│   │   ├── store.js
│   │   ├── taskSlice.js
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
├── .gitignore
├── README.md
├── package.json
├── vite.config.js
```

## Installation & Setup
1. **Clone the repository**
   ```sh
   git clone https://github.com/yourusername/kanban-board.git
   cd kanban-board
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Run the development server**
   ```sh
   npm run dev
   ```

4. **Build for production**
   ```sh
   npm run build
   ```




