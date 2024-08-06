// script.js
/* Objeto original
const users = [
    {
        id: 1,
        user_name: 'Janice',
        description: 'lorem ipsum',
        age: '46',
        imageUrl: "https://via.placeholder.com/300x200?text=User1", 
        fav_music: {
            bands: [
                'Band 1', 'Band 2', 'Band 3', 'Band 4'
            ]
        }
    },
    {
        id: 2,
        user_name: 'User LastName',
        description: 'Lorem lorem lorem',
        age: '23',
        imageUrl: "https://via.placeholder.com/300x200?text=User2",
        fav_music: {
            bands: [
               'Band 1', 'Band 2', 'Band 3', 'Band 4'
            ]
        }
    }
]
*/

const users = [
    {
        id: 123,
        user_name: 'Janice',
        description: 'Ingeniero en sistemas',
        age: '46',
        imageUrl: "https://via.placeholder.com/300x200?text=User1", 
        fav_music: {
            bands: [
                'Band 1', 'Band 2', 'Band 3', 'Band 4'
            ]
        }
    },
    {
        id: 2,
        user_name: 'Amairani',
        description: 'Lorem lorem lorem',
        age: '23',
        imageUrl: "https://via.placeholder.com/300x200?text=User2",
        fav_music: {
            bands: [
               'Band 1', 'Band 2', 'Band 3', 'Band 4'
            ]
        }
    },
    {
        id: 3,
        user_name: 'Logan',
        description: 'chim pus papas',
        age: '83',
        imageUrl: "https://via.placeholder.com/300x200?text=User3",
        fav_music: {
            bands: [
               'Band 1', 'Band 2', 'Band 3', 'Band 4'
            ]
        }
    }
]


// Función para crear una tarjeta
function createCard(user) {
    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = user.imageUrl;
    img.alt = user.user_name; //toma el nombre del usuario

    const title = document.createElement('h2');
    title.textContent = user.user_name; //imprime los nombres de los usuario
    title.append(" - Nombre");
    title.classList.add("card-title");

    const id = document.createElement('h4');
    id.textContent = user.id; //imprime los nombres de los usuario
    id.append(" - ID");

    const edad = document.createElement('h4');
    edad.textContent = user.age; //imprime la edad
    edad.append(" - Edad");
    

    const description = document.createElement('p');
    description.textContent = user.description; //imprime la descripcion

    const bandas = document.createElement('p');
    bandas.textContent = user.fav_music.bands;

    //aparicion en el card
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(id);
    card.appendChild(edad);
    card.appendChild(description);
    card.appendChild(bandas);

    return card;
}

// Obtener el contenedor y agregar tarjetas
const container = document.getElementById('card-container');
users.forEach(user => { // por cada usuario dentro del objeto
    const card = createCard(user); //se crea la card
    container.appendChild(card);
});
