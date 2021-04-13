const inquirer = require('inquirer')

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
      validate: nameInput => {
        if (nameInput){
          return true
        } else {
          console.log('please enter your name!')
          return false
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
      validate: nameInput => {
        if (nameInput){
          return true
        } else {
          console.log('please enter your github username!')
          return false
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmAbout',
      message: 'Would you like to enter some information about yourself?',
      default: true
    },
    {
      type: 'input',
      name: 'about',
      message: 'Provide some information about yourself:',
      when: ({confirmAbout}) => {
        if (confirmAbout) {
          return true
        } else {
          return false
        }
      }
    }
  ]);
};

const promptProject = portfolioData => {
  if (!portfolioData.projects){
  portfolioData.projects = []
  }
  console.log(`
  =================
  Add a New Project
  =================
  `);
return inquirer
.prompt([
  {
    type:'input',
    name: 'name',
    message: 'What is the name if your project',
    validate: nameInput => {
      if (nameInput){
        return true
      } else {
        console.log('please enter the name of your project!')
        return false
      }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of the project (Required)',
    validate: nameInput => {
      if (nameInput){
        return true
      } else {
        console.log('please enter the description to your project!')
        return false
      }
    }
  },
  {
    type: 'checkbox',
    name: 'about',
    message: 'What did you build this project with? (check all that apply)',
    choices: ['Javascript', 'HTML', 'CSS', 'JQUERY', 'Bootstrap', 'ES6', 'node']
  },
  {
    type: 'input',
    name: 'link',
    message: 'Enter the Github link to your project. (required)',
    validate: nameInput => {
      if (nameInput){
        return true
      } else {
        console.log('please enter github link!')
        return false
      }
    }
  },
  {
    type: 'confirm',
    name: 'feature',
    message: 'Would you like to feature this project?',
    default: false
  },
  {
    type: 'confirm',
    name: 'confirmAddProject',
    message: 'Would you like to enter another project?',
    default: false
  }
])
.then(projectData => {
  portfolioData.projects.push(projectData)
  if (projectData.confirmAddProject){
    return promptProject(portfolioData)
  } else {
    return portfolioData
  }
})
}
promptUser()
  .then(promptProject)
  .then(portfolioData => {
    console.log(portfolioData)
  })
// const fs = require('fs');
// const generatePage = require('./src/page-template');
// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });

