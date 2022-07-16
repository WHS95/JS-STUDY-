// array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
// divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

// 제한사항
// arr은 자연수를 담은 배열입니다.
// 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
// divisor는 자연수입니다.
// array는 길이 1 이상인 배열입니다.
// 입출력 예
// arr	divisor	return
// [5, 9, 7, 10]	5	[5, 10]
// [2, 36, 1, 3]	1	[1, 2, 3, 36]
// [3,2,6]	10	[-1]
// 입출력 예 설명
// 입출력 예#1
// arr의 원소 중 5로 나누어 떨어지는 원소는 5와 10입니다. 따라서 [5, 10]을 리턴합니다.

// 입출력 예#2
// arr의 모든 원소는 1으로 나누어 떨어집니다. 원소를 오름차순으로 정렬해 [1, 2, 3, 36]을 리턴합니다.

// 입출력 예#3
// // 3, 2, 6은 10으로 나누어 떨어지지 않습니다. 나누어 떨어지는 원소가 없으므로 [-1]을 리턴합니다.

//arr 값을 divisor값으로 나누고 나머지가 0인값들로만 다시 돌려 보낸다.
//나머지가 0인값들이 없으면 -1을한다.

let arr = [3, 2, 6];
let diviso = 10;

var result = [];
for (i = 0; i < arr.length; i++) {
  if (arr[i] % diviso === 0) result.push(arr[i]);
  //arr배열 인덱스 값을 diviso로 나누었을때 나머지가 없는것들만 배열로 다시 부여한다.
  if (result.length === 0) result.push(-1);
  //result 배열에 인덱스가 아무것도 없을때 length는 0이므로
  //0일경우 -1배열값을 넣어준다.
}

result.sort((a, b) => a - b);

console.log(result);
