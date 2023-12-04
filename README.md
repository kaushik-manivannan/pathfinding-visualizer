# Pathfinding Visualizer

## Table of Contents
- [Introduction](#introduction)
- [Screenshot](#screenshot)
- [Supported Algorithms](#supported-algorithms)
  - [Weighted Algorithms](#weighted-algorithms)
  - [Unweighted Algorithms](#unweighted-algorithms)
- [Maze Generation](#maze-generation)
- [Express Server](#express-server)
  - [Opening the Project Locally](#opening-the-project-locally)
- [Usage](#usage)
- [Contribution](#contribution)
- [Credits](#credits)
- [License](#license)

## Introduction
Pathfinding Visualizer is an interactive tool designed to showcase various pathfinding algorithms in action. Explore and understand the functionalities of different algorithms by visualizing their operations through this user-friendly web application.

## Screenshot
![Screenshot](https://github.com/kaushik-manivannan/pathfinding-visualizer/assets/144855772/5243a496-ae6b-4f05-a653-07f546430ecf)

## Supported Algorithms

### Weighted Algorithms
- **Djikstra's Algorithm:** Guarantees the shortest path.
- **A\* Search:** Utilizes heuristics for faster shortest path identification.
- **Greedy Best-first Search:** Heuristic-heavy, not guaranteed shortest path.
- **Swarm Algorithm:** A blend of Dijkstra's and A*; non-guaranteed shortest path.
- **Convergent Swarm Algorithm:** Faster version of Swarm; non-guaranteed shortest path.
- **Bidirectional Swarm Algorithm:** Swarm from both sides; non-guaranteed shortest path.

### Unweighted Algorithms
- **Breath-first Search:** Guarantees shortest path.
- **Depth-first Search:** Inefficient for pathfinding, doesn't guarantee shortest path.

## Maze Generation
The application includes a **Recursive Division** Maze Generation algorithm to create mazes for pathfinding simulations.

## Express Server

This project incorporates an Express server to manage backend operations and serve the application.

### Opening the Project Locally

To view the project locally:

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install`.
4. Open the `index.html` file in your browser.

## Usage
1. Select an algorithm.
2. Create obstacles or mazes.
3. Visualize pathfinding in action.

## Contribution
Contributions are welcome! Fork the repository, make changes, and create a pull request. 

## Credits
- Clement Mihailescu

## License
This project is licensed under the [MIT License](link-to-your-license-file).

Feel free to explore, experiment, and contribute to this visualization tool!
