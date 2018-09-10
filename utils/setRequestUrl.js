// creates "option" object for the request

module.exports = function(url){
    return {
        url: url,
        headers: {
            'User-Agent': 'Mozilla/5.0'
        }
    }
}