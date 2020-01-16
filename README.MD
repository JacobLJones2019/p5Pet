# p5Pet

A simple vPet with turn based RPG mechanics. 


## Complete

* Initial setup and drawing of canvas
* Load in initial assets and create homescreen spite animation (currently single image)
* Switch between "screens" using keyboard keys
* Create enemy object template
* Randomly select enemy from a list to generate based on user selection(currently hardcoded)
* Start battle loop and load in battle assets. 

## Todo

* Battle Scene
    * Create functions for attack and escape commands
    * Create button to start battle or accumulate
    * Load back to homescreen and make battle an option again after battle conclusion
* Train
    * For now make it increment stats + X based on exp earned in battle.
* Avatar
    * Add remaining stats
        * Begin work on basic "skills", 1 active and 1 passive for testing
* Stats
    * Update stat sceen layout and info to reflect avatars updated stats and skills
* Database
    * Create database and mapping for saving. This will be one of the later implementations
        *if I have to implement this before the website I will just use local mongoDB + mongoose for object modeling. 

# p5Pet Website

Multi page website to give information about the game, as well as allow users to login and save their avatar data.

## Todo

* Pick frameworks to use. Initial thoughts are MERN, plus possible bulma or material UI, may use Vue in lieu of React. 


