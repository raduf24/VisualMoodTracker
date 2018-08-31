export default class Graph extends React.Component {
    constructor(props) {
        super(props);
    };

    getGraphData = () => {
        axios.get("api/sessions/" + this.props.sessionId + "/summary")
            .then(response => {
                this.updateCanvas(response.data);
            });
    };

    updateCanvas(data) {
        var labels = [], angerAverages = [], contemptAverages = [], fearAverages = [], happinessAverages = [], neutralAverages = [], sadnessAverages = [], surpriseAverages = [], disgustAverages = [];
        data.map(values => {
            labels.push(values.imageId);
            angerAverages.push(values.feelingAverages.find(x => x.key === 'Anger').value);
            contemptAverages.push(values.feelingAverages.find(x => x.key === 'Contempt').value);
            happinessAverages.push(values.feelingAverages.find(x => x.key === 'Happiness').value);
            neutralAverages.push(values.feelingAverages.find(x => x.key === 'Neutral').value);
            sadnessAverages.push(values.feelingAverages.find(x => x.key === 'Sadness').value);
            surpriseAverages.push(values.feelingAverages.find(x => x.key === 'Surprise').value);
            disgustAverages.push(values.feelingAverages.find(x => x.key === 'Disgust').value);
            fearAverages.push(values.feelingAverages.find(x => x.key === 'Fear').value);
        });

        var lineChartData = {
            labels: labels,
            datasets: [{
                label: 'Anger',
                borderColor: "red",
                backgroundColor: "red",
                fill: false,
                data: angerAverages,
                yAxisID: 'y-axis-1',
            }
                , {
                label: 'Contempt',
                borderColor: "blue",
                backgroundColor: "blue",
                fill: false,
                data: contemptAverages,
                yAxisID: 'y-axis-1'
            }
                , {
                label: 'Disgust',
                borderColor: "green",
                backgroundColor: "green",
                fill: false,
                data: disgustAverages,
                yAxisID: 'y-axis-1'
            }
                , {
                label: 'Fear',
                borderColor: "black",
                backgroundColor: "black",
                fill: false,
                data: fearAverages,
                yAxisID: 'y-axis-1'
            }
                , {
                label: 'Happiness',
                borderColor: "yellow",
                backgroundColor: "yellow",
                fill: false,
                data: happinessAverages,
                yAxisID: 'y-axis-1'
            }
                , {
                label: 'Neutral',
                borderColor: " #ffcc33",
                backgroundColor: " #ffcc33",
                fill: false,
                data: neutralAverages,
                yAxisID: 'y-axis-1'
            }
                , {
                label: 'Sadness',
                borderColor: "#ffc3ff",
                backgroundColor: "#ffc3ff",
                fill: false,
                data: sadnessAverages,
                yAxisID: 'y-axis-1'
            }
                , {
                label: 'Surprise',
                borderColor: "orange",
                backgroundColor: "orange",
                fill: false,
                data: surpriseAverages,
                yAxisID: 'y-axis-1'
            }
            ]
        };

        var ctx = this.refs.canvas.getContext('2d');
        window.myLine = Chart.Line(ctx, {
            data: lineChartData,
            options: {
                animation: false,
                responsive: true,
                hoverMode: 'index',
                stacked: false,
                title: {
                    display: true,
                    text: 'Faces with properties'
                },
                scales: {
                    yAxes: [{
                        type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                        display: true,
                        position: 'left',
                        id: 'y-axis-1',
                    }, {
                        type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                        display: false,
                        position: 'right',
                        id: 'y-axis-2',

                        // grid line settings
                        gridLines: {
                            drawOnChartArea: true, // only want the grid lines for one axis to show up
                        },
                    }],
                }
            }
        });
    }

    render() {
        this.getGraphData()
        return (
            <div>
                <canvas ref="canvas" width={560} height={350} />
                <br /><br />
            </div>
        );
    }
}