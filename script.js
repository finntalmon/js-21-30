function countEvens(arr){
    var count = 0;
    for(var i=0; i<arr.length; i++){
        if(arr[i]%2 == 0) count++;
    }
    return count;
}
function countHi(str) {
    var count = 0;
    for(var i=0; i<str.length; i++){
        if(str[i]=="h" && str[i+1]=="i"){
            count++;
        }
    }
    return count;
}

function no14(arr) {
    return ((!arr.includes(1) || !arr.includes(4)));
}

function either24(arr) {
    var countX = 0;
    var countY = 0;
    for(var i=0; i<arr.length; i++){
        if (arr[i]==4 && arr[i+1]==4) countY++;
    }
    return !(countX == countY);
}
// The JavaScript Code Tester for either24 is faulty//

function makeChocolate(small, big, goal) {
    if((goal > big*5 + small) || (goal%5 > small)){
        return -1;
    }

    if(big*5 > goal){
        return goal%5;
    }

    return goal - big*5;
}
function luckySum(a,b,c) {
    if(a==13) return 0;
    if(b==13) return a;
    if(c==13) return a+b;
    return a+b+c
}
function maxBlock(str) {
    var count = 1;
    var i = 0;
    var count2 = 1;
    if(str.length == 0){
        return 0;
    }
while(i < str.length-1){
        if(str.charAt(i) == str.charAt(i+1)){
            count ++;
            if(count > count2){
                count2=count;
            }
        }else{
            count = 1;
        }
        i++;
    }
return count2;
}

function linearIn(arr1, arr2){
    var i = 0;
    var x = 0;
    while((i < arr2.length) && (x < arr1.length)){
        if(arr1[x] < arr2[i] ){
          x++;
        }else{
            if(arr2[i] < arr1[x]){
                return false;
            }else{
                i++;
            }
        }
    }
    if(i != arr2.length){
        return false;
    }
return false;
}
function countTriple(str) {
    var count = 0;
    for(var i=0; i<str.length; i++){
        if(str[i] == str[i+1] && str[i+1] == str[i+2]) count++;
    }
    return count;
}

function sameEnds(str){
    var end = str.substring(0, str.length/2 );
    for(var i=0; i < str.length; i++){
        if(end == str.substring(str.length - end.length)){
            return end;
        }else{
            end = end.substring(0, end.length-1);
        }
    }
return "";
}



function tester() {
    document.getElementById("output").innerHTML += countEvens([2, 2, 0]);
    document.getElementById("output").innerHTML += countHi( "hihi");
    document.getElementById("output").innerHTML += no14([1, 2, 3]);
    document.getElementById("output").innerHTML += either24([4, 4, 1]);
    document.getElementById("output").innerHTML += makeChocolate(4, 1, 9);
    document.getElementById("output").innerHTML += luckySum(1, 2, 3);
    document.getElementById("output").innerHTML += maxBlock( "abbCCCddBBBxx");
    document.getElementById("output").innerHTML += linearIn([1, 2, 4, 6], [2, 3, 4]);
    document.getElementById("output").innerHTML += countTriple("abcXXXabc");
    document.getElementById("output").innerHTML += sameEnds("abXYab");
}

