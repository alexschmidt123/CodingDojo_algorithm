function reverse(s, start, end){
    let s_ = s.split("");
    for (var i=0; i<(end-start)/2; i++){
        [s_[start+i], s_[end-i]] =  [s_[end-i], s_[start+i]]
        console.log(s_[start+i]);
        console.log(s_[end-i]);
    }
    return s_.slice(start,end+1).join("")
}
s = "123lkg456"
console.log(reverse(s,3,5));
