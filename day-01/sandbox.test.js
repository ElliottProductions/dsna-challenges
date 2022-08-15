function annagram(word1, word2){
    // console.log(word1.split('').sort(), 'weird');
    return word1.split('').sort().join() === word2.split('').sort().join() ? true : false;
    
}

test('time to test a function', () => {

    const expected = true;
    
    const actual = annagram('superintended','unpredestined');

    expect(expected).toEqual(actual);
});


// function removeDuplicate(string)
// {
//    return string.split('')
//     .filter(function(item, pos, self)
//     {
//       return self.indexOf(item) == pos;
//     }
//    ).join('');
// }

function uniqueString(booger) {

    const newBoog = booger.map(str => { return [...new Set(str.toLowerCase())].sort().join('')});
    
    for ( let i = 0; i < newBoog.length; i++ ) {
        if ( newBoog.indexOf(newBoog[i]) === newBoog.lastIndexOf(newBoog[i]) ) return booger[i]
    }

}
    







test('uniqe string', () => {

    const strings = [ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ];
    
    const expected = 'BbBb';

    const actual = uniqueString(strings);

    expect(expected).toEqual(actual);

    const strings2 = [ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ];
    
    const expected2 = 'foo';

    const actual2 = uniqueString(strings2);

    expect(expected2).toEqual(actual2);
});

function uniqueChar(string) {
    for ( let i = 0; i < string.length; i++ ) {
        console.log('herewego')
        console.log(string.indexOf(string[i]))
        console.log(string.lastIndexOf(string[i]))
        if ( string.indexOf(string[i]) === string.lastIndexOf(string[i]) ) return string[i]
    }

    return '_'
}

test('uniqe char', () => {

    const letters = 'abdacabad';
    
    const expected = 'c';

    const actual = uniqueChar(letters);

    expect(actual).toEqual(expected);

    const letters2 = 'abacabaabacaba';
    
    const expected2 = '_';

    const actual2 = uniqueChar(letters2);

    expect(actual2).toEqual(expected2);

    const letters3 = 'abacabad';
    
    const expected3 = 'c';

    const actual3 = uniqueChar(letters3);

    expect(actual3).toEqual(expected3);
});