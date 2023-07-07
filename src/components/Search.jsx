const Search = ({ search, setSearch }) => {
  return (
    <div className="search">
      <h2>Pesquisar Tarefas </h2>
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Digite para pesquisar..."
        />
      </div>
    </div>
  );
};

export default Search;
