// let b = 4;

const Promo = (props) => {
    // props - объект, в который можно передать разные свойства для компонента
    let name = "promo";
    switch (props.type) {
        case "lg": name = "promo big"; break;
        case "sm": name = "promo small"; break;
        default: name = "promo";
    }

    
    return (
        <div className={name}>
            <div className={props.pic ? "promo-pic" : "promo-pic pic2"}></div>
            <h3>{props.text}</h3>
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
        <div className="container">
            <Promo text="My Promo" type="lg"/>
            <Promo text="^_^" />
            <Promo text="Doggy" pic={false}/>
            <Promo type="sm"/>
            <Promo text="Leksa is worst teacher in the Moscow" type="sm"/>
        </div>
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


