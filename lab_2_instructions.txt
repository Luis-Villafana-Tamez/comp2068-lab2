Lab 2 - Node.JS Simple Calculator

This lab is for you to practice working with Node and NPM.  To complete the lab:

- Create a node application called lab2
- Initialize npm and create package.json via the wizard
- Install the express module with npm
- Modify package.json to use nodemon to start your app
- Create server.js
- Link to the express and url packages
- Write a calculate function that parses the url for 3 parameters: method, x, and y
- Possible values for the method parameter are: "add", "subtract", "multiply", and "divide"
- If the method value is anything else, show an error message
- Determine which math operation to run based on the value of the method parameter
- Perform this math operation on the other 2 values (x and y)
- Display the full math operation and its result on the page in this format: x [method] y = [result]

- Sample URL: http://localhost:3000?method=add&x=16&y=4
- Sample Output: 16 + 4 = 20

- Sample URL: http://localhost:3000?method=subtract&x=16&y=4
- Sample Output: 16 - 4 = 12

- Sample URL: http://localhost:3000?method=multiply&x=16&y=4
- Sample Output: 16 * 4 = 64

- Sample URL: http://localhost:3000?method=divide&x=16&y=4
- Sample Output: 16 / 4 = 4

- Install npm and use the wizard to create your package.json file
- Install the nodemon module so your application automatically restarts any time a change is saved to your server.js file

To submit your lab:

- Create a repo on GitHub called comp2068-lab2
- Push your files to your repo on GitHub
- Submit the link to your repo on Blackboard 
