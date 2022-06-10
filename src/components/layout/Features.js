import {
  Button,
  Grid,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';

export const Features = () => {
  return (
    <section>
      <Grid container spacing={4} sx={{ textAlign: 'center' }}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant='h5' component='div'>
                Lorem Ipsum Lorem
              </Typography>
              <Typography variant='body1'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
                natus quo odit quia ea debitis, rem harum iure a quos sunt
                vitae? Similique maiores, officia nostrum optio ab eaque
                accusamus!
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button variant='contained'>Lorem Ipsum</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant='h5' component='div'>
                Lorem Ipsum Lorem
              </Typography>
              <Typography variant='body1'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
                natus quo odit quia ea debitis, rem harum iure a quos sunt
                vitae? Similique maiores, officia nostrum optio ab eaque
                accusamus!
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button variant='contained'>Lorem Ipsum</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </section>
  );
};
