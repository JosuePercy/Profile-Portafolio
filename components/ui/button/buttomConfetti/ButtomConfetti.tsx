import { Button } from '@nextui-org/react';
import confetti from 'canvas-confetti';
import styles from "./buttonConfetti.module.css";
import DownloadIcon from '@mui/icons-material/Download';
export const ButtomConfetti = () => {

  const handleDownloadCV = () => {
    // TODO: Agregar la lógica para descargar el archivo PDF
    console.log('Descargando CV...');


    fetch(`/download/CV/cv-Josue-Huallullo.v4.pdf`)
      .then(response => response.blob())
      .then(blob => {
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a');
        a.href = url;
        a.download = 'cv-Josue-Huallullo.v3.pdf';
        a.style.display = 'none'; // Oculta el enlace del usuarios
        document.body.appendChild(a); // Agrega el enlace al documento
        a.click(); // Inicia la descarga del archivo
        document.body.removeChild(a); // Elimina el enlace del documento
      })
      .catch(error => console.error(error));
  };

  const handleConfetti = () => {
    console.log('Confetti ==>', { handleConfetti })
    confetti({
      particleCount: 100,
      startVelocity: 30,
      spread: 360,
      origin: {
        x: 0.5,
        // since they fall down, start a bit higher than randomn
        y: 0.4
      }
    });
  }

  return (
    <Button
      color={'primary'}
      onClick={() => {
        handleConfetti();
        handleDownloadCV();
      }}
      style={{ display: 'inline-block' }}>
      {<DownloadIcon />}
      Descargar CV
    </Button>
  )
}
