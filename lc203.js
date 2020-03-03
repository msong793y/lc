function ugly(num) {
    console.log(num)
    if (num === 0) {
        return true;
    }
    if (num % 2 === 0) {
        return ugly(num / 2)
    }
    if (num % 3 === 0) {1
        return ugly(num % 3)
    }
    if (num % 5 === 0) {
        return ugly(num % 5)
    }
    return false
}

console.log(ugly(14))