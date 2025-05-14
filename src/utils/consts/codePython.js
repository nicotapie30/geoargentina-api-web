export const codePython = `
    import requests

    url = "https://geoargentina-api-data.vercel.app/api/provincias"
    response = requests.get(url)

    if response.status_code == 200:
        data = response.json()
        print("Provincias:")
        for prov in data:
            print(f"- {prov['nombre']}")
    else:
        print("Error:", response.status_code)
        `;
