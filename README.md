# Random

Basic data generator service
Based on [Chance.js](http://chancejs.com/) utility  
**Get request -> JSON response**

##Installation

Install application via

    sudo npm install
    
##Running the application
Run application via

    sudo npm start

The default port can be overriden with

    sudo PORT=80 npm start
    
##Usage

###Get request
    http://<hostname:port>/random
    
###Specify more than one result
This will 10 random generated data

    http://<hostname:port>/random?count=10


###Gender specification

    http://<hostname:port>/random?gender=f
    
This also work
  
    http://<hostname:port>/random?gender=female
That to

    http://<hostname:port>/random?gender=m
    
###Age specification

    http://<hostname:port>/random?minage=10&maxage=50
    
    
##Contribute!

Let's generate different type of data with flexible fields **Enjoy**!
