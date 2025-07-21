// Ukraine War Interactive Flow Visual (Standalone, Embedded Data)

const width = 1400, height = 800;
const margin = {top: 40, right: 260, bottom: 50, left: 100};

const svg = d3.select("#datavis")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

const gMain = svg.append("g");

// Zoom behavior
const zoom = d3.zoom()
  .scaleExtent([0.5, 8])
  .on("zoom", (event) => {
    gMain.attr("transform", event.transform);
  });
svg.call(zoom);

// Reset zoom button
d3.select("#resetZoom").on("click", () => {
  svg.transition().duration(500).call(zoom.transform, d3.zoomIdentity);
});

// ---- Embed the data here ----
const raw = [
  {event_date:"2022-02-24",actor1:"Russia",event_type:"Attack",fatalities:52,location:"Kyiv",admin1:"Kyiv City"},
  {event_date:"2022-02-24",actor1:"Ukraine",event_type:"Defense",fatalities:12,location:"Kharkiv",admin1:"Kharkiv"},
  {event_date:"2022-02-25",actor1:"Russia",event_type:"Attack",fatalities:34,location:"Kherson",admin1:"Kherson"},
  {event_date:"2022-02-25",actor1:"Ukraine",event_type:"Counterattack",fatalities:18,location:"Luhansk",admin1:"Luhansk"},
  {event_date:"2022-03-01",actor1:"Other",event_type:"Civilian Casualty",fatalities:70,location:"Sumy",admin1:"Sumy"},
  {event_date:"2022-03-03",actor1:"Russia",event_type:"Attack",fatalities:43,location:"Mariupol",admin1:"Donetsk"},
  {event_date:"2022-03-05",actor1:"Ukraine",event_type:"Defense",fatalities:9,location:"Odessa",admin1:"Odessa"},
  {event_date:"2022-03-07",actor1:"Russia",event_type:"Attack",fatalities:85,location:"Chernihiv",admin1:"Chernihiv"},
  {event_date:"2022-03-08",actor1:"Other",event_type:"Civilian Protest",fatalities:0,location:"Poltava",admin1:"Poltava"},
  {event_date:"2022-03-10",actor1:"Ukraine",event_type:"Counterattack",fatalities:23,location:"Mykolaiv",admin1:"Mykolaiv"},
  {event_date:"2022-03-12",actor1:"Russia",event_type:"Attack",fatalities:65,location:"Bucha",admin1:"Kyiv"},
  {event_date:"2022-03-14",actor1:"Ukraine",event_type:"Defense",fatalities:17,location:"Irpin",admin1:"Kyiv"},
  {event_date:"2022-03-16",actor1:"Other",event_type:"Civilian Casualty",fatalities:32,location:"Sumy",admin1:"Sumy"},
  {event_date:"2022-03-18",actor1:"Russia",event_type:"Attack",fatalities:97,location:"Izium",admin1:"Kharkiv"},
  {event_date:"2022-03-20",actor1:"Ukraine",event_type:"Counterattack",fatalities:25,location:"Kharkiv",admin1:"Kharkiv"},
  {event_date:"2022-03-21",actor1:"Other",event_type:"Civilian Protest",fatalities:0,location:"Odessa",admin1:"Odessa"},
  {event_date:"2022-03-22",actor1:"Russia",event_type:"Attack",fatalities:80,location:"Lysychansk",admin1:"Luhansk"},
  {event_date:"2022-03-23",actor1:"Ukraine",event_type:"Defense",fatalities:14,location:"Donetsk",admin1:"Donetsk"},
  {event_date:"2022-03-24",actor1:"Other",event_type:"Civilian Casualty",fatalities:41,location:"Kherson",admin1:"Kherson"},
  {event_date:"2022-03-25",actor1:"Russia",event_type:"Attack",fatalities:110,location:"Melitopol",admin1:"Zaporizhia"},
  {event_date:"2022-03-26",actor1:"Ukraine",event_type:"Counterattack",fatalities:21,location:"Sievierodonetsk",admin1:"Luhansk"},
  {event_date:"2022-03-27",actor1:"Other",event_type:"Civilian Protest",fatalities:0,location:"Kyiv",admin1:"Kyiv City"},
  {event_date:"2022-03-28",actor1:"Russia",event_type:"Attack",fatalities:44,location:"Berdyansk",admin1:"Zaporizhia"},
  {event_date:"2022-03-29",actor1:"Ukraine",event_type:"Defense",fatalities:10,location:"Kramatorsk",admin1:"Donetsk"},
  {event_date:"2022-03-30",actor1:"Other",event_type:"Civilian Casualty",fatalities:39,location:"Kharkiv",admin1:"Kharkiv"},
  {event_date:"2022-04-01",actor1:"Russia",event_type:"Attack",fatalities:75,location:"Trostyanets",admin1:"Sumy"},
  {event_date:"2022-04-02",actor1:"Ukraine",event_type:"Counterattack",fatalities:15,location:"Brovary",admin1:"Kyiv"},
  {event_date:"2022-04-03",actor1:"Other",event_type:"Civilian Protest",fatalities:0,location:"Kherson",admin1:"Kherson"},
  {event_date:"2022-04-04",actor1:"Russia",event_type:"Attack",fatalities:62,location:"Izium",admin1:"Kharkiv"},
  {event_date:"2022-04-05",actor1:"Ukraine",event_type:"Defense",fatalities:19,location:"Donetsk",admin1:"Donetsk"},
  {event_date:"2022-04-06",actor1:"Other",event_type:"Civilian Casualty",fatalities:45,location:"Bucha",admin1:"Kyiv"},
  {event_date:"2022-04-07",actor1:"Russia",event_type:"Attack",fatalities:81,location:"Mariupol",admin1:"Donetsk"},
  {event_date:"2022-04-08",actor1:"Ukraine",event_type:"Counterattack",fatalities:20,location:"Kherson",admin1:"Kherson"},
  {event_date:"2022-04-09",actor1:"Other",event_type:"Civilian Protest",fatalities:0,location:"Kharkiv",admin1:"Kharkiv"},
  {event_date:"2022-04-10",actor1:"Russia",event_type:"Attack",fatalities:29,location:"Luhansk",admin1:"Luhansk"},
  {event_date:"2022-04-11",actor1:"Ukraine",event_type:"Defense",fatalities:16,location:"Kyiv",admin1:"Kyiv City"},
  {event_date:"2022-04-12",actor1:"Other",event_type:"Civilian Casualty",fatalities:36,location:"Odessa",admin1:"Odessa"},
  {event_date:"2022-04-13",actor1:"Russia",event_type:"Attack",fatalities:68,location:"Donetsk",admin1:"Donetsk"},
  {event_date:"2022-04-14",actor1:"Ukraine",event_type:"Counterattack",fatalities:22,location:"Sumy",admin1:"Sumy"},
  {event_date:"2022-04-15",actor1:"Other",event_type:"Civilian Protest",fatalities:0,location:"Trostyanets",admin1:"Sumy"},
  {event_date:"2022-04-16",actor1:"Russia",event_type:"Attack",fatalities:54,location:"Mykolaiv",admin1:"Mykolaiv"},
  {event_date:"2022-04-17",actor1:"Ukraine",event_type:"Defense",fatalities:11,location:"Poltava",admin1:"Poltava"},
  {event_date:"2022-04-18",actor1:"Other",event_type:"Civilian Casualty",fatalities:38,location:"Melitopol",admin1:"Zaporizhia"},
  {event_date:"2022-04-19",actor1:"Russia",event_type:"Attack",fatalities:73,location:"Kherson",admin1:"Kherson"},
  {event_date:"2022-04-20",actor1:"Ukraine",event_type:"Counterattack",fatalities:13,location:"Berdyansk",admin1:"Zaporizhia"},
  {event_date:"2022-04-21",actor1:"Other",event_type:"Civilian Protest",fatalities:0,location:"Sievierodonetsk",admin1:"Luhansk"},
  {event_date:"2022-04-22",actor1:"Russia",event_type:"Attack",fatalities:92,location:"Kyiv",admin1:"Kyiv City"},
  {event_date:"2022-04-23",actor1:"Ukraine",event_type:"Defense",fatalities:18,location:"Mariupol",admin1:"Donetsk"},
  {event_date:"2022-04-24",actor1:"Other",event_type:"Civilian Casualty",fatalities:47,location:"Irpin",admin1:"Kyiv"},
  {event_date:"2022-04-25",actor1:"Russia",event_type:"Attack",fatalities:61,location:"Odessa",admin1:"Odessa"},
  {event_date:"2022-04-26",actor1:"Ukraine",event_type:"Counterattack",fatalities:17,location:"Kharkiv",admin1:"Kharkiv"},
  {event_date:"2022-04-27",actor1:"Other",event_type:"Civilian Protest",fatalities:0,location:"Chernihiv",admin1:"Chernihiv"},
  {event_date:"2022-04-28",actor1:"Russia",event_type:"Attack",fatalities:79,location:"Sumy",admin1:"Sumy"},
  {event_date:"2022-04-29",actor1:"Ukraine",event_type:"Defense",fatalities:14,location:"Izium",admin1:"Kharkiv"},
  {event_date:"2022-04-30",actor1:"Other",event_type:"Civilian Casualty",fatalities:33,location:"Luhansk",admin1:"Luhansk"},
  {event_date:"2022-05-01",actor1:"Russia",event_type:"Attack",fatalities:88,location:"Poltava",admin1:"Poltava"},
  {event_date:"2022-05-02",actor1:"Ukraine",event_type:"Counterattack",fatalities:19,location:"Donetsk",admin1:"Donetsk"},
  {event_date:"2022-05-03",actor1:"Other",event_type:"Civilian Protest",fatalities:0,location:"Melitopol",admin1:"Zaporizhia"},
  {event_date:"2022-05-04",actor1:"Russia",event_type:"Attack",fatalities:56,location:"Kyiv",admin1:"Kyiv City"},
  {event_date:"2022-05-05",actor1:"Ukraine",event_type:"Defense",fatalities:12,location:"Kherson",admin1:"Kherson"},
  {event_date:"2022-05-06",actor1:"Other",event_type:"Civilian Casualty",fatalities:49,location:"Kharkiv",admin1:"Kharkiv"},
  {event_date:"2022-05-07",actor1:"Russia",event_type:"Attack",fatalities:77,location:"Mariupol",admin1:"Donetsk"},
  {event_date:"2022-05-08",actor1:"Ukraine",event_type:"Counterattack",fatalities:16,location:"Odessa",admin1:"Odessa"},
  {event_date:"2022-05-09",actor1:"Other",event_type:"Civilian Protest",fatalities:0,location:"Bucha",admin1:"Kyiv"},
  {event_date:"2022-05-10",actor1:"Russia",event_type:"Attack",fatalities:30,location:"Luhansk",admin1:"Luhansk"},
  {event_date:"2022-05-11",actor1:"Ukraine",event_type:"Defense",fatalities:13,location:"Sumy",admin1:"Sumy"},
  {event_date:"2022-05-12",actor1:"Other",event_type:"Civilian Casualty",fatalities:37,location:"Donetsk",admin1:"Donetsk"},
  {event_date:"2022-05-13",actor1:"Russia",event_type:"Attack",fatalities:69,location:"Mykolaiv",admin1:"Mykolaiv"},
  {event_date:"2022-05-14",actor1:"Ukraine",event_type:"Counterattack",fatalities:21,location:"Poltava",admin1:"Poltava"},
  {event_date:"2022-05-15",actor1:"Other",event_type:"Civilian Protest",fatalities:0,location:"Kyiv",admin1:"Kyiv City"},
  {event_date:"2022-05-16",actor1:"Russia",event_type:"Attack",fatalities:60,location:"Trostyanets",admin1:"Sumy"},
  {event_date:"2022-05-17",actor1:"Ukraine",event_type:"Defense",fatalities:15,location:"Brovary",admin1:"Kyiv"},
  {event_date:"2022-05-18",actor1:"Other",event_type:"Civilian Casualty",fatalities:40,location:"Kherson",admin1:"Kherson"},
  {event_date:"2022-05-19",actor1:"Russia",event_type:"Attack",fatalities:71,location:"Kharkiv",admin1:"Kharkiv"},
  {event_date:"2022-05-20",actor1:"Ukraine",event_type:"Counterattack",fatalities:18,location:"Mariupol",admin1:"Donetsk"},
  {event_date:"2022-05-21",actor1:"Other",event_type:"Civilian Protest",fatalities:0,location:"Irpin",admin1:"Kyiv"},
  {event_date:"2022-05-22",actor1:"Russia",event_type:"Attack",fatalities:85,location:"Bucha",admin1:"Kyiv"},
  {event_date:"2022-05-23",actor1:"Ukraine",event_type:"Defense",fatalities:16,location:"Izium",admin1:"Kharkiv"},
  {event_date:"2022-05-24",actor1:"Other",event_type:"Civilian Casualty",fatalities:44,location:"Odessa",admin1:"Odessa"},
  {event_date:"2022-05-25",actor1:"Russia",event_type:"Attack",fatalities:63,location:"Sumy",admin1:"Sumy"},
  {event_date:"2022-05-26",actor1:"Ukraine",event_type:"Counterattack",fatalities:14,location:"Donetsk",admin1:"Donetsk"},
  {event_date:"2022-05-27",actor1:"Other",event_type:"Civilian Protest",fatalities:0,location:"Melitopol",admin1:"Zaporizhia"},
  {event_date:"2022-05-28",actor1:"Russia",event_type:"Attack",fatalities:90,location:"Kyiv",admin1:"Kyiv City"},
  {event_date:"2022-05-29",actor1:"Ukraine",event_type:"Defense",fatalities:20,location:"Kherson",admin1:"Kherson"},
  {event_date:"2022-05-30",actor1:"Other",event_type:"Civilian Casualty",fatalities:42,location:"Kharkiv",admin1:"Kharkiv"},
  {event_date:"2022-05-31",actor1:"Russia",event_type:"Attack",fatalities:78,location:"Mariupol",admin1:"Donetsk"},
  {event_date:"2022-06-01",actor1:"Ukraine",event_type:"Counterattack",fatalities:23,location:"Odessa",admin1:"Odessa"},
  {event_date:"2022-06-02",actor1:"Other",event_type:"Civilian Protest",fatalities:0,location:"Bucha",admin1:"Kyiv"},
  {event_date:"2022-06-03",actor1:"Russia",event_type:"Attack",fatalities:35,location:"Luhansk",admin1:"Luhansk"},
  {event_date:"2022-06-04",actor1:"Ukraine",event_type:"Defense",fatalities:12,location:"Sumy",admin1:"Sumy"},
  {event_date:"2022-06-05",actor1:"Other",event_type:"Civilian Casualty",fatalities:31,location:"Donetsk",admin1:"Donetsk"},
  {event_date:"2022-06-06",actor1:"Russia",event_type:"Attack",fatalities:66,location:"Mykolaiv",admin1:"Mykolaiv"},
  {event_date:"2022-06-07",actor1:"Ukraine",event_type:"Counterattack",fatalities:24,location:"Poltava",admin1:"Poltava"},
  {event_date:"2022-06-08",actor1:"Other",event_type:"Civilian Protest",fatalities:0,location:"Kyiv",admin1:"Kyiv City"},
  {event_date:"2022-06-09",actor1:"Russia",event_type:"Attack",fatalities:59,location:"Trostyanets",admin1:"Sumy"},
  {event_date:"2022-06-10",actor1:"Ukraine",event_type:"Defense",fatalities:13,location:"Brovary",admin1:"Kyiv"},
  {event_date:"2022-06-11",actor1:"Other",event_type:"Civilian Casualty",fatalities:39,location:"Kherson",admin1:"Kherson"},
  {event_date:"2022-06-12",actor1:"Russia",event_type:"Attack",fatalities:73,location:"Kharkiv",admin1:"Kharkiv"},
  {event_date:"2022-06-13",actor1:"Ukraine",event_type:"Counterattack",fatalities:16,location:"Mariupol",admin1:"Donetsk"},
  {event_date:"2022-06-14",actor1:"Other",event_type:"Civilian Protest",fatalities:0,location:"Irpin",admin1:"Kyiv"},
  {event_date:"2022-06-15",actor1:"Russia",event_type:"Attack",fatalities:84,location:"Bucha",admin1:"Kyiv"},
  {event_date:"2022-06-16",actor1:"Ukraine",event_type:"Defense",fatalities:17,location:"Izium",admin1:"Kharkiv"},
  {event_date:"2022-06-17",actor1:"Other",event_type:"Civilian Casualty",fatalities:46,location:"Odessa",admin1:"Odessa"},
  {event_date:"2022-06-18",actor1:"Russia",event_type:"Attack",fatalities:61,location:"Sumy",admin1:"Sumy"},
  {event_date:"2022-06-19",actor1:"Ukraine",event_type:"Counterattack",fatalities:20,location:"Donetsk",admin1:"Donetsk"},
  {event_date:"2022-06-20",actor1:"Other",event_type:"Civilian Protest",fatalities:0,location:"Melitopol",admin1:"Zaporizhia"},
  {event_date:"2022-06-21",actor1:"Russia",event_type:"Attack",fatalities:82,location:"Kyiv",admin1:"Kyiv City"},
  {event_date:"2022-06-22",actor1:"Ukraine",event_type:"Defense",fatalities:19,location:"Kherson",admin1:"Kherson"},
  {event_date:"2022-06-23",actor1:"Other",event_type:"Civilian Casualty",fatalities:41,location:"Kharkiv",admin1:"Kharkiv"},
  {event_date:"2022-06-24",actor1:"Russia",event_type:"Attack",fatalities:76,location:"Mariupol",admin1:"Donetsk"},
  {event_date:"2022-06-25",actor1:"Ukraine",event_type:"Counterattack",fatalities:22,location:"Odessa",admin1:"Odessa"},
  {event_date:"2022-06-26",actor1:"Other",event_type:"Civilian Protest",fatalities:0,location:"Bucha",admin1:"Kyiv"},
  {event_date:"2022-06-27",actor1:"Russia",event_type:"Attack",fatalities:37,location:"Luhansk",admin1:"Luhansk"},
  {event_date:"2022-06-28",actor1:"Ukraine",event_type:"Defense",fatalities:15,location:"Sumy",admin1:"Sumy"},
  {event_date:"2022-06-29",actor1:"Other",event_type:"Civilian Casualty",fatalities:34,location:"Donetsk",admin1:"Donetsk"},
  {event_date:"2022-06-30",actor1:"Russia",event_type:"Attack",fatalities:67,location:"Mykolaiv",admin1:"Mykolaiv"},
  {event_date:"2022-07-01",actor1:"Ukraine",event_type:"Counterattack",fatalities:25,location:"Poltava",admin1:"Poltava"},
  {event_date:"2022-07-02",actor1:"Other",event_type:"Civilian Protest",fatalities:0,location:"Kyiv",admin1:"Kyiv City"}
];

