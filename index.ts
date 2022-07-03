type Bracket = {
    opening: string
    closing: string
}

function isValid(s: string): boolean {
    const brackets: Bracket[] = [
        {
            opening: "(",
            closing: ")"
        },
        {
            opening: "[",
            closing: "]"
        },
        {
            opening: "{",
            closing: "}"
        },
        {
            opening: "<",
            closing: ">"
        }
    ]
    
    return init(s, brackets);
};

function init(input: string, brackets: Bracket[]): boolean {
    let inputArrayData = input.split("");
    let openedBrackets = [];

    for (let i = 0; i < inputArrayData.length; i++) {
        if(
            brackets.findIndex(x => x.opening == inputArrayData[i]) == -1 &&
            brackets.findIndex(x => x.closing == inputArrayData[i]) == -1
        )   throw new Error("Invalid symbol")

        /** checks if curret bracket is opening */
        let isOpeningBracket = brackets.find(x => x.opening == input[i]);
        
        if(isOpeningBracket) {
            openedBrackets.push(isOpeningBracket.opening);
            console.log("opening " + isOpeningBracket.opening);
            continue;
        }

        
        /** if current bracket is closing */
        let isClosingBracket = brackets.find(x => x.closing == input[i]);

        if(isClosingBracket && isClosingBracket.opening == openedBrackets[openedBrackets.length - 1]) {
            console.log("closing " + isClosingBracket.closing);
            openedBrackets.pop();
        } else {
            throw new Error('format error');
        }
    }

    return true;
}

console.log(isValid("(([])([])[]<()>)"));