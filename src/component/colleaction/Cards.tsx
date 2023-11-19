import Card from './Card';
// import SearchIcon from '@mui/icons-material/Search';
// import InputBase from '@mui/material/InputBase';
// import { styled, alpha } from '@mui/material/styles';

const cardinfo = [
    {
        name: '@Johny',
        currentbid: 0.005,
        src: './1.jpeg',
        title: 'Yellow Paining'
    },
    {
        name: '@Johny',
        currentbid: 0.005,
        src: './2.jpeg',
        title: 'Red Paining'
    },
    {
        name: '@Johny',
        currentbid: 0.005,
        src: './3.jpeg',
        title: 'Blue Paining'
    },
    {
        name: '@Johny',
        currentbid: 0.005,
        src: './4.jpeg',
        title: 'Pink Paining'
    },
    {
        name: '@Johny',
        currentbid: 0.005,
        src: './5.jpeg',
        title: 'White Paining'
    },
    {
        name: '@Johny',
        currentbid: 0.005,
        src: './6.jpeg',
        title: 'Black Paining'
    },
    {
        name: '@Johny',
        currentbid: 0.005,
        src: './7.jpeg',
        title: 'Brown Paining'
    },
    {
        name: '@Johny',
        currentbid: 0.005,
        src: './8.jpeg',
        title: 'Gray Paining'
    },
    {
        name: '@Johny',
        currentbid: 0.005,
        src: './9.jpeg',
        title: 'Green Paining'
    },

]
const Cards = () => {
    // const Search = styled('div')(({ theme }) => ({
    //     position: 'relative',
    //     borderRadius: theme.shape.borderRadius,
    //     backgroundColor: alpha(theme.palette.common.white, 0.15),
    //     '&:hover': {
    //         backgroundColor: alpha(theme.palette.common.white, 0.25),
    //     },
    //     marginRight: theme.spacing(2),
    //     marginLeft: 0,
    //     width: '100px',
    //     [theme.breakpoints.up('sm')]: {
    //         marginLeft: theme.spacing(3),
    //         width: 'auto',
    //     },
    // }));

    // const SearchIconWrapper = styled('div')(({ theme }) => ({
    //     padding: theme.spacing(0, 2),
    //     height: '100%',
    //     position: 'absolute',
    //     pointerEvents: 'none',
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // }));

    // const StyledInputBase = styled(InputBase)(({ theme }) => ({
    //     color: 'inherit',
    //     '& .MuiInputBase-input': {
    //       padding: theme.spacing(1, 1, 1, 0),
    //       // vertical padding + font size from searchIcon
    //       paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    //       transition: theme.transitions.create('width'),
    //       width: '100px',
    //       [theme.breakpoints.up('md')]: {
    //         width: '20ch',
    //       },
    //     },
    //   }));
    return (
        <div>
            {/* <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                />
            </Search> */}

            <div className='grid gap-x-8 gap-y-3 grid-cols-1 gap-10 m-20 lg:grid-cols-3 sm:grid-cols-2'>
                {cardinfo.map((card) =>
                    <Card key={card.title} name={card.name} currentbid={card.currentbid} src={card.src} title={card.title} />
                )}
            </div>
        </div>
    );
};

export default Cards;