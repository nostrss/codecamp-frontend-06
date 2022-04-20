function solution(s, n) {
  var answer = [];
  for (i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      answer.push(' ');
    } else {
      // 대문자
      if (s.charCodeAt(i) <= 90) {
        if (s.charCodeAt(i) + n > 90) {
          answer.push(String.fromCharCode(s.charCodeAt(i) + n - 26));
        } else {
          answer.push(String.fromCharCode(s.charCodeAt(i) + n));
        }
      }
      // 소문자
      else if (s.charCodeAt(i) > 96) {
        if (s.charCodeAt(i) + n > 122) {
          answer.push(String.fromCharCode(s.charCodeAt(i) + n - 26));
        } else {
          answer.push(String.fromCharCode(s.charCodeAt(i) + n));
        }
      }
    }
  }
  return answer.join('');
}
