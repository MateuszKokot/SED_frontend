import React from "react";

function Check(){

    const onclick = () => {
        
        // console.log("SE klikam");

        const requestOptions = {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
              'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNzhhMGNiNGVkZGJlNTcyMzBkYjIxOGY1ZWJhMzQ0M2VmYjk1MWFlMTgyYTQ2NTJmMjhkYTRhMWM0NmFhODYyZmE2NzMyN2YzMWNhYThmOTciLCJpYXQiOjE2NjE4MDA5OTYuNDc5MDQzLCJuYmYiOjE2NjE4MDA5OTYuNDc5MDQ0LCJleHAiOjE2OTMzMzY5OTYuNDc0ODYsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.c0lx9hjbPjxno2_c2bgHyHRrkGYw47pKFAxsBA3kbG0Dvis_QoIbyK0Dz2wXQFxJ0QLe9m2VtyTjG95Z7wW8Gp_6AU39zbG7yZfk_ZuXOV_PrwwnTrCE4tJJLVBtJCnLzd8BGxwC4Y0UzvurVOCQStAcD-pXU02IpnGZZZk376RxuwEPdpKoDXQg5qRFlA5FA6XGE9vzPhyWXloOKllt43rHmI0rRwHlmyHHUMlSE7wrnwfQizuWCLGvJvZYBmCDClTzW7BHBUp5zk1faMjeSo7Q6j9jKhr1fK0VoIw8Pa_HhrL3emUU-MVvAaIr0tovq0NEay2LFGHqY3FFKzdC1gOsb3cU1DH7nFlZPIZlXO9ygu124OUlhNoAmz6FkZ50KH8zjS3vrRVCb8stTpNNr_0v2djYKrFsjuQ3CuTd0K3SJO5WjN1riKXF_DX4v0M7UjnOayk8IvLVLubEAgmM1x6SUAJTjy8iIuB0-lriuoooQcAY3x0kOaquCsYn-S_9tvUuqNvCdNJ-0O69qlV_fkRvoS4_DYg8LDL0uJ4sCR6Sw-rbG158skn1jl-kwvq53WwQwGhB0KFZOlLo91R3rHIJnUBOdHg1D-D-d2srZ9oJ2WI1swuItWF8-NM_Nx3re-SVSBD0R3TiPJV0fxBXo8S9e_wQcJRIADGOmBu9YSU',
            },
            // body: JSON.stringify({ title: "React POST Request Example" }),
          };

        fetch("http://localhost:8000/api/test", requestOptions)
              .then((response) => response.text())
              .then((data) => console.log(data))
              .catch((e) => console.log(e));
        
    };

    return(
        <button onClick={onclick}>Obadaj czy jesteś zalogowany </button>
    );

}

export default Check;