// --- No d3.csv needed! Use embedded data ---
const data = raw
  .map(d => ({
    date: new Date(d.event_date),
    actor: d.actor1,
    type: d.event_type,
    fatalities: +d.fatalities || 0,
    location: d.location,
    region: d.admin1,
  }))
  .filter(d => d.fatalities > 0 && d.date >= new Date("2022-02-01"));

const sampleData = data.slice(0, 120);

const actors = Array.from(new Set(sampleData.map(d => d.actor))).sort();
actors.forEach(actor =>
  d3.select("#actorFilter").append("option").attr("value", actor).text(actor)
);
const types = Array.from(new Set(sampleData.map(d => d.type))).sort();
types.forEach(type =>
  d3.select("#typeFilter").append("option").attr("value", type).text(type)
);

const outcomeTypes = Array.from(new Set(sampleData.map(d => d.type)));
const outcomeRegions = Array.from(new Set(sampleData.map(d => d.region))).filter(d => d).slice(0, 8);

const outcomeNodes = [];
outcomeTypes.forEach((type, i) => {
  outcomeRegions.forEach((region, j) => {
    outcomeNodes.push({
      type,
      region,
      y: margin.top + (i+1)*(height-margin.top-margin.bottom)/(outcomeTypes.length+1) + (j-4)*18,
      x: width - margin.right + j*22,
      color: d3.schemeCategory10[i % 10],
      key: `${type}|${region}`,
    });
  });
});

