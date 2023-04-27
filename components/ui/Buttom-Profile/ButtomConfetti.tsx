import { Button } from '@nextui-org/react';
import confetti from 'canvas-confetti';
import styles from "./../menu/menu.module.css";
import DownloadIcon from '@mui/icons-material/Download';
export const ButtomConfetti = () => {

  const handleDownloadCV = () => {
    // TODO: Agregar la lógica para descargar el archivo PDF
    console.log('Descargando CV...');
    fetch(`/download/CV/cv-Josue-Huallullo.pdf`)
      .then(response => response.blob())
      .then(blob => {
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a');
        a.href = url;
        a.download = 'cv-Josue-Huallullo.pdf';
        a.style.display = 'none'; // Oculta el enlace del usuario
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
        // since they fall down, start a bit higher than randomm
        y: 0.4
      }
    });
  }

  return (
    <div className={`${styles['container-buttom']}`}>
      <Button color={'gradient'}
        onClick={() => {
          handleConfetti();
          handleDownloadCV();
        }}
        style={{ display: 'inline-block' }}
        icon={<DownloadIcon />}
      >
        Descargar CV
      </Button>
    </div>
  )
}
