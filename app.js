const fs = require("fs")
const profileDataArgs = process.argv.slice(2)
const [name, github] = profileDataArgs
const generatePage = require('./src/page-template.js')

fs.writeFile('./index.html', generatePage(name, github), err => {
    if (err) throw err

    console.log('portfolio complete! checkout index.html to see the output!')
})
// const printProfileData = profileDataArr =>{profileDataArr.forEach(profileItem => console.log(profileItem))}
// printProfileData(profileDataArgs)