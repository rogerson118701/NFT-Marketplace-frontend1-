import Card from './Card';

const cardinfo = [
    {
        name: 'John Wick',
        src: './1111.jpeg',
        avatar: './11.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        state: true
    },
    {
        name: 'John Wick',
        src: './1112.jpg',
        avatar: './12.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        state: false
    },
    {
        name: 'John Wick',
        src: './1113.jpg',
        avatar: './13.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        state: true
    },

]
const Cards = () => {
    return (

        <div className='grid gap-x-8 gap-y-3 grid-cols-1 gap-10 m-20 lg:grid-cols-3 sm:grid-cols-2'>
            {cardinfo.map((card) =>
                <Card key={card.text} avatar={card.avatar} text={card.text} name={card.name}  src={card.src}  state={card.state} />
            )}
        </div>

    );
};

export default Cards;