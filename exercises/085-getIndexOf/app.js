// Write your function here
const getIndexOf = (char, str) => {
  
    if (!str.includes(char)) return -1;

  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    if (element == char) {
      return i;
    }
  }
};

console.log(getIndexOf("a", "I am a hacker"));
