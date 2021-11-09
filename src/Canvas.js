import React, { useRef, useEffect } from 'react'

const w= 256;   //width
const h= 128;   //height

const Canvas = () => {

    const canvasRef = useRef(null)
  
    useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const imageData = context.createImageData(w, h);
    
    const pixelArray = [];
    for(let r=1, g=1, b=1; r <= 32; r++){

        let R = r * 8 - 1;
        let G = g * 8 - 1;
        let B = b * 8 - 1;
  
        pixelArray.push({R, G, B});
        
        if(r === 32){
            r = 0;
            if(g === 32){
                g = 0;
                if( b === 32) break;
                b++;
            }
            g++;
        } 
    }

    console.table(pixelArray);

    for(let index=0, a=0; index <  imageData.data.length; index+=4, a++){
        imageData.data[index + 0] = pixelArray[a].R;
        imageData.data[index + 1] = pixelArray[a].G;
        imageData.data[index + 2] = pixelArray[a].B;
        imageData.data[index + 3] = 255;
    }

    context.putImageData(imageData, 0, 0);

    
  }, [])

    return (
        <div>
            <canvas width={256} height={128} ref={canvasRef} />
        </div>
    )
}

export default Canvas
