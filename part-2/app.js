const app = () => {
    return (
    <div>
        <tweet username="tweeterson" user="mr.tweet" message="I like tweets" date="today"/>
        <tweet username="jimmy" user="jack" message="I don't like tweets" date="yesterday"/>
        <tweet username="timeTraveler" user="Spock" message="I'm from the future" date="tomorrow"/>
    </div>
    )
}

ReactDOM.render(<App/>,
    document.getElementById("root"))