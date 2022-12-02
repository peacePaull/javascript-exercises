const getTheTitles = function(arrayOfObjects) {
    let titles = [];
    for (let book of arrayOfObjects){
        titles.push(book.title)
    }
    return titles
};

// Do not edit below this line
module.exports = getTheTitles;
