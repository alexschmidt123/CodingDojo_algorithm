let test = [1, 4, 9,-3,-7,9.9];
function swapStrForNaga (arr){
    for (var i=0; i<test.length; i++){
        if (test[i]<0){
            test[i] = "Dojo";
        }
    }
}
swapStrForNaga(test);
console.log(test);