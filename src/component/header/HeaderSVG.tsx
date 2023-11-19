import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";


const svgs = [
    {
        src: '/ethereum.svg',
        alt: 'BINANCE',
        title: 'BINANCE'
    },
    {
        src: '/ethereum.svg',
        alt: 'ethereum',
        title: 'ethereum'
    },
    {
        src: '/ethereum.svg',
        alt: 'blockchain.io',
        title: 'blockchain.io'
    },
]
const HeaderSVG = () => {
    return (
        <div className="grid gap-x-8 gap-y-3 grid-cols-1 justify-items-center gap-10 m-20 lg:grid-cols-3 sm:grid-cols-2">
            {
                svgs.map((svg) => (
                    <Box className="flex items-center">
                        <img src={svg.src} width={"30px"} alt={svg.alt} />
                        <Typography variant='h4' color={"#FFFFFF80"}>{svg.title}</Typography>

                    </Box>
                ))
            }

        </div>
    )
}

export default HeaderSVG;