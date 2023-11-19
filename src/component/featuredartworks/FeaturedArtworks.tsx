import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Cards from './Cards'

const FeaturedArtworks = () => {
    return (
        <div>
        <Container maxWidth="lg">
            <Typography variant="h3" pt={15} fontWeight={700} color="white" align='center'>
                Featured Artworks
            </Typography>
            <Typography variant="subtitle1" fontWeight={500} style={{color:'#FFFFFF80'}} align='center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
            
        </Container>   
        <Cards/>     
        </div>
    )
}

export default FeaturedArtworks;