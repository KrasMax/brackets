module.exports = function check(str, bracketsConfig) {
  

    var stack = [];
    var last;
  
    for (var i = 0; i < str.length; i++) {
        if (str[i] == '[' || str[i] == '(' || str[i] == '{') {
            stack.push(str[i]);
        } else if (str[i] == ']' || str[i] == ')' || str[i] == '}') { 

            if (stack.length) { 

                last = stack[stack.length - 1]; 

                if ((last == '[' && str[i] == ']') || (last == '(' && str[i] == ')') || (last == '{' && str[i] == '}')) {
                    
                    stack.pop();
                }
            } else return false; 
        }
    }
    return (!stack.length);
  
}
