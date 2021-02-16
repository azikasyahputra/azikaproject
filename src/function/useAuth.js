// export const isLogin = async () => {
//     const response = await fetch('http://localhost:8000/api/mydata/', {
//         headers: {'Authorization': 'Bearer ' +localStorage.getItem('token')},
//         method: 'POST',
//     });


//     if (!response.ok) { // error coming back from server
//       return false;
//     } 

//     const result = await response.json();

//     if(result){
//         return true
//     }
// }

export const isLogin = () => {
    if (localStorage.getItem('token')) return true;
    return false;
}