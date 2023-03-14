import React, { useContext } from 'react'
import { AppContext } from '../../../router/Router';

const PizzasList = () => {
    const { pizzasArrayList } = useContext(AppContext);

    return (
        <>
            <section>
                {pizzasArrayList.map((pizzas, index) => (
                    <div key={index}>
                        <h2 >{pizzas.name}</h2>
                        <div>
                            {
                                pizzasArrayList.map((pizzas, index)=>(
                                    <figure key={index}>
                                        <img src={pizzas.images.img} alt={pizzas.images.imgId} />
                                    </figure>
                                ))
                            }
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}

export default PizzasList