import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './CharacterDetail.css';

function CharacterDetail() {
    // Obtener el ID del personaje de la URL
    const { id } = useParams();
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Cargar el personaje desde la API
    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                const response = await fetch(`https://api.sampleapis.com/futurama/characters/${id}`);
                if (!response.ok) {
                    throw new Error('Error al obtener el personaje');
                }
                const data = await response.json();
                setCharacter(data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchCharacter();
    }, [id]);

    if (loading) {
        return <div className="loading">Cargando personajes...</div>;
    }

    if (error) {
        return <div className="error">Error: {error}</div>;
    }

    if (!character) {
        return <div className="error">Personaje no encontrado</div>;
    }

    return (
        <div className="character-detail-container">
            {/* <h1>Detalles del Personaje</h1> */}

            {/* <h2>{`${character.name.first} ${character.name.middle} ${character.name.last}`}</h2> */}
            <h1>{`${character.name.first} ${character.name.middle || ''} ${character.name.last}`}</h1>
            <div className="character-detail">

                <div className="character-detail-image">
                    <img src={character.images.main} alt={`${character.name.first} ${character.name.middle} ${character.name.last}`} />
                </div>

                <div className="character-description">
                    <h2>Genero</h2>
                    <p> {character.gender}</p>
                    <h2>Especie</h2>
                    <p> {character.species}</p>
                    <h2>Hogar</h2>
                    <p> {character.homePlanet || 'No Definido'}</p>
                    <h2>Edad</h2>
                    <p> {character.age}</p>
                    <h2>Ocupación</h2>
                    <p> {character.occupation || 'No Definido'}</p>
                </div>
            </div>
            <button onClick={() => window.history.back()} className='button-return'>← Volver</button>
        </div>
    );
}

export default CharacterDetail;