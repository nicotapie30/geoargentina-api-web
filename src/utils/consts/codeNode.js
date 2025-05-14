export const codeNode = `
    fetch('https://geoargentina-api-data.vercel.app/api/provincias') 
      .then(res => res.json()) 
      .then(data => { 
      console.log('Provincias:'); 
      data.forEach(prov => { 
      console.log(\`- \${prov.nombre}\`); 
      }); 
    }) 
    .catch(err => console.error('Error:', err));
`;
