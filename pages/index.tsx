import { Layout } from "@/components/layouts"
import { Container, Typography, Card, CardContent, CardMedia, CardHeader, Grid, CardActionArea } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import { CardSpecialties } from "@/components/ui/CardViewSpecialties/CardSpecialties";
import FileCopyIcon from '@mui/icons-material/FileCopy';

const HomePage = () => {
  return (
    <>
      <Layout >
        <Container>
          <section className="container-ability">
            <Typography variant="h3" component="h2" style={{
              textAlign: "center",
              marginBottom: 15,
              fontWeight: '700',
              fontFamily: 'sans-serif'
            }}
              sx={{ typography: { sm: 'h4', xs: 'h5', md: 'h3' } }}>
              Lo que puedo hacer
            </Typography>
            <Grid container marginTop={7} style={{ textAlign: 'center' }}>
              <Grid item xs={12} sm={6} md={4}>
                <CardSpecialties
                  title={"Institucional o de negocio"}
                  description={'Marca presencia y muestra tus servicios, a tu equipo y ofrece oportunidades para hacer contacto.'}
                  icon={<Inventory2Icon color="info" fontSize="large" />} />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <CardSpecialties
                  title={"Personal o portafolio"}
                  description={'Muestra tus habilidades y trabajos previos para atraer clientes o empleadores.'}
                  icon={<FileCopyIcon color="info" fontSize="large" />} />
              </Grid>
            </Grid>
          </section>
          <h1>Hola mundo</h1>
          <h1>Hola mundo</h1>
          <h1>Hola mundo</h1>
          <h1>Hola mundo</h1>
          <h1>Hola mundo</h1>
          <h1>Hola mundo</h1>
        </Container>
      </Layout >
    </>
  )
}

export default HomePage