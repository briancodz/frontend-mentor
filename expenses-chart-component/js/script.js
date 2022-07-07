const ctx = document.querySelector("#spendingChart").getContext("2d");
const spendingChart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: ["mon", "tue", "weds", "thu", "fri", "sat", "sun"],
        datasets: [{
            data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
            backgroundColor: [
                "hsl(10, 79%, 65%)",
                "hsl(10, 79%, 65%)",
                "hsl(186, 34%, 60%)",
                "hsl(10, 79%, 65%)",
                "hsl(10, 79%, 65%)",
                "hsl(10, 79%, 65%)",
            ],
            hoverBackgroundColor: "hsl(10, 87%, 79%)",
            borderWidth: 1,
            borderRadius: 5,
        }, ],
    },
    options: {
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                caretSize: 0,

                bodyFont: {
                    size: 15,
                },
                padding: 10,
                displayColors: false,
                backgroundColor: "rgba(56, 35, 20,0.9)",
                yAlign: "bottom",
                callbacks: {
                    title: function() {},
                    label: function(context) {
                        return "$" + context.formattedValue;
                    },
                },
            },
            fillStyle: "red",
        },
        scales: {
            x: {
                ticks: { display: true },
                grid: {
                    display: false,
                },
            },
            y: { ticks: { display: false }, grid: { display: false } },
        },
    },
});