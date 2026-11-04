const Greet = () => {
    let name = "Allan";
    let currentDate = new Date();
    
    return (
        <div>
            <h1>Hola {name}!</h1>
            <p>{currentDate.getUTCDate()}</p>
        </div>
    );
};

export default Greet;