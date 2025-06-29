# Wimmel

Try Wimmel <a href="https://wimmel.netlify.app/">HERE</a>
**Please wait a minute for the server to start if the image doesn't load immediately**

The Frontend client for a Photo Tagging game akin to Where's Waldo (courtesy of The Odin Project)

Users are greeted with a prompt upon opening the game to introduce them to the premise of this little web app. Once starting the game, the clock begins to tick and our server sends all of the necessary game info, displaying an image with a list of targets for the user to find. Clicking on the image will mark the coordinates within that image and show user a list of their targets so they can submit their guess with the coordinates they set moments earlier. Once the server checks those coordinates with the database, it will send back a response and a message will pop up on the side of the screen to inform users whether they successfully marked their targets. This pattern continues until all targets have been successfully marked, where the server sends the total time it took to complete the game and users are asked to add their name for the leaderboard. After submitting their name, users are able to see their score and compare it to the rest of the leaderboard before restarting the game and repeating the loop.

At this point in my career, designing the frontend for this game wasn't terribly difficult. That hardest part was planning out all of the necessary components and figuring out where each piece of data would go and what info was needed from the server. I spent a lot of time thinking about what components would be needed and planning out how exactly I would want to break down specific items into components. 

My workflow began on Figma, where I would make a quick wireframe based on what I imagine the product to look like. I would imagine all of the different interactions the user would need to navigate the page and broke all of these interactions down into the componenets I would eventually be writing. Once I figured out what was needed, I created all of the components and started integrating their core functions, adding our API endpoints where needed. When all components were written and fully functionaly, I then worried about structuring them and created our main component to manage all of the states for rendering and data that would be passed down to each individual components. This was my first time following this kind of process so I forgot about intergration tests which might've helped at some point during development.

Check out the Wimmel API <a href="https://github.com/MSanouvo/Wimmel-API">here</a>

Future Improvement:
- Add a custom cursor
- Add more maps with their own themes and personality
- Add sounds and music for fun
- Turn the game into a daily game (similar to Wordle or Crossword puzzles) by adding more maps/targets that change every day
- Design responsive layout for smaller screens
- 404 ERROR PAGE NEEDED