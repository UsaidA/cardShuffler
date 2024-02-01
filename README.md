# Gloabl-view shuffling game



## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)


## Introduction

This project is a simple game, where a user can decide how many players there are and how many cards each player should get from a standard deck of cards. The game delegates each player with 
a space, and subseuqnetly deals cards. You can peek at the cards before they're dealt if you wish to cheat. You can shuffle the hand if you wish to keep the game fair. You can deal cards until
the allocated number of cards has been given. By then your hands are calculated and a winner is decided, or an 𝑥 number of players who drew. (𝑥 can be ≥ 2 or ≤ 16 ).


## Features

List the key features or functionalities of the project.

- Allows a user to input a number of players they wish to play with.
- Allows the allocation of a x number of cards (𝑥 can be ≥ 0 or ≤ (52/number of players))
- The navbar has a button for shuffling the new deck of cards (arranged in the order of a standard playing deck initially)
- The navbar has a button which allows users to peek into the deck, to see the current arrangement or the changes thereof after a shuffle.
- The navbar has a deal button, which deals a singular card to all players, the maxmum number of deals is allocated by the user in the "allocation of number of cards" section prior.
- The navbar renders a conditional "End" button if 𝑥 number of cards has been dealt. The end button gives either a victory animation, or a draw animation. Saying either the victor or the list of people who drew.


## Getting Started

### Prerequistes  
Ensure when you're starting the game, once you click on the input field for the number of players, do not click away unless you're certain with the number shown in the field.
This will unlock the 'number of cards per player' field. Which will be enabled temporary, once you click away. The number of cards and players is final. 
If you wish to reset the numbers, refresh the page; restart the game.

Provide instructions for setting up and running the project locally. Include any prerequisites, installation steps, and usage examples.

### Installation

Once you've downloaded the files, open up a terminal in the root directory of the project. Which should be the one where package.json and similar config files are placed.
Run the following command
```Terminal
npm install
```
After your installation is complete run the following command
```Terminal
npm run start
```
If the prompt requires you to pick a different port, input yes.

If react-transition-group prompts an error, Run the following command:
```Terminal
 npm i --save-dev @types/react-transition-group
```
##Snapshot tests

To run all test, deploy the following command:
```Terminal
 npm run test
```

If an error is received similar to "unrecognised token ':'", implying the lack of typescript recognition:
Run the following:
```Terminal
 npm i --save-dev @babel/preset-react 
```
