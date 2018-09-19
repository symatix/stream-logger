var source = new EventSource('http://192.240.102.133:12430');
console.log("=> started")
source.addEventListener('durationchange', function(e){
   console.log(e);
})
