export const codePhp = `
    <?php
    $url = "https://geoargentina-api-data.vercel.app/api/provincias";
    $response = file_get_contents($url);

    if ($response !== false) {
        $data = json_decode($response, true);
        echo "Provincias:;
        foreach ($data as $prov) {
            echo "- " . $prov['nombre'] .;
        }
    } else {
        echo "Error al obtener los datos.";
    }
    ?>

            `;
