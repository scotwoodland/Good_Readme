// function to generate markdown for README
//Uses template literals to get data from the inquirer prompts and insert it into the markdown.
function generateMarkdown(answers) {
  return `# ${answers.title}
  ![](https://img.shields.io/badge/License-${answers.license}-blue)
  ## Description 
  ${answers.description}
  ## Table of Contents:
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [Questions](#Questions)
  ## Installation
  ${answers.installation}
  ## Usage
  ${answers.usage}
  ## License
  ${answers.license}
  ## Contributing
  ${answers.contributing}
  ## Tests
  ${answers.tests}
  ## Questions
  For any questions, [mailto:${answers.email}], or visit my [GitHub] (https://github.com/${answers.github}) 
 `;
}

module.exports = generateMarkdown;
