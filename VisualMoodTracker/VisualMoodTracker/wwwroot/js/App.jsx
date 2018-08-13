
class UploadImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};  
    }

    state = {
        selectedFile: null,
        formIsValid: false,
        sessionId: null,
    }


    fileChangedHandler = (event) => {
        this.setState({ selectedFile: event.target.files[0] }, () => {
            if (this.state.selectedFile != null) {
                this.setState({ formIsValid: true });
            } });
    }

    uploadHandler = () => {
        console.log(this.state.selectedFile)
    }

    downloadHandler = () => {
        try {
            return axios.get("http://localhost:55847/api/sessions")
                .then(function (response) {
                    console.log(response.data)
                });
        } catch (error) {
            console.error(error)
        }
    }

    fileUpload = () => {
        const url = "/api/sessions";
        if (this.state.sessionId != null) {
            if (this.state.formIsValid) {
                const formData = new FormData();
                formData.append('fileUpload', this.state.selectedFile);
                formData.append('sessionId', this.state.sessionId);
                const config = {
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                }
                axios.post(url, formData, config).then(response => {
                    this.props.updateState(response.data);
                    this.setState({ sessionId: response.data.sessionId, selectedFile: null });
                });
            }
            else {
                alert("You have to select an image first!");
            }
            document.getElementById('inputReset').value = '';
        }
        else {
            if (this.state.formIsValid) {
                const formData = new FormData();
                formData.append('fileUpload', this.state.selectedFile);
                const config = {
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                }
                axios.post(url, formData, config).then(response => {
                    this.props.updateState(response.data);
                    this.setState({ sessionId: response.data.sessionId, selectedFile: null });
                });
            }
            else {
                alert("You have to select an image first!");
            }
            document.getElementById('inputReset').value = '';
        } 
    }

    render() {

        return (
            <div>
                <br />
                <input id="inputReset" type="file" accept="image/*" className="btn btn-lg" onChange={this.fileChangedHandler} />
                <br />
                &emsp;
                <button className="btn btn-lg black-background white"
                    onClick={this.fileUpload.bind(this)} disabled={!this.state.selectedFile} > Upload </button>
                &emsp; &emsp;
                <button className="btn btn-lg black-background white" onClick={this.downloadHandler} disabled > Download </button>
            </div>
        );
    }
}

class Form extends React.Component {
    render() {
        return (
            <form style={{ margin: '1em', marginLeft: '3em', float: 'left' }}>
                <input type="text" placeholder="" style={{ marginTop: '2.5em' }} />
                <button type="submit"> Search </button>
            </form>
        );
    }
}

const Card = (props) => {
    const thumbnailWidth = 180;
    const thumbnailHeight = 180;
    const imageName = "./sessions/" + props.sessionId + "/" + props.lastImage;

    return (
        <div style={{ margin: '1em' }}>
            <div style={{ display: 'inline-flex' }}>
                <div style={{
                    overflow: 'hidden', position: 'relative', width: thumbnailWidth, height: thumbnailHeight,
                    float: 'right', marginLeft: '2em'
                }} >

                    <img src={imageName} style={{
                        position: 'absolute',
                        left: -((props.faceRectangle.left + props.faceRectangle.width / 2)) + (thumbnailWidth / 2),
                        top: -(props.faceRectangle.top + props.faceRectangle.height / 2) + (thumbnailHeight / 2)
                    }} />

                </div>
                <div style={{ display: 'inline-block', marginLeft: '1em' }}>
                    <div>ID: {props.faceId}</div>
                    <div>Anger: {(props.faceEmotion.anger * 100).toFixed(2)}%</div>
                    <div>Contempt: {(props.faceEmotion.contempt * 100).toFixed(2)}%</div>
                    <div>Disgust: {(props.faceEmotion.disgust * 100).toFixed(2)}%</div>
                    <div>Fear: {(props.faceEmotion.fear * 100).toFixed(2)}%</div>
                    <div>Happiness: {(props.faceEmotion.happiness * 100).toFixed(2)}%</div>
                    <div>Neutral: {(props.faceEmotion.neutral * 100).toFixed(2)}%</div>
                    <div>Sadness: {(props.faceEmotion.sadness * 100).toFixed(2)}%</div>
                    <div>Surprise: {(props.faceEmotion.surprise * 100).toFixed(2)}%</div>
                </div>
            </div>

        </div>
    );
};

const CardList = (props) => {
    return (
        <div style={{ display: 'inline-block', overflowY: 'scroll', height: '40em' }}>
            {props.cards.faces.map(card => <Card key={card.faceId} sessionId={props.cards.sessionId} lastImage={props.cards.lastImageId + props.cards.imageExtension} {...card} />)}
        </div>
    );
};

class FacesList extends React.Component {
    state = {
        data: [],
        sessionNumber: null,
        lastImageId: null,
        lastImageExtension: null,
    }

    componentDidMount() {
        this.test();
    }

    test = () => {
        axios.get("api/sessions")
            .then(response => {
                this.setState({ data: response.data }, () => console.log(this.state.data))
            });
    };

    updateState = (value) => {
        this.setState({ data: value });
        this.setState({ sessionNumber: value.sessionId });
        this.setState({ lastImageId: value.lastImageId });
        this.setState({ lastImageExtension: value.imageExtension });
    };

    render() {
        if (this.state.data != "") {
            return (
                <div>
                    <h2> Add image to session </h2>
                    <div>
                        <UploadImage updateState={this.updateState.bind(this)} />
                    </div>
                    <br/>
                    <div style={{ float: 'left' }}>
                        <h2> Session {this.state.sessionNumber}: </h2>

                        <img src={".\\sessions\\" + this.state.sessionNumber + "\\" + this.state.lastImageId + this.state.lastImageExtension} style={{ width: '40em', height: '25em' }} />
                    </div>
                    <Form />
                    <CardList cards={this.state.data} />
                </div>
            );
        }
        else {
            return (
                <div>
                    <h2> Create new session </h2>
                    <div>
                        <UploadImage updateState={this.updateState.bind(this)} />
                    </div>
                    <br/><br/>
                    <h2>Session List</h2>
                </div>
            );
        }
    }
}

ReactDOM.render(
    <FacesList />,
    document.getElementById('content')
);

