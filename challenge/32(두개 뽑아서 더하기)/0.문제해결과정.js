var numbers = [5,0,2,7];

var result = [];
var answer =[];
var final =[];
for(i = 0; i< numbers.length-1;i++){
    for(j = 1; j< numbers.length ;j++){
        if(i!=j)result.push(numbers[i]+numbers[j])
    }
}
answer = result.sort((a,b)=>a-b);

for(i = 0; i<answer.length; i++){[2,5,7,7,9,12]
    if(answer[i]!== answer[i+1])final.push(answer[i])
} 


console.log(final);



1,2,3 number
0,1,2 index


0+1 
0+2
1+2