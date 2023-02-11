import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{display: {xs:"none", sm:"block"}}}>
      <Box position="fixed" >
        <Typography variant="h6" fontWeight={200}> 
          Friends
        </Typography>
        <AvatarGroup total={24}>
          <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/4823732/pexels-photo-4823732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/5794559/pexels-photo-5794559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/4029925/pexels-photo-4029925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/4298629/pexels-photo-4298629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </AvatarGroup>
        <Box position="fixed" sx={{mt:5}}>
        <Typography variant="h6" fontWeight={200}>
          Photos
        </Typography>
        <ImageList
        variant="quilted"
        cols={3}
        rowHeight={121}
        >
          <ImageListItem>
            <img
              src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=242&h=242&fit=crop&auto=format'
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src='https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=121&h=121&fit=crop&auto=format'
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src='https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=121&h=121&fit=crop&auto=format'
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src='https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=242&h=121&fit=crop&auto=format'
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src='https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=242&h=121&fit=crop&auto=format'
              alt=""
              />
          </ImageListItem>
          <ImageListItem>
            <img
              src='https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=242&h=242&fit=crop&auto=format'
              alt=""
              />
          </ImageListItem>
          <ImageListItem>
            <img
              src='https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=121&h=121&fit=crop&auto=format'
              alt=""
              />
          </ImageListItem>
          <ImageListItem>
            <img
              src='https://images.unsplash.com/photo-1518756131217-31eb79b20e8f?w=121&h=121&fit=crop&auto=format'
              alt=""
              />
          </ImageListItem>
          <ImageListItem>
            <img
              src='https://images.unsplash.com/photo-1471357674240-e1a485acb3e1?w=121&h=121&fit=crop&auto=format'
              alt=""
              />
          </ImageListItem>
        </ImageList>
        </Box>
      </Box>   
    </Box>
  )
}

export default Rightbar