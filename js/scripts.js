
// HTML Nodes
const alertBanner = document.getElementById('alert');
const trafficCanvas = document.getElementById('traffic-chart');
const dailyCanvas = document.getElementById('daily-traffic-chart');
const mobileCanvas = document.getElementById('mobile-users-chart');
const user = document.getElementById("user-field");
const message = document.getElementById("form-field");
const send = document.getElementById("send");

// Traffic Line Chart Data and Options
const trafficData = {
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
        2500],
        backgroundColor: 'rgba(115,119,191,0.24)',
        borderColor: 'rgba(115,119,191,0.74)',
        borderWidth: 1,
        pointRadius: 7,
        pointBackgroundColor: '#fff',
        pointBorderWidth: 3,
        pointBorderColor: '#7477BF',
        lineTension: 0
    }]
}

const trafficOptions = {
      aspectRatio: 2.5,
      animation: {
        duration: 0
      },
      scales: {
          yAxes: [{
          ticks: {
            beginAtZero:true
            }
          }]
      },
      legend : {
        display: false
      }
}

// Daily Bar Chart Data and Options
const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
      label: '# of Hits',
      data: [75, 115, 175, 125, 225, 200, 100],
      backgroundColor: '#7477BF',
      borderWidth: 1
    }]
};

const dailyOptions = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true
            }
        }]
    },
    legend : {
      display: false
    }
}

// Doughnut Bar Chart Data and Options
const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
      label: '# of Users',
      data: [2000, 550, 500],
      borderWidth: 0,
      backgroundColor: [
        '#7477BF',
        '#78CF82',
        '#51B6C8'
        ]
    }]
};

const mobileOptions = {
    legend: {
      position: 'right',
      labels: {
        boxWidth: 20,
        fontStyle: 'bold'
      }
    }
}


// Create Alert Banner on page load
alertBanner.innerHTML =
`
<div class="alert-banner">
<p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks
to complete</p>
<p class="alert-banner-close">X</p>
</div>`

// Event Listener on alert banner close button
alertBanner.addEventListener("click", (e) => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
      alertBanner.style.display = "none";
    }
})

// Event Listener on Messaging Widget Send button
send.addEventListener("click", (e) => {
  if (user.value === '' && message.value === '') {
    alert("Please fill out both user and message fields");
  } else if (user.value === '') {
    alert("Please fill out the user field");
  } else if (message.value === '') {
    alert("Please fill out the message field");
  } else {
    alert(`Message successfully sent to ${user.value}`)
  }
})


// Create Traffic Line Chart
const trafficChart = new Chart(trafficCanvas, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: trafficData,
    // Configuration options go here
    options: trafficOptions
});


// Create Bar Graph Chart
const dailyChart = new Chart(dailyCanvas, {
    // The type of chart we want to create
    type: 'bar',
    // The data for our dataset
    data: dailyData,
    // Configuration options go here
    options: dailyOptions
});


// Create Donut Graph Chart
const donutChart = new Chart(mobileCanvas, {
    // The type of chart we want to create
    type: 'doughnut',
    // The data for our dataset
    data: mobileData,
    // Configuration options go here
    options: mobileOptions
});
