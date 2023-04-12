// let b = 4;

const Promo = () => {
    return (
        <div className="promo">
            <div className="promo-pic"></div>
            <h3>Promo text</h3>
        </div>
    )
}


const App = () => {
    // let a = (2 + b) * 2;
    // let b = (2 + "4").parceInt()
    return <div title="Doggy">
        <h1>Hello</h1>
        <hr />
        {/* <i>тут есть переменная: {`${a} увеличилась на ${b}`}</i> */}
        <i/>
        <h2>
            <mark>React</mark>
        </h2>
        <Promo/>
        <Promo/>
        <Promo/>
        <Promo/>
        <Promo/>
    </div>
}

export default App;













// function Rabbit(breed) {
//     this.age = 2;
//     this.breed = breed;
// }

// class Raccoon {
//     constructor(breed) {
//         this.age = 2;
//         this.breed = breed;
//     }
// }

// let pet1 = new Rabbit("ololo");
// let pet2 = new Raccoon("omnomnom");


