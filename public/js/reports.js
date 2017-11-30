// CI = CURRENT INVENTORY
var kitchenCI=0, electronicsCI=0, clothingCI=0, furnitureCI=0, petsCI=0, outdoorCI=0, complap=0, autoCI=0, complapCI=0, compaccCI=0, fitnessCI=0, cellphonesCI=0;
// OCTS = DECEMBER SALES
var kitchenOCTS=0, electronicsOCTS=0, clothingOCTS=0, furnitureOCTS=0, petsOCTS=0, outdoorOCTS=0, compaccOCTS=0, complapOCTS=0, comaccOCTS=0, autoOCTS=0, fitnessOCTS=0, cellphonesOCTS=0;
// TS = TOTAL SALES
var jan18TS=0, feb18TS=0, mar18TS=0, apr18TS=0, may18TS=0, jun18TS=0, jul18TS=0, aug18TS=0, sep18TS=0, oct18TS=0, nov18TS=0, dec18TS=0;

// GETS DATABASE INFO FOR THE CHARTS
function getData(){
  $.get("/api/reports", function(data){
    // TALLY SALES AND INVENTORY
    for (var i = 0; i < data.length; i++) {
      jan18TS += data[i].jan18_sales;
      feb18TS += data[i].feb18_sales;
      mar18TS += data[i].mar18_sales;
      apr18TS += data[i].apr18_sales;
      may18TS += data[i].may18_sales;
      jun18TS += data[i].jun18_sales;
      jul18TS += data[i].jul18_sales;
      aug18TS += data[i].aug18_sales;
      sep18TS += data[i].sep18_sales;
      oct18TS += data[i].oct18_sales;
      nov18TS += data[i].nov18_sales;
      dec18TS += data[i].dec18_sales;

      let salesnums = data[i].dec18_sales;
      var number = parseFloat(salesnums);

      if (data[i].department_name.toLowerCase() === "kitchen") {
        kitchenCI += data[i].quantity_on_hand;
        kitchenOCTS += number;
      } else if (data[i].department_name.toLowerCase() === "electronics") {
        electronicsCI += data[i].quantity_on_hand;
        electronicsOCTS += number;
      } else if (data[i].department_name.toLowerCase() === "clothing") {
        clothingCI += data[i].quantity_on_hand;
        clothingOCTS += number;
      } else if (data[i].department_name.toLowerCase() === "furniture") {
        furnitureCI += data[i].quantity_on_hand;
        furnitureOCTS += number;
      } else if (data[i].department_name.toLowerCase() === "pets") {
        petsCI += data[i].quantity_on_hand;
        petsOCTS += number;
      } else if (data[i].department_name.toLowerCase() === "outdoor") {
        outdoorCI += data[i].quantity_on_hand;
        outdoorOCTS += number;
      } else if (data[i].department_name.toLowerCase() === "auto") {
        autoCI += data[i].quantity_on_hand;
        autoOCTS += number;
      } else if (data[i].department_name.toLowerCase() === "fitness") {
        fitnessCI += data[i].quantity_on_hand;
        fitnessOCTS += number;
      } else if (data[i].department_name.toLowerCase() === "cell phones") {
        cellphonesCI += data[i].quantity_on_hand;
        cellphonesOCTS += number;
      } else if (data[i].department_name.toLowerCase() === "computers & laptops") {
        complapCI += data[i].quantity_on_hand;
        complapOCTS += number;
      } else if (data[i].department_name.toLowerCase() === "computer accessories") {
        compaccCI += data[i].quantity_on_hand;
        compaccOCTS += number;
      } else {
        console.log("Invalid Dept: " + data[i]);
      }
    }

  //FIRSTCHART
    var ctx = $("#myChart");
    var myChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
        datasets: [{
          label: '$',
          data: [kitchenCI, electronicsCI, clothingCI, furnitureCI, petsCI, outdoorCI, autoCI, fitnessCI, cellphonesCI, complapOCTS, compaccOCTS],
          backgroundColor: [
            'rgba(255, 64, 0, 0.5)',
            'rgba(255, 128, 0, 0.5)',
            'rgba(255, 191, 0, 0.5)',
            'rgba(255, 255, 0, 0.5)',
            'rgba(191, 255, 0, 0.5)',
            'rgba(0, 255, 128, 0.5)',
            'rgba(0, 255, 191, 0.5)',
            'rgba(0, 255, 255, 0.5)',
            'rgba(0, 255, 225, 0.5)',
            'rgba(255, 125, 225, 0.5)',
            'rgba(255, 200, 255, 0.5)'
          ],
          borderColor: [
            'rgba(255, 64, 0, 0.6)',
            'rgba(255, 128, 0, 0.6)',
            'rgba(255, 191, 0, 0.6)',
            'rgba(255, 255, 0, 0.6)',
            'rgba(191, 255, 0, 0.6)',
            'rgba(0, 255, 128, 0.6)',
            'rgba(0, 255, 191, 0.6)',
            'rgba(0, 255, 255, 0.6)',
            'rgba(0, 255, 225, 0.5)',
            'rgba(255, 125, 225, 0.5)',
            'rgba(255, 200, 255, 0.5)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true
            }
          }]
        }
      }
    });

  //SECONDCHART
    var ctx = $("#myChart2");
    var myChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
        datasets: [{
          label: '',
          data: [kitchenOCTS, electronicsOCTS, clothingOCTS, furnitureOCTS, petsOCTS, outdoorOCTS, autoOCTS, fitnessOCTS, cellphonesOCTS, complapOCTS, compaccOCTS],
          backgroundColor: [
            'rgba(0, 255, 255, 0.5)',
            'rgba(0, 255, 191, 0.5)',
            'rgba(0, 255, 128, 0.5)',
            'rgba(191, 255, 0, 0.5)',
            'rgba(255, 255, 0, 0.5)',
            'rgba(255, 191, 0, 0.5)',
            'rgba(255, 128, 0, 0.5)',
            'rgba(255, 64, 0, 0.5)',
            'rgba(0, 255, 225, 0.5)',
            'rgba(255, 125, 225, 0.5)',
            'rgba(255, 200, 255, 0.5)'
          ],
          borderColor: [
            'rgba(0, 255, 255, 0.6)',
            'rgba(0, 255, 191, 0.6)',
            'rgba(0, 255, 128, 0.6)',
            'rgba(191, 255, 0, 0.6)',
            'rgba(255, 255, 0, 0.6)',
            'rgba(255, 191, 0, 0.6)',
            'rgba(255, 128, 0, 0.6)',
            'rgba(255, 128, 0, 0.6)',
            'rgba(0, 255, 225, 0.5)',
            'rgba(255, 125, 225, 0.5)',
            'rgba(255, 200, 255, 0.5)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true
            }
          }]
        }
      }
    });
    
  //THIRD CHART
    var ctx = document.getElementById("myChart3");
    var myChart3 = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
        datasets: [
          {
            label: "$",
            data: [jan18TS, feb18TS, mar18TS, apr18TS, may18TS, jun18TS, jul18TS, aug18TS, sep18TS, oct18TS, nov18TS, dec18TS],
            backgroundColor: [
              'rgba(255, 64, 0, 0.5)'
            ],
            borderColor: [
              'rgba(255, 64, 0, 0.6)'
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:false
            }
          }]
        }
      }
    });
    });
}
getData();

/////////////////////////////////////
// REMOVE CONTAINER IMG BACKGROUND //
/////////////////////////////////////
function changeBG(){ 
  if ($("#mainwrapper").attr("data-currentBG") === 'plain') {
    // DO NOTHING
  } else if ($("#mainwrapper").attr("data-currentBG") === 'containers') {
    $("#mainwrapper").removeClass('containerBG');
    $("#mainwrapper").addClass('plainBG');
    $("#mainwrapper").attr("data-currentBG", "plain");
  }
}
changeBG();