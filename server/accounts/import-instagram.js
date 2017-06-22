Accounts.onCreateUser(( options , user )=>{
    //get instagram items
    //user.getUserMedia();

    console.log(" user param : " , user );

    Meteor.defer(()=>{
       let newUser = Meteor.users.findOne( user._id );
       newUser.getUserMedia();
    });

    return user;
});