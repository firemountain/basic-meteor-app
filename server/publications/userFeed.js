import { UserMedia } from '../../imports/api/user-media/user-media';

Meteor.publish( 'userFeed' , function ( userId ) {
    return UserMedia.find({
        ownerId : userId
    });
});
