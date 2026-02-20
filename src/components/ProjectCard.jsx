export default function ProjectCard({ title, description, tags = [], status, link }) {
  const isDisabled = status !== "ativo";

  return (
    <div className="p-card">
      <h3>{title}</h3>
      <p className="p-desc">{description}</p>

      <div className="p-tags">
        {tags.map((t) => (
          <span className="tag" key={t}>
            {t}
          </span>
        ))}
      </div>

      {isDisabled ? (
        <span className="btn disabled">Em desenvolvimento</span>
      ) : (
        <a className="btn primary" href={link} target="_blank" rel="noreferrer">
          Ver projeto
        </a>
      )}
    </div>
  );
}