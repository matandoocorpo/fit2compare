
/* INITIALIZE PARSER */
var FitParser = require("FitParser").default;
var fitParser = new FitParser({
  force: true,
  speedUnit: "km/h",
  lengthUnit: "km",
  temperatureUnit: "celsius",
  elapsedRecordField: true,
  mode: "both"
});

function parseFitdata(data) {
  var response;
  fitParser.parse(data, function(error, output) {
    if (error) {
      console.log("Error!");
      response = { error: true };
    } else {
      console.log(JSON.stringify(output));
      response = JSON.stringify(output);
    }
  });

  return response;
}

/* DATA FUNCTIONS */
function initializeChartPwr(measure) {
  var canvas = document.getElementById("pwrGraph");
  var ctx = canvas.getContext("2d");
  var measure = $().jqTranslateElement(measure);

  chartPwr = new Chart(ctx, {
    type: "line",
    data: {
      datasets: [
        {
          label: "1",
          borderColor: "rgb(204, 230, 255)",
          borderWidth: 1,
          //backgroundColor: 'rgb(204, 230, 255, 0.7)',
          pointRadius: 0,
          data: []
        },
        {
          label: "2",
          borderColor: "rgb(255, 238, 204)",
          borderWidth: 1,
          //backgroundColor: 'rgb(255, 238, 204, 0.7)',
          pointRadius: 0,
          data: []
        }
      ]
    },
    options: {
      responsive: false,
      maintainAspectRatio: true,
      title: {
        display: true,
        text: measure,
        position: "bottom",
        padding: 5,
        fontSize: 10,
        fontColor: "#FFF",
        fontStyle: "bold"
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              display: true,
              color:"#666"
            },
            type: "time",
            distribution: "linear",
            time:{
                format:'HH:mm',
                unit:'minute',
                stepSize:5
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              display: true,
              color:"#666"
            }
          }
        ]
      },
      tooltips: {
        mode: "x",
        intersect: false
      },
      hover: {
        mode: "x",
        intersect: false
      }
    }
  });
}

function initializeChartHR(measure) {
  var canvas = document.getElementById("hrGraph");
  var ctx = canvas.getContext("2d");
  var measure = $().jqTranslateElement(measure);

  

  chartHR = new Chart(ctx, {
    type: "line",
    data: {
      datasets: [
        {
          label: "1",
          borderColor: "rgb(204, 230, 255)",
          borderWidth: 1,
          //backgroundColor: 'rgb(204, 230, 255, 0.7)',
          pointRadius: 0,
          data: []
        },
        {
          label: "2",
          borderColor: "rgb(255, 238, 204)",
          borderWidth: 1,
          //backgroundColor: 'rgb(255, 238, 204, 0.7)',
          pointRadius: 0,
          data: []
        }
      ]
    },
    options: {
      responsive: false,
      maintainAspectRatio: true,
      title: {
        display: true,
        text: measure,
        position: "bottom",
        padding: 5,
        fontSize: 10,
        fontColor: "#FFF",
        fontStyle: "bold"
      },
      scales: {
        xAxes: [
          {
            
            gridLines: {
              display: true,
              color:"#666"
            },
            type: "time",
            distribution: "linear",
            time:{
                format:'HH:mm',
                unit:'minute',
                stepSize:5
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              display: true,
              color:"#666"
            }
          }
        ]
      },
      tooltips: {
        mode: "x",
        intersect: false
      },
      hover: {
        mode: "x",
        intersect: false
      }
    }
  });
}

function initializeChartCad(measure) {
  var canvas = document.getElementById("cadenceGraph");
  var ctx = canvas.getContext("2d");
  var measure = $().jqTranslateElement(measure);

  
  chartCad = new Chart(ctx, {
    type: "line",
    data: {
      datasets: [
        {
          label: "1",
          borderColor: "rgb(204, 230, 255)",
          borderWidth: 1,
          //backgroundColor: 'rgb(204, 230, 255, 0.7)',
          pointRadius: 0,
          data: []
        },
        {
          label: "2",
          borderColor: "rgb(255, 238, 204)",
          borderWidth: 1,
          //backgroundColor: 'rgb(255, 238, 204, 0.7)',
          pointRadius: 0,
          data: []
        }
      ]
    },
    options: {
      responsive: false,
      maintainAspectRatio: true,
      title: {
        display: true,
        text: measure,
        position: "bottom",
        padding: 5,
        fontSize: 10,
        fontColor: "#FFF",
        fontStyle: "bold"
      },
      scales: {
        xAxes: [
          {
            
            gridLines: {
              display: true,
              color:"#666"
            },
            type: "time",
            distribution: "linear",
            time:{
                format:'HH:mm',
                unit:'minute',
                stepSize:5
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              display: true,
              color:"#666"
            }
          }
        ]
      },
      tooltips: {
        mode: "x",
        intersect: false
      },
      hover: {
        mode: "x",
        intersect: false
      }
    }
  });
}

