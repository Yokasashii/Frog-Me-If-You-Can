# Frog-Me-If-You-Can

Frog-Me-If-You-Can is a 2D browser dungeon crawler game made with HTML5 Canvas and vanilla JavaScript.
You explore dungeon-like maps, fight different enemy types, collect consumables, level up, and move to the next stage through the exit.

## Features

- Real-time movement and directional attacks
- Multiple enemy archetypes (runner, normal, fat, stopper)
- Inventory and consumables (chocolate, coffee, vitamin)
- Character progression (HP/MP growth, level, attack upgrades)
- Save slots with localStorage persistence
- Multiple UI canvases (title, world, stats, actions)

## How To Run

### Option 1: Open index.html directly

Open `index.html` in your browser.

### Option 2: Open with Live Server (from IDE)

In VS Code:

1. Right-click in the editor
2. Click **Open with Live Server**

### Option 3: Local server (optional)

If needed, you can still run a local HTTP server.

### Display Tip

To see the full interface on every screen size, adjust your browser zoom level.
If parts of the UI are cut off, zoom out until all canvases are visible.

## Game Flow

1. Open the main menu.
2. Select a save slot.
3. Enter the game map.
4. Fight enemies and gather resources.
5. Reach the exit to load a new map.

## Controls

- `W A S D`: Move
- `Shift + W/A/S/D`: Dash (costs MP)
- `Space`: Attack
- `E`: Interact (pick items / use exit)
- `1`: Use chocolate (heal)
- `2`: Use coffee (restore MP)
- `3`: Upgrade when enough vitamins are collected
- `4`: Save and return to menu

## Gameplay Elements

### Player Stats

- HP / Max HP
- MP / Max MP
- EL / Max EL
- Attack
- Level

### Inventory

- Chocolate: restores HP
- Coffee: restores MP
- Vitamin: used for level upgrades

### Enemies

- Enemies spawn with different stats and behaviors.
- Some enemies are faster, tankier, or positioned to block progression.

### Progression

- Upgrading increases core player attributes.
- Score increases based on enemy defeats and progression events.

### Save System

- 3 save slots are available.
- Active slot and player/world state are stored in localStorage.

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Canvas 2D API

## Authors

- Vincent Guerini
- Maxime Poujol