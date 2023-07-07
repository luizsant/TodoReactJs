const Filter = ({ filter, setFilter, setSort }) => {
  return (
    <div className="filter">
      <h2>Filtrar</h2>
      <div className="filter-options">
        <div>
          <p>Status</p>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">todas</option>
            <option value="completed">completas</option>
            <option value="incompleted">incompletas</option>
          </select>
        </div>
        <div>
          <p>ordem alfabética</p>
          <button className="btnLeft" onClick={() => setSort("ascendente")}>
            ascendente
          </button>
          <button className="btnRight" onClick={() => setSort("descendente")}>
            descendente
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
