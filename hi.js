//to produce age from birthday
function calculateAge(birthDate) {
    // Get the current date
    const today = new Date();
  
    // Calculate the time difference between today and the birth date
    const ageInMilliseconds = today.getTime() - birthDate.getTime();
  
    // Convert milliseconds to years and round down to the nearest whole year
    const ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));
  
    return ageInYears;
  }
  
  // Example usage
  const birthday = new Date(1980, 06, 15); // June 15, 1980
  const age = calculateAge(birthday);
  console.log("Age:", age); // Output: 43
  