function renderLicenseBadge(license) {
    console.log (license)
    if(license === 'Apache') {
        return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    } else if(license === 'MIT') {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    } else if(license === 'Mozilla-Public') {
        return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    } else if(license === 'GNU-General-Public') {
        return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    } else {
        return ``;
    };
}



function generateMarkdown(data) {
    console.log (data)
    return `# ${data.title}
##  Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Additional Info](#additional-info)
    
## Description:
  ${data.description}

## Installation:
  ${data.installation}

## Usage:
  ${data.usage}

## contribution:
  ${data.contribution}

## Test:
  ${data.test}

## License:
  -license: ${data.license}
  - ${renderLicenseBadge(data.license)}

## Additional information:
  -Github: [${data.github}](https://github.com/${data.github})
  -Email: ${data.email}`
};


module.exports = generateMarkdown; 