function initializeChartEle(measure) {
  var canvas = document.getElementById("elevationGraph");
  var ctx = canvas.getContext("2d");
  var measure = $().jqTranslateElement(measure);


  chartEle = new Chart(ctx, {
    type: "line",
    data: {
      datasets: [
        {
          label: "1",
          borderColor: "rgb(204, 230, 255)",
          borderWidth: 1,
          //backgroundColor: 'rgb(204, 230, 255, 0.7)',
          pointRadius: 0,
          data: []
        },
        {
          label: "2",
          borderColor: "rgb(255, 238, 204)",
          borderWidth: 1,
          //backgroundColor: 'rgb(255, 238, 204, 0.7)',
          pointRadius: 0,
          data: []
        }
      ]
    },
    options: {
      responsive: false,
      maintainAspectRatio: true,
      title: {
        display: true,
        text: measure,
        position: "bottom",
        padding: 5,
        fontSize: 10,
        fontColor: "#FFF",
        fontStyle: "bold"
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              display: true,
              color:"#666"
            },
            type: "time",
            distribution: "linear",
            time:{
                format:'HH:mm',
                unit:'minute',
                stepSize:5
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              display: true,
              color:"#666"
            }
          }
        ]
      },
      tooltips: {
        mode: "x",
        intersect: false
      },
      hover: {
        mode: "x",
        intersect: false
      }
    }
  });
}

function printPower(data, series) {
  data = JSON.parse(data);
  var now;
  let powerData = [];
  let geoData = [];
  let hrData = [];
  let cadData = [];
  let eleData=[];
  let xlsData = [];
  let powerBuffer = [];
  let hrBuffer = [];
  let cadBuffer = [];
  let eleBuffer = [];
  let geoBuffer = [];
  let dataSetTitle = data.file_id.manufacturer;
  let laps = data.activity.sessions[0].laps;
  let records = [];
  laps.forEach(lap => {
    
    var data = lap.records;
    data.forEach(record => {  
        records.push(record);
    });
  });
  records.forEach(record => {
    if (!now) {
      now = moment(record.timestamp);
    } else {
      if (moment(record.timestamp).diff(now, "seconds") <= 2 && record.power < 2000){
        powerBuffer.push(record.power);
        hrBuffer.push(record.heart_rate);
        cadBuffer.push(record.cadence);
        eleBuffer.push(record.altitude*1000);
        geoData.push([record.position_lat, record.position_long])
      } else {
        var power = calcMed(powerBuffer);
        var hr = calcMed(hrBuffer);
        var cadence = calcMed(cadBuffer);
        var elevation = calcMed(eleBuffer);
        powerData.push({ x: new Date(now.format()).getTime(), y: power });
        hrData.push({ x: new Date(now.format()).getTime(), y: hr });
        cadData.push({ x: new Date(now.format()).getTime(), y: cadence });
        eleData.push({ x: new Date(now.format()).getTime(), y: elevation });
        xlsData.push({tsmp:new Date(now.format()).getTime(), pwr:power, hr:hr, cad:cadence, elev:elevation});
        //geoData.push(geoBuffer);
        powerBuffer = [];
        hrBuffer = [];
        cadBuffer = [];
        eleBuffer = [];
        geoBuffer = [];

        now = moment(record.timestamp);
      }
    }
  });

  if (!series) { //Normal
    if (chartPwr.data.datasets[0].data.length == 0) {
      chartPwr.data.datasets[0].label = dataSetTitle;
      chartHR.data.datasets[0].label = dataSetTitle;
      chartCad.data.datasets[0].label = dataSetTitle;
      chartEle.data.datasets[0].label = dataSetTitle;

      chartPwr.data.datasets[0].data = powerData;
      chartHR.data.datasets[0].data = hrData;
      chartCad.data.datasets[0].data = cadData;
      chartEle.data.datasets[0].data = eleData;

      xlsBuffer[0] = xlsData;
      jsonData[0] = data;
      $("#file1_adj").text(auxFileName);
    } else {
      chartPwr.data.datasets[1].label = dataSetTitle;
      chartHR.data.datasets[1].label = dataSetTitle;
      chartCad.data.datasets[1].label = dataSetTitle;
      chartEle.data.datasets[1].label = dataSetTitle;


      chartPwr.data.datasets[1].data = powerData;
      chartHR.data.datasets[1].data = hrData;
      chartCad.data.datasets[1].data = cadData;
      chartEle.data.datasets[1].data = eleData;

      xlsBuffer[1] = xlsData;
      jsonData[1] = data;
      $("#file2_adj").text(auxFileName);
    }
  } else { //Reset
      
      chartPwr.data.datasets[series].data = powerData;
      chartHR.data.datasets[series].data = hrData;
      chartCad.data.datasets[series].data = cadData;
      chartEle.data.datasets[series].data = eleData;

  }

  chartPwr.update();
  chartPwr.render();

  chartHR.update();
  chartHR.render();

  chartCad.update();
  chartCad.render();

  chartEle.update();
  chartEle.render();

  createMap(geoData);
}

