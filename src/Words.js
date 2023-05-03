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
    let todaysWord;
    await fetch(wordBank)
        .then((response) => response.text())
        .then((result) => {
            const wordArr = result.split("\n");
            todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)];
            wordSet = new Set(wordArr);
    });

    return {wordSet, todaysWord};
};

