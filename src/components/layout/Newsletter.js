import { Box, Button, Stack, Typography, TextField } from '@mui/material';
export const Newsletter = () => {
  return (
    <section>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
        <Typography>Abonnez-vous à notre newsletter</Typography>
        <TextField
          label='Nom'
          size='small'
          sx={{ backgroundColor: '#f1f1f1' }}
        />
        <TextField
          label='Adresse e-mail'
          size='small'
          type='email'
          sx={{ backgroundColor: '#f1f1f1' }}
        />
        <Button variant='contained'>S'abonner</Button>
      </Stack>
      <Box
        borderBottom={10}
        borderColor='#01BBD9'
        sx={{ bgcolor: '#166BA7', color: 'white', my: 4 }}
        py={3}
      >
        <Typography maxWidth={600}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet ex
          adipisci temporibus impedit aut dignissimos ratione nobis ut nostrum
        </Typography>
      </Box>
    </section>
  );
};
