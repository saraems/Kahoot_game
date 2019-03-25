
## Kahoot! game | Eng | [GitHubPage](https://saraems.github.io/Kahoot_game/)
Project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), `gh-pages` & `node-sass`.

-----------------------------------
### Brief description
The simple browser based game points system that calculates the total points awarded to a player for a number of items they have collected in a game.

Individual letters of the alphabet are used to identify the items (A, B, C, and so on). 

Items are scored individually. Some items are worth more if collected in multiples: collect n of them,
and user’ll get y points. For example, item ‘A’ might be worth 50 points individually, but this
week we have a special bonus: collect three ‘A’s and they’ll be worth 200 points instead of 150.

This weeks rewards are:
<img width="229" alt="bonus" src="https://user-images.githubusercontent.com/43315389/54919569-6d5ec600-4f01-11e9-9224-dd6f862b5795.PNG">

### Composition

        1. App Component.
    
            1.1. Game Component (contains all states and methods passed to it's children through props).
    
                1.1.1. Game_play_panel.
                1.1.2. Game_score_panel.

### Parametrization

To the Game Component can be passed an array of any number of Objects. Each Object represents one item's patten and have to be composed in a such way:

```ruby
        {
            item: <String or Number> (item's unique name),
            unitPoints: <Number> (points number after collecting an item)
        }
```
Number of randomly rendered items on the page for each game is set by default to 15. 

Number of rendered items as well as adding bonuses to total score can be easily parametrized and changed for future game proposes due to product development.


### Layout

<img width="542" alt="layout" src="https://user-images.githubusercontent.com/43315389/54919572-6fc12000-4f01-11e9-9146-0dc10955e252.PNG">


