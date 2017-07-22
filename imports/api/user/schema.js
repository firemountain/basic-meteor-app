import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const metaCollection = new SimpleSchema({
    name : {
        type : String,
        min  : 1
    },

    filters : {
        type : [String]
    }
});


const userSchema = new SimpleSchema({
    mainCollection : {
        type : metaCollection
    }
});
