import React from 'react';
import ReactApexChart from 'react-apexcharts'

class ApexChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [props.amount],
            options: {
                chart: {
                    maxHeight: 350,
                    type: 'radialBar',
                    toolbar: {
                        show: false
                    }
                },
                plotOptions: {
                    radialBar: {
                        startAngle: -135,
                        endAngle: 225,
                        hollow: {
                            margin: 0,
                            size: '70%',
                            background: '#fff',
                            image: undefined,
                            imageOffsetX: 0,
                            imageOffsetY: 0,
                            position: 'front',
                            dropShadow: {
                                enabled: true,
                                top: 3,
                                left: 0,
                                blur: 4,
                                opacity: 0.24
                            }
                        },
                        track: {
                            background: '#fff',
                            strokeWidth: '44%',
                            margin: 0, // margin is in pixels
                            dropShadow: {
                                enabled: true,
                                top: -3,
                                left: 0,
                                blur: 4,
                                opacity: 0.35
                            }
                        },

                        dataLabels: {
                            show: true,
                            name: {
                                offsetY: -10,
                                show: true,
                                color: '#888',
                                fontSize: '35px'
                            },
                            value: {
                                formatter: function (val) {
                                    return parseInt(val);
                                },
                                color: '#111',
                                fontSize: '36px',
                                show: true,
                            }
                        }
                    }
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'dark',
                        type: 'horizontal',
                        shadeIntensity: 0.5,
                        gradientToColors: ['#ABE5A1'],
                        inverseColors: true,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 100]
                    }
                },
                stroke: {
                    lineCap: 'round'
                },
                labels: ['Budget Left'],
            },


        };
    }

    render() {
        return (
            <div id="card">
                <div id="chart">
                    <ReactApexChart options={this.state.options} series={this.state.amount} type="radialBar" height={350} />
                </div>
            </div>
        );
    }
}

export default ApexChart
