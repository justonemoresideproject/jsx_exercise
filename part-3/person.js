const Person = (props) => {
    let age = "you must be 18"
    if(props.age >= 18) {
        age = "Please go vote"
    }
    return (
        <p>
            Learn some information about {props.name.length > 6 ? props.name.slice(0, 6) : props.name}
            
            <h3>

                {props.age >= 18 ? "Please go vote" : "You must be 18"}
            </h3>

            <h3>
                My hobbies:
                <ul>
                    {props.hobbies.map(hobby => <li>{hobby}</li>)}
                </ul>
            </h3>
        </p>
    )
}