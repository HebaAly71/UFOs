// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");
  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");
    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    }
    );
  });
}

// Keep track of all filters
var filters = [];
function handleClick() {
  let date = d3.select("#datetime").property("value");
  let city = d3.select("#city").property("value");
  let state = d3.select("#state").property("value");
  let country = d3.select("#country").property("value");
  let shape = d3.select("#shape").property("value");
  filters = [];
  if (date) {
    //console.log(date);
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

  
  filterTable();
}

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

//Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);
// Build the table when the page loads
buildTable(tableData);