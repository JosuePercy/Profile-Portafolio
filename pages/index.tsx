import { useEffect } from "react"
import { Layout } from "@/components/layouts"

import FileCopyIcon from '@mui/icons-material/FileCopy';

import { Container, Typography, Card, CardContent, CardMedia, CardHeader, Grid, CardActionArea, CardActions, Button } from "@mui/material";

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ComputerIcon from '@mui/icons-material/Computer';
import CodeIcon from '@mui/icons-material/Code';
import Groups2Icon from '@mui/icons-material/Groups';
import LandslideIcon from '@mui/icons-material/Landslide';

import { ProjectsPortfolioReverse, ProjectsPortfolio } from "@/components/ui/case-studies-area";
import { CardSpecialties } from "@/components/ui/CardViewSpecialties/CardSpecialties";
import { BannerProfile } from "@/components/shared/Banner/BannerProfile";

import listPorject from "@/data/projects/projects.json"
import { Technologies } from "@/components/shared/skills";
import { Footer } from "@/components/shared/footer/Footer";


const HomePage = () => {

  return (
    <>
      <Layout >
        <BannerProfile />
        <Container style={{ padding: '0px 12px' }}>
          <main>
            <section className="container-ability" id="servicios">
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
                    title={"Trabajo en grupo"}
                    description={'Analista y Creador de ideas, adaptación a diferentes ambientes laborales.'}
                    icon={<Groups2Icon sx={{ color: 'rgb(0 119 255)' }} fontSize="large" />} />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <CardSpecialties
                    title={"Eficiencia de desarrollo de proyectos"}
                    description={'Utilización de metodologías ágiles para optimizar el tiempo y recursos.'}
                    icon={<FileCopyIcon sx={{ color: 'rgb(0 119 255)' }} fontSize="large" />} />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <CardSpecialties
                    title={"Optimización de rendimiento"}
                    description={'Mejora la velocidad y eficiencia de tu sitio web o aplicación para una mejor experiencia del usuario.'}
                    icon={<ShoppingCartIcon sx={{ color: 'rgb(0 119 255)' }} fontSize="large" />} />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <CardSpecialties
                    title={"Mis areas"}
                    description={'Especialización en HTML, CSS, JavaScript,TypeScript y frameworks como NextJs, tengo una sólida comprensión de diseño, y las mejores practicas de UI.'}
                    icon={<LandslideIcon sx={{ color: 'rgb(0 119 255)' }} fontSize="large" />} />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <CardSpecialties
                    title={"Aplicaciones web"}
                    description={'Proyectos sólidos, rendimiento excelente, facilidad de mantenimiento y escalable a largo plazo'}
                    icon={<ComputerIcon sx={{ color: 'rgb(0 119 255)' }} fontSize="large" />} />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <CardSpecialties
                    title={"Código limpio estructurado y mantenible"}
                    description={'Buenas prácticas, estándares de la industria actualizados y funcional.'}
                    icon={<CodeIcon sx={{ color: 'rgb(0 119 255)' }} fontSize="large" />} />
                </Grid>
              </Grid>
            </section>
            <section id="portafolios">
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
                    return <ProjectsPortfolioReverse
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
            <section className="skills" id="skills">
              <Typography variant="h3" component="h2" style={{
                textAlign: "center",
                marginBottom: 75,
                fontWeight: '700',
                fontFamily: 'Saira,sans-serif'
              }}
                sx={{ typography: { sm: 'h4', xs: 'h5', md: 'h3' } }}>
                Skills
              </Typography>
              <Technologies />
            </section >
          </main>
        </Container>
        <Footer />
      </Layout >
    </>
  )
}

export default HomePage