const removeFromArray = function(array, ...itemsToRemove) {
    for(let item of itemsToRemove){
        let index = array.indexOf(item)
        if(index >= 0){
            array.splice(index,1)
        }
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
