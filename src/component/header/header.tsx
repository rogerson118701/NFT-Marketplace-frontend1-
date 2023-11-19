import { Box } from '@mui/material';
import HeaderImages from './HeaderImages';
import HeaderText from './Headertext';
import HeaderSVG from './HeaderSVG';
import About from './About';

 function header () {
    return (
        <div>
            <div className="grid md:flex justify-around">
                <Box>
                    <HeaderText />
                </Box>
                <Box>
                    <HeaderImages />
                </Box>
            </div>
            <div>
                <HeaderSVG />
            </div>
            <div>
                <About/>
            </div>
        </div>
    )
}

export default header