function randomQuote(){
    
    var quote=['“Be yourself; everyone else is already taken.”',
            '“Two things are infinite: the universe and human stupidity; and I am not sure about the universe.”',
            '“So many books, so little time.”','“A room without books is like a body without a soul.”',
            '“You only live once, but if you do it right, once is enough.”','“Be the change that you wish to see in the world.”',
            '“In three words I can sum up everything I have learned about life: it goes on.”','“If you tell the truth, you don not have to remember anything.”',
            '“To live is the rarest thing in the world. Most people exist, that is all.”','“Without music, life would be a mistake.”',

];

    var quoteWriter =["― Oscar Wilde","― Albert Einstein","― Frank Zappa","― Marcus Tullius Cicero","― Mae West","― Mahatma Gandhi",
                    "― Robert Frost","― Mark Twain","― Oscar Wilde","― Friedrich Nietzsche, Twilight of the Idols",
];
   
    var index = Math.floor( Math.random() * quoteWriter.length);

    document.getElementById("quote").innerHTML= quote[index] + " " ;
    document.getElementById("writer").innerHTML= quoteWriter[index];

}
