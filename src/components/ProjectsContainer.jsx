import React from 'react';

const ProjectsContainer = () => {
  return (
    <section className="projects-container">
      <h2>Projetos</h2> 
      <p>
        No botão abaixo tem acesso a todos os meus projetos do GitHub.
      </p>
      <a href="https://github.com/chagasleandro?tab=repositories" className='btn'>
        Ver Projetos
      </a> 
    </section>
  )
}

export default ProjectsContainer;