# UFO Sighting Project:

### Important Files:

1) app challege.js: It is inside the js folder, inside the static folder.

2) index challenge.html

In this project, I created a website which presents data about the UFO sightings in the last years. In this website, I included an article that is discussing whether UFO sighting is fact or a myth, as well as a table that includes data about different UFO sighting that happened in the past years.  This data includes the date the UFO sighting was found, the city, state, the country, shape etc..  

In this challenge, using javascript we are filtering the table by multiple factors(date, city, state, country, and shape).

Looking deeply in the app challenge.js code:

1) first import the data and refernce the HTML table:
// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");
