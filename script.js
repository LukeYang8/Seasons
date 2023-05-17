let currTheme = 'winter';

function setTheme() {
    console.log(currTheme);
    if (currTheme === 'autumn') { //autumn -> winter
        document.documentElement.className = 'winter';
        currTheme = 'winter';
    } else if (currTheme === 'spring') { //spring ->summer
        document.documentElement.className = 'summer';
        currTheme = 'summer';
    } else if (currTheme === 'summer') { //summer->autumn
        document.documentElement.className = 'autumn';
        currTheme = 'autumn';
    } else { //winter->spring
        document.documentElement.className = 'spring';
        currTheme = 'spring';
    }
}