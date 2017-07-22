

const InstagramAPI = require('instagram-api');

import { UserMedia } from '../imports/api/user-media/user-media';

Meteor.users.helpers({
    getUserMedia(){
        const endpoint = new InstagramAPI( this.services.instagram.accessToken );
        const user = this;

        endpoint.userSelfMedia({ count: 100 })
            .then(Meteor.bindEnvironment(function( response ){
                response.data.forEach((item)=>{
                    const insertObj = {
                        instagramID         : item.id,
                        ownerId             : user._id,
                        thumbnail           : item.images.thumbnail,
                        low_resolution      : item.images.low_resolution,
                        standard_resolution : item.images.standard_resolution,
                        caption             : item.caption && item.caption.text,
                        created_time        : item.created_time,
                        likes               : item.likes.count,
                        userHasLiked        : item.user_has_liked,
                        externalLink        : item.link,
                    };

                    UserMedia.insert( insertObj );
                })
            }))
            .catch(function( error ){
                console.error('error : ' , error );
            });

    },

    subscribeToInstagram(){

    },

    getUserMediaQuery( size = 0 , page = 0 ){

    }
});