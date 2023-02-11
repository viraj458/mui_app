import {  Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import React from 'react'

const Post = () => {
  return (
    <Box>
        <Card sx={{margin:5}}>
        <CardHeader
            avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe" src="https://images.pexels.com/photos/4029925/pexels-photo-4029925.jpeg?auto=compress&cs=tinysrgb&w=600">
                R
            </Avatar>
            }
            action={
            <IconButton aria-label="settings">
                <MoreVert/>
            </IconButton>
            }
            title="Sabreena Martinez"
            subheader="February 11, 2023"
        />
        <CardMedia
            component="img"
            height="20%"
            image="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Paella dish"
        />
        <CardContent>
            <Typography variant="body2" color="text.secondary">
            Moraine Lake nestles in a landscape which looks like the perfect picture postcard image. 
            Pine forests, symmetrical mountain peaks and the lake’s ice blue waters shimmering between them. 
            This impeccable stretch of glacial water is to be found in the Banff National Park,
            near the township of Lake Louise, in Alberta, Canada.
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
            <Checkbox 
            icon={<FavoriteBorder />} 
            checkedIcon={<Favorite sx={{color:"red"}} />}
            />
            </IconButton>
            <IconButton aria-label="share">
            <Share />
            </IconButton>
        </CardActions>
        </Card>
    </Box>
  )
}

export default Post
