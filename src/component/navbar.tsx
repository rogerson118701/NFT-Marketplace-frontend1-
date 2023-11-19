import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
// import { Link } from 'react-router-dom';
// import { useAccount, useConnect } from 'wagmi'
// import { InjectedConnector } from 'wagmi/connectors/injected'


const pages = ['Products', 'Pricing', 'Blog'];

// function Connetwallet() {
//   const { isConnected } = useAccount();
//   const { connect } = useConnect({
//     connector: new InjectedConnector(),
//   })


//   if (isConnected)
//     return (
//       <div>

//         <Button
//           color='secondary'
//           style={{ margin: '5%', marginLeft: '3%', marginBottom: '0', fontSize: 20 }}
//           variant='contained'
//           onClick={() => connect()}
//           sx={{ my: 2, fontWeight: 500, color: 'white', display: 'block' }}
//         >
//           <Link to={'/create'}>
//             Create
//           </Link>
//         </Button>

//       </div>
//     )
//   return <Button
//     color='secondary'
//     style={{ margin: '5%', marginLeft: '3%', marginBottom: '0', fontSize: 20 }}
//     variant='contained'
//     onClick={() => connect()}
//     sx={{ my: 2, fontWeight: 500, color: 'white', display: 'block' }}
//   >
//     Connect Wallet</Button>
// }

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (

    <Container maxWidth="xl">
      <Toolbar>
        <AdbIcon style={{ color: 'white' }} sx={{ display: { xs: 'none', md: 'flex' }, mr: 2, marginLeft: '4%', fontSize: 50, marginTop: '3%' }} />
        <Typography
          variant="h3"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'white',
            textDecoration: 'none',
            marginTop: '3%'
          }}
        >
          LOGO
        </Typography>

        <Box sx={{ flexGrow: 1 }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >

            {pages.map((page) => (
              <MenuItem style={{ backgroundColor: 'white' }} key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}

          </Menu>
        </Box>
        <AdbIcon style={{ color: 'white' }} sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
        <Typography
          variant="h5"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'white',
            textDecoration: 'none',
          }}
        >
          LOGO
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
            <Button
              key={page}
              style={{ margin: '5%', marginLeft: '3%', marginBottom: '0', fontSize: 20 }}
              onClick={handleCloseNavMenu}
              href={page}
              sx={{ my: 2, fontWeight: 500, color: 'white', display: 'block' }}
            >
              {/* <Link to={`/${page}`}> */}
                {page}
              {/* </Link> */}

            </Button>
          ))}
          {/* <Connetwallet /> */}

        </Box>
      </Toolbar>
    </Container>

  );
}
export default Navbar;