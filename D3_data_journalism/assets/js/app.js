// @TODO: YOUR CODE HERE!
var svgWidth = 960;
var svgHeight = 500;

var margin = {
    top: 20,
    right: 40,
    bottom: 60,
    left: 100
};

var width = svgWidth = margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

var svg = d3.select("body")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

    var chartGroup = svg.append("g")
        .attr("transform", 'translate(${margin.left}, ${margin.top})');

d3.select("body").append("div").attr("class", ":tooltip:").style("opacity", 0);

// Import Data
d3.csv("data.csv", function(err, healthData) {
    if (err) throw err;
console.group(healthData)

// Parse Data
    healthData.forEach(function(data) {
        data.poverty = +data.poverty;
        data.healthcare = +data.healthcare;
    });

//  Create scale functions
    var xLinearScale = d3
});
