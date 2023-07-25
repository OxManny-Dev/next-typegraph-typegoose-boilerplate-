import React from "react";
import {Grid, TextField, Box, Paper, Button} from "@mui/material";
import {Stack} from "@mui/system";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import {Field, Form} from 'react-final-form';
import {useLoginViewerMutation} from "@/generated/hooks";

function Login() {
  const [
    loginViewer,
  ] = useLoginViewerMutation();
  return (
    <Grid
      container
      spacing={0}
      alignItems="center"
      justifyContent="center"
      sx={{minHeight: '100vh',}}
    >
      <Grid item xs={3}>
        <Paper>
          <Grid container spacing={2} sx={{p: 5}}>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <Typography>Hello! Welcome to the Todo App</Typography>
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Form
                initialValues={{
                  email: '',
                  password: '',
                }}
                onSubmit={async (values) => {
                  console.log(values);
                  await loginViewer({
                    variables: {
                      loginInputType: {
                        email: values?.email,
                        password: values?.password,
                      }
                    },
                  });
                }}
                render={({values, handleSubmit}) => {
                  return (
                    <form onSubmit={handleSubmit}>
                      <Grid container spacing={3}>
                        <Grid item xs={12}>
                          <Field
                            name='email'
                            render={({input}) => {
                              return (
                                <TextField
                                  {...input}
                                  name='email'
                                  fullWidth
                                  label='Email'
                                  value={values?.email}
                                  variant='outlined'
                                />
                              )
                            }}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Field
                            name='password'
                            render={({input}) => {
                              return (
                                <TextField
                                  {...input}
                                  name='password'
                                  fullWidth
                                  label='Password'
                                  type='password'
                                  value={values?.password}
                                  variant='outlined'
                                />
                              )
                            }}
                          />
                        </Grid>

                        <Grid item xs={12}>
                          <Box display='flex' justifyContent='space-between'>
                            <Link href='/signUp' passHref>
                              <Button>
                                Sign Up
                              </Button>
                            </Link>
                            <Button variant='contained' type='submit' onClick={handleSubmit}>
                              Login
                            </Button>
                          </Box>
                        </Grid>


                      </Grid>
                    </form>
                  )
                }}
              />
            </Grid>
          </Grid>

        </Paper>
      </Grid>

    </Grid>
  )
}

export default Login;