import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';

export const Footer = () => {
  const footerLinks = [
    'Link 1',
    'Link 2',
    'Link 3',
    'Link 4',
    'Link 5',
    'Link 6',
  ];

  return (
    <footer>
      <Container>
        <Grid container spacing={4} justifyContent='space-evenly'>
          {footerLinks.map((link, index) => (
            <Grid item xs={4} md={2} key={index}>
              <Link underline='none'>{link}</Link>
            </Grid>
          ))}
        </Grid>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
          laudantium aliquid voluptates? Tempore impedit eum quasi vitae minima
          doloremque nisi itaque aliquam hic dolore rem, ipsa illum aperiam,
          aspernatur fugit accusantium fuga pariatur adipisci reprehenderit vel
          omnis. Accusantium suscipit provident, nam nulla quae ad, vel aliquid
          perferendis excepturi ea ab?
        </p>
      </Container>
    </footer>
  );
};
