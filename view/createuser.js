
let fName = document.getElementById('name');
let fEmail = document.getElementById('email');
let fMobile = document.getElementById('mobile');
let fAge = document.getElementById('age');

// not support addevent listener
// userForm.addEventListener('submit', function(event){
//     event.preventDefault(); // to avoid page refresh
//     const data = {
//         name: fName.value,
//         email: fEmail.value,
//         mobile: fMobile.value,
//         age: fAge.value
//     }
//     console.log(`user data submitted`, data);
// });


function submitHandler (event){
    event.preventDefault(); // to avoid page refresh
    const data = {
        name: fName.value,
        email: fEmail.value,
        mobile: fMobile.value,
        age: fAge.value
    }
    console.log(`user data submitted`, data);
}