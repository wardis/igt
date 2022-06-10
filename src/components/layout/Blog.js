import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Grid,
  Typography,
} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const blogArticles = [
  {
    title: 'Lorem Ipsum',
    excerpt: 'Example text',
    thumbnail:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=300&h=250&q=60',
  },
  {
    title: 'Lorem Ipsum',
    excerpt: 'Example text',
    thumbnail:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=300&h=250&q=60',
  },
  {
    title: 'Lorem Ipsum',
    excerpt: 'Example text',
    thumbnail:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=300&h=250&q=60',
  },
  {
    title: 'Lorem Ipsum',
    excerpt: 'Example text',
    thumbnail:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=300&h=250&q=60',
  },
];

export const Blog = () => {
  return (
    <section>
      <Typography variant='h5'>Lorem Ipsum lorem ipsum</Typography>
      <Grid container mt={1} spacing={3} sx={{ textAlign: 'center' }}>
        {blogArticles.map((article) => {
          const { title, excerpt, thumbnail } = article;
          return (
            <Grid item xs={12} md={3}>
              <Card>
                <CardContent>
                  <Typography variant='h5'>{title}</Typography>
                  <Typography variant='subtitle1'>{excerpt}</Typography>
                  <CardMedia
                    component='img'
                    height='140'
                    image={thumbnail}
                    alt='green iguana'
                  ></CardMedia>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center' }}>
                  <Button variant='contained' endIcon={<ChevronRightIcon />}>
                    Lorem Ipsum
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <Box textAlign='center' my={4}>
        <Button
          color='warning'
          variant='contained'
          endIcon={<ChevronRightIcon />}
        >
          Lorem Ipsum
        </Button>
      </Box>
    </section>
  );
};
