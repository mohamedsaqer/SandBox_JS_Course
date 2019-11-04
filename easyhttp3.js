// Custom HTTP Library CRUD
class EasyHTTP3 {
    // HTTP Get Request
    async get(url) {
        const responce = await fetch(url);
        const data = await responce.json();

        return data;
    }

    // HTTP POST Request
    async post(url, formData) {
        const responce = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'apllication/json'
            },
            body: JSON.stringify(formData)
        });
        const data = await responce.json();

        return data;
    }

    // HTTP PUT Request
    async put(url, formData) {
        const responce = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'apllication/json'
            },
            body: JSON.stringify(formData)
        });
        const data = await responce.json();

        return data;
    }

    // HTTP DELETE Request
    async delete(url) {
        const responce = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'apllication/json'
            },
        });
        const data = await 'Resource Deleted...';

        return data;
    }
}