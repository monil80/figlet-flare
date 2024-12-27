#!/usr/bin/env node

import figlet from 'figlet'
import chalk, { ChalkInstance } from 'chalk'
import _ from 'lodash'  // Default import from lodash
const { sample } = _  // Destructure the sample function from lodash

const args = process.argv.slice(2) // Get CLI arguments
const inputText = args.join(' ') || 'Hello,  Figlet  Flare!'

// List of chalk color methods
const colors = [
    chalk.green,
    chalk.red,
    chalk.blue,
    chalk.magenta,
    chalk.magentaBright,
    chalk.yellow,
    chalk.yellowBright,
    chalk.yellow,
    chalk.cyan,
    chalk.white,
    chalk.gray,
    chalk.bgBlack,
    chalk.bgRed,
    chalk.bgGreen,
    chalk.bgYellow,
    chalk.bgBlue,
    chalk.bgMagenta,
    chalk.bgCyan,
    chalk.bgWhite,
    chalk.blackBright,
    chalk.redBright,
    chalk.greenBright,
    chalk.yellowBright,
    chalk.blueBright,
    chalk.magentaBright,
    chalk.cyanBright,
    chalk.whiteBright,
    chalk.dim,
    chalk.italic,
    chalk.underline,
    chalk.inverse,
    chalk.strikethrough,
]

// Generate random color
const getRandomColor = ():any => {
    const randomIndex = Math.floor(Math.random() * colors.length)
    const res = sample(colors)||colors[0]
    return res
}

// Generate the ASCII art
figlet(inputText, (err, data) => {
    if (err) {
        console.error(chalk.red('Something went wrong!'))
        console.error(err)
        return
    }

    // Print the styled output in a random color
    console.log(getRandomColor().bold(data))
})
