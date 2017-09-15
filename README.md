## Config file 
will feature
- Admin Username / password
- A list of featured collections - these will be the collections which will show in navbar and be used with "collection views"
- Each collection will be given a list “tags” that will show up in ```<ul class="categories container">``` ONLY if they are contained in the tagArray defined for that collection. 

Example of config https://github.com/firemountain/basic-meteor-app/blob/master/collectionsInConfig.json


## User Login 
We wil use the meteor useraccounts system 


Users will be able to authenticate with instagram
https://github.com/yubozhao/meteor-accounts-instagram

## Getting Data from Instagram 

we will pull data into a collection called "ig-social-posts"


### API endpoint

IF a user authenticates with Instagram we will create an API monitoring process 

the data from the instagram api we want to get is 
https://www.instagram.com/developer/endpoints/users/#get_users_media_recent_self

you need to get an access_token from Instagram 

go to https://api.instagram.com/oauth/authorize/?client_id=92d306a2ca44464098e8ae3c0a128ee6&redirect_uri=http://localhost&response_type=token

and then enter it in this url 
https://api.instagram.com/v1/users/self/media/recent/?access_token=

you will get a response like this 

https://github.com/firemountain/basic-meteor-app/blob/master/example.json

### processing 

We want to check this API endpoint every 1 min for new data 

When there is new data we want to create or update the objects in "ig-social-posts"

## views

### Navbar
   The nav bar features top links for the collections we set in the config file. The first collection in the list is the "default collection"
 
   It also features a drop down menu
   - For non-logged in users, the dropdown contains Login | Signup | About
   - For logged in users who are not admins, dropdown contains Logout | About
   - For logged in users who are admins, dropdown contains Create Scraper 
 
### Collections Views
  - Hitting the navbar links for each collection causes the data to change on the page and show data relevant to the selected collection 

- #### nav-header ```<div class="nav-header center">```
  - In the ```<div class="nav-header center">``` The Collection Name is shown , and a button to launch a Create Object modal view (discussed below)
 
- #### categories container ```<ul class="categories container">```
  - In the  ```<ul class="categories container">``` we will show the tagArray.name values on the collection that have been defined in the config file.

### Gallery Items

these will display data in the collection.object


## Collection Objects

the following is a descritpion of how the "ig-social-posts" colleciton objects will display in the UI 

## exmaple #1 of an object in our "ig-social-posts" collection 

```
{
        id: "1535879627007167666_143984903",
        user: {
            id: "143984903",
            full_name: "Alexander🌛🌜Nazerian",
            profile_picture: "https://scontent.cdninstagram.com/t51.2885-19/s150x150/12976192_241422772878879_1235709196_a.jpg",
            username: "alexnazerian"
        },
        images: {
            thumbnail: {
                width: 150,
                height: 150,
                url: "https://scontent.cdninstagram.com/t51.2885-15/s150x150/e35/18950380_112616532676321_3768085580282331136_n.jpg"
            },
            low_resolution: {
                width: 320,
                height: 320,
                url: "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/18950380_112616532676321_3768085580282331136_n.jpg"
            },
            standard_resolution: {
                width: 640,
                height: 640,
                url: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/18950380_112616532676321_3768085580282331136_n.jpg"
            }
        },
        created_time: "1497311140",
        caption: {
            id: "17885851414003821",
            text: ". Wood Flow ======== . What did I find? --------------- . A #crazybeautiful piece of wood **spiraling** in the _woods_ . ## and 1. One 2. Two",
            created_time: "1497311140",
            from: {
                id: "143984903",
                full_name: "Alexander🌛🌜Nazerian",
                profile_picture: "https://scontent.cdninstagram.com/t51.2885-19/s150x150/12976192_241422772878879_1235709196_a.jpg",
                username: "alexnazerian"
            }
        },
        user_has_liked: false,
        likes: {
            count: 22
        },
        tags: [
            "crazybeautiful"
        ],
        filter: "Normal",
        comments: {
            count: 0
        },
        type: "image",
        link: "https://www.instagram.com/p/BVQimIhhYyy/",
        location: null,
        attribution: null,
        users_in_photo: []
    }
```
## example #2 of an object in our "ig-social-posts" collection 

