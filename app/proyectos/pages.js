export default async function Proyectos() {

    let proyectos = [];

    try{
    const res = await fetch('http://localhost:3000/api/proyectos', {
        cache: 'no-store'
    });

        if (!res.ok) throw new Error ('Error al cargar proyectos');
        proyectos = await res.json();

    } catch (error) {
        console.error('Error fetching proyectos:', error);
    }

    return (
        <div className="text">
            <h1 className="text-3xl font-bold">Proyectos</h1>
            <a href="/proyectos/nuevo" className="text-blue-600 underline"> + Añadir proyecto </a>

            {proyectos.length === 0 ? (
                <p>No se encontraron proyectos.</p>
            ) : (
            <div>
                <p>¡Aquí puedes ver algunos de mis proyectos!</p>
                <ul>
                    {proyectos.map(proyecto =>(
                        //el child tiene que tener siempre una clave unica (key).
                        <li key={proyecto.id}>   
                            <h2 className="text-xl font-semibold">{proyecto.title?.rendered}</h2>
                            <p dangerouslySetInnerHTML={{__html: 'proyecto.excerpt?.rendered'}}></p>
                            <a href={proyecto.url} className="text-blue-500 underline text-sm"> Ver proyecto </a> 
                        </li>
                    ))}
                </ul>
            </div>
            )}
        </div>
    );
}