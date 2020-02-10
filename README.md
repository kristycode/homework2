# 03 JavaScript: Password Generator

When doing this, I was aware the homework README suggested to create prompts for the password criteria, but as we have already been learning about pulling information via the DOM and modifying HTML elements with JS in class, I thought this would be an opportunity to implement those concepts as well.

As is encouraged, I Googled several different text-based and video-based tutorials on creating random character password generators with Javascript. There was many that suggested using a slider for the length input which probably has better control of the value, for the sake of being able to use a prompt I chose a box for the input instead.

There were also many solutions that separated .addEventListen function from the loop, but I couldn't see why it wasn't possible to put the loop inside the .addEventListen function, so after some trial-and-error I was able to do! It took some time for me to figure out my function wasn't working as the .addEventListen method requires ",true/false)" at the end and what "bubbling" through the DOM meant.

After I generated my first password, it would say my "passwordLength" variable was undefined but didn't seem to impact the functionality of the application at all. Declaring the "passwordLength" variable outside of my function seemed to resolve the issue, however.
