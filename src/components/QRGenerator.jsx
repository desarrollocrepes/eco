import { useRef } from 'react';
import { QrCode, Download, Printer } from 'lucide-react';
import { QRCodeCanvas } from 'qrcode.react';
import '../styles/QRGenerator.css';

export default function QRGenerator({ prendaId, prendaNombre }) {
  const qrRef = useRef();
  const baseUrl = window.location.origin;
  const qrValue = `${baseUrl}/prenda/${prendaId}`;

  const handleDownload = () => {
    const canvas = qrRef.current?.querySelector('canvas');
    if (canvas) {
      const url = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = `qr-${prendaId}.png`;
      link.href = url;
      link.click();
    }
  };

  const handlePrint = () => {
    const canvas = qrRef.current?.querySelector('canvas');
    if (!canvas) return;

    const printWindow = window.open('', '_blank');
    const imageUrl = canvas.toDataURL('image/png');

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>QR Code - ${prendaNombre}</title>
          <style>
            body {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              height: 100vh;
              margin: 0;
              font-family: Arial, sans-serif;
            }
            .container {
              text-align: center;
            }
            h2 { margin: 20px 0 10px 0; }
            p { margin: 10px 0 20px 0; color: #666; }
            img { max-width: 300px; border: 2px solid #000; }
            @media print {
              body { background: white; }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h2>${prendaNombre}</h2>
            <p>ID: ${prendaId}</p>
            <img src="${imageUrl}" alt="QR Code">
            <p style="margin-top: 30px; color: #999; font-size: 12px;">
              Escanea este código para ver la historia de esta prenda
            </p>
          </div>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div className="qr-generator-container">
      <div className="qr-content">
        <div className="qr-display" ref={qrRef}>
          <QRCodeCanvas 
            value={qrValue}
            size={256}
            level="H"
            includeMargin={true}
            fgColor="#000000"
            bgColor="#ffffff"
          />
        </div>

        <div className="qr-actions">
          <button 
            className="btn btn-primary"
            onClick={handleDownload}
            title="Descargar QR como PNG"
          >
            <Download size={18} /> Descargar QR
          </button>
        </div>
      </div>
    </div>
  );
}
