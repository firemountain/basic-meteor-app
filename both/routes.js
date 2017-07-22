FlowRouter.route('/',{
    action(){
        BlazeLayout.render( 'mainLayout' , {
            main : 'homepage'
        });
    },

    name: 'home'
});

FlowRouter.route('/parser',{
    action(){
        BlazeLayout.render( 'mainLayout' , {
            main : 'parser'
        });
    },

    name: 'parser'
});
