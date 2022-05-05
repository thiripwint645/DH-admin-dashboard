let asideBtn = document.querySelector(".aside-btn");
let aside = document.querySelector("aside");
let backdrop = document.querySelector(".__backdrop");
asideBtn.addEventListener("click", () => {
    aside.classList.add("show");
    backdrop.classList.add("offcanvas-backdrop");
    backdrop.classList.add("show");
});
backdrop.addEventListener("click", () => {
    aside.classList.remove("show");
    backdrop.classList.remove("offcanvas-backdrop");
    backdrop.classList.remove("show");
});

// chart js

const labels = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
];

const data = {
    labels: labels,
    datasets: [{
            label: "My First dataset",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            borderRadius: 6,
            data: [
                0, 10, 5, 2, 20, 30, 45, 0, 10, 5, 2, 20, 30, 45, 0, 10, 5, 2, 20, 30,
                45,
            ],
        },
        {
            label: "My Second dataset",
            backgroundColor: "rgb(255, 99, 132,0.2)",
            borderColor: "rgb(255, 99, 132,0.2)",
            borderRadius: 6,
            data: [
                0, 10, 5, 2, 20, 30, 45, 0, 10, 5, 2, 20, 30, 45, 0, 10, 5, 2, 20, 30,
                45,
            ],
        },
    ],
};

const config = {
    type: "bar",
    data: data,
    options: {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "bottom",
                align: "start",
                labels: {
                    usePointStyle: true,
                },
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                grid: {
                    borderColor: "transparent",
                    borderDash: [5],
                },

                ticks: {
                    // forces step size to be 50 units
                    stepSize: 20,
                },
            },
        },
    },
};
const myChart = new Chart(document.getElementById("myChart"), config);

// data table

$(document).ready(function() {
    $("#tt").DataTable({
        pageLength: 5,
    });
});

// Visitor

const vlabels = ["January", "February", "March", "April", "May", "June"];
const vdata = {
    labels: vlabels,
    datasets: [{
            label: "My First dataset",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: [0, 10, 5, 2, 20, 30, 45],
        },
        {
            label: "My First dataset",
            backgroundColor: "rgb(255, 99, 132,0.2)",
            borderColor: "rgb(255, 99, 132,0.2)",
            data: [10, 13, 5, 20, 10, 20, 43],
        },
    ],
};
const vConfig = {
    type: "bar",
    data: vdata,

    options: {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "bottom",
                align: "start",
                labels: {
                    usePointStyle: true,
                },
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                grid: {
                    borderColor: "transparent",
                    borderDash: [5],
                },

                ticks: {
                    // forces step size to be 50 units
                    stepSize: 23,
                },
            },
        },
    },
};

const myVisitor = new Chart(document.getElementById("myVisitor"), vConfig);