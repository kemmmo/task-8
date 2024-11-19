
i = 0;

function changequote(){
   
    quotes =[
    { quote : "Be yourself; everyone else is already taken.", author: "― Oscar Wilde" },
    { quote : "The purpose of our lives is to be happy.", author: "― Dalai Lama" },
    { quote : "Life is what happens when you're busy making other plans.", author: "― John Lennon" },
    { quote : "Get busy living or get busy dying.", author: "― Stephen King" },
    { quote : "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "―Albert Einstein " }]

    document.getElementById("quote").innerHTML = quotes[i].quote;
    document.getElementById("author").innerHTML = quotes[i].author;
    i++;
    if (i == 5){
        i = i - i
    }
        
}