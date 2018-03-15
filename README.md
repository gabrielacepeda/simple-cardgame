# Harry Potter Memory Card Game
This memory game allows a user to select two cards and check if they are a match until all cards are matched.

![memory game preview](https://github.com/gabrielacepeda/simple-cardgame/blob/master/cardgamephoto.png)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, jQuery

For this project I used HTML, CSS, and jQuery. I created a simple game where a user can select two cards and check if they match. If they match, those cards clear from the pool. If not, they flip back over. The game is done when all cards are matched and flipped over and a win message appears. I made an array for the cards and created a checkMatch function that if the cards selected were equal in value, then they matched, if they weren't equal, they would not match. 


## Optimizations
This game works, except for the shuffle button. On click, it will randomize the cards in the console, but it won't in the browser. I'm currently working on troubleshooting and refactoring this.

## Lessons Learned:
  I learned there are different and more effective ways of creating this app. I chose to make an array for the cards, but I could've chosen not to and ended up with the same results and drier code.

