const inquirer = require('inquirer');

const fs = require('fs');

const {Triangle} = require('./Lib/shapes');

const {Square} = require('./Lib/shapes');

const {Circle} = require('./Lib/shapes');


const Svg = require ('./Lib/svg');

const x = [
    {
        name: 'LogoName',
        message: 'What is the name for the Logo?',
        type: 'input',
      },
      {
        name: 'TextColor',
        message: 'What would you like the color of the text to be?',
        type: 'input',
      },     
    {
      name: 'Shape',
      message: 'What is the shape of the Logo?',
      type: 'list',
      choices: [
        'Circle',
        'Triangle',
        'Square',
      ]
    },
    {
        name: 'ShapeColor',
        message: 'What would you like the color of the Shape to be?',
        type: 'input',
    },
]

const fileGenerator = (answersObject) => {
    return `
${answersObject.LogoName}
${answersObject.TextColor} 
${answersObject.Shape}
${answersObject.ShapeColor}   
    `;
  };

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(x)
    .then(answers => {
        console.log(answers);
        let shape 
        switch (answers.Shape) {
          case 'Triangle':
            shape = new Triangle()
            break;
          case 'Square':
            shape = new Square()
            break;
          case 'Circle':
            shape = new Circle()
            break;
          default:
            break;
        }
        shape.setColor(answers.ShapeColor)
      const svg = new Svg()
      svg.setText(answers.LogoName,answers.TextColor)  
      svg.setShape(shape)  
        writeToFile('LOGO.svg', svg.build())
        
            console.log('success');
          });
}

// Function call to initialize app
init();


// // TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data)
}


