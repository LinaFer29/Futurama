import { useState, useEffect } from 'react';
import CharacterCard from './CharacterCard';
import './CharacterList.css';

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecie, setSelectedSpecie] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Cargar los personajes desde la API
  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch('https://api.sampleapis.com/futurama/characters');

        if (!response.ok) {
          throw new Error('Error al obtener los personajes');
        }

        const data = await response.json();
        setCharacters(data);
        setFilteredCharacters(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  // Obtener la lista de especies únicas
  const speciesList = [...new Set(characters.map(character => character.species))];

  // Guardar filtro en localStorage
  useEffect(() => {
    const storedSpecie = JSON.parse(localStorage.getItem('selectedSpecie'));
    if (storedSpecie) {
      setSelectedSpecie(storedSpecie);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('selectedSpecie', JSON.stringify(selectedSpecie));
  }, [selectedSpecie]);

  // Filtrar los personajes según el término de búsqueda y la especie seleccionada
  useEffect(() => {
    const results = characters.filter(character => {
      const fullName = `${character.name.first} ${character.name.middle} ${character.name.last}`.toLowerCase();
      const matchesName = fullName.includes(searchTerm.toLowerCase());
      const matchesSpecie = selectedSpecie === '' || character.species === selectedSpecie;
      return matchesName && matchesSpecie;
    }
    );
    setFilteredCharacters(results);
  }, [searchTerm, selectedSpecie,characters]);

  // Manejar el cambio en el campo de búsqueda
  const handleSpecieChange = (e) => {
    setSelectedSpecie(e.target.value);
  }
  // Manejar el cambio en el campo de búsqueda
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  if (loading) {
    return <div className="loading">Cargando personajes...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="character-container">
      <h1>Personajes de Futurama</h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar personaje por nombre"
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
      </div>
      <div className="specie-filter">
        <label htmlFor="specie">Filtrar por especie:</label>
        <select className="select-species" id="species" onChange={handleSpecieChange}>
          <option value="">Todas</option>
          {speciesList.map((specie, index) => (
            <option key={index} value={specie}>
              {specie}
            </option>
          ))}
        </select>
      </div>



      {filteredCharacters.length === 0 ? (
        <div className="no-results">Sin resultados para esta búsqueda y filtro</div>
      ) : (
        <div className="character-grid">
          {filteredCharacters.map(character => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CharacterList;