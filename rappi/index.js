//Challenge 1. Swap characters to get the same word.

let w = 'ebcda';
function swapFirstLastChar(stringtoswap){
    let letters = stringtoswap.split('');
    console.log(letters);
    // console.log(letters.length);
    letters.unshift(letters[letters.length -1]);
    console.log(letters);
    letters.splice(letters.length -1/*index*/, 1/*elementsToDelete*/);
    console.log(letters);
    letters.push(letters[1]);
    console.log(letters);
    letters.splice(1/*index*/, 1/*elementsToDelete*/);
    console.log(letters);
}

function swapconsecutivechar(stringtoswap, index){
    let letters = stringtoswap.split('');
    let section = letters.slice(index,index+2);
    console.log(section.toString().replace(',',''));//Convert string array to string
    let [a,b] = section;
    console.log([b,a]);
    
}

// swapFirstLastChar(w);
// swapconsecutivechar(w, 2);

function minimumMoves(a, m) {
    // Write your code here
  let moves = 0;
  //number -> item of array
  for (let i = 0; i <= a.length - 1; i++){
    //first position
    let arraynumber_a = a[i].toString().split('');
    // console.log(arraynumber_a);
    let arraynumber_m = m[i].toString().split('');
    //digit -> item of split array
    for(let j= 0; j<= arraynumber_a.length-1; j++){
        if(arraynumber_a[j] > arraynumber_m[j]){
            moves += (arraynumber_m[j] - arraynumber_a[j]) * -1;
        }else
        if(arraynumber_a[j] < arraynumber_m[j]){
            moves += (arraynumber_m[j] - arraynumber_a[j]);
        }
    }
  }
  return moves;
//   console.log(moves);
}

let a = [1,2,3,4];
let m = [2,3,4,5];
// minimumMoves(a,m);









//Challenge 2. Nearest pixel color
let binaryToInt = parseInt("01001011", 2);
// console.log(binaryToInt);

//Calculate distante
function EuclidianDistance(r1,g1,b1,r2,g2,b2){
    return Math.sqrt( Math.pow(r1-r2, 2) + Math.pow(g1-g2, 2) + Math.pow(b1-b2, 2) );
}
// return de duplicate array
function duplicateArray(arrayToAnalyse){
    return new Promise((resolve, reject)=>{
        return resolve( arrayToAnalyse.reduce(function(acc, el, i, arr) {
        if (arr.indexOf(el) !== i && acc.indexOf(el) < 0) acc.push(el); return acc;
    }, []));
    })
}
// Main or principal method. 
function closestColor (pixels){
    let nearestTo = [];
    let pureblack = [0,0,0];
    let purewhite = [255,255,255];
    let purered = [255,0,0];
    let puregreen = [0,255,0];
    let pureblue = [0,0,255];
    // Write your code here
    // for (let index = 0; index <= pixels.length-1; index++) {
        
    // }
    let results = pixels.map((value, index, number)=>{
        // let duplicateValues = [];
        let distance = [];
        const colors = pixels[index].split('');
        let red = colors.slice(0, 8);
        let green = colors.slice(8, 16);
        let blue = colors.slice(16, 24);
        // console.log(red);
        // console.log(green);
        // console.log(blue);
        let rednumber = parseInt(red.join(''), 2);
        let greennumber = parseInt(green.join(''), 2);
        let bluenumber = parseInt(blue.join(''), 2);
        // console.log(rednumber);
        // console.log(greennumber);
        // console.log(bluenumber);
        let blackdistance = EuclidianDistance(rednumber, greennumber, bluenumber, pureblack[0], pureblack[1], pureblack[2]);
        let whitedistance = EuclidianDistance(rednumber, greennumber, bluenumber, purewhite[0], purewhite[1], purewhite[2]);
        let reddistance = EuclidianDistance(rednumber, greennumber, bluenumber, purered[0], purered[1], purered[2]);
        let greendistance = EuclidianDistance(rednumber, greennumber, bluenumber, puregreen[0], puregreen[1], puregreen[2]);
        let bluedistance = EuclidianDistance(rednumber, greennumber, bluenumber, pureblue[0], pureblue[1], pureblue[2]);
        distance.push({name: 'Black', value: blackdistance});
        distance.push({name: 'White', value: whitedistance});
        distance.push({name: 'Red', value: reddistance});
        distance.push({name: 'Green', value: greendistance});
        distance.push({name: 'Blue', value: bluedistance});
        
        let sortingdistance = distance.sort((a, b) => a.value > b.value);
        let duplicateValues_2 = sortingdistance.reduce((b,c)=>((b[b.findIndex(d=>d.element===c.value)]||b[b.push({element:c.value,count:0})-1]).count++,b),[]);
        // console.log(duplicateValues_2.find(a => a.count > 1));
        if(duplicateValues_2.find(a => a.count > 1)){
            nearestTo.push('Ambiguous');
        }else{
            nearestTo.push(sortingdistance[0].name);
        }
        
        // if(duplicateValues.length > 0){
        //     // console.log(duplicateValues.length);
        //     nearestTo.push('Ambiguous');
        // }else{
        //     nearestTo.push(sortingdistance[0].name);
        // }
    })

    return nearestTo;
    //RETURN STRING ARRAY
}

