import LockIcon from '@mui/icons-material/LockOutlined';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  FormControl,
} from '@mui/material';
import React from 'react';
import Input from '../../Components/Input';

const Login = () => {
  const [formObj, setFormObj] = React.useState({});

  const onInputChange = ($event: any) => {
    const value = $event.target.value;
    const name = $event.target.name;
    setFormObj({ ...formObj, [name]: value });
  };

  const onFormSubmit = ($event: any) => {
    $event.preventDefault();
    console.log('formObj', formObj);
  };

  return (
    <Container>
      <Card sx={{ maxWidth: 500, margin: '0 auto' }}>
        <CardHeader
          avatar={<LockIcon fontSize="large" />}
          title={'Login'}
          subheader="Enter Username and password"
        />
        <CardContent>
          <Box marginBottom={3}>
            <FormControl fullWidth>
              <Input
                label="Username"
                placeholder="Ex: abc@email.com"
                variant="outlined"
                name="usename"
                onChange={onInputChange}
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl fullWidth>
              <Input
                label="Password"
                placeholder="Ex: Abc@12345"
                type={'password'}
                variant="outlined"
                name="password"
                onChange={onInputChange}
              />
            </FormControl>
          </Box>
        </CardContent>
        <CardActions>
          <Button variant="outlined" color="error">
            {'Cancel'}
          </Button>

          <Button variant="contained" color="primary" type="submit" onClick={onFormSubmit}>
            {'Proceed'}
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default React.memo(Login);
