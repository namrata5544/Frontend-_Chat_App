import React from 'react'
import {Stack,Avatar,Typography} from "@mui/material"
import {
  Face as FaceIcon,
  AlternateEmail as UserNameIcon,
  CalendarMonth as CalendarIcon,
} from '@mui/icons-material';
import moment from "moment"


export const Profile = () => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
    <Avatar
      sx={{
        width: 200,
          height: 200,
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid white",
      }}
    />


    
    <ProfileCard heading={"Bio"} text={"sadasfdgf"} />
    <ProfileCard heading={"username"} text={"@navinpal512002@gmail.com"} Icon={<UserNameIcon/>} />
    <ProfileCard heading={"Name"} text={"Navin"} Icon={<FaceIcon />}/>
    <ProfileCard heading={"joined"} text={moment('2024-08-15T18:30:00.000Z').fromNow()} Icon={<CalendarIcon/>} />
    </Stack>
  )
}

const ProfileCard=({text,Icon,heading})=> (
<Stack
  direction={"row"}
  alignItems={"centre"}
  spacing={"1rem"}
  color={"white"}
  textAlign={"centre"}
>
  {Icon && Icon}
  <Stack>
  <Typography variant="body1">{text}</Typography>
      <Typography color={"gray"} variant="caption">
        {heading}
      </Typography>
    </Stack>


</Stack>
);

