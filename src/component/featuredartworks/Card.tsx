import React from 'react';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

interface CardProps {
    name: string;
    src: string;
    currentbid: number;
    title: string;
    state: boolean
}

const Card: React.FC<CardProps> = ({ name, src, currentbid, title, state }) => {
    // Component logic here
    return (
        <div>
            {state === true ?
                <div style={{ backgroundColor: '#FFFFFF1A' }} className='rounded-10 w-full p-3 rounded-xl shadow-md opacity-70 hover:opacity-100'>

                    <img src={src} width={'100%'} className='' alt={title} style={{ borderRadius: 10 }} />
                    <div className='flex justify-between pt-2'>
                        <Typography variant="subtitle2" style={{ fontWeight: 500 }} color="#FFFFFF80">{name} </Typography>
                        <Typography variant="subtitle2" style={{ fontWeight: 500 }} color="#FFFFFF80"> {'Current Bid'}</Typography>
                    </div>
                    <div className='flex justify-between'>
                        <Typography variant="h6" style={{ fontWeight: 700 }} pt={1} color="white">{title} </Typography>
                        <Typography variant="h6" style={{ fontWeight: 700 }} color="white">{currentbid}ETH</Typography>
                    </div>
                    <div className='flex pt-1 justify-center' >
                        <Button variant="contained" color="secondary">
                            Place a bid
                        </Button>
                    </div>
                </div>:
                <div style={{ backgroundColor: 'gray' }} className='rounded-10 w-full p-3 rounded-xl shadow-md opacity-70 hover:opacity-100'>

                <img src={src} width={'100%'} className='' alt={title} style={{ borderRadius: 10 }} />
                <div className='flex justify-between pt-2'>
                    <Typography variant="subtitle2" style={{ fontWeight: 500 }} color="#FFFFFF80">{name} </Typography>
                    <Typography variant="subtitle2" style={{ fontWeight: 500 }} color="#FFFFFF80"> {'Current Bid'}</Typography>
                </div>
                <div className='flex justify-between'>
                    <Typography variant="h6" style={{ fontWeight: 700 }} pt={1} color="white">{title} </Typography>
                    <Typography variant="h6" style={{ fontWeight: 700 }} color="white">{currentbid}ETH</Typography>
                </div>
                <div className='flex pt-1 justify-center' >
                    <Button variant='outlined' color="secondary">
                        Place a bid
                    </Button>
                </div>
            </div>
}
        </div>
    );
};

export default Card;