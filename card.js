// script.js
const users = [
    {
        id: 1,
        user_name: 'User1',
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



// Función para crear una tarjeta
function createCard(user) {
    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = user.imageUrl;
    img.alt = user.user_name; //toma el nombre del usuario

    const title = document.createElement('h2');
    title.textContent = user.user_name; //imprime los nombres de los usuario

    const description = document.createElement('p');
    description.textContent = user.description; //imprime la descripcion

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(description);

    return card;
}

// Obtener el contenedor y agregar tarjetas
const container = document.getElementById('card-container');
users.forEach(user => {
    const card = createCard(user);
    container.appendChild(card);
});
