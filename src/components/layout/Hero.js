import Carousel from 'react-material-ui-carousel';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Stack,
  CardMedia,
  Typography,
} from '@mui/material';

function Item(props) {
  return (
    <Card>
      <CardMedia
        height='250'
        component='img'
        image={props.item.imgPath}
        title={props.item.label}
      ></CardMedia>
    </Card>
  );
}

export const Hero = () => {
  var items = [
    {
      label: 'San Francisco – Oakland Bay Bridge, United States',
      imgPath:
        'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=1000&h=250&q=60',
    },
    {
      label: 'Bird',
      imgPath:
        'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=1000&h=250&q=60',
    },
    {
      label: 'Bali, Indonesia',
      imgPath:
        'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&h=250&q=80',
    },
  ];

  return (
    <Box bgcolor='gray'>
      <section>
        <Grid container my={4} spacing={3}>
          <Grid item xs={12} md={8}>
            <Carousel>
              {items.map((item, i) => (
                <Item key={i} item={item} />
              ))}
            </Carousel>
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack justifyContent='space-between' spacing={2}>
              <Card variant='outlined'>
                <CardContent>
                  <Typography variant='h5'>Lorem Ipsum Lorem</Typography>
                  <Typography variant='body1'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Repellat, non?
                  </Typography>
                </CardContent>
              </Card>
              <Card variant='outlined'>
                <CardContent>
                  <Typography variant='h5'>Lorem Ipsum Lorem</Typography>
                  <Typography variant='body1'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Repellat, non?
                  </Typography>
                </CardContent>
              </Card>
            </Stack>
          </Grid>
        </Grid>
      </section>
    </Box>
  );
};
