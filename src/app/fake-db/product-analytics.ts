export class ProductAnalyticsDb {
    public static widgets = {
        widget1: {
            chartType: 'line',
            datasets: {
                '2016': [
                    {
                        label: 'Sales',
                        data: [1.9, 3, 3.4, 2.2, 2.9, 3.9, 2.5, 3.8, 4.1, 3.8, 3.2, 2.9],
                        fill: 'start',
                    },
                ],
                '2017': [
                    {
                        label: 'Sales',
                        data: [2.2, 2.9, 3.9, 2.5, 3.8, 3.2, 2.9, 1.9, 3, 3.4, 4.1, 3.8],
                        fill: 'start',
                    },
                ],
                '2018': [
                    {
                        label: 'Sales',
                        data: [3.9, 2.5, 3.8, 4.1, 1.9, 3, 3.8, 3.2, 2.9, 3.4, 2.2, 2.9],
                        fill: 'start',
                    },
                ],
            },
            labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
            colors: [
                {
                    borderColor: '#42a5f5',
                    backgroundColor: '#42a5f5',
                    pointBackgroundColor: '#1e88e5',
                    pointHoverBackgroundColor: '#1e88e5',
                    pointBorderColor: '#ffffff',
                    pointHoverBorderColor: '#ffffff',
                },
            ],
            options: {
                spanGaps: false,
                legend: {
                    display: false,
                },
                maintainAspectRatio: false,
                layout: {
                    padding: {
                        top: 32,
                        left: 32,
                        right: 32,
                    },
                },
                elements: {
                    point: {
                        radius: 4,
                        borderWidth: 2,
                        hoverRadius: 4,
                        hoverBorderWidth: 2,
                    },
                    line: {
                        tension: 0,
                    },
                },
                scales: {
                    xAxes: [
                        {
                            gridLines: {
                                display: false,
                                drawBorder: false,
                                tickMarkLength: 18,
                            },
                            ticks: {
                                fontColor: '#ffffff',
                            },
                        },
                    ],
                    yAxes: [
                        {
                            display: false,
                            ticks: {
                                min: 1.5,
                                max: 5,
                                stepSize: 0.5,
                            },
                        },
                    ],
                },
                plugins: {
                    filler: {
                        propagate: false,
                    },
                    xLabelsOnTop: {
                        active: true,
                    },
                },
            },
        },
    };
}
