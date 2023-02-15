function convertScoreToGrade(score) {
  // your code here
  if (score > 100 || score < 0) {
    return "INVALID SCORE";
  } else if (score <= 100 && score >= 90) {
    return "A";
  } else if (score < 90 && score > 79) {
    return "B";
  } else if (score < 80 && score > 69) {
    return "C";
  } else if (score < 70 && score > 59) {
    return "D";
  } else {
    return "F";
  }
}

let output = convertScoreToGrade(91);
console.log(output); // --> 'A'
