// isPalindrome(str) -> input is a single string (str). function returns true if
// the input is a palindrome and false otherwise.
// a palindrome is a word or phrase that is the same forwards or backwards
// for this example, capitalization and other punctuation matter
// "racecar" is a palindrome
// "raCecar" is not (a capital C is not the same as a lowercase c)
// "race car" is not (the space doesn't match up with the E on the opposite side)

function isPalindrome(str) {
    for (var i = 0; i < str.length/2; i++){
        if (str[i] != str[str.length-1-i]){
            return false;
        }
    }
    return true;
}

// what are our test cases?
console.log(isPalindrome("racecar"))
console.log(isPalindrome("tacocat"))
console.log(isPalindrome("race car"))
console.log(isPalindrome("e racecar e"))
console.log(isPalindrome(""))
console.log(isPalindrome("a"))





// longestPalindrome(str) -> input is a string
// output is the longest palindrome contained within that string
// if you find multiple palindromes of the same length, return the first one
// that you find
// "ehjgkkgeh" -> "gkkg"
// "ehjg kkgeh" -> "kk"
// "qwertttreqwerewy" -> "ertttre"
// "qwerttttttreqwerewy" -> "erttttttre"
// "abacabd" -> "bacab"
// "abacaed" -> "aba"
// "abcde" -> "a" (every character is effectively its own palindrome)
// "a" -> "a" (lol)
// "I like to drive the racecar extremely fast" -> "e racecar e"
// "racecar" -> "racecar" (no need to use the previous function if you don't want to)


function longestPalindrome(str) {
    var count = 0;
    for (var i = str.length-1; i < str.length; i--){
        for (j = 0; j + i < str.length; j++){
            count++
            var substring = str.slice(j, i+j);
            if (isPalindrome(substring) == true){
                console.log(count)
                return substring
            }
        }
    }   
}

console.log(longestPalindrome("I like to drive the raceeeecar extremely fast".length))
console.log(longestPalindrome("I like to drive the raceeeecar extremely fast"))