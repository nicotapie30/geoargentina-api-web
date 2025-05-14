export const codeRust = `
    use reqwest;
    use serde::Deserialize;

    #[derive(Deserialize, Debug)]
    struct Provincia {
        nombre: String,
    }

    #[tokio::main]
    async fn main() -> Result<(), Box<dyn std::error::Error>> {
        let url = "https://geoargentina-api-data.vercel.app/api/provincias";
        let provincias: Vec<Provincia> = reqwest::get(url).await?.json().await?;

        println!("Provincias:");
        for prov in provincias {
            println!("- {}", prov.nombre);
        }

        Ok(())
    }               
                        `;
