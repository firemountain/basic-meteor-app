FlowRouter.route('/',{
    action(){
        BlazeLayout.render( 'mainLayout' , {
            main : 'homepage'
        });
    },

    name: 'home'
});
