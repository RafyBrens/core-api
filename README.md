# Rise Vision API

## Introduction

Rise Vision API exposes our [Rise Vision](http://rva.risevision.com) core functionalities through a RESTful web service built using [Google Cloud Endpoints](https://developers.google.com/appengine/docs/java/endpoints/) from Google App Engine.   

This project was created to help those who may use the API to understand it through its [documentation](https://github.com/Rise-Vision/core-api/wiki) and an [interactive console](http://rise-vision.github.io/core-api/) as a live sample code.

The [documentation](https://github.com/Rise-Vision/core-api/wiki) is kept on the Wiki while the [interactive console](http://rise-vision.github.io/core-api/) is running on a github page. 

Our main purpose is that while you are reading up the [documentation](https://github.com/Rise-Vision/core-api/wiki) you can also try it out. Moreover you are free to use the [interactive console](http://rise-vision.github.io/core-api/) source code in your apps. Feel free to copy it!!!

If you know what you are doing you can perfectly use the [interactive console](http://rise-vision.github.io/core-api/) to manage your [Rise Vision](http://rva.risevision.com) account as well. 

Furthermore, you can help us to improve it. You are more then welcome to become a contributor or either suggest improvements. Please Fork and send us a pull request. If we consider your changes relevant to the time being, we will definitely merge it.      

Rise Vision API works in conjunction with [Rise Vision](http://www.risevision.com), the [digital signage management application](http://rva.risevision.com/) that runs on [Google Cloud](https://cloud.google.com).

At this time Chrome is the only browser that this project and Rise Vision supports.

## Built With

- [Google APIs Client Library for JavaScript](https://developers.google.com/api-client-library/javascript/)
- [RiseVision Common Style](https://github.com/Rise-Vision/common-style)
- HTML 5
- JavaScript


## Development
 
 To make calls to Google Cloud Endpoits the Google Javascript Client API needs to be setup with a valid client id which comes from an app created on Google App Engine.
 
 The client id is configured with a javascript origin attribute.This tights up a client id with the domain url of the server in which the Google JavaScript Client API runs. 
 
 For instance, if I run the [interactive console](http://rise-vision.github.io/core-api/) on my local apache server. I will have to use a client id which the attribute javascript_origin is set to http://localhost.


### Local Development Environment Setup and Installation


#### Linux


* clone the repo using Git to your local:
```bash
git clone https://github.com/Rise-Vision/core-api.git
```

* cd into the javascript folder in the repo directory
```bash
cd core-api/javascript
```

* edit auth.js file with your favorite editor
```bash
vi auth.js
```

* uncomment CLIENT_ID for localhost origin
```javascript
//var CLIENT_ID = '1078646427254-mb590bbaki7a6qlr7rsoq2cc76rn0d42.apps.googleusercontent.com'; //CLIENT_ID for local development
```

* comment out CLIENT_ID for github pages
```javascript
var CLIENT_ID = '1039315471777-oqrb8m2qfkrfp2hv2f9dta5jf72ob72p.apps.googleusercontent.com'; // CLIENT_ID for github pages
```
* save your changes

* Go to "Run Client" section in readme to see how to run this app.

#### Windows 

* in git bash run this cmd at where you want the repo to be cloned to locally:
```bash
git clone https://github.com/Rise-Vision/storage-client.git
```

* navigate to the javascript folder in the repo directory

* edit auth.js file with your favorite editor  

* uncomment CLIENT_ID for localhost origin
```javascript
//var CLIENT_ID = '1078646427254-mb590bbaki7a6qlr7rsoq2cc76rn0d42.apps.googleusercontent.com'; //CLIENT_ID for local development
```

* comment out CLIENT_ID for github pages
```javascript
var CLIENT_ID = '1039315471777-oqrb8m2qfkrfp2hv2f9dta5jf72ob72p.apps.googleusercontent.com'; // CLIENT_ID for github pages
```
* save your changes

* Go to "Run Client" section in readme to see how to run this app.

### Run Client
 To run the application you will need to deploy it to a web server such as the Apache Http Server. It must be configured to serve the application on http://localhost. 
 We will not explain here how to setup such server. We consider you already know how to do that. 

* deploy the application to the web server

* application should be running on [http://localhost](http://localhost)

### Dependencies

### Testing Setup and Use

## Submitting Issues 
If you encounter problems or find defects we really want to hear about them. If you could take the time to add them as issues to this Repository it would be most appreciated. When reporting issues please use the following format where applciable:

**Reproduction Steps**

1. did this
2. then that
3. followed by this (screenshots / video captures always help)

**Expected Results**

What you expected to happen.

**Actual Results**

What actually happened. (screenshots / video captures always help)

## Contributing
All contributions are greatly appreciated and welcome! If you would first like to sound out your contribution ideas please post your thoughts to our [community](http://community.risevision.com), otherwise submit a pull request and we will do our best to incorporate it

### Suggested Contributions
* Add a load spinner for when clicking on the Execute button. 

## Resources
If you have any questions or problems please don't hesitate to join our lively and responsive community at http://community.risevision.com.

If you are looking for user documentation on Rise Vision please see http://www.risevision.com/help/users/

If you would like more information on developing applications for Rise Vision please visit http://www.risevision.com/help/developers/. 




**Facilitator**

[Alexey Konovalov](https://github.com/alexey-rise "Alexey Konovalov") & [Rodrigo Serviuc Pavezi](https://github.com/rodrigopavezi "Rodrigo Serviuc Pavezi")
