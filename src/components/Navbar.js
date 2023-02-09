import { Bolt, Mail, Notifications } from '@mui/icons-material'
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'

const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
})

const Search = styled("div")(({theme})=>({
    backgroundColor:"white",
    padding:"0 10px",
    borderRadius:theme.shape.borderRadius,
    width:"40%"
}))

const Icons = styled(Box)(({theme})=>({
    display:"none", 
    gap:"10px", 
    justifyContent:"center",
    [theme.breakpoints.up("sm")]:{
        display:"flex"
    }
}))

const UserBox = styled(Box)(({theme})=>({
    display:"flex", 
    gap:"5px", 
    justifyContent:"center",
    [theme.breakpoints.up("sm")]:{
        display:"none"
    }
}))
const Navbar = () => {
    const [open, setOpen] = useState(false);
    return(
        <AppBar position='static'>
            <StyledToolbar>
                <Typography variant='h6' sx={{display: {xs:"none", sm:"block"}}}>MUI</Typography>
                <Bolt sx={{display: {xs:"block", sm:"none"}}}/>
                <Search><InputBase placeholder="search..."/></Search>
                <Icons>
                <Badge badgeContent={4} color="error">
                    <Mail />
                </Badge>
                <Badge badgeContent={4} color="error">
                    <Notifications />
                </Badge>
                <Avatar onClick={e=>setOpen(true)} sx={{width:"25px", height:"25px"}} alt="Remy Sharp" src="https://images.pexels.com/photos/4298629/pexels-photo-4298629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                </Icons>
                <UserBox>
                    <Typography>Anne</Typography>
                    <Avatar onClick={e=>setOpen(true)} sx={{width:"25px", height:"25px"}} alt="Remy Sharp" src="https://images.pexels.com/photos/4298629/pexels-photo-4298629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                </UserBox>

            </StyledToolbar>
            <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={open}
            onClose={e=>setOpen(false)}
            anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
            }}
            transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
            }}
            >
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
        </Menu>
        </AppBar>
    )
}

export default Navbar