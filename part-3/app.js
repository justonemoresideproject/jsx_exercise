const app = () => {
    return (
    <div>
        <person age={108} name="Superman" hobbies={["saving the world", "photography", "journalism"]}/>
        <person age={7} name="Johny" hobbies={["football", "studying", "pretending to be Superman"]}/>
        <person age={26} name="Lex Luthor" hobbies={["buring down orphanages", "making money", "killing Superman"]}/>
    </div>
    )
}

ReactDOM.render(<App/>,
    document.getElementById("root"))