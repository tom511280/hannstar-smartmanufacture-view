const state = {
    email:'',
    password:'',
    confirmPassword:'',
    member:'',
    memberName:'',
    memberImg:'',
    // 0 = success
    // 1 = email is empty
    // 2 = email format is fail
    // 3 = password is empty
    // 4 = email address does not exist
    // 5 = password is not valid
    errorCodeList:[]
  };
  
  export default state;
  