# GoodReadme_Generator
  
  ## Description 
  A command line application that generates a professional README.md from the user's input using Node.
  ## Installation
  Having Node installed, write "npm i" into the command line to install all dependencies."
  ## Usage
  User answers prompt questions.  The input data is then used to generate a professional readme document for projects.
  - Requires inquirer. Using inquirers type,name, and message, I set up the prompts to get the information needed to create a professional readme.
 
 ![](Images/Inquirer_prompts.png)
 
 - Requires fs.  On lines 16, the var filename take the title data from the prompt that asks for the project title, makes it all lower case, takes any extraneuos spaces and joins them, then creates a ".md" file.
 - The data is then taken from the generateMarkdown.js file, that contains the markdown for the readme file with the users added input data to dynamically generate the read me.
 
 ![](Images/fswritefile.png)
 
 - Requires util (can be seen above in first image).  This is the markdown layed out for the readme.  Using template literals, it grabs the users answers from the prompt questions and inserts them into the readme in their designated location.
 
 ![](Images/markdown.png)
 
  ## License
  MIT
  