const API_URL = 'https://api.thedogapi.com/v1/images/search?limit=20&has_breeds=1&api_key=live_xXdRfl7RS5OxcJFVyHbalrEANuGYmS1G4V6792XTRZBvKFkPFz6E4bBpHuHep0k8';

class ProductsApiService {
    async fetchProducts() {
        const response = await fetch(API_URL);
        return await response.json();
    };
    


    /* async addWord({ id, english, transcription, russian, tags, tags_json  }) {
        await fetch(`${API_URL}/add`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({  id, english, transcription, russian, tags,tags_json }),
        });
    };
    

    async updateWord({ id, english, transcription, russian, tags = '', tags_json = '' }) {
        
        console.log('Updating word with data:', { id, english, transcription, russian, tags, tags_json });

        await fetch(`${API_URL}/${id}/update`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id, english, transcription, russian, tags, tags_json }),
        });
    };

    async deleteWord(id) {
        await fetch(`${API_URL}/${id}/delete`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        });
    };*/
};

export const productsApiService = new ProductsApiService();