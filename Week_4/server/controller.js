const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];

module.exports = {

    getCompliment: (req, res) => {
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
        res.status(200).send(randomCompliment);
    },
    addCompliment: (req, res) => {
        let newComp = (req.data);
        compliments.push(newComp);
        console.table(compliments);
        res.status(200).send(compliments);
    },
    deleteCompliment: (req, res) => {
        let randomIndex = Math.floor(Math.random() * compliments.length);
        compliments.splice(randomIndex -1, 1);
        console.table(compliments);
        res.status(200).send(compliments);
    },
    getFortune: (req, res) => {
        const fortunes = ["Happiness can be found, even in the darkest of times, if one only remembers to turn on the light.", "Everybody makes a wrong turn once in a while.", "Your birth is irrelevant. It's what you do that determines who you are.", "The treacherous are ever distrustful.", "He that breaks a thing to find out what it is has left the path of wisdom.", "I will not say: do not weep; for not all tears are an evil.", "To crooked eyes truth may wear a wry face."];
        let index = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[index];
        res.status(200).send(randomFortune);
    }
}