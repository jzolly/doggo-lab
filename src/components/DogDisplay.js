const DogDisplay = ({dog}) => {
    console.log(dog)
    return (
        <div className="display">
            <h1>Doggos Show Here</h1>
            <img className="dog" src={dog.message} alt="doggo" height="200px"/>
        </div>
    );
};

export default DogDisplay;