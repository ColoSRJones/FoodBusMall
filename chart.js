//Select canvas element by ID to commence chart generation
let elChart = document.getElementById('busChart').getContext('2d');


//declare a function to populate chart
function populateChart(property){
  let propertyArrary = [];
  for(let i = 0; i < selectionArray.length; i++){
    propertyArrary.push(selectionArray[i][property]);
  }
  return propertyArrary;
}

//declare a function to display chart
function displayChart(){
  elChart.innerHTML = '';
  let busChart = new Chart(elChart, {
    type: 'bar',
    data: {
      labels: populateChart('name'),
      datasets: [{
        label: '# of selections',
        data: populateChart('selected'),
        
        	backgroundColor: [
				'rgba(255, 99, 132, 2.6)',
				'rgba(54, 162, 235, 2.7)',
				'rgba(255, 206, 86, 2.8)',
				'rgba(75, 192, 192, 2.9)',
				'rgba(153, 102, 255, 3)',
				'rgba(255, 159, 64, 3.1)',
				'rgba(255, 99, 132, 3.2)',
				'rgba(54, 162, 235, 3.3)',
				'rgba(255, 206, 86, 3.4)',
				'rgba(75, 192, 192, 1)',
				'rgba(153, 102, 255, 1.1)',
				'rgba(255, 159, 64, 1.2)',
				'rgba(255, 99, 132, 1.3)',
				'rgba(54, 162, 235, 1.4)',
				'rgba(255, 206, 86, 1.5)',
				'rgba(75, 192, 192, 1.6)',
				'rgba(153, 102, 255, 1.7)',
				'rgba(255, 159, 64, 1.8)',
				'rgba(255, 99, 132, 2)',
				'rgba(54, 162, 235, 2.1)',
				'rgba(255, 206, 86, 2.2)',
				'rgba(75, 192, 192, 2.3)',
				'rgba(153, 102, 255, 2.4)',
				'rgba(255, 159, 64, 2.5)'
			],
			borderColor: [
				'rgba(255, 99, 132, 1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(75, 192, 192, 1)',
				'rgba(153, 102, 255, 1)',
				'rgba(255, 159, 64, 1)',
				'rgba(255, 99, 132, 1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(75, 192, 192, 1)',
				'rgba(153, 102, 255, 1)',
				'rgba(255, 159, 64, 1)',
				'rgba(255, 99, 132, 1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(75, 192, 192, 1)',
				'rgba(153, 102, 255, 1)',
				'rgba(255, 159, 64, 1)',
				'rgba(255, 99, 132, 1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(75, 192, 192, 1)',
				'rgba(153, 102, 255, 1)',
				'rgba(255, 159, 64, 1)'
			],
      },
      {
        label: '# of times displayed',
        data: populateChart('shown'),
      }
    ]
    },
    options: {
      scales: {
        yAxis: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  })
};

