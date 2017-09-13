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


## fields we want to out put into the html template from example #1 
```
- images.standard_resolution.url: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/18812563_1535883333122449_2135064342041722880_n.jpg"
- caption.created_time: "1496553260",
- created_time: "1496553260"
- tags: ["selfie"],
- link: "https://www.instagram.com/p/BU59Dayhq34/",
- caption.text: "Face made when staring at the phone screen, same face I'm making now ✨🍄✨",
```

## fields we want to out put into the html template example #2 
```
-images.standard_resolution.url: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/18950380_112616532676321_3768085580282331136_n.jpg"
-caption.created_time: "1497311140",
-tags: ["crazybeautiful"]
-link: "https://www.instagram.com/p/BVQimIhhYyy/",
-caption.text: ". # Wood Flow . ## What did I find? . A #crazybeautiful piece of wood **spiraling** in the _woods_ . ## and 1. One 2. Two",
```      


** ## BUT we need to do some stuff with the caption.text **
we need to make a custom text parser to find different styles of formatting 

### note about line spaces...

we will use " . " to find line spaces 
so anywhere we find a " . " it is treated as a line space, *note* the leading and trailing spaces are important 

## finding and saving other elements

### saving elements
- for each type we find we save it to a new array property within "caption"
- so for e.g.
- caption.h1 : ["Wood Flow"]
- caption.h2 : ["What did I find?","and"]
- caption.emphasis : ["spiraling","woods"]
- caption.p ["# Wood Flow","## What did I find?","A #crazybeautiful piece of wood **spiraling** in the _woods_","## and 1. One 2. Two . $0.00"]



### finding elements
part of the parser will look for elements from github markdown style formatting
here is github style markdown cheatsheet https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet

of this style we will support 
- all the types of headers here, https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#headers
- all the types of emphasis here, https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#emphasis
- ordered lists, e.g. the first 1. 2. here https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#lists

additionaly:
text that has one or two or more "-" before and after will be saved to caption.h1[]
    - e.g. "--this is an h1--"

text that has three or more "-" before and after will be saved to caption.h2[]
    - e.g. "---this is an h2---"

text that is sandwiched between 1 or more of any of these emojis should be h1 
    - e.g. "🔶this is an h1🔶"  ...  "🔶🔶this is an h1🔶🔶" ... "◾️◾️This is an h1◾️◾️"
           
      2341	U+2B1B	⬛	⬛	⬛	⬛	⬛	⬛	⬛	⬛	⬛	—	—	—	⬛	black large square
      2342	U+2B1C	⬜	⬜	⬜	⬜	⬜	⬜	⬜	⬜	⬜	—	—	—	⬜	white large square
      2343	U+1F536	🔶	🔶	🔶	🔶	🔶	🔶	🔶	🔶	🔶	🔶	—	—	🔶	large orange diamond
      2344	U+1F537	🔷	🔷	🔷	🔷	🔷	🔷	🔷	🔷	🔷	🔷	—	—	🔷	large blue diamond
      2337	U+25FB	◻	◻	◻	◻	◻	◻	◻	◻	◻	◻	—	—	◻	white medium square
      2338	U+25FC	◼	◼	◼	◼	◼	◼	◼	◼	◼	◼	—	—	◼	black medium square
            


text that is sandwiched between 1 or more of any of these emojis should be h2 

      2335  U+25AA	▪	▪	▪	▪	▪	▪	▪	▪	▪	▪	—	—	▪	black small square
      2336	U+25AB	▫	▫	▫	▫	▫	▫	▫	▫	▫	▫	—	—	▫	white small square
      2339	U+25FD	◽	◽	◽	◽	◽	◽	◽	◽	◽	◽	—	—	◽	white medium-small square
      2340	U+25FE	◾	◾	◾	◾	◾	◾	◾	◾	◾	◾	—	—	◾	black medium-small square
      2345	U+1F538	🔸	🔸	🔸	🔸	🔸	🔸	🔸	🔸	🔸	🔸	—	—	🔸	small orange diamond
      2346	U+1F539	🔹	🔹	🔹	🔹	🔹	🔹	🔹	🔹	🔹	🔹	—	—	🔹	small blue diamond
         


caption.text between " . " will be saved as caption.p[], this is also true for the text at the end after the last " . " text at the beginning before the first " . "


### we need to get links 
- for links we will need to do further parsing, usign regex, and looking for "http://" and "www." to find the links 
    - links found will be saved sequentially in an array to a new property called caption.links :[]  

### We need to create a new property called "caption.title",
- the text value of this new property is either, the 1st "h1[]" OR "h2[]" found via the markdown parsing, 
- OR the first few words of the caption.text
    - the "first few words"  are found by at the the first 27 characters of the caption.text and getting only whole words that fit within that limit.
        - so for e.g. in the caption text for exmaple-1 above, the first 27 characters are "Face made when staring at t", we would remove the "t" and replace it with "...", and save "Face made when staring at ..." to a new property called "caption.title"


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
                
                /// below is a bit tricker becasue we need to break up the collection.caption.p[] into different divs and place the h1's, h2's, links, etc, correctly 

                <p><h1>{{collection.caption.h1[0]}}</h1></p>
                <p><h2>{{collection.caption.h2[0]}}</h2></p>
                <p>{{collection.caption.p[2]}}</p>
                <p><h2>{{collection.caption.h2[1]}}</h2><p>{{collection.caption.p[3]}}</p></p>
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
