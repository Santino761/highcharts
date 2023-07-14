(async () => {

    const data = await fetch(
        'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/marathon.json'
    ).then(response => response.json());


    Highcharts.chart('container', {
        chart: {
            type: 'spline',
            parallelCoordinates: true,
            parallelAxes: {
                lineWidth: 2
            }
        },
        title: {
            text: 'Marathon set'
        },
        lang: {
            accessibility: {
                axis: {
                    yAxisDescriptionPlural: 'The chart has 7 Y axes across the chart displaying Training date, Miles for training run, Training time, Shoe brand, Running pace per mile, Short or long, and After 2004.'
                }
            }
        },
        plotOptions: {
            series: {
                accessibility: {
                    enabled: false
                },
                animation: false,
                marker: {
                    enabled: false,
                    states: {
                        hover: {
                            enabled: false
                        }
                    }
                },
                states: {
                    hover: {
                        halo: {
                            size: 0
                        }
                    }
                },
                events: {
                    mouseOver: function () {
                        this.group.toFront();
                    }
                }
            }
        },
        tooltip: {
            pointFormat: '<span style="color:{point.color}">\u25CF</span>' +
                    '{series.name}: <b>{point.formattedValue}</b><br/>'
        },
        xAxis: {
            categories: [
                'Training date',
                'Miles for training run',
                'Training time',
                'Shoe brand',
                'Running pace per mile',
                'Short or long',
                'After 2004'
            ],
            offset: 10
        },
        yAxis: [{
            type: 'datetime',
            tooltipValueFormat: '{value:%Y-%m-%d}'
        }, {
            min: 0,
            tooltipValueFormat: '{value} mile(s)'
        }, {
            type: 'datetime',
            min: 0,
            labels: {
                format: '{value:%H:%M}'
            }
        }, {
            categories: [
                'Other',
                'Adidas',
                'Mizuno',
                'Asics',
                'Brooks',
                'New Balance',
                'Izumi'
            ]
        }, {
            type: 'datetime'
        }, {
            categories: ['&gt; 5miles', '&lt; 5miles']
        }, {
            categories: ['Before', 'After']
        }],
        colors: ['rgba(11, 200, 200, 0.1)'],
        series: data.map(function (set, i) {
            return {
                name: 'Runner ' + i,
                data: set,
                shadow: false
            };
        })
    });
})();