function createMap(geoData){

  console.log(geoData);
  var map = L.map('mapGraph', {
    center: [40.438, -3.819],
    Zoom: 5.5
  });
  
  L.tileLayer('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', { 	attribution: '<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
 }).addTo(map);

  var polyline = L.polyline(geoData, {color: 'red'}).addTo(map);

// zoom the map to the polyline
map.fitBounds(polyline.getBounds());

}

function fillResume(data){
    data = JSON.parse(data);
    console.log(data)
    var resume_table = $("#file_resume_table").clone();
    $(resume_table)
      .attr("id", "a")
      .appendTo("#resume_container")
    
    $(resume_table).find("span[id='fileName']").text(" File: " + auxFileName)  
    if(data.file_id.manufacturer) $(resume_table).find("span[id='device']").text(data.file_id.manufacturer)
    if(data.file_id.time_created)$(resume_table).find("span[id='date']").text(moment(data.file_id.time_created).format("YYYY-MM-DD HH:mm:ss"));
    /*if(data.activity.sessions[0].total_distance) */$(resume_table).find("span[id='distance']").text(data.activity.sessions[0].total_distance.toFixed(2) + "Km")
    var event_duration = moment.duration(data.activity.sessions[0].total_elapsed_time,'seconds');
    var elapsed_time = event_duration.format("HH:mm:ss");
    $(resume_table).find("span[id='elapsed']").text(elapsed_time)
    if(data.activity.sessions[0].avg_power) $(resume_table).find("span[id='avgPwr']").text(data.activity.sessions[0].avg_power +" W");
    if(data.activity.sessions[0].max_power ) $(resume_table).find("span[id='maxPwr']").text(data.activity.sessions[0].max_power +" W");
    if(data.activity.sessions[0].avg_heart_rate) $(resume_table).find("span[id='avgHr']").text(data.activity.sessions[0].avg_heart_rate +" bpm");
    if(data.activity.sessions[0].max_heart_rate ) $(resume_table).find("span[id='maxHr']").text(data.activity.sessions[0].max_heart_rate +" bpm");
    if(data.activity.sessions[0].avg_cadence) $(resume_table).find("span[id='avgCadence']").text(data.activity.sessions[0].avg_cadence +" rpm");
    if(data.activity.sessions[0].max_cadence) $(resume_table).find("span[id='maxCadence']").text(data.activity.sessions[0].max_cadence +" rpm");
    if(data.activity.sessions[0].normalized_power) $(resume_table).find("span[id='normalizedPwr']").text(data.activity.sessions[0].normalized_power);
    if(data.activity.sessions[0].total_calories) $(resume_table).find("span[id='calories']").text(data.activity.sessions[0].total_calories + "Kcal");

    $(resume_table).removeAttr("hidden");
}

