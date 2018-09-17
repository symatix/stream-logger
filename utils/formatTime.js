module.exports = function(){

    const yyyy = new Date().getFullYear();
    let mm = new Date().getMonth() + 1;
    let dd = new Date().getDate();
    let h = new Date().getHours();
    let m = new Date().getMinutes();

    const fNum = (n) => {
        if (n < 10) {
            n = '0' + n;
        }
        return n
    }
    return `${yyyy}-${fNum(mm)}-${fNum(dd)} ${fNum(h)}:${fNum(m)}`
}