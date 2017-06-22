import { Mongo } from 'meteor/mongo';
import{ SimpleSchema } from 'meteor/aldeed:simple-schema';

export const UserMedia = new Mongo.Collection( 'user-media' );

const mediaData = new SimpleSchema({
    width : {
        type : Number
    },

    height : {
        type : Number
    },

    url : {
        type : String
    }
});


UserMedia.schema = new SimpleSchema({
    ownerId : {
        type : String
    },

    instagramID: {
        type: String
    },

    thumbnail: {
        type: mediaData
    },

    low_resolution: {
        type: mediaData
    },

    standard_resolution: {
        type: mediaData
    },

    created_time: {
        type: Number
    },

    caption: {
        type: String,
        optional:true
    },

    likes: {
        type: Number
    },

    userHasLiked : {
        type : Boolean
    },

    externalLink : {
        type : String
    }
});

UserMedia.attachSchema( UserMedia.schema );
