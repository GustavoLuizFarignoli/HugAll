const array = [2022, 09, 27];
const date = new Date();
const month = date.getMonth + 1
const day = date.getDay



if (array[1] == month){
    if (array[2] <= day){
        return true
    } else {
        return false
    }
} else if (array[1] > month){
    return false
} else {
    return true
}

