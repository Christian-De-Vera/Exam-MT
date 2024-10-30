let userAge = Number(prompt(`Your age: `)); //ask the user's age O_O

if (userAge <= 4) {
    console.log(`You're a Toddler.`)
} else if (userAge <= 12) {
    console.log(`You're a Child.`)
} else if (userAge <= 19) {
    console.log(`You're a Teenager.`)
} else if (userAge <= 35) {
    console.log(`You're a Young Adult.`)
} else if (userAge <= 60) {
    console.log(`You're a Middle Age.`)
} else if (userAge > 60) {
    console.log(`You're a Senior.`)
}else {
    console.log(`Wrong input.`)
}