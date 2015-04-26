Score V 1.0
----------

This is a little web application that does one thing: It keeps score. 

It was designed and built to run on your mobile device.

## Current Features 
- Keep score with swipe gestures
- Uses Full-Screen API where possible
- UpDown mode enables users to share the app on a single device
- Reset

## Planned for this version
- Time clock
- Configure team names

## Product Roadmap

**MVP V1** = Keep Score on one device **<==YOU ARE HERE**

**V2** = Show round stats after round

**V3** = Allow others to watch live (Scoreboard)

**BHAG** = Conquer the world of amateur sporting/gaming scorekeeping
 
How to build
------------

This app is built using
- Jekyll: http://jekyllrb.com/
- Sass: http://sass-lang.com/
- jQuery: http://jquery.com/
- jQuery Mobile Events Plugin: https://github.com/benmajor/jQuery-Touch-Events

To get it running locally (Starting from nothing but a terminal, but you need ruby installed for your platform):
- Clone the repo somewhere
- Open up a terminal
- Navigate to the repo root
- `gem install jekyll` If you don't have jekyll yet (skip this step if you do).
- `jekyll serve`
- Go to localhost:4000/score/ in a browser.