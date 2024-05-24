import { useState, useEffect} from 'react';
import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button} from "@mui/material"

import { useNavigate, useParams} from 'react-router-dom';

import  { getUser, editUser } from '../service/api';

const Container = styled(FormGroup)`
width: 50%;
margin: 5% auto 0 auto;
& > div {
  margin-top: 20px;
}
`
const intialValue = {
  name: '',
  userName: '',
  email: '',
  phone: '',
}
const EditUser = () => {

  const [user, setUser] = useState(intialValue);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserData();
  })

  const getUserData = async () => {
     let response = await getUser(id);
     setUser(response.data);
  }

  const onValueChange = (e)  => {
    setUser({...user, [e.target.name]: e.target.value});
  }

  const addUserDetails = async () => {
    await editUser(user, id);
    navigate('/allUser');
  }

  return (
    <Container>
      <Typography variant="h3">Edit User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="name" value={user.name}/>
      </FormControl>
      <FormControl>
        <InputLabel>UserName</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="userName" value={user.userName}/>
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="email" value={user.email}/>
      </FormControl>
      <FormControl>
        <InputLabel>Pnone Number</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="phone" value={user.phone}/>
      </FormControl>
      <FormControl>
        <Button onClick={() => addUserDetails()} variant="contained">Edit User</Button>
      </FormControl>
    </Container>
  )
}

export default EditUser;