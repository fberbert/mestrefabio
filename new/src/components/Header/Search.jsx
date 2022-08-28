import '../../css/Header/Search.css'
import { FaSearch } from 'react-icons/fa'

const Search = () => (
  <div className="headersearch-container">
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Pesquise aqui"
      />
      <a className="search-btn" href="/"><FaSearch aria-label="Pesquisar" /></a>
    </div>
  </div>
)

export default Search
