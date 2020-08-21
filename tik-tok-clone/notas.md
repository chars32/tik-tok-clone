# Tik-Tok-Clone develop notes

## Setting up project
* Defind tech stack project
* Create react app tik-tok-clone

## Setting up firebase app
* Open [Firebase](https://firebase.google.com/) page 
  * Need a Google account
* Create a new project next -> next -> next
* In console:
  * Go to __project configuration__ and check __Config__ checkbox and copy __firebaseConfig__ 
* Create a firebase.js file in project
* Remove styles from App.css
* Add reset css to Index.css

## Creating component Video and components
  * Create a component Video and the components that it's gonna has inside:
    * Video Sidebar (heart likes, comments, share)
    * Video footer (music icon, name music, spining disk)
  * Using __scroll-snap-type__ in react with a hack:
    * Declare scroll-snap-type in html and app__videos tags
    * In Video.css declare __scroll-snap-align: start__ this is to make the windows snap ath the top of the screen.
    * Use a hack to hide scrollbar but no functionality
  * Remove controls from video, so we use useRef to get the curent object of tag video.
  * Then used a onClick function onVideoPress to play/pause video.
  * Using useState we set the state of the video (play or pause)
