import chalk from 'chalk'; 
import animals from './public/animals.json' 

const animal = process.argv[2] as keyof typeof animals;
const animalData = animals[animal];
if (animalData) {
  console.log(chalk.green(`Nome científico: ${animalData.Nome_cientifico`))
}