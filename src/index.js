module.exports = function check(str, bracketsConfig) {
    let config = new Map(bracketsConfig);
    let stack = [];
    for (let c of str.split('')) {
        if (stack.length && c === config.get(stack[stack.length - 1])) {
            stack.pop();
        } else if (config.has(c)) {
            stack.push(c)
        } else {
            if (c !== config.get(stack.pop())) return false;
        }
    }
    return stack.length === 0;
}
