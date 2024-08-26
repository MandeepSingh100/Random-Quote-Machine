const App = ()  => {
    const quoteData = [
        {
          text: "The elevator to success is out of order. You’ll have to use the stairs, one step at a time.",
          author:"Joe Girard"
        },
        {
          text: "People often say that motivation doesn’t last. Well, neither does bathing – that’s why we recommend it daily.",
          author:"Zig Ziglar"
        },
        {
          text: "I always wanted to be somebody, but now I realise I should have been more specific.",
          author:"Lily Tomlin"
        },
        {
          text: "I am so clever that sometimes I don’t understand a single word of what I am saying",
          author:"Oscar Wilde"
        }
    ];
    const backgroundColors = ["#F0F8FF",
        "#FAEBD7","#00FFFF","#7FFFD4","#FFE4C4","#000000","#FFEBCD","#0000FF","#8A2BE2","#A52A2A","#DEB887","#5F9EA0","#7FFF00","#D2691E","#FF7F50","#6495ED","#DC143C","#00FFFF","#00008B","#008B8B","#8B008B","#556B2F","#9932CC","#8B0000","#483D8B","#00CED1","#9400D3","#FF1493","#1E90FF","#FF00FF","#FF69B4","#00FF00","#0000CD","#4169E1","#2E8B57","#008080","#FFFF00","#FF6347","#D8BFD8","#9ACD32","#6A5ACD","#FA8072","#DDA0DD","#800080","#CD853F","#AFEEEE","#FF4500","#C71585","#191970","#BA55D3","#20B2AA"];
        
    const QuoteBox = ({quote, handleNewQuote}) => ( 
        <div id="quote-box">
            <p id="text">{quote.text}</p>
            <h2 id="author">{quote.author}</h2>
            <div class="click">
                <button id="new-quote"
                class="btn"
                onClick={handleNewQuote}>
                New Quote</button>
                <a href="https://twitter.com/intent/tweet"
                id="tweet-quote"
                target="_blank">
                    Tweet
                </a>
            </div>
        </div>
    );

    const getRandomIndex = (max) => 
        Math.floor(Math.random() * (quoteData.length));
    
    const [quote, setQuote] = React.useState(quoteData[getRandomIndex()])

    const handleNewQuote = () => {
        setQuote(quoteData[getRandomIndex()]);
    }
    document.body.style.backgroundColor = backgroundColors[Math.floor(Math.random()*backgroundColors.length)];

    return (
       <div class="wrapper">
        <QuoteBox handleNewQuote={handleNewQuote} quote={quote}/>
       </div>
    );
}

ReactDOM.render(<App />, document.getElementById("app"));