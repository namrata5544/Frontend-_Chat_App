import React, { useEffect, useState } from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import Table from '../../components/shared/Table';
import { dashboardData } from '../../constants/sampleData';
import { fileFormat, transformImage } from '../../lib/features';
import { Avatar , Box, Stack} from '@mui/material';
import moment from 'moment';
import  RenderAttachment  from '../../components/shared/RenderAttachment';

const columns=[
  {
     field:"id",
     headerName:"ID",
     headerClassName:"table-header",
     width:200,
  },
  {
   field:"attachments",
   headerName:"Attachments",
   headerClassName:"table-header",
   width:200,
   renderCell:(params) =>{
      const {attachments} = params.row;

      return attachments?.length>0 ? (
         attachments.map((i)=>{
          const url =i.url;
          // const name=i.name;
          const file=fileFormat(url)
              return <Box>
                <a href={url}
                 download
                 target='_blank'
                 style={{
                  //  display:"flex",
                  //  alignItems:"center",
                  //  justifyContent:"center",
                  //  textDecoration:"none",
                   color:"black",
                 }}
                >
              {RenderAttachment(file,url)}
                </a>
              </Box>
         })
      )
      
      :("No attachments");

    // return <Avatar alt={params.row.name} src={params.row.avatar}
    
   },
},
  {
      
     field:"sender",
     headerName:"Sent By",
     headerClassName:"table-header",
     width:150,
     renderCell:(params)=> ( 
     <Stack  direction={"row"} spacing={"1rem"} alignItems={"center"}>
       <Avatar alt={params.row.name} src={params.row.sender.avatar}/>
       <span>{params.row.sender.name}</span>
     </Stack> )
  },
  {
   field:"chat",
   headerName:"Chat",
   headerClassName:"table-header",
   width:220,
  },
  {
   field:"groupChat",
   headerName:"Group Chat",
   headerClassName:"table-header",
   width:100,
  },
  
  {
     field:"createdAt",
     headerName:"Time",
     headerClassName:"table-header",
     width:250,
  }

];
const MessageMangement = () => {
  const [rows,setRows]=useState([])
  useEffect(()=>{
    setRows(dashboardData.messages.map(i=>(
      {
       ...i,
       id:i._id,
       sender:{
        name:i.sender.name,
        avatar:transformImage(i.sender.avatar,50),
       },
       createdAt:moment(i.createdAt).format("MMMM Da YYYY,h:mm:ss a"),
      }
    )))
  })
  return (
    <AdminLayout>
       <Table heading={"All Messages"} columns={columns} rows={rows} rowHeight={150} />
    </AdminLayout>
  )
}

export default MessageMangement