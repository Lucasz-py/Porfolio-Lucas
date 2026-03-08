const projects = [
    {
      title: "E-COMMERCE ARTESANÍAS",
      desc: "A full complete e-commerce platform with cart management, shipping calculations via Correo Argentino, and checkout integration.",
      tags: ["React", "TypeScript", "Supabase", "Mercado Pago", "Tailwind"],
    },
    {
      title: "PORTFOLIO V1",
      desc: "A neo-brutalist interactive web portfolio with custom cursors, animations, and high-performance rendering.",
      tags: ["React", "Vite", "TailwindCSS"],
    }
  ];
  
  export default function SelectedWorks() {
    return (
      <section id="work" className="bg-yellow-300 py-24 border-b-4 border-black relative">
        <div className="max-w-6xl mx-auto px-4">
          
          {/* Título con efecto de borde (Stroke) */}
          <h2 
            className="text-6xl md:text-8xl font-black uppercase mb-16 text-white"
            style={{ textShadow: '4px 4px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000' }}
          >
            Selected Works
          </h2>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-white border-4 border-black p-6 shadow-neo hover:shadow-neo-lg transition-all flex flex-col">
                
                {/* Imagen Placeholder del Proyecto */}
                <div className="w-full aspect-video bg-gray-200 border-2 border-black mb-6 flex items-center justify-center">
                   <span className="font-mono text-gray-400">Project Image / Video</span>
                </div>
  
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-3xl font-black uppercase">{project.title}</h3>
                  <button className="hover-target bg-green-400 border-2 border-black p-2 hover:bg-green-500 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"></path></svg>
                  </button>
                </div>
  
                <p className="font-mono text-gray-700 mb-6 flex-grow">
                  {project.desc}
                </p>
  
                {/* Tags del stack utilizado */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-black text-white font-mono text-xs font-bold px-2 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
  
              </div>
            ))}
          </div>
  
        </div>
      </section>
    );
  }