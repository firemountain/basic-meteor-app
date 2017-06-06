# "META"-meteor-app

## Overview
The key defining features of this app are
- **(1)** It abstracts the process of configuring collection schemas out of the server code and into the frontend, essentially allowing the user to use a client side form to create new collections in the db... and of course add objects to the collections as usual.

- **(2)** It enables the user to configure external API monitoring processes also using client side forms.

Essentially This app enables the user to define and manage collections and objects via client side forms. It is also able to pull data from external APIs to be inserted into the data structures that have been defined.

## Features
This app has the following main features: 

- It enables users to create and manage **```db.collection```(s)** and **```db.collection.object```(s)** via client side forms.

- **```db.collection```** schemas can be defined and created dynamically via client side forms. i am calling these **"generated collections"** 

- **```db.collection.object```** data within created **```db.collection```(s)** can be created, updated, and deleted manually via client side forms.

- **```db.collection.object```** data within the user "generated" **```db.collection```(s)** can **ALSO** be created and updated automatically via monitoring external APIs (by pulled values from the external API's JSON into our database, based on certain user defined paramters (see setting up "API monitor") )

- Dynamically generate new frontend views, and navbar links, when users "generate" new collections
 - populate those views with  **```db.collection.object```**  data as it is created (built into Meteor)

- to set user permissions of all app users via client side form submission

## Views
### Edit User Permissions View
- Gives Admin user a list of all users,
 - next to each username is a dropdown option to select the type of user permissions each user has, Options are : 
   - Admin
   - Manager
   - Normal
 
## Create new data scraper View
- this view presents Admin users with the ability to create a ```scraper``` object
the scraper object should have:
- ```Name```
- ```API-url```
- ```frequency``` // this is the cron job frequency and should be an hrs:minutes format, it will define the when our app checkes the API again to pull new data, ill refer to that in this doc as "monitoring the API"

## Create new collection view 


