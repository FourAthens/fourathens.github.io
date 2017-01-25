	/* Charts */
	var ctxLC = document.getElementById("lineChart").getContext("2d");
	var ctxBC = document.getElementById("barChart").getContext("2d");

	var dataLC = {
    labels: ["2015", "2016"],
    datasets: [
        {
        	title:"Graphic Design",
            label: "My First dataset",
            fillColor: "rgba(0,204,204,0.2)",
            strokeColor: "rgba(0,204,204,1)",
            pointColor: "rgba(0,204,204,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(0,204,204,1)",
            data: [134,70]
        }
    ]
};

	var dataBC = {
    labels: ["January", "February", "March", "April", "May", "June", "July","August","September","October","November","December"],
    datasets: [
        {
        	title:"Graphic Design",
            label: "My First dataset",
            fillColor: "rgba(0,204,204,0.2)",
            strokeColor: "rgba(0,204,204,1)",
            highlightFill: "rgba(0,204,204,0.75)",
            highlightStroke: "rgba(0,204,204,1)",
            data: [12,12,12,121,12,12,12,12,12,12,12,12]
        }
    ]
};

	var optionsLC={
		responsive : true,
		maintainAspectRatio: true,
		scaleLineColor: "rgba(255,255,255,1)",
		scaleShowGridLines : false,
		scaleGridLineColor : "rgba(255,255,255,1)",
		scaleFontColor: "#fff",
		showTooltips: true
	}

	var myLineChart;
	legend(document.getElementById("lineLegend"), dataLC);

	var optionsBC={
		responsive : true,
		maintainAspectRatio: true,
		scaleLineColor: "rgba(255,255,255,1)",
		scaleShowGridLines : false,
		scaleGridLineColor : "rgba(255,255,255,1)",
		scaleFontColor: "#fff"
	}

	var myBarChart;
	legend(document.getElementById("barLegend"), dataBC);

	var optionsRC={
		responsive : true,
		maintainAspectRatio: true,
		scaleLineColor: "rgba(255,255,255,1)",
		scaleShowGridLines : false,
		scaleGridLineColor : "rgba(255,255,255,1)",
		scaleFontColor: "#fff",
		angleLineColor : "rgba(255,255,255,1)",
		pointLabelFontColor : "#fff",
		pointLabelFontSize : 12
	}

function renderChart(anchorLink) {
	//first slide of the second section
	if (anchorLink == 'chart-01') {
		// Reseting animations charts
		myLineChart = new Chart(ctxLC).Line(dataLC, optionsLC);
	}

	if (anchorLink == 'chart-02') {
		// Reseting animations charts
		myBarChart = new Chart(ctxBC).Bar(dataBC, optionsBC);
	}
}