/* EXPORT FUNCTIONS */
function exportJPEG(id) {
  var graphs = ["", "pwrGraph", "hrGraph", "cadenceGraph", "elevationGraph"];
  var canvas = document.getElementById(graphs[id]);
  var image = canvas.toDataURL("image/jpeg", 1.0);
  var blob = dataURItoBlob(image);
  saveAs(blob, "pwr2compare_" + graphs[id] + ".jpg");
}

function resetDataSeries(){

  adjustDataSeries(0,0)
  adjustDataSeries(1,0)




}

function adjustDataSeries(idx, val){
  
  var current_offset =  eval("file"+(idx+1)+"_offset");
  var powerData = chartPwr.data.datasets[idx].data;
  var hrData = chartHR.data.datasets[idx].data;
  var cadData = chartCad.data.datasets[idx].data;
  var eleData = chartEle.data.datasets[idx].data;

  calculated_offset = val - eval("file"+(idx+1)+"_offset"); 
  eval("file"+(idx+1)+"_offset = current_offset + calculated_offset")
  
  powerData.forEach(measure =>{
    measure.x = measure.x + calculated_offset
  })
  chartPwr.data.datasets[idx].data = powerData;
  
  hrData.forEach(measure =>{
    measure.x = measure.x + calculated_offset
  })

  chartHR.data.datasets[idx].data = hrData;

  cadData.forEach(measure =>{
    measure.x = measure.x + calculated_offset
  })

  chartCad.data.datasets[idx].data = cadData 

  eleData.forEach(measure =>{
    measure.x = measure.x + calculated_offset
  })

  chartEle.data.datasets[idx].data = eleData  

  chartPwr.update();
  chartPwr.render();
  chartHR.update();
  chartHR.render();
  chartCad.update();
  chartCad.render();
  chartEle.update();
  chartEle.render();
}

function exportJSON(id){
  var data = jsonData[id-1];
  console.log(data);
  var blob = new Blob([JSON.stringify(data)], {type:"application/json;charset=utf-8"});
  saveAs(blob, "pwr2compare_JSON_"+id+".json");
}

async function createXLS() {

  const wb = new ExcelJS.Workbook()
  var xlsKeys = Object.keys(xlsBuffer)

  for (i = 0; i < xlsKeys.length; i++) {
      const ws = wb.addWorksheet('File ' + (i+1));
      var headerA = $().jqTranslateElement('timestamp');
      var headerB = $().jqTranslateElement('potencia');
      var headerC = $().jqTranslateElement('pulso');
      var headerD = $().jqTranslateElement('cadencia');
      var headerE = $().jqTranslateElement('elevacion');

      ws.columns = [
          { header: headerA.toUpperCase(), key: 'a', width: '20' },
          { header: headerB.toUpperCase(), key: 'b', width: '20' },
          { header: headerC.toUpperCase(), key: 'c', width: '20' },
          { header: headerD.toUpperCase(), key: 'd', width: '20' },
          { header: headerE.toUpperCase(), key: 'e', width: '20' }
      ]
      var data = createXLSData(xlsBuffer[i]);
      ws.addRows(data)
  }
  const buf = await wb.xlsx.writeBuffer()

  saveAs(new Blob([buf]), 'pwr2compare.xlsx')
}

function createXLSData(data){
var rows = [];
data.forEach(entry =>{
  rows.push({a:entry.tsmp, b:entry.pwr, c:entry.hr, d:entry.cad, e:entry.elev})
})
rows = JSON.stringify(rows).replace("NaN","-");
rows = JSON.parse(rows);
return rows;
}

/* UTILITIES */
function calcMed(pwrBuffer) {
  var samples = pwrBuffer.length;
  var sum = 0;
  pwrBuffer.forEach(sample => {
    sum += sample;
  });
  return Math.ceil(sum / samples);
}
function dataURItoBlob(dataURI) {
  var byteString = atob(dataURI.split(",")[1]);

  var mimeString = dataURI
    .split(",")[0]
    .split(":")[1]
    .split(";")[0];

  var ab = new ArrayBuffer(byteString.length);

  var ia = new Uint8Array(ab);

  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  var blob = new Blob([ab], { type: mimeString });
  return blob;
}
