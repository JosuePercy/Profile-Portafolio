import { useEffect } from "react"
import { Layout } from "@/components/layouts"

import Inventory2Icon from '@mui/icons-material/Inventory2';
import FileCopyIcon from '@mui/icons-material/FileCopy';

import { Container, Typography, Card, CardContent, CardMedia, CardHeader, Grid, CardActionArea, CardActions, Button } from "@mui/material";

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ContactsIcon from '@mui/icons-material/Contacts';
import ComputerIcon from '@mui/icons-material/Computer';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { CaseAreaReverse, ProjectsPortfolio } from "@/components/ui/case-studies-area";
import { CardSpecialties } from "@/components/ui/CardViewSpecialties/CardSpecialties";
import { BannerProfile } from "@/components/shared/Banner/BannerProfile";
//import technologies from "@/components/ui/case-studies-area/technologies";
import listPorject from "@/data/projects/projects.json"


const HomePage = () => {


  useEffect(() => {
    console.log("project", listPorject)
    return () => {

    }
  }, [])


  return (
    <>
      <Layout >
        <BannerProfile />

        <Container style={{ padding: '0px 12px' }}>
          <section className="container-ability">
            <Typography variant="h3" component="h2" style={{
              textAlign: "center",
              marginBottom: 15,
              fontWeight: '700',
              fontFamily: 'Saira,sans-serif'
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
              <Grid item xs={12} sm={6} md={4}>
                <CardSpecialties
                  title={"E-commerce"}
                  description={'Ofrece tus productos físicos o digitales y permite transacciónes en linea las 24hs del día.'}
                  icon={<ShoppingCartIcon color="info" fontSize="large" />} />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <CardSpecialties
                  title={"Landing page"}
                  description={'Informa a tus visitantes sobre un producto específico, con el objetivo de motivarlo a tomar una cierta acción.'}
                  icon={<ContactsIcon color="info" fontSize="large" />} />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <CardSpecialties
                  title={"Aplicacion web"}
                  description={'Tu sito web es tu producto y por eso debe contar con la últimas tecnologias web.'}
                  icon={<ComputerIcon color="info" fontSize="large" />} />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <CardSpecialties
                  title={"Blog personal"}
                  description={'Comparte experiencias personales o pasatiempos para comunicar a otros usuarios que estén interesados.'}
                  icon={<AccountCircleIcon color="info" fontSize="large" />} />
              </Grid>
            </Grid>
          </section>
          <section>
            <Typography variant="h3" component="h2" style={{
              textAlign: "center",
              marginBottom: 75,
              fontWeight: '700',
              fontFamily: 'Saira,sans-serif'
            }}
              sx={{ typography: { sm: 'h4', xs: 'h5', md: 'h3' } }}>
              Proyectos realizados
            </Typography>

            {
              listPorject.map((project, index) => {
                if (index % 2 === 0) {
                  return <ProjectsPortfolio
                    outstanding={project.outstanding}
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    key={index}
                  />
                } else {
                  return <CaseAreaReverse
                    outstanding={project.outstanding}
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    key={index}
                  />
                }
              })
            }
          </section>
        </Container>
      </Layout >
    </>
  )
}

export default HomePage