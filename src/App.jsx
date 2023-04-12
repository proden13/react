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

const sizes = ["sm", "lg", "md"];
const adds = [];

let text = "Полёты собак в космос — серия биологических экспериментов, включавших проведение исследований по возможности полётов на геофизических и космических ракетах живых существ, наблюдение за поведением высокоорганизованных животных в условиях таких полётов, а также, изучение сложных явлений в околоземном пространстве."
text = text.match(/[^\s,.]+/g);
console.log(text);

const rand = (n) => Math.floor(Math.random() * n);

let n = 8;
while(n--) {
    adds.push({
        text: `${text[rand(text.length)]} ${text[rand(text.length)]} ${text[rand(text.length)]}`,
        pic: !!Math.round(Math.random()), // !!0 => false - !!1 => true
        sizes: sizes[rand(sizes.length)]
    })
}

console.log(adds);

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
            {/* <User name="Vasya" work_age="23" pet="raccoon"/> */}
            {/* <Promo text="My Promo" type="lg"/>
            <Promo text="^_^" />
            <Promo text="Doggy" pic={true}/>
            <Promo type="sm"/>
            <Promo text="Leksa is worst teacher in the Moscow" type="sm"/> */}
            {/* {text="123"} => <Promo text={text}  {...}/> */}
            {adds.map(el => <Promo {...el} type={el.sizes}/>)}

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


