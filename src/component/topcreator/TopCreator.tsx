import Typography from '@mui/material/Typography';
import Cards from './Cards'

const TopCreator = () => {
    return (
        <div>    
            <Typography variant="h3" pt={15}  fontWeight={700} color="white" align='center'>
                Top Creator
            </Typography>
            <Typography variant="subtitle1" fontWeight={500} style={{color:'#FFFFFF80'}} align='center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
             
        <Cards/>     
        </div>
    )
}

export default TopCreator;