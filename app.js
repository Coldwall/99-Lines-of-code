//Variables//
var chorus = ('lines of code in the file, lines of code;  strikes one out, clears it all out, lines of code in the file');
var chorusl = ('line of code in the file, line of code; strikes one out, clears it all out, line of code in the file');
var num = 99,
    reverse = true,
    i;

//Array//
var friends = ['Jackie', 'Isaac', 'John', 'Micah', 'Kat'],
    x;

//Function//


//Loop//

var i = 99;
var l = 99;


for (let x = 0; x < friends.length; x ++) {
    let friend = friends[x]
    console.log(friend)

    for (let i = 99; i > 0; i--) { 
       
        console.log(i, 'lines of code in the file,', i, 'lines of code;', friend, 'strikes one out, clears it all out,', --i, 'lines of code in the file')
        if (i < 0) {
            console.log(i, 'line of code in the file,', i, 'line of code;', friend, 'strikes one out, clears it all out,', i, 'No lines of code in the file')
        }
        
        }       
    }