```
     {
        id: "1529522064229576184_143984903",
        user: {
            id: "143984903",
            full_name: "Alexander🌛🌜Nazerian",
            profile_picture: "https://scontent.cdninstagram.com/t51.2885-19/s150x150/12976192_241422772878879_1235709196_a.jpg",
            username: "alexnazerian"
        },
        images: {
            thumbnail: {
                width: 150,
                height: 150,
                url: "https://scontent.cdninstagram.com/t51.2885-15/s150x150/e35/18812563_1535883333122449_2135064342041722880_n.jpg"
            },
            low_resolution: {
                width: 320,
                height: 320,
                url: "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/18812563_1535883333122449_2135064342041722880_n.jpg"
            },
            standard_resolution: {
                width: 640,
                height: 640,
                url: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/18812563_1535883333122449_2135064342041722880_n.jpg"
            }
        },
        created_time: "1496553260",
        caption: {
            id: "17872113622114009",
            text: "Face made when staring at the phone screen, same face I'm making now ✨🍄✨. #selfie",
            created_time: "1496553260",
            from: {
                id: "143984903",
                full_name: "Alexander🌛🌜Nazerian",
                profile_picture: "https://scontent.cdninstagram.com/t51.2885-19/s150x150/12976192_241422772878879_1235709196_a.jpg",
                username: "alexnazerian"
            }
        },
        user_has_liked: false,
        likes: {
            count: 182
        },
        tags: [
            "selfie"
        ],
        filter: "Normal",
        comments: {
            count: 10
        },
        type: "image",
        link: "https://www.instagram.com/p/BU59Dayhq34/",
        location: null,
        attribution: null,
        users_in_photo: []
    }
```


## fields we want to use in our html template from example #1 
* note, here i am showing just which data is relevant to the UI. 
```
- images.standard_resolution.url: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/18812563_1535883333122449_2135064342041722880_n.jpg"
- caption.created_time: "1496553260",
- created_time: "1496553260"
- tags: ["selfie"],
- link: "https://www.instagram.com/p/BU59Dayhq34/",
- caption.text: "Face made when staring at the phone screen, same face I'm making now ✨🍄✨",
```

## fields we want to use in our example #2 
```
-images.standard_resolution.url: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/18950380_112616532676321_3768085580282331136_n.jpg"
-caption.created_time: "1497311140",
-tags: ["crazybeautiful"]
-link: "https://www.instagram.com/p/BVQimIhhYyy/",
-caption.text: ". # Wood Flow . ## What did I find? . A #crazybeautiful piece of wood **spiraling** in the _woods_ . ## and 1. One 2. Two",
```      


## Parsing the "caption.text"
we need to make a custom text parser, that will looks at the caption.text to find different styles of formatting and save those to our db, so we can then output them to the UI in styled way. Bascially the input is the caption.text and the output is html elements. 

### Using the spaces and periods to determine "< p >" elements
We want to be able to be able to break the caption.text into paragraphs, and we want the user to be able to do this by using a simple mostly hidden format. this hidden format will be that user will use 2 spaces after a "." so, the parser will be looking for ".  " for e.g. 

"this is an example of 2 sentences. The second sentence is NOT a new paragrap." 
"this is an example of 2 sentences.  The second sentence IS a new paragraph."

notice how on the 2nd example, there are 2 speaces after "sentences.  " we want to teach instagram users that they can use this type of notation to create a new paragraph, or line break. 

