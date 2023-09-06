function countOccurrences(str, char) {
  
    if (str.length === 0) {
      return 0;
    }
    
    
    const firstChar = str[0];
    const restOfString = str.slice(1);
    
    if (firstChar === char) {
      return 1 + countOccurrences(restOfString, char);
    } else {
      
      return countOccurrences(restOfString, char);
    }
  }
  
 // Пример 
  const str = "gigant";
  const char = "g";
  const count = countOccurrences(str, char);
  alert(`Символ "${char}" встречается ${count} раза.`);
  