import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {

  const navigate = useNavigate()

  return (
    <Box sx={{flexGrow: 1 }}>  {/* en lugar de div */}
      <AppBar position='static' color='transparent'> {/* es para ener una navegacion */}
        <Container> {/* para que este centrado */}
          <Toolbar> {/* para colocar las opcines */}
            <Typography variant='h6' sx={{flexGrow: 1 }}>  {/* para colocar los textos dentro de mui */}
              <Link to="/" style={{textDecoration:'none', color:'#eee'}}>PERN STACK</Link> {/* para navegar */}
            </Typography>
            <Button variant='contained' color='primary' onClick={()=>navigate("/tasks/new")}>New Task</Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>

  )
}

