function generateMarkdown(data) {
  let licenseBadge = ''
  let licenseLink = ''
  if (data.license === 'Apache License 2.0') {
    licenseBadge= '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
    licenseLink= `## License
  [Link to License](https://opensource.org/licenses/Apache-2.0)`;
  } else if (data.license === 'GNU General Public License v3.0') {
    licenseBadge= '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
    licenseLink= `## License
  [Link to License](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (data.license === 'MIT License') {
    licenseBadge= '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    licenseLink= `## License
  [Link to License](https://opensource.org/licenses/MIT)`;
  }
  return `# ${data.title}

${licenseBadge}
## Description

${data.description}

## Table of Contents (Optional)

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

${licenseLink}
  
## Tests

${data.tests}

## Questions

[Link to my GitHub](https://github.com/${data.username})

${data.email} - Send an Email if you have any questions.`;
}

module.exports = generateMarkdown;