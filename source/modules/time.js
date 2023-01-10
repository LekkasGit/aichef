// Gets current time
function current() {
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return time;
}

// Creats a prefix for the current time to be used in console
function prefix() {
    return `[${current()}]: `
}

module.exports = { current, prefix };