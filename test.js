function createDreamTeam(members) {
    members.forEach(name => {
      if(typeof name === 'string'){
        let arrTeam = [];
        arrTeam.push(name[0]);
        console.log(arrTeam)
        let stringTeam = arrTeam.join('');
        return stringTeam;
      } 
      console.log(stringTeam)
      return false;
    });
  }

  createDreamTeam(['Peter', 'Adam', 'Gary', 'Bobby', 'Philip', 'Andrea', 'Evelyn', 'Evelyn', 'Kimberly', 'Denise']);