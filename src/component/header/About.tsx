import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

const About = () => {
  return (
    <div>
      <div>
        <Typography variant="h3" pt={15} align='center' fontWeight={700} color="white">About Us</Typography>
        <Typography variant="subtitle1"  mt={1} align='center' color={'lightgray'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
      </div>
      <div className='grid justify-items-center md:flex items-center justify-around'>
        <Grid width={'40%'}>
          <img src='./logo192.png' width={'100%'} alt='logo' />
        </Grid>

        <Grid width={'40%'} >
          <Typography variant="h4" fontWeight={700} color={'white'} >
            Get Popular NFT
          </Typography>
          <Typography variant="body1" mt={1} color={'#FFFFFF80'} paddingBottom={3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
          </Typography>
          <Button variant="contained" color='secondary'>
            Show more
          </Button>
        </Grid>

      </div>

    </div>
  )
}

export default About;