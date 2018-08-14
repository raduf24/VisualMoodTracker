export default class UploadImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.fileUpload = this.fileUpload.bind(this);
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
            }
        });
    }

    downloadHandler = () => {
        try {
            return axios.get("http://localhost:55847/api/sessions" + this.state.sessionId)
                .then(function (response) {
                });
        } catch (error) {
            console.error(error);
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
                    onClick={this.fileUpload} disabled={!this.state.selectedFile} > Upload </button>
                &emsp; &emsp;
                <button className="btn btn-lg black-background white" onClick={this.downloadHandler} disabled > Download </button>
            </div>
        );
    }
}