import { toast } from 'react-toastify';


export const userService = {
    baseUrl:'http://localhost:8080/my-coin-api',
    logout,
};
    async function logout(router) {
        const token = window.localStorage.getItem('sessionToken');
        try {
             const request = new Request(baseUrl + '/auth/logout', {
                method: 'POST',
                headers: new Headers({
                  'Authorization': 'Bearer '+token,
                  'Content-Type': 'application/json',
                  Accept: '*/*'
                })
              });
                const response = await fetch(request);
                if (response.status < 200 || response.status >= 300) {
                  const data = await response.json();
                  toast.error(data.message+'!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    theme:"dark",
                    draggable: true,
                    progress: undefined,
                    });
                  window.localStorage.removeItem('sessionToken');
                  router.push('/login'); 
                  throw new Error(data.message);
                }
                window.localStorage.removeItem('sessionToken');
                router.push('/login');
                return Promise.resolve();
         } catch (error) {
          toast.error(error, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            theme:"dark",
            draggable: true,
            progress: undefined,
            });
            window.localStorage.removeItem('sessionToken');
            router.push('/login');    
        }
    }

function register(user) {
    return fetchWrapper.post(`${baseUrl}/register`, user);
}

function getAll() {
    return fetchWrapper.get(baseUrl);
}

function getById(id) {
    return fetchWrapper.get(`${baseUrl}/${id}`);
}

function update(id, params) {
    return fetchWrapper.put(`${baseUrl}/${id}`, params)
    .then(x => {
        // update stored user if the logged in user updated their own record
        if (id === userSubject.value.id) {
            // update local storage
            const user = { ...userSubject.value, ...params };
            localStorage.setItem('user', JSON.stringify(user));
            
            // publish updated user to subscribers
            userSubject.next(user);
        }
        return x;
    });
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(id) {
    return fetchWrapper.delete(`${baseUrl}/${id}`);
}
