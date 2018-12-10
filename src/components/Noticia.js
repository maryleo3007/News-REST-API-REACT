import React from 'react';

const Noticia = (props) => {
    
    const {urlToImage, url, title, description, source} = props.noticia ;
    
    return (
        <div className="col s12 m6 l4">
            <div className="card">
                <div className="card-image">
                    <img src={urlToImage} alt={title}/>
                    <span> {source.name}</span>
                </div>
                <div className="card-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <a href={url} className="waves-effect waves-ligth">Noticia completa</a>
                </div>
            </div>
        </div>
    );
}

export default Noticia