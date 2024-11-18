import React,{lazy, Suspense, useEffect} from 'react'
// for routing 
import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import ProtectRoute from './components/auth/ProtectRoute'
import { LayoutLoder } from './components/layout/Loaders'
import axios from"axios"
import {server} from './constants/config'


const Home =lazy(()=>import("./pages/Home"))
const Chat =lazy(()=>import("./pages/chat"))
const Groups=lazy(()=>import("./pages/Groups"))
const Login =lazy(()=>import("./pages/Login"))


const NotFound =lazy(()=>import("./pages/NotFound"))
const Dashboard=lazy(()=>import("./pages/admin/Dashboard"))
const AdminLogin=lazy(()=>import("./pages/admin/AdminLogin"))
const UserManagement=lazy(()=>import("./pages/admin/UserManagement"))
const ChatManagement=lazy(()=>import("./pages/admin/ChatManagement"))
const MessageMangement=lazy(()=>import("./pages/admin/MessageMangement"))


 let user=true;
 const App = () => {
  useEffect(()=>{
    // console.log(server);
    axios
    .get(`${server}/api/v1/user/me`)
     .then((res)=>console.log(res))
     .catch((err)=>console.log(err));
  },[]);

 return (
   <BrowserRouter>
     <Suspense fallback={<LayoutLoder />} >
     <Routes>
        <Route element={<ProtectRoute user={user} />}>
        <Route path="/" element={<Home />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/chat/:chatId" element={<Chat />} />
        </Route>

        <Route  path="/login" element={
          <ProtectRoute user={!user} redirect='/'>
            <Login />
          </ProtectRoute>
        } />
        <Route path="/admin" element={<AdminLogin/>}></Route>
        <Route path="/admin/dashboard" element={<Dashboard/>} ></Route>
        <Route path="/admin/users" element={<UserManagement/>}> </Route>
        <Route path="/admin/chats" element={<ChatManagement />}> </Route>
        <Route path="/admin/messages" element={<MessageMangement/>} ></Route>



<Route path="*" element={<NotFound />} />
      </Routes>
     </Suspense>
   </BrowserRouter>
 )
}

export default App