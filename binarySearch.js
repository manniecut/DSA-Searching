function binarySearch(array, query, start, end) {

    // dont confuse the indices with their values!
    // this algo narrows it down by the index not the value

    // makes start and end inputs optional
    var start = start === undefined ? 0 : start;
    var end = end === undefined ? array.length : end;

    // if the values overlap during loop there is no result
    if (start > end) {
        console.log('item not found')
        return;
    }

    // rounds decimals and finds midpoint
    const index = Math.floor((start + end) / 2);

    // contains current midpoint value
    const item = array[index];

    console.log(start, end, item);

    if (item == query) { // if matches log result
        console.log('location of item is ' + index)
    } else if (item < query) { // if array value is less, rerun search using current index(midpoint) as start
        return binarySearch(array, query, index + 1, end);
    } else if (item > query) { // if value is more, search with index(midpoint) as end
        return binarySearch(array, query, start, index - 1);
    }
}

return binarySearch([1, 2, 3, 4, 10, 15, 20, 30, 31, 32, 33, 34, 40, 59, 65, 66, 69, 81, 100], 1)
