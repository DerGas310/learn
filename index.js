function getCount(str) {
    const arr = str.split('')
    const arr2 = arr.filter((letter) => letter == 'a' || letter == 'e' || letter == 'i' || letter == 'u' || letter == 'o')
    return arr2.length;
}
console.log(getCount("aatagxueujaifjdgiodf"))