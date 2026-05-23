let latter = prompt("Enter a letter:");

latter = latter.toLowerCase();
switch (latter) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log(latter + " is a vowel.");
      break;
      default:
        console.log(latter + " is a consonant.");

}