const xScale = d3.scaleTime()
  .domain(d3.extent(sampleData, d => d.date))
  .range([margin.left, width-margin.right-120]);
const yScale = d3.scaleLinear()
  .domain([0, d3.max(sampleData, d => d.fatalities)])
  .range([height-margin.bottom, margin.top]);
const rScale = d3.scaleSqrt()
  .domain([1, d3.max(sampleData, d => d.fatalities)])
  .range([3, 26]);
const colorScale = d3.scaleOrdinal()
  .domain(actors)
  .range(d3.schemeTableau10.concat(d3.schemeSet3).slice(0, actors.length));

gMain.append("g")
  .attr("transform", `translate(0,${height-margin.bottom})`)
  .call(d3.axisBottom(xScale).ticks(10).tickFormat(d3.timeFormat("%b '%y")))
  .style("color", "#aaa");
gMain.append("g")
  .attr("transform", `translate(${margin.left},0)`)
  .call(d3.axisLeft(yScale).ticks(8))
  .style("color", "#aaa");

const legend = svg.append("g").attr("class", "legend")
  .attr("transform", `translate(${width-margin.right+40},${margin.top})`);
legend.append("text").text("Actors:").attr("y", -8).style("fill", "#eee").style("font-weight", "bold");
actors.slice(0,10).forEach((actor, i) => {
  legend.append("circle").attr("cx", 0).attr("cy", i*22+8).attr("r", 8).attr("fill", colorScale(actor));
  legend.append("text").attr("x", 16).attr("y", i*22+13).text(actor).style("fill", "#eee");
});

