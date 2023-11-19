import Card from './Card';

const cardinfo = [
    {
        name: '@Johny',
        currentbid: 0.005,
        src: './111.jpeg',
        title: 'Yellow Paining',
        state:true
    },
    {
        name: '@Johny',
        currentbid: 0.005,
        src: './112.png',
        title: 'Red Paining',
        state:true
    },
    {
        name: '@Johny',
        currentbid: 0.005,
        src: './113.jpeg',
        title: 'Blue Paining',
        state:false
    },

]
const Cards = () => {
    return (

        <div className='grid gap-x-8 gap-y-3 grid-cols-1 gap-10 m-20 lg:grid-cols-3 sm:grid-cols-2'>
            {cardinfo.map((card) =>
                <Card key={card.title} name={card.name} currentbid={card.currentbid} src={card.src} title={card.title} state={card.state} />
            )}
        </div>

    );
};

export default Cards;