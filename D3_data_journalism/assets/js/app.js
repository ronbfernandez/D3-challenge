// @TODO: YOUR CODE HERE!
var svgWidth = 800;
var svgHeight = 560;

var margin = {
    top: 20,
    right: 40,
    bottom: 60,
    left: 100
};

var width = svgWidth = margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

var svg = d3
    .select("#scatter")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

var chartGroup = svg.append("g")
    .attr("transform", 'translate(${margin.left}, ${margin.top})');

d3.select("body").append("div").attr("class", "tooltip").style("opacity", 0);

// Import Data
d3.csv("data.csv", function(data) {
    data.poverty = +data.poverty;
    data.healthcare = +data.healthcare;
    return data;
}).then(function(data) {
    console.log(data);


//  Create scale functions
    var xLinearScale = d3.scaleLinear()
        .domain([8, d3.max(data, function(d) {
        return +d.poverty;
        })])
        .range([0, width]);


    var yLinearScale = d3.scaleLinear()
    .domain([2, d3.max(data,function(d) {
        return +d.healthcare;
        })])
        .range([height, 0]);


// Create axis functions
    var bottomAxis = d3.axisBottom(xScale);
    var leftAxis = d3.axisLeft(yScale);

    chartGroup.append("g")
        .attr("transform", 'translate(0, ${height}')
        .call(bottomAxis);
    chartGroup.append("g")
        .call(leftAxis);

    var 

