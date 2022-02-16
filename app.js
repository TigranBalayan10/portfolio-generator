const profileDataArgs = process.argv.slice(2, process.argv.lenght);

const printProfileData = profileDataArr => {

  console.log('================');

  // Is the same as this...
  profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs);


