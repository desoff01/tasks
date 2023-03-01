//1.1
function firstLetterUp(str) {
    let tmp = str[0].toUpperCase();
    tmp += str.toLowerCase().slice(1);

    return tmp;
}

//1.2
let str = 'Вот пример  строки,в которой     используются знаки препинания.После   знаков должны стоять     пробелы , а перед знаками их быть не должно .    Если есть  лишние подряд   идущие пробелы, они должны быть устранены.';

function formatString(str) {
  str = str.replace(/(\p{Po})/gu, "$1 ");
  str = str.replace(/ +(\p{Po})/gu, "$1");

  return str.replace(/ +/g, ' ').trim();
}

//1.3
function countWords(str) {
  let arr = str.split(' ');
  return arr.length;
}

//1.4
function countUniqWords(str) {
  let tmp = str.replace(/(\p{Po})/gu, "");
  let arr = tmp.split(' ');
  let tmpArr = tmp.split(' ');
  let count;

  for(let i = 0; i < arr.length; i++) {
    count = 0;
    for(let j = 0; j < arr.length; j++) {
      if(arr[i] == arr[j]) {
        count++;
      }
    }
    if(count > 1)
      arr.splice(i, 1);
  }


  for(let i = 0; i < arr.length; i++) {
    count = 0;
    for(let j = 0; j < tmpArr.length; j++) {
      if(arr[i] == tmpArr[j]) {
        count++;
      }
    }
    console.log(arr[i] + ' - ' + count);
  }
}

countUniqWords("some test words for words test function some some.");
