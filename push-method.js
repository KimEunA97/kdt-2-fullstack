// 문자열을 조립하는 함수를 만들었다.
// 실행부분에서 매개변수 두개 모두 문자열이어야만 실행되도록 버그발생 여지를 줄였다.
function elementMakerOne(content, tagName) {
  if(typeof (content) === "string" && typeof (tagName) === "string") {
    return `<${tagName}> content </${tagName}>`;
  } else {
    new Error("매개변수 두개 모두 문자열이어야 합니다.");
  }
}
// 반복문을 사용하여 '만들어진 문자열'을 배열에 담고자
// 배열을 '초기화' 했다.
// 반복횟수를 변수에 담아 별도로 관리하고자 했다.
const paperOrderOne = [];
const countOne = 10;

for (let i = 0; i < countOne; i++) {
  // 반복문은 elementMakerOne()이라는 함수를 실행한 데이터를
  // result라는 변수에 담는다.
  // 만약 elementMakerOne()의 함수가 리턴이 없다면, undefined가 담긴다.
  // 의도하지 않게 undefined가 담기기 때문에 꼼꼼히 확인해야 한다.

  let result = elementMakerOne(`example-${i+1}`, "div");
  // 함수를 실행한 반환값을 변수 result에 담아 push()라는 메서드를 통해 배열에 담는다.
  paperOrderOne.push(result);
}

console.log(paperOrderOne);