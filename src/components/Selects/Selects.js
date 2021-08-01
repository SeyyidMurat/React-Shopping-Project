import React from 'react'
import { SELECTS as selects } from "../../constants/index"
const Selects = () => {
    return (
        <section className="selects">
            <div className="container-xl">
                <div className="selects__wrapper">
                    {
                        selects.map((item) => (
                            <div className="selects__item" key={item.key}>
                                <img src={item.img} alt={item.alt} className="selects__img" />
                                <div className="selects__desc">
                                    <h3>{item.title}</h3>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Selects
