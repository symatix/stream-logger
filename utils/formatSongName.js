module.exports = function(arr){
    return arr.map(a => {
        if (a.includes("&amp;")){
            return a.replace("&amp;", "&")
        }
        if (a.includes("&apos;")){
            return a.replace("&apos;", "'")
        }
        return a
    })
}