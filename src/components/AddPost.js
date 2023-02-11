import { Add, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material'
import { Avatar, Box, Button, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'

const AddPost = () => {
    const [open, setOpen] = useState(false)

    const StyledModal = styled(Modal)({
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    })

    const UserBox = styled(Box)({
        display:"flex",
        alignItems:"center",
        gap:"10px",
        marginBottom:"20px"
    })
    return (
        <>
            <Tooltip 
            onClick={e=>setOpen(true)}
            title="Add" 
            sx={{position:"fixed", 
            bottom:20, 
            left:{xs:"calc(50% - 25px)", sm:30}
            }}>
                <Fab color="primary" aria-label="add">
                    <Add/>
                </Fab>
            </Tooltip>
            <StyledModal
            open={open}
            onClose={e=>setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box bgcolor={"background.default"} color={"text.primary"} width={400} height={280} p={3} borderRadius={5}>
                <Typography variant="h6" color="grey" textAlign="center">
                Create Post
                </Typography>
                <UserBox>
                 <Avatar onClick={e=>setOpen(true)} sx={{width:"25px", height:"25px"}} alt="Remy Sharp" src="https://images.pexels.com/photos/4298629/pexels-photo-4298629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                 <Typography fontWeight={500} variant="span">Anne</Typography>
                </UserBox>
                <TextField
                sx={{width:"100%"}}
                id="standard-multiline-static"
                multiline
                rows={4}
                placeholder="Write a post"
                variant="standard"
                />
                <Stack direction="row" gap={1} mt={2} mb={2}>
                    <EmojiEmotions color="primary"/>
                    <Image color="secondary"/>
                    <VideoCameraBack color="success"/>
                    <PersonAdd color="error"/>
                </Stack>
                <Button sx={{width:"100%"}} variant="contained">Post</Button>
            </Box>
            </StyledModal>
        </>
    )
    }

export default AddPost