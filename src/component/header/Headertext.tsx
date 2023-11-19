import React from 'react'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

const items = [
    {
        number: "37k+",
        title: "Artworks"
    },
    {
        number: "20k+",
        title: "Artists"
    },
    {
        number: "99k+",
        title: "Aucations"
    },
]

function HeaderText() {
    return (
        <div>
            <Box mt={10}>

                <Typography variant='h2' color={'white'} fontWeight={700}>
                    Create, Sell &
                    <br />
                    Collect Your Own
                    <br />
                    Creative NFT
                </Typography>

                <Typography variant='subtitle1'  fontWeight={500} color={'#FFFFFF80'}>
                    Lorem ipsum doler sit amet, consctetur
                    adipiscing elit. nunc vul
                </Typography>

                <Button color='secondary' style={{ margin: 30, marginLeft:0}} variant="contained">Contained</Button>
                <Button variant="contained" style={{ color: 'white', backgroundColor: 'rgba(255, 255, 255, 0.10)' }}>
                    Sell NFT
                </Button>
                <Box className='flex to-inherit justify-between'>
                    {items.map((item) => (
                        <Box>
                            <Typography variant='h5' fontWeight={700} color={'white'} align='center'>
                                {item.number}
                            </Typography>
                            <Typography variant='subtitle1' fontWeight={500} color={'#FFFFFF80'} >
                                {item.title}
                            </Typography>
                        </Box>
                    ))}
                </Box>

            </Box>
        </div>
    )
}

export default HeaderText;