function filterData() {
  const actorVal = d3.select("#actorFilter").property("value");
  const typeVal = d3.select("#typeFilter").property("value");
  return sampleData.filter(d =>
    (actorVal==="All"||d.actor===actorVal) &&
    (typeVal==="All"||d.type===typeVal)
  );
}

function render() {
  const filtered = filterData();

  let currOutcomeNodes = outcomeNodes;
  const typeVal = d3.select("#typeFilter").property("value");
  if (typeVal !== "All") {
    currOutcomeNodes = currOutcomeNodes.filter(d => d.type === typeVal);
  }

  gMain.selectAll(".event").remove();
  gMain.selectAll(".outcome").remove();
  gMain.selectAll(".outcomeLabel").remove();
  gMain.selectAll(".flow").remove();

  gMain.selectAll("circle.outcome")
    .data(currOutcomeNodes)
    .enter()
    .append("circle")
    .attr("class", "outcome")
    .attr("cx", d => d.x)
    .attr("cy", d => d.y)
    .attr("r", 18)
    .attr("fill", d => d.color)
    .attr("opacity", 0.85);

  gMain.selectAll("text.outcomeLabel")
    .data(currOutcomeNodes)
    .enter()
    .append("text")
    .attr("class", "outcomeLabel")
    .attr("x", d => d.x + 24)
    .attr("y", d => d.y + 6)
    .text(d => `${d.type} (${d.region})`)
    .style("fill", "#fff")
    .style("font-size", "14px");

  gMain.selectAll("circle.event")
    .data(filtered)
    .enter()
    .append("circle")
    .attr("class", "event")
    .attr("cx", d => xScale(d.date)+(Math.random()-0.5)*14)
    .attr("cy", d => yScale(d.fatalities)+(Math.random()-0.5)*12)
    .attr("r", d => rScale(d.fatalities))
    .attr("fill", d => colorScale(d.actor))
    .attr("opacity", 0.67)
    .on("mouseover", function(e, d) {
      d3.select(this).attr("stroke", "#fff").attr("stroke-width", 2);
      showTooltip(e, d);
    })
    .on("mouseout", function(e, d) {
      d3.select(this).attr("stroke", null);
      hideTooltip();
    });

  gMain.selectAll("path.flow")
    .data(filtered)
    .enter()
    .append("path")
    .attr("class", "flow")
    .attr("d", d => {
      let outcome = currOutcomeNodes.find(o => o.type === d.type && o.region === d.region);
      if (!outcome) outcome = currOutcomeNodes[0];
      const x1 = xScale(d.date), y1 = yScale(d.fatalities);
      const x2 = outcome.x, y2 = outcome.y;
      const midX = x1 + (x2-x1)*0.5 + (Math.random()-0.5)*60;
      const midY = y1 + (y2-y1)*0.5 + (Math.random()-0.5)*80;
      return `M${x1},${y1} Q${midX},${midY} ${x2},${y2}`;
    })
    .attr("stroke", d => colorScale(d.actor))
    .attr("stroke-width", 1.2)
    .attr("fill", "none")
    .attr("opacity", 0.28);

}

d3.select("#actorFilter").on("change", render);
d3.select("#typeFilter").on("change", render);

render();

const tooltip = d3.select("body").append("div")
  .attr("class", "tooltip")
  .style("visibility", "hidden");

function showTooltip(e, d) {
  tooltip
    .html(
      `<strong>Date:</strong> ${d3.timeFormat("%Y-%m-%d")(d.date)}<br>
       <strong>Actor:</strong> ${d.actor}<br>
       <strong>Type:</strong> ${d.type}<br>
       <strong>Fatalities:</strong> ${d.fatalities}<br>
       <strong>Region:</strong> ${d.region || "Unknown"}<br>
       <strong>Location:</strong> ${d.location || "Unknown"}`
    )
    .style("top", (e.pageY-15)+"px")
    .style("left", (e.pageX+15)+"px")
    .style("visibility", "visible");
}
function hideTooltip() {
  tooltip.style("visibility", "hidden");
}