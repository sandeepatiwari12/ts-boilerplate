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

const Register = () => {
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
          title={'Register'}
          subheader="Fill the field to create you account"
        />
        <CardContent>
          <Box marginBottom={3}>
            <FormControl fullWidth>
              <Input
                label="Full Name"
                placeholder="Ex: Abc"
                variant="outlined"
                name="fullName"
                onChange={onInputChange}
              />
            </FormControl>
          </Box>
          <Box marginBottom={3}>
            <FormControl fullWidth>
              <Input
                label="Email"
                placeholder="Ex: abc@email.com"
                variant="outlined"
                name="email"
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

export default React.memo(Register);
