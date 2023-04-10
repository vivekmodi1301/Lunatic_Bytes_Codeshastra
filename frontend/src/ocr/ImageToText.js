import React from 'react'
import Tesseract from 'tesseract.js';

function ImageToText() {
    const [image, setImage] = React.useState('');
    const [ocrResult, setOcrResult] = React.useState(undefined);
  
    const handleSubmit = () => {
      Tesseract.recognize(image, 'eng', {
        logger: (m) => {
          console.log("Hello",m);
          if (m.status === 'recognizing text') {
            console.log("progress is 100")
          }
        },
      })
        .catch((err) => {
          console.error(err);
        })
        .then((result) => {
          console.log(result.data);
          const tempResult = {
            restaurant : result.data.words[3].text,
            totalAmount : result.data.words[46].text,
            date : result.data.words[20].text,
          }
          setOcrResult(tempResult);
        });
    };
  return (

    <div>
         <div>
              <input
                type="file"
                onChange={(e) =>
                  setImage(URL.createObjectURL(e.target.files[0]))
                }
                className="form-control mt-5 mb-2"
              />
              <button
                onClick={handleSubmit}
                className="btn btn-primary mt-5"
              >Convert</button>
            </div>
            <div style={{margin:"2rem"}}>
              {ocrResult && (
                
                <div>
                <div>
                  <img src={image} style={{width:"400px",height:"500px"}}/>
                </div>
                <div>
                  <p className='text-xl font-semibold'> Restaurant : {ocrResult.restaurant}</p>
                  <p className='text-xl font-semibold'> Total Amount  : {ocrResult.totalAmount}</p>
                  <p className='text-xl font-semibold'> Date {ocrResult.date}</p>
                </div>
                </div>
              )}
            </div>
    </div>
    
  )
}

export default ImageToText