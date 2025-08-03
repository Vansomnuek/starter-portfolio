export default function ProjectCard({ title, description, link }) {
    return (
      <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1rem' }}>
        <h3>{title}</h3>
        <p>{description}</p>
        {link && <a href={link} target="_blank" rel="noreferrer">View project</a>}
      </div>
    )
  }
  