//remember binary numbers have just 2 dynamic numbers, 0 and 1
//whereas, integers have 10 different, dynamic or unique number characters.

//a 'radix' specifies the base in a number, such as base 2 (binary), base 10 (integers), base 6, base 7, etc.
//with intParse, we're going to convert numbers from one base to another.
function convertToInteger(str)

{
    return parseInt(str, 2)
}

console.log(convertToInteger("0111"));