
// import {getAuthUrl } from '@/lib/gapi';

// interface UserInformation {
//   gmail: string;
//   instance: number; // 1 or 2 for different users
// }

// function SyncButton() {

//   const userInformation: UserInformation = {
//     gmail: 'iyfernando42@gmail.com',
//     instance: 1, // or 2 for another user
//   };

//   async function getAccessTokenAndRefreshToken(user: UserInformation) {
//   try {

//     // Generate the URL where the user will be directed to authenticate and authorize the app
//     const authUrl = await getAuthUrl(user).then((url) => {
//       return url;
//     });

//     // Redirect the user to authUrl
//     window.location.href = authUrl ? authUrl : "";
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }


//   return (
//     <div>
//         <button className='text-light-2 bg-black p-2' onClick={() => getAccessTokenAndRefreshToken(userInformation)}>Sync</button>
//         <div>
//           {/* <p className='text-light-2'>Access Token: {tokens?.access_token}</p> */}
//           {/* <p className='text-light-2'>Refresh Token: {tokens?.refresh_token}</p> */}
//         </div>
//     </div>
//   );
// }

// export default SyncButton;
