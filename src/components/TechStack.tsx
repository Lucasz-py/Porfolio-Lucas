const stack = [
    { category: 'LIBRARY', name: 'REACT' },
    { category: 'LANGUAGE', name: 'TYPESCRIPT' },
    { category: 'TOOL', name: 'VITE' },
    { category: 'BACKEND', name: 'NODE.JS' },
    { category: 'STYLING', name: 'TAILWIND' },
    { category: 'DATABASE', name: 'SUPABASE' },
    { category: 'VERSION', name: 'GIT' },
    { category: 'API', name: 'MERCADO PAGO' },
  ];
  
  export default function TechStack() {
    return (
      <section id="skills" className="bg-[#111] text-white py-24 border-b-4 border-black">
        <div className="max-w-6xl mx-auto px-4">
          
          <div className="flex justify-between items-end border-b-2 border-gray-700 pb-4 mb-8">
            <h2 className="text-6xl md:text-7xl font-black text-green-400 tracking-tighter">
              TECH_STACK
            </h2>
            <span className="font-mono text-xs text-gray-500 hidden md:block">
              🔴 /// SYSTEM_OPTIMIZED
            </span>
          </div>
  
          {/* Grilla de tecnologías */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-t-2 border-l-2 border-gray-800">
            {stack.map((tech, index) => (
              <div 
                key={index} 
                className="hover-target group border-r-2 border-b-2 border-gray-800 p-6 flex flex-col justify-center items-center aspect-[2/1] transition-colors hover:bg-orange-500 hover:text-black cursor-none"
              >
                <span className="font-mono text-xs text-gray-500 group-hover:text-black/70 mb-2">
                  {'>_'} {tech.category}
                </span>
                <span className="font-black text-xl md:text-2xl tracking-tight">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
  
        </div>
      </section>
    );
  }