
import FacesList from "./ListWithFacesAndProperties.jsx";

class App extends React.Component {

    render() {
        return (
            <div >
                <FacesList />  
            </div>
        );
    }
}
ReactDOM.render(
    <App />,
    document.getElementById('content')
);

