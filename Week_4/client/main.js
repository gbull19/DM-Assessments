const fortuneButton = document.getElementById("fortuneButton");

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const fortune = res.data
            alert(fortune);
    });
};

fortuneButton.addEventListener("click", getFortune);


const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)


const deleteCompBtn = document.getElementById("deleteCompBtn")

const deleteComp = () => {
    axios.delete("http://localhost:4000/api/compliment/")
        .then(alert("Compliment deleted, you monster!"))
        .catch(err => console.log(err))
};

deleteCompBtn.addEventListener('click', deleteComp)


const form = document.querySelector('form')

const createCompliment = (body) => {
    axios.post("http://localhost:4000/api/compliment", body)
        .then(alert("New compliment added"))
        .catch(err => console.log(err))
}

function submitHandler (event) {
    event.preventDefault()
    let newComp = document.querySelector("input")
    console.log(newComp)
    createCompliment(newComp)
};

form.addEventListener("submit", submitHandler);
