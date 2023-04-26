import { Layout } from "@/components/layouts"
import { Container, Typography, Card, CardContent, CardMedia, CardHeader, Grid, CardActionArea } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const HomePage = () => {
  return (
    <>
      <Layout >
        <Container>
          <section className="container-ability">
            <Typography variant="h3" component="h2" style={{
              textAlign: "center",
              marginBottom: 15,
              fontWeight: 'bold'
            }}
            >
              Lo que puedo hacer
            </Typography>

            <Grid container spacing={2} marginTop={7}>
              {
                [1, 2, 3, 4, 5, 6].map(i => {
                  return <Grid item xs={4}>
                    <Card sx={{ marginBottom: 10 }}
                      style={{ boxShadow: 'inherit' }}
                    >
                      <CardHeader
                        avatar={
                          <div className="card-img-icon">
                            <img src='../../../image/3.png' />
                          </div>
                        }
                        className="card-icon"
                        style={{ padding: '16px 16px 16px 0px' }}
                      />
                      <CardContent style={{ padding: 0 }}>
                        <Typography gutterBottom variant="h5" component="div"
                          style={{ fontWeight: 'bold' }}
                        >Institucional o de negocio</Typography>
                        <Typography variant="body2" color="text.secondary"
                          style={{ lineHeight: '2.1' }}
                        >Marca presencia y muestra tus servicios, a tu equipo y ofrece oportunidades para hacer contacto.</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                })
              }
            </Grid>


            <div className="">
              <div>
                <img src="" alt="" />
                <h3>Institucional o de negocio</h3>
                <p>Marca presencia y muestra tus servicios, a tu equipo y ofrece oportunidades para hacer contacto.</p>
              </div>
              <div>
                <img src="" alt="" />
                <h3>Institucional o de negocio</h3>
                <p>Marca presencia y muestra tus servicios, a tu equipo y ofrece oportunidades para hacer contacto.</p>
              </div>
              <div>
                <img src="" alt="" />
                <h3>Institucional o de negocio</h3>
                <p>Marca presencia y muestra tus servicios, a tu equipo y ofrece oportunidades para hacer contacto.</p>
              </div>
              <div>
                <img src="" alt="" />
                <h3>Institucional o de negocio</h3>
                <p>Marca presencia y muestra tus servicios, a tu equipo y ofrece oportunidades para hacer contacto.</p>
              </div>
              <div>
                <img src="" alt="" />
                <h3>Institucional o de negocio</h3>
                <p>Marca presencia y muestra tus servicios, a tu equipo y ofrece oportunidades para hacer contacto.</p>
              </div>
              <div>
                <img src="" alt="" />
                <h3>Institucional o de negocio</h3>
                <p>Marca presencia y muestra tus servicios, a tu equipo y ofrece oportunidades para hacer contacto.</p>
              </div>
            </div>
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