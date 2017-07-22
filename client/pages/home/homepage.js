import { UserMedia } from '../../../imports/api/user-media/user-media';

Template.homepage.onCreated(function(){
    const templateContext = this;

    Deps.autorun(function(){
        const user = Meteor.user();

        if( user ){
            templateContext.subscribe( 'userFeed' , user._id );
        }
    });
});

Template.homepage.onRendered(function(){
    Meteor.setInterval(()=>{
        let grid = document.querySelector('.gallery.row');
        let msnry = new Masonry( grid, {
            itemSelector: '.gallery-item'
        });
    }, 800);

    Meteor.setTimeout(()=>{
        let onShow = function(el) {
            let carousel = el.find('.carousel.initialized');
            carousel.carousel({
                dist: 0,
                padding: 10
            });
        };

        $('.gallery-expand').galleryExpand({
            onShow: onShow
        });
    }, 1500);
});

Template.homepage.helpers({
    mediaItems : function () {
        return UserMedia.find();
    }
});