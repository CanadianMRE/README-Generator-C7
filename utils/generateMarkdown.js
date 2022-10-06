
// Badge links and page links for each license
let licenseLinks = {
  'Apache License 2.0':{
      img: "https://img.shields.io/badge/License-Apache_2.0-blue.svg",
      link: "https://opensource.org/licenses/Apache-2.0",
  },
  'GNU General Public License v3.0':{
      img: "https://img.shields.io/badge/License-GPLv3-blue.svg",
      link: "https://www.gnu.org/licenses/gpl-3.0",
  },
  'MIT License':{
      img: "https://img.shields.io/badge/License-MIT-yellow.svg",
      link: "https://opensource.org/licenses/MIT",
  },
  'BSD 2-Clause "Simplified" License':{
      img: "https://img.shields.io/badge/License-BSD_2--Clause-orange.svg",
      link: "https://opensource.org/licenses/BSD-2-Clause",
  },
  'BSD 3-Clause "New" or "Revised" License':{
      img: "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg",
      link: "https://opensource.org/licenses/BSD-3-Clause",
  },
  'Boost Software License 1.0':{
      img: "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg",
      link: "https://www.boost.org/LICENSE_1_0.txt",
  },
  'Creative Commons Zero v1.0 Universal':{
      img: "https://licensebuttons.net/l/zero/1.0/80x15.png",
      link: "http://creativecommons.org/publicdomain/zero/1.0/",
  },
  'Eclipse Public License 2.0':{
      img: "https://img.shields.io/badge/License-EPL_1.0-red.svg",
      link: "https://opensource.org/licenses/EPL-1.0",
  },
  'GNU Affero General Public License v3.0':{
      img: "https://img.shields.io/badge/License-AGPL_v3-blue.svg",
      link: "https://www.gnu.org/licenses/agpl-3.0",
  },
  'GNU General Public License v2.0':{
      img: "https://img.shields.io/badge/License-GPL_v2-blue.svg",
      link: "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
  },
  'GNU Lesser General Public License v2.1':{
      img: "https://img.shields.io/badge/License-LGPL_v3-blue.svg",
      link: "https://www.gnu.org/licenses/lgpl-3.0",
  },
  'Mozilla Public License 2.0':{
      img: "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg",
      link: "https://opensource.org/licenses/MPL-2.0",
  },
  'The Unlicense':{
      img: "https://img.shields.io/badge/license-Unlicense-blue.svg",
      link: "http://unlicense.org/",
  },
}

// Get the license badge for the given license. And make the markdown for it.
function getLicenseBadge(license) {
    let licenceBadge = ``;

    if (licenseLinks[license]) {
        licenceBadge = `[![License](${licenseLinks[license].img})](${licenseLinks[license].link})`;
    }
  
    return licenceBadge;
}

// Generates the markdown for the readme file and returns it
function generateMarkdown(data) {
  return `
# ${data.title}
${getLicenseBadge(data.license)}

## Description
${data.desc}

## Table of Contents
- [Installation](#Installation)
- [Usage](#Usage)
- [Credits](#Credits)
- [License](#License)
- [Tests](#Tests)
- [Questions](#Questions)

## Installation
${data.instinstruct}

## Usage
${data.use}

## Credits
${data.contrib}

## License
${data.license}

## Tests
${data.testing}

## Questions
Visit my github at [${data.gitname}](https://github.com/${data.gitname})
or
Contact me through email at ${data.email}
`;
}

module.exports = generateMarkdown;
