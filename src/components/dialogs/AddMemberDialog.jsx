import { Button, Dialog, DialogTitle, Stack, Typography } from '@mui/material'
import React,{useState} from 'react'
import { sampleUsers } from '../../constants/sampleData'
import  UserItem  from '../shared/UserItem'


const AddMemberDialog = ({addMember,isLoadingAddmember,chatId}) => {

    const [members,setMembers]=useState(sampleUsers);
    const [selectedMembers,setSelectedMembers]=useState([])
  
    const selectMemberHandler = (id)=>{
        setSelectedMembers((prev)=>prev.includes(id) 
        ? prev.filter((currelement)=>(currelement !== id))
        :[...prev,id]);
    };

//  const addFriendHandler= (id)=>{
//     addMember(id,chatId)
//  }
 const addMemberSubmitHandler=()=>{
       closeHandler()
 }

 const closeHandler = ()=>{

    setSelectedMembers([]);
    setMembers([]);

 }

  return (
     <Dialog open onClose={closeHandler}>
       <Stack p={"2rem"} width={"20rem"} spacing={"2rem"}>
        <DialogTitle textAlign={"center"}>Add Member</DialogTitle>
        <Stack spacing={"1rem"}>
        {
         members.length>0 ? members.map(i=>(
                <UserItem
                key={i._id}
                user={i}
                handler={selectMemberHandler}
                isAdded={selectedMembers.includes(i._id)}
                />
            )) :(
                <Typography textAlign={"center"}>No Friend</Typography>
            )
        }
        </Stack>
        <Stack direction={"row"}  alignItems={"center"} justifyContent={"space-evenly"} >
            <Button onClick={closeHandler} color='error' variant='outlined'>cancle</Button>
            <Button onClick={addMemberSubmitHandler} variant='contained' disabled={isLoadingAddmember}>Submit Change</Button>
        </Stack>


       </Stack>
     </Dialog>
  )
}

export default AddMemberDialog