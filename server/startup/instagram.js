import { Meteor } from 'meteor/meteor';
import { ServiceConfiguration } from 'meteor/service-configuration';

Meteor.startup(()=>{
    ServiceConfiguration.configurations.remove({
        service : 'instagram'
    });

    ServiceConfiguration.configurations.insert({
        service:'instagram',
        scope : ['basic'],
        clientId : Meteor.settings.loginProviders.INSTAGRAM.CLIENT_ID,
        secret : Meteor.settings.loginProviders.INSTAGRAM.SECRET
    });

});

