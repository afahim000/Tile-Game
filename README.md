Tile Game

A browser-based 2D tile game prototype built with React and PixiJS. Explore a
pixel-art map with an animated character while the camera follows movement
beyond the center play area.

## Features

- Four-direction player movement
- Directional walking and idle animations
- Smooth camera panning across a larger map
- Responsive game canvas
- Keyboard input with separate key-down and key-up states
- Hardware-accelerated 2D rendering with PixiJS

## Controls

| Key | Action |
| --- | --- |
| <kbd>↑</kbd> | Move up |
| <kbd>↓</kbd> | Move down |
| <kbd>←</kbd> | Move left |
| <kbd>→</kbd> | Move right |

## Tech Stack

- [React](https://react.dev/)
- [PixiJS](https://pixijs.com/)
- [@pixi/react](https://github.com/pixijs/pixi-react)
- [Vite](https://vite.dev/)

## Getting Started

### Prerequisites

Install [Node.js](https://nodejs.org/) 20.19+ or 22.12+ and npm.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/afahim000/Tile-Game.git
   cd Tile-Game/my-app
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the local URL printed in the terminal, usually
   `http://localhost:5173`.

## Available Scripts

Run these commands from the `my-app` directory:

```bash
npm run dev      # Start the Vite development server
npm run build    # Create a production build
npm run preview  # Preview the production build locally
npm run lint     # Check the source code with ESLint
```

## Project Structure

```text
Tile-Game/
├── my-app/
│   ├── public/
│   │   ├── map (1).png     # Current game map
│   │   ├── down1-4.png     # Down-facing animation frames
│   │   ├── left1-4.png     # Left-facing animation frames
│   │   ├── right1-4.png    # Right-facing animation frames
│   │   └── up1-4.png       # Up-facing animation frames
│   ├── src/
│   │   ├── main.jsx        # React entry point
│   │   ├── test.jsx        # Current game and camera logic
│   │   └── index.css       # Global page and canvas styles
│   └── package.json
└── README.md
```

## How It Works

The game loads the map and character frames through PixiJS. A ticker updates
the character position while an arrow key is held. When the character moves
past a central bounding area, the map container shifts in the opposite
direction to create a following-camera effect.

## Current Status

This project is an early prototype. Character movement, animation, camera
panning, and basic resizing are implemented. Collision detection, map
boundaries, gameplay objectives, and mobile controls are possible next steps.

## Roadmap

- Add collision detection for walls and obstacles
- Keep the player inside the map boundaries
- Add interactable objects, NPCs, or collectibles
- Add a start screen and pause menu
- Support touch controls
- Add sound effects and music
- Deploy a playable web demo

## Contributing

Suggestions and contributions are welcome. Fork the repository, create a
feature branch, and open a pull request describing your changes.

## Author

Created by [afahim000](https://github.com/afahim000).
