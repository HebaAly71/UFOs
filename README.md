# UFO Sighting Project:

### Important Files:

1) app challege.js: It is inside the js folder, inside the static folder.

2) index challenge.html

### Project Description:

In this project, I created a website which presents data about the UFO sightings in the last years. In this website, I included an article that is discussing whether UFO sighting is fact or a myth, as well as a table that includes data about different UFO sighting that happened in the past years.  This data includes the date the UFO sighting was found, the city, state, the country, shape etc..  

In this challenge, using javascript we are filtering the table by multiple factors(date, city, state, country, and shape).

Looking deeply in the app challenge.js code:

1) First import the data and refernce the HTML table:
    
        > 
          const tableData = data;

           var tbody = d3.select("tbody");

2) Create a function that builds the table in the html site using the data.js hat we imported earlier.

          > function buildTable(data) { 

          > // First, clear out any existing data

          > tbody.html("");

          > // Next, loop through each object in the data

          > // and append a row and cells for each value in the row

          > data.forEach((dataRow) => {

          > // Append a row to the table body

          > let row = tbody.append("tr");

          > // Loop through each field in the dataRow and add

          > // each value as a table cell (td)

          > Object.values(dataRow).forEach((val) => {

          >  let cell = row.append("td");

          >  cell.text(val);
          >}

        > );

        > });

         >}
     
 3) Create a function that is exected when the filer search button is clicked in the UFO Sightings website.  This function simply returns the filtered table according to the filter input.  This is simply done by first intializing an array "filters" and then adding all the filters that is done to this array.
          > 
              
              var filters = [];

              function handleClick() {

The following is the value of the filters input by a user:

              let date = d3.select("#datetime").property("value");

              let city = d3.select("#city").property("value");

              let state = d3.select("#state").property("value");
              
              let country = d3.select("#country").property("value");
              
              let shape = d3.select("#shape").property("value");
              
              filters = [];

In the following code the values for each factor is added to the filters array along with an id for each filter type:  

          if (date) {
          
            filters.push({"id":"datetime", "value":date});

          } else {
            
            filters = filters;
          }
          if (city) {

            filters.push({"id":"city", "value":city});

          } 
          if (state) {
            filters.push({"id":"state", "value":state});

          } 
          if (country) {
            filters.push({"id":"country", "value":country});

          } 

          if (shape) {
            filters.push({"id":"shape", "value":shape});

          } 

Call the function filterTable, which we will explain later, in order to return the filtered table based on the filters done earlier. 

          filterTable();
        }

  4) Create a function to loop through the filters we saved in the array earlier and return for us the filtered table.
  
    > 
    function filterTable() {
    
    let filteredData = tableData;
    
    console.log(filteredData);
    
    for (const el of filters) {
    
      console.log(el);
      
      filteredData = filteredData.filter(row => row[el.id] === el.value);
    }
    
    console.log(filteredData);
    
    buildTable(filteredData);
    }
  
  5) Attach an event to listen for the form button and build the table when the page loads:
  
    > 
    //Attach an event to listen for the form button
    
    d3.selectAll("#filter-btn").on("click", handleClick);
    
    // Build the table when the page loads
    
    buildTable(tableData);
