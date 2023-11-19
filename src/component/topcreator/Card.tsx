import React from 'react';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

interface CardProps {
    name: string;
    src: string;
    text: string;
    state: boolean;
    avatar: string
}

const Card: React.FC<CardProps> = ({ name, src, text, state, avatar }) => {
    // Component logic here
    return (
        <div>
            {state === true ?
                <div style={{ backgroundColor: '#FFFFFF1A' }} className='rounded-10 w-full pb-3 rounded-xl shadow-md opacity-70 hover:opacity-100'>

                    <img src={src} width={'100%'} className='' alt={text} style={{ borderRadius: 10 }} />

                    <Typography variant="h5" style={{ fontWeight: 700, textAlign: 'center' }} color='white'>{name} </Typography>
                    <Typography variant="subtitle2" style={{ fontWeight: 500, textAlign: 'center' }} color="#FFFFFF80"> {text}</Typography>

                    <div className='flex pt-1 justify-center' >
                        <Button variant="contained" color="secondary">

                            +Follow
                        </Button>
                    </div>
                </div> :
                <div style={{ backgroundColor: 'gray' }} className='rounded-10 w-full pb-3 rounded-xl shadow-md opacity-70 hover:opacity-100'>

                    <img src={src} width={'100%'} className='' alt={text} style={{ borderRadius: 10 }} />

                    <Typography variant="h5" style={{ fontWeight: 700, textAlign: 'center' }} color="white">{name} </Typography>
                    <Typography variant="subtitle2" style={{ fontWeight: 500, textAlign: 'center' }} color="#FFFFFF80"> {text}</Typography>

                    <div className='flex pt-1 justify-center' >
                        <Button variant='outlined' color="secondary">
                            +Follow
                        </Button>
                    </div>
                </div>
            }
        </div>
    );
};

export default Card;