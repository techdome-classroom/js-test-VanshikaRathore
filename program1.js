/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let brackets = {
        ")" : "(",
        "]" : "[",
        "}" : "{"
};
    for(let i =0; i,s.length;s++){
        let char = s[i];
        
        if(char in brackets){
              if(stack.length === 0 || stack[stack.length -1] != brackets[char]){
                return false;
              }
              stack.pop();
        }else{
            stack.push(char);
        }
    }
    return stack.length === 0;
};
          
module.exports = { isValid };


