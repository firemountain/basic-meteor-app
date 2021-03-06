 
## Create Scraper 
 
On this view an Admin user can create a new ```db.scraper.{object}``` 
 
User is presented with a form where they will enter:
- The url of a JSON API to monitor
- The name of the new scraper
- The name of the new collection where the data pulled from the api will be stored 
- The fields (keys,properties etc.) in the JSON API to save to our db in the new collection. This is a textfield input where each field(key,property etc.) is entered on a new line 
- Which of these fields will be parsed as markdown
- Which of these fields is a “tagsArray”
 
When user hits “Create”:
- a the new scraper object is created
- a new collection, where scraped data will be stored, will be created
- A process will be launched, that will pull the targeted data fields in the JSON API into our db in the new collection, this process will run as a chron job at the hour interval defined by the user
- The fields (can be more than one) which have been selected to be parsed as markdown, will be parsed as markdown and we will save additional fields to the object, these will be arrays that will contain string values of each parsed markdown type
  - Example:
    - The the field marked to be parsed as markdown contains a string value, so we take that string and parse it as markdown, for each formatting type in the markdown we create a new array and save the formatted elements there. So if the string being parsed has 4 h1 headers then a name-of-field.h1: [ ]  array will contain all the values of the H1’s
      - We only need to look for:
        - Headers h1,h2,h3,h4,h5,h6
        - Links
- The field that is selected as the “tagsArray”, will save data to special collection property , that all collections will have, called “tagsArray” , which is an object array, with each object having a “Name” property. 

## Config file
Contains setup data for app including:
- Admin Username / password
- A list of the collections which will show in the navbar
  - Each collection will be given a list “tags” that will show up in ul class="categories container"  ONLY if they are contained in the tagArray for that collection.
  - Example of config 
  - https://github.com/firemountain/basic-meteor-app/blob/master/collectionsInConfig.json


## UI for app
 
This is the structure of the html / css / js for the UI. I have created the html layout to serve as a guide for how the final outcome of the app should be. You can see the navbar and tags that are shown in the config example above.
 
https://firemountain.github.io/
 
 
 ### Navbar
   The nav bar features top links for the collections we set in the config file. 
 
   It also features a drop down menu
   - For non-logged in users, the dropdown contains Login | Signup | About
   - For logged in users who are not admins, dropdown contains Logout | About
   - For logged in users who are admins, dropdown contains Create Scraper | User Permissions
 
 ### Collections Views
  - Hitting the navbar links for each collection causes the data to change on the page and show data relevant to the selected collection 

- #### div class="nav-header center"
  - In the ```<div class="nav-header center">``` The Collection Name is shown , and a button to launch a Create Object modal view (discussed below)
 
- #### ul class="categories container"
  - In the  ```<ul class="categories container">``` we will show the tagArray.name values on the collection that have been defined in the config file.
 
- ####  div class=”gallery”
  - In the ```<div class=”gallery”>``` all the data fields of each object in the collection will be  displayed within each ```<div class=”gallery-item”>``` 
 
  - ##### div class=”gallery-header” span AND div class=”title-wrapper h3
    - Will show the the object _id will be displayed in the 
 
  - ##### div class=”gallery-body
 
 
    - All the properties(fields) on each object, that are strings or integers will be listed, each as it’s own div within the div class=”gallery-body
      - **note**
        - arrays will have ul lists for the items
        - Values of properties within a property that contain an object will be saved as well
     
    - So for example, if the collection looked like this

```{
 
 
"DisplayName" : "Some User",
 
"Email" : "someone@gmail.com",
 
"SalesPeriod" : {
 
  "Start" : "Sat Jan 01 2011 00:00:00 GMT-0600 (Central Standard Time)",
 
  "End" : "Mon Jan 31 2011 00:00:00 GMT-0600 (Central Standard Time)"
 
  },
 
"_id" : ObjectId("a3287f033f98dc241e110000")
“tags” : [“apple”,”banana”,”pokemon”,12]
 
 
}```
 
The  HTML would end up looking like this

```
<div class="col l4 m6 s12 gallery-item gallery-expand gallery-filter tag1" style="position: absolute; left: 0px; top: 0px;">
  <div class="placeholder">
          <div class="gallery-curve-wrapper">
              <a class="gallery-cover gray">
                <img class="responsive-img" src="http://placehold.it/350x250" alt="placeholder">
              </a>
              
              <div class="gallery-header">
                <span>a3287f033f98dc241e110000</span>
              </div>
              
              <div class="gallery-body">
                
                  <div class="title-wrapper">
                    <h3>a3287f033f98dc241e110000</h3>
                    <span class="price">$29.99</span>
                  </div>

                  <div class="collectionName-DisplayName">Some User</div>
                  <div class="collectionName-Email"> "someone@gmail.com"</div>
                  <div class="collectionName-SalesPeriod-Start"> "Sat Jan 01 2011 00:00:00 GMT-0600 (Central Standard Time)",</div>
                  <div class="collectionName-SalesPeriod-End"> "Mon Jan 31 2011 00:00:00 GMT-0600 (Central Standard Time)"</div>
                  <div class="collectionName-_id"> ObjectId("a3287f033f98dc241e110000")</div>
                  <div class="tags">
                    <ul>
                      <li>Apple</li>
                      <li>Banana</li>
                      <li>pokemon</li>
                      <li>12</li>
                    </ul>
                  </div>
                    
              </div>
            
              <div class="gallery-action">
                <a class="btn-floating btn-large waves-effect waves-light"><i class="material-icons">favorite</i></a>
              </div>
          </div>
    </div>
</div>

```
https://github.com/firemountain/basic-meteor-app/blob/master/sample-gallery-item.html
 
 
