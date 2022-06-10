import { Box, Grid, Card, Stack, CardMedia, Typography } from '@mui/material';

export const Features = () => {
  return (
    <section>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card>Hello</Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>Hello 3</Card>
        </Grid>
      </Grid>
    </section>
  );
};
