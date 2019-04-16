// Update the following function to take an argument and output 'Even' if the argument is an even number or 'Odd' if the number is an odd number.

function oddOrEven(num){

    if(num % 2 === 0){
        console.log("Even")
        return "Even";
    }else if(num % 2 == 1){
        console.log("odd")
        return "Odd"
    }
}

oddOrEven(4)
oddOrEven(11)
oddOrEven(75)