function getDistances(pixels){
    let distance = [];
    let pureblack = [0,0,0];
    let purewhite = [255,255,255];
    let purered = [255,0,0];
    let puregreen = [0,255,0];
    let pureblue = [0,0,255];
    // Write your code here
    for (let index = 0; index <= pixels.length-1; index++) {
        // let duplicateValues = [];
        const colors = pixels[index].split('');
        let red = colors.slice(0, 8);
        let green = colors.slice(8, 16);
        let blue = colors.slice(16, 24);
        // console.log(red);
        // console.log(green);
        // console.log(blue);
        let rednumber = parseInt(red.join(''), 2);
        let greennumber = parseInt(green.join(''), 2);
        let bluenumber = parseInt(blue.join(''), 2);
        // console.log(rednumber);
        // console.log(greennumber);
        // console.log(bluenumber);
        // for (let i = 1; i <= 5; i++) {
        //     let blackdistance = EuclidianDistance(rednumber, greennumber, bluenumber, pureblack[0], pureblack[1], pureblack[2]);    
        //     distance.push(blackdistance)
        // }
        let blackdistance = EuclidianDistance(rednumber, greennumber, bluenumber, pureblack[0], pureblack[1], pureblack[2]);
        let whitedistance = EuclidianDistance(rednumber, greennumber, bluenumber, purewhite[0], purewhite[1], purewhite[2]);
        let reddistance = EuclidianDistance(rednumber, greennumber, bluenumber, purered[0], purered[1], purered[2]);
        let greendistance = EuclidianDistance(rednumber, greennumber, bluenumber, puregreen[0], puregreen[1], puregreen[2]);
        let bluedistance = EuclidianDistance(rednumber, greennumber, bluenumber, pureblue[0], pureblue[1], pureblue[2]);
        distance.push({name: 'Black', value: blackdistance});
        distance.push({name: 'White', value: whitedistance});
        distance.push({name: 'Red', value: reddistance});
        distance.push({name: 'Green', value: greendistance});
        distance.push({name: 'Blue', value: bluedistance});
    }
    return distance;
}

function findClosestColor(pixels){
    let distance = getDistances(pixels);

    console.log(distance.reduce(function(acc, el, i, arr) {
        if (arr.indexOf(el) !== i && acc.indexOf(el) < 0) acc.push(el); return acc;
    }, []));

    // duplicateArray(distance).then( listaduplicada => {
    //     console.log(listaduplicada);
    //     // let sortingdistance = distance.sort((a, b) => a.value > b.value);
    //     // // let duplicateValues_2 = distance.reduce((b,c)=>((b[b.findIndex(d=>d.element===c.value)]||b[b.push({element:c.value,count:0})-1]).count++,b),[]);
    //     // if(arrayx.length > 0){
    //     //     nearestTo.push('Ambiguous');
    //     // }else{
    //     //     nearestTo.push(sortingdistance[0].name);
    //     // }
    // });
}

// let array_binary = ['101111010110011011100100',
// '110000010101011111101111',
// '100110101100111111101101',
// '010111011010010110000011',
// '000000001111111111111111']
// White
// White
// White
// Green
// Ambiguous

let array_binary = ['111111110000000010101010','010111011010010110000011', '000000001111111111111111'];//red - green - ambiguous
console.log(array_binary);
console.log(closestColor(array_binary));
// findClosestColor(array_binary);


///numbers
// let numbers = [5,2,4,3,1]
// var duplicateValues = numbers.reduce(function(acc, el, i, arr) {
//   if (arr.indexOf(el) !== i && acc.indexOf(el) < 0) acc.push(el); return acc;
// }, []);

// console.log(`Números repetidos = ${duplicateValues.length}, valores = ${duplicateValues}`);
// console.log(numbers.sort());

//SORTING
let blackdistance = 6
let greendistance = 4
let bluedistance = 10
let distance = [];
distance.push({name: 'blackdistance', value: blackdistance});
distance.push({name: 'greendistance', value: greendistance});
distance.push({name: 'bluedistance', value: bluedistance});


// let duplicate = distance.filter(function(v,i,o){return i&&v.value!==o[i-1].value?v:0;});
// let duplicate = distance.reduce((b,c)=>((b[b.findIndex(d=>d.element===c.value)]||b[b.push({element:c.value,count:0})-1]).count++,b),[]);
// console.log(duplicate)

// if(duplicate.find(a => a.count > 1)){
//     console.log(`Repetidos`);
// }else{
//     console.log(`NO Repetidos`);
// }

// let sorting = distance.sort((a, b) => a.value > b.value);
// console.log(sorting);

// let word = sorting.find((a)=> a.name);
// console.log(sorting[0].name)

