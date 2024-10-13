import { useState } from "react"

const faqs = [
    {
        id: crypto.randomUUID(),
        title: "Quem é a maior celebridade do mundo dos games no BR?",
        answer: "A apresentadora Ana Maria Braga. Joga 3h pra desocupar a cabeça.",
    },
    {
        id: crypto.randomUUID(),
        title: "Onde fica a europa da américa do sul?",
        answer: "Argentina. BR vive como rei em Buenos Aires.",
    },
    {
        id: crypto.randomUUID(),
        title: "Qual é a grande oportunidade para desenvolvedores BR?",
        answer: "Aproveitar a alta demanda pra ganhar em dólar ou euro.",
    },
]

const Item = ({ title, answer, activeIndex, index, onClickedItem }) => {
    const actived = index === activeIndex
    return (
        <li className={`item ${actived ? 'card-actived' : ''}`} onClick={() => onClickedItem(index)}>
            <p className="number">{index + 1}</p>
            <h2 className={`title ${actived ? 'title-actived' : ''}` }>{title}</h2>
            <p className="icon">{actived ? '-' : '+'}</p>
            {actived && <div className="content-box">{answer}</div>}
        </li>
    )
}

const App = () => {
    const [activeIndex, setActiveIndex] = useState(null)
    const handleClick = (index) => 
        setActiveIndex((a) => (a === index ? null : index))

    return (
        <ul className="accordion">
            {faqs.map((faq, index) => (
                <Item
                    key={faq.id}
                    title={faq.title}
                    answer={faq.answer}
                    index={index}
                    onClickedItem={handleClick}
                    activeIndex={activeIndex}
                />
            ))}
        </ul>

    )
}

export { App }