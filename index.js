function getCount(str) {
    const arr = str.split('')
    const arr2 = arr.filter((letter) => 'aouei'.includes(letter))
    return arr2.length;
}
console.log(getCount("aatagxueujaifjdgiodf"))