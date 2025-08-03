import Header from '../components/Header'
import ProjectCard from '../components/ProjectCard'
import projects from '../data/project'

export default function Home() {
  return (
    <div>
      <Header />
      <main style={{ padding: '2rem' }}>
        <h2>My Projects</h2>
        <div style={{ display: 'grid', gap: '1rem' }}>
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </main>
    </div>
  )
}
