import wordBank from './wordle-bank.txt';
var boardDefault = []

for (let i = 0; i < 6; i++){
    let row = []
    for (let j = 0; j < 5; j++){
        row.push("")
    }
    boardDefault.push(row)
}



export {boardDefault};


export const generateWordSet = async () => {
    let wordSet;
    await fetch(wordBank)
        .then((response) => response.text())
        .then((result) => {
            const wordArr = result.split("\n");
            wordSet = new Set(wordArr);
    });

    return {wordSet};
};

