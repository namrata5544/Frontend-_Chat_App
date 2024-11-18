
import { Typography,Stack,Box } from '@mui/material'
import React,{memo} from 'react'
import {Link} from '../styles/StyledComponents'
import  AvatarCard  from './AvatarCard'
const ChatItem = ({
    avatar=[],
    name,
    _id,
    groupChat,
    newMessageAlert,
    sameSender,
    isOnline,
    index=0,
    handleDeleteChat,
}) => {
  return (
    <Link
    sx={{
        padding:"0",
    }}
     to ={`/chat/${_id}`}
     onContextMenu={(e)=>handleDeleteChat(e,_id,groupChat)}>
 <div
  style={{
    display:"flex",
    gap:"1rem",
    alignItems:"centre",
    padding:"1rem",
    backgroundcolor: sameSender ? "black":"unset",
    color: sameSender ? "black":"unset",
     position:"relative",

  }}
 >
    <AvatarCard avatar={avatar} />
    
    <Stack>
        <Typography >{name}</Typography>
        {newMessageAlert && (
            <Typography>{newMessageAlert.count} New Message</Typography>
        )}
    </Stack>
    {
        
        isOnline &&( <Box
         sx={{
            
            width:"10px",
            height:"10px",
            borderRadius:"50%",
            backgroundColor:"green",
            position:"absolute",
            top:"50%",
            right:"1rem",
            transform:"translateY(-50%)",
         }}
        
        />
        )
    }

 </div>

    </Link>
  )
}

export default memo(ChatItem);