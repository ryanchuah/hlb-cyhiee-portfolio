Note that since the code included in this repository is only a portfolio version, the CMS code that is integrated into this website is excluded. Therefore, only the **CYHIEE Website Installation and Access** part of this README will be relevant.

# Index

1. [Overview of Deployment of Website and CMS](#overview-of-deployment-of-website-and-cms)
2. [CYHIEE Website Installation and Access](#cyhiee-website-installation-and-access)
    1. [Setup Node Js on Ubuntu](#1-set-up-nodejs-on-ubuntu-1604)
    2. [Deploy CYHIEE Website](#2-deploy-cyhiee-website)
    3. [Access CYHIEE Website](#3-access-cyhiee-website)
3. [Content Management System (CMS) Installation and Access](#content-management-system-cms-installation-and-access)
    1. [Set up Strapi on Ubuntu](#1-set-up-strapi-on-ubuntu)
    2. [Set up MongoDB on Ubuntu](#2-set-up-mongodb-on-ubuntu-1604-or-1804)
    3. [Import data into local MongoDB server](#3-import-data-into-local-mongodb-server)
4. [Working with our CMS](#working-with-our-cms)
5. [Exporting Sign-up Data to CSV](#exporting-sign-up-data-to-csv)


# Overview of Deployment of Website and CMS


These tutorials are specifically meant for computers running on Ubuntu. They are detailed tutorials that you should be able to follow exactly if your server is running on Ubuntu. **If you are running on Ubuntu, you may skip to [CYHIEE Website Installation and Access](#cyhiee-website-installation-and-access)**. 

If you're using a different operating system (OS), the tutorials will not work as different operating systems use different commands. However, the overview of the deployment is the same regardless of operating system. The following are the general steps for deployment on any OS, including any Ubuntu version. 

## 1. CYHIEE Website Deployment

### Step 1: Install Node js
For any OS, the Node js installation process has detailed instructions online. Once Node js is installed, check to make sure that NPM is installed as well (this should be automatically installed with Node js)

### Step 2: Download website files
Extract the files into a new folder if necessary

### Step 3: Install dependencies and Start Server
1. Navigate into the root (parent) folder of the website code then install server dependencies by running `npm install` in the terminal
2. Navigate into the "client" folder then install client dependencies by running `npm install` in the terminal
3. Navigate back into the parent folder then start the server by running `npm run dev` in the terminal

### Step 4: Determine the Server's IP address
The IP address should look something like 10.120.7.55. This documentation will assume that the IP address is **10.120.7.55**.

### Step 5: Connect to the server from another computer
1. From another computer, open a web browser and type in `http://10.120.7.55:3000` 
2. You should now be connected to the website

## 2. CMS Deployment
### Step 1: Install Strapi
Please make sure Node.js and npm are properly installed on your machine. Run 
> $ npm install strapi@beta -g

### Step 2: Install MongoDB
For any OS, the MongoDB installation process has detailed instructions online.

### Step 3: Import data from MongoDB Cloud to local MongoDB
Follow the tutorial [Import data into local MongoDB server](#3-import-data-into-local-mongodb-server). The steps in this tutorial should work in all OS.

### Step 4: Working with the CMS
Follow the tutorial [Navigate to our CMS](#4-navigate-to-our-cms). The steps in this tutorial should work in all OS.


# CYHIEE Website Installation and Access


> Note: The following guide has only been tested on an Ubuntu 16.04 server running 32-bit architecture. 

>If you are running a different version of Ubuntu, or are using 64-bit architecture, this guide will still be relevant and can be followed quite closely.

## 1. Set up Node.js on Ubuntu 16.04

### Update Current Package Lists
Run
>$ sudo apt-get update

If error `sudo: unable to resolve host [hostname]` occurs,
1. Run
	>$ sudo nano /etc/hosts

2. Under the list of IP addresses, add `127.0.1.1  [hostname]`
3. Enter Ctrl-X then press Y when prompted to save your file
4. Run
	>$ sudo rm -rf /var/lib/apt/lists/*  
	$ sudo apt-get update

### Install Node.js v8.x.x
#### Step 1: Add Node.js PPA
Node,js versions 10.x.x and after do not support 32-bit computers. Therefore, we will be installing Node.js v8.x.x
Run

>$ sudo apt-get install curl  
$ sudo curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -

#### Step 2: Install Node.js on Ubuntu
Run 
>$ sudo apt-get install -y nodejs
>
If error `The repository 'http://ppa.launchpad.net/kazam-team/stable-series/ubuntu xenial Release' does not have a Release file.` occurs, refer to [Step 2 and Step 3 Error Handling](#step-2-and-step-3-error-handling-skip-if-no-error)

#### Step 3: Check Node.js Version
Run
> $ node -v  
v8.x.x

If error `
The program 'node' is currently not installed. You can install it by typing:
sudo apt install nodejs-legacy` occurs, run
>$ sudo ln -s /usr/bin/nodejs /usr/bin/node  
$ node -v  
v8.x.x

If `v8.x.x` is not outputted (i.e. if an older version of node is outputted), refer to [Step 2 and Step 3 Error Handling](#step-2-and-step-3-error-handling-skip-if-no-error)

#### _Step 2 and Step 3 Error Handling (skip if no error)_
1. Run
	>$ sudo add-apt-repository -y -r ppa:kazam-team/stable-series  
	$ sudo rm -f /etc/apt/sources.list.d/kazam-team-stable-series-*.list
	
2. Then run
	>$ sudo curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -  
	$ sudo apt-get install -y nodejs
	
3. Check version
	> $ node -v  
	v8.x.x

If `v8.x.x` is not outputted (ie if an older version of node is still being outputted), follow the guide [here](https://askubuntu.com/a/786279)

#### Step 4: Check NPM Version
Run
> $ npm -v  
x.x.x

If `x.x.x` is not outputted, run
>$ sudo apt install npm

## 2. Deploy CYHIEE Website
### Download website files

Navigate to the appropriate storage website and download the CYHIEE website folder. Extract the files if necessary (extract into a new folder). This documentation will assume that the folder containing the website files is named **CYHIEE-folder**. You can use any name you wish.

 ### Install dependencies
 1. Navigate into CYHIEE-folder using the terminal 
	  (or open CYHIEE-folder using the file explorer, right-click on 		any empty space then click on 'Open in terminal')
2. Install server dependencies
> $ npm install
3. Navigate into client folder 
>$ cd client
4. Install client dependencies
>$ npm install
6. Return to parent folder
>$ cd ..
7. Run server
>$ npm run dev

## 3. Access CYHIEE Website
### Determine the Ubuntu server's IP address
1. In the terminal, run
>$ ifconfig

2. Under the `Link encap: Ethernet` section, look for the server's IP address (should be something like 10.120.7.55). This documentation will assume that the IP address is **10.120.7.55**.

### Connect to the server from another computer

**Extra information**: The website code is split into two, the server side, and the client side. The server side runs on port 5000, and the client side runs on port 3000 by default. We will connect to the client side (port 3000). The client side will connect to the server side for any data requests.
1. From another computer, open a web browser and type in `http://10.120.7.55:3000` 
2. You should now be connected to the website
 
# Content Management System (CMS) Installation and Access

## 1. Set up Strapi on Ubuntu 
Please make sure Node.js and npm are properly installed on your machine.

1. Install Strapi. Run 
    > $ npm install strapi@beta -g
2. Navigate to the appropriate storage website and download the Strapi folder. Extract the files if necessary (extract into a new folder). This documentation will assume that the folder containing the website files is named **strapi-folder**. You can use any name you wish.
3. Install dependencies
	1. Navigate into strapi-folder using the terminal 
	  (or open strapi-folder using the file explorer, right-click on 		any empty space then click on 'Open in terminal')
	2. Install dependencies. Run
		> $ npm install

## 2. Set up MongoDB on Ubuntu 16.04 or 18.04
Follow the guide [here](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/#install-mongodb-community-edition-using-deb-packages) and select your version of Ubuntu in the guide.

## 3. Import data into local MongoDB server
Currently, the data of the CMS is stored in a MongoDB Cloud server. We need to import this data to our local MongoDB.

1. Start local MongoDB server
	>$ sudo service mongod start
2.   Verify that the mongod process has started successfully by checking the contents of the log file at **/var/log/mongodb/mongod.log** for a line reading `[initandlisten] waiting for connections on port 27017`
		1. Run
			>$ sudo gedit /var/log/mongodb/mongod.log
		2. Press Ctrl + F to  search for the line above
3. Then, we will import the Strapi database located in our Cloud MongoDB server to our computer. Ensure that your terminal is pointing to your home directory. This is the default directory that your terminal starts in.  Run
	>$ `mongodump --host CYHIEE-CMS-shard-0/cyhiee-cms-shard-00-00-6j11r.mongodb.net:27017,cyhiee-cms-shard-00-01-6j11r.mongodb.net:27017,cyhiee-cms-shard-00-02-6j11r.mongodb.net:27017 --ssl --username admin --password hlbstaff --authenticationDatabase admin --db strapi`
	
	This creates a folder `dump` in our home directory containing our imported database.
	
	Note that the password at the time of writing is `hlbstaff`. Change `hlbstaff` to the current password if the MongoDB Cloud password has changed.
4. Restore the imported database into our local MongoDB server.
	> $ mongorestore dump/
5. Check if the restoration is successful
	1. Enter the mongo shell. Run
		>$ mongo
	2. Navigate to the strapi database
		>\> use strapi
	3. Check if content of Winners collection contains data. Run
		>\> db.winner.find().pretty()
	
	You should see three winners being outputted (each winner is contained within curly braces. Eg
	>{
	"_id" : ObjectId("5d4a38dd2fdb402810fbf2cc"),
	"teamName" : "One Click",
	"summary" : "We propose an e-submission system for all products. For example, sales staff will be able to submit applications through digital mediums under one platform. This improves efficiency, reduces cost and saves time that would be squandered on filling up paper forms.",
	"placement" : 1,
	"createdAt" : ISODate("2019-08-07T02:35:09.346Z"),
	"updatedAt" : ISODate("2019-08-07T03:37:30.343Z"),
	"__v" : 0,
	"id" : "5d4a38dd2fdb402810fbf2cc",
	"section" : ObjectId("5d49499819c0050017a785a7")
}


## 4. Navigate to our CMS
Navigate into strapi-folder using the terminal 
	  (or open strapi-folder using the file explorer, right-click on 		any empty space then click on 'Open in terminal')

Run 
> $ strapi start

# Working with our CMS

## Information

### 1. Crucial information
1. **Content types** are groups of data, and can be navigated using the side navigation bar.
2. All images uploaded must be compressed to the smallest possible file size. There are many online tools to do this.

### 2. General information
1. Our CMS is powered by Strapi v3.0.0-beta.14, an open source CMS. 
2. Some features such as Content Type Builder is disabled. 
	- This means that you **cannot** build new content types. You will not need this functionality as you only need to add and remove data under each already-built content type.
	- This feature is only enabled in development mode, which should only be accessed by a developer.
	
## Editing the Homepage
The Homepage is the landing page of the CYHIEE website. The only content types related to the Homepage are 
1. Sections 
2. Winners

### 1. Sections
Section content types represent individual sections of the Homepage.  **Do not add more sections.  The data here must be overwritten in order  to update the homepage.** There must always be exactly 4 sections:
1. [Hero](#11-hero-section)
2. [Map](#12-map-section)
3. [Winner](#13-winner-section)
4. [Gallery](#14-gallery-section)

#### 1.1 Hero section
The hero section is the section containing the hero image, which is a large web banner image. This is the first section of the Homepage.
- Only the sections
	1. **BackgroundImage** and 
	2. **BackgroundImageMobile** 
	
	can be updated. **Do not update any other field.**

**BackgroundImage**: the hero image that is displayed on large screens  
**BackgroundImageMobile**: the hero image that is displayed on mobile

#### 1.2 Map section
The map section is the section containing the map of Malaysia.
- Only the sections
	1. **Title** and 
	2. **Subtitle**
	
	can be updated. **Do not update any other field.**
	
**Title**: The header text of the section  
**Subtitle**: The paragraph text of the section

#### 1.3 Winner section
The winner section is the section containing the Winner Cards. A Card is a box containing an image and text.
- Only the sections
	1. **Title** 
	2. **Subtitle**,
	3. **BackgroundImage** and
	4. **Winners**
	
	can be updated. **Do not update any other field.**
	
**Title**: The header text of the section  
**Subtitle**: The sub-header text of the section  
**BackgroundImage**: The background image that is displayed on all screen sizes  
**Winners**: The **Winners** field here refers to [Winner content types](#winners). This means that you must add winners under the [Winner content types](#winners), then add those "winners" to the **Winners** field in this section. You must add exactly 3 "Winner content types" to this field.

**Note:** This concept of creating data in various content types, then linking that data to another content type is an important and recurring concept. Thus, ensure that you understand how the **Winners** field works before proceeding.

#### 1.4 Gallery section
The gallery section is the section containing the slideshow of images.
- Only the sections
	1. **Title** 
	2. **Subtitle** and
	3. **Images**
	
	can be updated. **Do not update any other field.**
	
**Title**: The header text of the section  
**Subtitle**: The sub-header text of the section  
**Images**: The images to be displayed in the slideshow. These images must share the exact same dimensions, and should be rectangular. If your images are not rectangular, we suggest that you combine multiple (3-5) images into a collage to produce one rectangular picture

### 2. Winners
Winner content types represent Winner Cards, which are linked to the [Winners Section](#winner-section) (explained above)

**TeamName**: The name of the team  
**Summary**: A brief summary of the team's idea. The length of the summary for all 3 winning teams should be more or less equal in length, as this will allow each individual Winner Card to look uniform on the website. However, this is not mandatory.  
**Placement**: A number between 1 and 3 inclusive representing the placement of the team  
**WinnerImage**: The image of the team
**Section**: Here, you **must** select [Winners](#winner-section). This allows the [Winners Section](#winner-section) to be linked to this content type.

___

>**Now that we've reached the end of  [Editing the Homepage](#editing-the-homepage), there is an important point to note**: We saw that the [Sections](#sections) content type contained many different types of data. For example, the Hero Section is a data type consisting of **BackgroundImage** and **BackgroundImageMobile**, whereas the Gallery Section is a data type composed of **Title**, **Subtitle**, and **Images**. 

>This is a flaw in design. Each content type should only house data containing one type of data. A good example of this is the [Winners](#winners) content type. Here, each and every Winner is composed of **TeamName**, **Summary**, **Placement**, and **WinnerImage**.

>(_This flaw in design occurred because I, the developer, wanted to decrease the amount of content types to allow easier navigation in the side navigation bar. In hindsight, this should have been avoided_)

>It is **aboslutely crucial** to understand that the [Sections](#sections) content type is the only content type containing multiple data types. This will avoid much confusion throughout this documentation.
 
 ## Editing the Year Pages
 The Year Pages are the pages of each individual year, starting from the year 2019. The only content types related to the Year Pages are

1. [Years](#1-years)
2. [Yearheroes](#2-yearheroes)
3. [Yearstatistics](#3-yearstatistics)
4. [Yearjudges](#4-yearjudges)
5. [Yearmentors](#5-yearmentors)

### 1. Years
Year content types represent the Year Pages (see above for definition of Year pages) themselves.

**Year**: The year of the Year Page  
**TitleStatistics**: The title of the Statistics section of the Year Page  
**TitleJudgesAndMentors**: The title of the Judges and Mentors section of the Year Page  
**SubtitleRegionalJudges**: The title of the Judges section of the Judges and Mentors section of the Year Page  
**SubtitleMentors**: The title of the Mentors section of the Judges and Mentors section of the Year Page  
**TitleParticipants**: The title of the Participants section of the Year Page  
**ParticipantInfoSpreadsheet**: An .xlsx spreadsheet containing all participant information. 
- Ensure that the .xlsx file is formatted exactly as the year 2019's ParticipantInfoSpreadsheet. This means that the column names must match exactly, and any empty cells must be filled with a hyphen. 
- The order of rows will be the order displayed on the website, so make sure that the winners' rows come before other participant rows. 
- Make sure to clear all formatting in the excel sheet before uploading as this will ensure the smallest possible file size.

**IsComingSoon**: If this value is switched on, only the Yearhero content type of the Year Page will be displayed on the website. Use this hero section to display a title such as "More information will be coming soon".   
**YearStatistics, YearHero, YearJudges, Yearmentors**: The respective content types that will be linked to the Year Page


### 2. Yearheroes
Yearhero content type represents the hero section of each year.

**Year**: The year of the Year Page that will be linked to this Yearhero  
**Title**: The large header text that will be displayed inside the Yearhero  
**Subtitle**: The smaller header text that will be displayed inside Yearhero  
**BackgroundImage**: The background image that is displayed on all screen sizes  
**OverlayConfig**: The colour stops and direction of colour stops to be overlaid on the BackgroundImage (if the BackgroundImage is set), or to be used as the background of the Yearhero Title and Subtitle. 
The format is  
`<direction>-<colour stop 1>-<colour stop 2>-...-<colour stop n>`
- **direction**: The direction (in degrees) that the colour stops will follow. The direction is in relation to the y-axis. 
For example, if the direction given is 0 degrees, the colour stops will be applied from bottom to top. If the direction given is 90 degrees, the colour stops will be applied from left to right.
- **colour stop**: An RGBA value representing a colour. Multiple colour stops will produce a colour gradient.
For example, if two colour stops are used (you may use as many colour stops as you wish), and the RGBA values represent red and orange respectively, an overlay will be produced with a colour gradient that transitions from red to orange.

For example,  
`180 - 50, 150, 50, 0.965 - 180, 8, 180, 0.807`  
will produce a colour gradient from top to bottom, transitioning from green (`RGBA = 50, 150, 50, 0.965`) to purple (`RGBA = 180, 8, 180, 0.807`), with increasing transparency from top to bottom (because the value of `A` in `RGBA` decreases).

### 3. Yearstatistics
Yearstatistics content type represents each individual Statistic in the Statistics section of the Year Page. A Statistic is composed of an image and text underneath the image.

**Year**: The year of the Year Page that will be linked to this Statistic  
**Description**: The text that will appear under the Image. To bold words, surround the words with \<b> and \</b>.  
For example, 
>"Participants from over \<b>30 regions\</b> across Malaysia" 

will be displayed as 
>"Participants from over <b>30 regions</b> across Malaysia"

**Image**: The image (graphic) of the Statistic.  
**Label**: A name given to each Statistic. This name will be used to link the Statistic to the Year Page.  
**Yearpage**: The Year Page that the Statistic will be linked to.

### 4. Yearjudges
Yearjudges content type represents each individual Judge in the Judges section of the Year Page. A Judge is composed of the Judge's image and the Judge's name.

**Name**: The name of the Judge  
**Year**: The year of the Year Page that will be linked to this Judge  
**Region**: The region from which the Judge is from  
**Image**: The image of the Judge. The image uploaded should be cropped into a circle to make for a cleaner looking Judges section, but this is not mandatory.  
**YearPage**: The Year Page that the Yearjudge will be linked to.

### 5. Yearmentors
Yearmentors content type represents each individual Mentor in the Mentor section of the Year Page. A Mentor is composed of the Mentor's image and the Mentor's name.

**Name**: The name of the Mentor  
**Year**: The year of the Year Page that will be linked to this Mentor  
**Region**: The region from which the Mentor is from  
**Image**: The image of the Mentor. The image uploaded should be cropped into a circle to make for a cleaner looking Mentor section, but this is not mandatory.  
**YearPage**: The Year Page that the Mentor will be linked to.

# Exporting Sign-up Data to CSV

In the terminal, run
> $ mongoexport --db signUpInfo --collection signupinfos --type=csv --fields teamName,state,members,projectIdea,projectValue,projectImplementation --out signUpInfo.csv

This will create a CSV file named signUpInfo.csv in the current directory. Note that you can change the directory by specifying the filepath. E.g.

> $ mongoexport --db signUpInfo --collection signupinfos --type=csv --fields teamName,state,members,projectIdea,projectValue,projectImplementation --out **/my/file/path/signUpInfo.csv**
