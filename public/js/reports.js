// CI = CURRENT INVENTORY
var kitchenCI=0, electronicsCI=0, clothingCI=0, furnitureCI=0, petsCI=0, outdoorCI=0, autoCI=0, fitnessCI=0;
// OCTS = OCTOBER SALES
var kitchenOCTS=0, electronicsOCTS=0, clothingOCTS=0, furnitureOCTS=0, petsOCTS=0, outdoorOCTS=0, autoOCTS=0, fitnessOCTS=0;
// TS = TOTAL SALES
var nov16TS=0, dec16TS=0, jan17TS=0, feb17TS=0, mar17TS=0, apr17TS=0, may17TS=0, jun17TS=0, jul17TS=0, aug17TS=0, sep17TS=0, oct17TS=0;

// GETS DATABASE INFO FOR THE CHARTS
function getData(){
  $.get("/api/reports", function(data){
    // TALLY SALES AND INVENTORY
    for (var i = 0; i < data.length; i++) {
      nov16TS += data[i].nov16_sales;
      dec16TS += data[i].dec16_sales;
      jan17TS += data[i].jan17_sales;
      feb17TS += data[i].feb17_sales;
      mar17TS += data[i].mar17_sales;
      apr17TS += data[i].apr17_sales;
      may17TS += data[i].may17_sales;
      jun17TS += data[i].jun17_sales;
      jul17TS += data[i].jul17_sales;
      aug17TS += data[i].aug17_sales;
      sep17TS += data[i].sep17_sales;
      oct17TS += data[i].oct17_sales;

      if (data[i].department_name.toLowerCase() === "kitchen") {
        kitchenCI += data[i].quantity_on_hand;
        kitchenOCTS += data[i].oct17_sales;
      } else if (data[i].department_name.toLowerCase() === "electronics") {
        electronicsCI += data[i].quantity_on_hand;
        electronicsOCTS += data[i].oct17_sales;
      } else if (data[i].department_name.toLowerCase() === "clothing") {
        clothingCI += data[i].quantity_on_hand;
        clothingOCTS += data[i].oct17_sales;
      } else if (data[i].department_name.toLowerCase() === "furniture") {
        furnitureCI += data[i].quantity_on_hand;
        furnitureOCTS += data[i].oct17_sales;
      } else if (data[i].department_name.toLowerCase() === "pets") {
        petsCI += data[i].quantity_on_hand;
        petsOCTS += data[i].oct17_sales;
      } else if (data[i].department_name.toLowerCase() === "outdoor") {
        outdoorCI += data[i].quantity_on_hand;
        outdoorOCTS += data[i].oct17_sales;
      } else if (data[i].department_name.toLowerCase() === "auto") {
        autoCI += data[i].quantity_on_hand;
        autoOCTS += data[i].oct17_sales;
      } else if (data[i].department_name.toLowerCase() === "fitness") {
        fitnessCI += data[i].quantity_on_hand;
        fitnessOCTS += data[i].oct17_sales;
      } else {
        console.log("Invalid Dept: " + data[i]);
      }
    }

  //FIRSTCHART
    var ctx = $("#myChart");
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
        datasets: [{
          label: '',
          data: [kitchenCI, electronicsCI, clothingCI, furnitureCI, petsCI, outdoorCI, autoCI, fitnessCI],
          backgroundColor: [
            'rgba(255, 64, 0, 0.5)',
            'rgba(255, 128, 0, 0.5)',
            'rgba(255, 191, 0, 0.5)',
            'rgba(255, 255, 0, 0.5)',
            'rgba(191, 255, 0, 0.5)',
            'rgba(0, 255, 128, 0.5)',
            'rgba(0, 255, 191, 0.5)',
            'rgba(0, 255, 255, 0.5)'
          ],
          borderColor: [
            'rgba(255, 64, 0, 0.6)',
            'rgba(255, 128, 0, 0.6)',
            'rgba(255, 191, 0, 0.6)',
            'rgba(255, 255, 0, 0.6)',
            'rgba(191, 255, 0, 0.6)',
            'rgba(0, 255, 128, 0.6)',
            'rgba(0, 255, 191, 0.6)',
            'rgba(0, 255, 255, 0.6)'
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
      type: 'bar',
      data: {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
        datasets: [{
          label: '',
          data: [kitchenOCTS, electronicsOCTS, clothingOCTS, furnitureOCTS, petsOCTS, outdoorOCTS, autoOCTS, fitnessOCTS],
          backgroundColor: [
            'rgba(0, 255, 255, 0.5)',
            'rgba(0, 255, 191, 0.5)',
            'rgba(0, 255, 128, 0.5)',
            'rgba(191, 255, 0, 0.5)',
            'rgba(255, 255, 0, 0.5)',
            'rgba(255, 191, 0, 0.5)',
            'rgba(255, 128, 0, 0.5)',
            'rgba(255, 64, 0, 0.5)'
          ],
          borderColor: [
            'rgba(0, 255, 255, 0.6)',
            'rgba(0, 255, 191, 0.6)',
            'rgba(0, 255, 128, 0.6)',
            'rgba(191, 255, 0, 0.6)',
            'rgba(255, 255, 0, 0.6)',
            'rgba(255, 191, 0, 0.6)',
            'rgba(255, 128, 0, 0.6)',
            'rgba(255, 64, 0, 0.6)'
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
        labels: ["11", "12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        datasets: [
          {
            label: "",
            data: [nov16TS, dec16TS, jan17TS, feb17TS, mar17TS, apr17TS, may17TS, jun17TS, jul17TS, aug17TS, sep17TS, oct17TS],
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