import React from "react";

const DvdPage = () => {
    const dvd = {id: '1', name: 'Spider Man', price: '50', rating: 5, release_date: '2019-03-19', img: 'https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/60eca3ac155247e21850c7d075d01ebf0f3f5dbf19ccd2a1.jpg'};
    
    const description = [
        {id: 1, title: 'release date', info: '2023-12-10'},
        {id: 2, title: 'PEGI', info: '16'},
        {id: 3, title: 'item code', info: '123123123'},
        {id: 4, title: 'description', info: 'Spider-Men, Peter Parker and Miles Morales, return for an exciting new adventure in the critically acclaimed Marvel’s Spider-Man franchise for PS5. Swing, jump and utilize the new Web Wings to travel across Marvel’s New York, quickly switching between Peter Parker and Miles Morales to experience different stories and epic new powers, as the iconic villain Venom threatens to destroy their lives, their city and the ones they love.'},
    ];

    const descriptionObject = description.find( (elem) => elem.title === 'description');
    return (
        <div className="dvd">
            <div className="dvd__container">
                <div className="dvd__wrapper">
                    <img className="dvd__image" src={dvd.img} alt={dvd.name} />
                    <button className="dvd__button">Purchase</button>
                </div>
                <div className="dvd__info">
                    <h2 className="dvd__text-title">{dvd.name}</h2>
                    {description.map( (elem) => {
                        if (elem.title !== 'description') {
                            return (
                                <p className="dvd__text" key={elem.id}>{elem.title}: {elem.info}</p>
                            )
                        } else {
                            return (
                                ''
                            )
                        }
                    })}

                    <p className="dvd__text dvd__text-bold">Price</p>
                    <p className="dvd__text dvd__text-price">{dvd.price + '.00$'}</p>
                    <p className="dvd__text dvd__text-bold">Description</p>
                    <p className="dvd__text">{descriptionObject ? descriptionObject.info : 'no description'}</p>
                </div>
            </div>
        </div>
    );
}

export default DvdPage;