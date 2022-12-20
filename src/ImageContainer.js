import React from 'react';
import './ImageContainer.css';

const ImageContainer = () => {
    const [url, setUrl] = React.useState('');

    const onChange = (e) => {
        const files = e.target.files;
        files.length > 0 && setUrl(URL.createObjectURL(files[0]));
    };

    return (
        <div className="image-container">
            {
                url ?
                    <img
                        className='image-view'
                        style={{ width: '100%', height: '100%' }}
                        src={url} alt="" />
                    :
                    <div className="upload-container">
                        <input
                            type="file"
                            className="input-file"
                            accept=".png, .jpg, .jpeg"
                            onChange={onChange}
                        />
                        <p>Drag & Drop here</p>
                        <p>or <span style={{ color: "blue" }} >Browse</span></p>

                    </div>
            }
        </div>
    );
};

export default ImageContainer;