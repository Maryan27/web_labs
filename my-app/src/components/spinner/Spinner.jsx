import './spinner.css';

const Spinner = () => {
    return (
        <div className="Loading">
            <div className="spinner-wrapper">
                <div className="spinner"></div>
                <p>Loading...</p>
            </div>
            
        </div>
    );
}

export default Spinner;
