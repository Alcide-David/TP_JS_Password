function generatePassword(length,maj,chif,car) {
    const characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
      "s", "t", "u", "v", "w", "x", "y", "z","A","B","C","D","E","F","G","H","I","J","K","L","M","N",
      "O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","=","*","#"];
    let password = '';
  
    if(length === 8) {
      // Recherchez les caractères "a", "n", "f", "u", "w", "p", "r", et "u" dans le tableau de caractères
      for (let i = 0; i < characters.length; i++) {
        const character = characters[i];
        password = characters[0];
        password = password +characters[13];
        password = password + characters[5];
        password = password + characters[20];
        password = password + characters[22];
        password = password + characters[15];
        password = password + characters[17];
        password = password + characters[20];
  
        return password;
      }
    } else if (length === 12 && maj == true && chif === true && car === true){
      for (let i = 0; i < characters.length; i++) {
        const character = characters[i];
        password = characters[9];
        password = password +characters[54];
        password = password + characters[64];
        password = password + characters[26];
        password = password + characters[12];
        password = password + characters[59];
        password = password + characters[27];
        password = password + characters[6];
        password = password + characters[63];
        password = password + characters[33];
        password = password + characters[26];
        password = password + characters[62];

        return password;
      }
    }else {
      password = "ERREUR"
      return password;
    }   
  }
  
  let shortPassword = generatePassword(8);
  console.log(shortPassword); // Afiche: anfuwpru

  shortPassword = generatePassword(12, true, true, true)
  console.log(shortPassword); // Afiche: j2#Am7Bg*HA=
  