### Title
Each Caption.text should have 1 title. 
- it shoudl be the first few words of the caption.text
    - the "first few words"  are found by at the the first 27 characters of the caption.text and getting only whole words that fit within that limit.
        - so for e.g. in the caption text for exmaple-1 above, the first 27 characters are "Face made when staring at t", we would remove the "t" and replace it with "...", and save "Face made when staring at ..." to a new property called "caption.title"
        


### we need to get links 
- for links within the caption.text we will need to do further parsing, usign regex, and looking for "http://" and "www." to find the links 
    - links found will be saved sequentially in an array to a new property called caption.links :[]  


### here is an example of how the template might look 

```
<div class="col l4 m6 s12 gallery-item gallery-expand gallery-filter {{collection}}-{{tag[]}}"> // the {{tag[]}} is all the values in tags[] that match the collection.tagArray. so, for e.g. this could be class="ig-social-posts-crazybeautiful", with "ig-social-posts" being the name of the colleciton, and "crazybeautiful" being a tag on the object 
        <div class="gallery-curve-wrapper">
            <a class="gallery-cover gray">
                <img src="{{collection.images.standard_resolution.url}}" alt="{{caption.title}}"> // note that the {{caption.title}} is used for the alt=""
            </a>
            <div class="gallery-header">
                <span>{{collection.caption.title}}</span> // caption.title 
            </div>
            
            <div class="gallery-body">
                <div class="title-wrapper">
                  <h3>{{collection.caption.title}}</h3>  // caption.title 
                  <span class="price">{{colleciton.caption.created_time}}</span>  // this needs to be in date format 
                </div>
                
                /// below is a bit tricker becasue we need to break up the collection.caption.p[] into different divs and place the links, correctly 

                <p>some text some text some text <a href src="http://www.link.com">www.link.com</a></p>
                <p>some text some text some text</p>
                <p>some text some <a href src="http://www.link.com">link.com</a> text some text </p>
                <p>some text some text some text</p>
            </div>
              
            <div class="gallery-action">
                <a class="btn-floating btn-large waves-effect waves-light"><i class="material-icons">favorite</i></a>
            </div>
        </div>
    </div>
</div>
```

### here is an example of the desired output from example post #2 

```
<div class="col l4 m6 s12 gallery-item gallery-expand gallery-filter ig-social-posts-crazybeautiful"><!--the {{tag[]}} is all the values in tags[] that match the collection.tagArray. so, for e.g. this could be class="ig-social-posts-crazybeautiful", with "ig-social-posts" being the name of the colleciton, and "crazybeautiful" being a tag on the object -->
        <div class="gallery-curve-wrapper">
            <a class="gallery-cover gray">
                <img src="https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/18950380_112616532676321_3768085580282331136_n.jpg" alt="Wood Flow"><!--note that the {{caption.title}} is used for the alt="" -->
            </a>
            <div class="gallery-header">
                <span>Wood Flow</span><!--caption.title  -->
            </div>
            
            <div class="gallery-body">
                <div class="title-wrapper">
                  <h3>Wood Flow</h3> <!--caption.title  -->
                  <span class="price">"June 12th 2017"</span> <!--this needs to be in a date format -->
                </div>

                <p><h1>"Wood Flow"</h1></p>
                <p><h2>"What did I find?"</h2></p>
                <p>"A #crazybeautiful piece of wood **spiraling** in the _woods_"</p>
                <p><h2>"and"</h2>1. One 2. Two</p>

               
                <div class="gallery-action">
                    <a class="btn-floating btn-large waves-effect waves-light"><i class="material-icons">favorite</i></a>
                </div>
            </div>
        </div>
</div>
```
## Other Collections 
for the other collections that are setup in the cofig the schema will mimic the "ig-social-posts" collection 

## Create Object in Collection

this will give the user a form to create a collection object 

for the gallery-body form add a wysiwyg editor that is stripped down to just 
- h1,h2,h3,h4,h5
- bold
- italic
- lists 


## Edit Collection Object 
clicking the heart icon on a gallery-item will give user a form to edit the object 
