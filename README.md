# "META"-meteor-app

The key defining feature of this 
Enables users to create and manage collections and objects via client side forms, and pull data to be inserted into the data structures that have been defined from external JSON APIs that are continuously monitored.  

This app has the following main characteristics: 

- It enables users to create and manage **```db.collection```(s)** and **```db.collection.object```(s)** via client side forms.

- **```db.collection```** schemas can be defined dynamically via client side forms. i am calling these **"generated collections"**

- **```db.collection.object```** data within created **```db.collection```(s)** can be created, updated, and deleted manually via client side forms.

- **```db.collection.object```** data within the user "generated" **```db.collection```(s)** can **ALSO** be created and updated automatically via monitoring external APIs (by pulled values from the external API's JSON into our database, based on certain user defined paramters (see setting up "API monitor") )

- Dynamically generate new frontend views, and navbar links, when users "generate" new collections
 - populate those views with  **```db.collection.object```**  data as it is created (built into Meteor)





- to set user permissions of all app users via client side form submission
