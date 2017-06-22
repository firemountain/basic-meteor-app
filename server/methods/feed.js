import { check } from 'meteor/check';

const InstagramAPI = require('instagram-api');
import { UserMedia } from '../../imports/api/user-media/user-media';

Meteor.methods({
    getUserFeed( userId ){
        check( userId , String);

        //get User access token
        let user = Meteor.users.findOne( userId );

        if( user ){
            user.getUserMedia();
        }
        else{
            console.log('no USER');
        }
    }
});
//https://api.instagram.com/v1/users/self/media/?access_token=274714944.25f3b9e.8844bec6c8f24afc9ae5cce8adcc2d09