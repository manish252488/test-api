const { default: chalk } = require("chalk");
const { Sequelize } = require("sequelize/dist");

const sequelize = new Sequelize('postgres://rocketfuel:123456:5432/blog');
try {
    sequelize.authenticate();
    console.log(chalk.blue('Database connected!'))
} catch(err){
    console.log('error connecting database', err)
}
