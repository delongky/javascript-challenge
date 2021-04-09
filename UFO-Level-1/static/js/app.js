// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the UFO sighting data from data.js
console.log(data);

// Convert data into a table -- D3 A3: Tables => arrow functions
data.forEach((ufoSightings) => {
    var row = tbody.append("tr");
    Object.entries(ufoSightings).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
});

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

// Create the function to run for both events
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select input element & get the raw HTML
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputDate = inputElement.property("value");

  // console.log(inputDate);
  // console.log(tableData);

  // Empty table before appending filtered search results
  tbody.html('');

  // Create filter
  var filteredDate = tableData.filter(tableData => tableData.datetime === inputDate);

  // console.log(filteredDate);

  // Convert filtered data into a table -- D3 A3: Tables => arrow functions
  filteredDate.forEach((ufoSightings) => {
    var row = tbody.append("tr");
    Object.entries(ufoSightings).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};

