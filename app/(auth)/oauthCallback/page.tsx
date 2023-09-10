// "use client";

// import { fetchStepCounts } from '@/lib/actions/google.actions';
// import { fetchAccessToken, syncStepsToBackend } from '@/lib/actions/user.actions';
// import { getAccessToken } from '@/lib/gapi';
// import {useEffect} from 'react';

// interface UserInformation {
//   gmail: string;
//   instance: number; // 1 or 2 for different users
// }

// function Page(){

//     const userInformation: UserInformation = {
//         gmail: 'iyfernando42@gmail.com',
//         instance: 1, // or 2 for another user
//     };
//       // Function to handle the OAuth callback and obtain the authorization code
//     async function handleOAuthCallback() {
//         try {
//             // Obtain the authorization code from the URL (query parameter) after the OAuth callback
//             const urlParams = new URLSearchParams(window.location.search);
//             const authorizationCode = urlParams.get("code");

//             if (authorizationCode) {
//                 const tokens = await getAccessToken(userInformation,authorizationCode).then((tokens) => {
                
//                 return tokens;
//                 });

//                 // Store the tokens securely and associate them with the user
//                 localStorage.setItem("at", JSON.stringify(tokens?.access_token));
//                 // (e.g., in a database)
//                 //window.location.href = "http://localhost:3000/";

//                 const at = localStorage.getItem("at");
//                 getSteps(at ? at : "");

//                 console.log("done");

//                 return null;
            
//             } else {
//                 window.location.href = "http://localhost:3000/";
//                 //console.error("Authorization code not found in the URL.");
//             }
//         } catch (error) {
//             console.error("Error:", error);
//         }
//     }


//     async function getSteps(accessToken: string) {
//       try {
//             //const accessToken = await fetchAccessToken();
//             const stepCounts = await fetchStepCounts(accessToken);
//             console.log(stepCounts)
//             //const syncResponse = await syncStepsToBackend(stepCounts.result, gmail);
//             //console.log(syncResponse);
//             // setPlayer({
//             //     points: syncResponse.totalPoints,
//             //     steps: syncResponse.totalSteps,
//             // })
//             // user.points = syncResponse.totalPoints;
//             // user.steps = syncResponse.totalSteps;
//         } catch (error:any) {
//             console.log(error.message);
//             // setIsSyncing(false);
//             // setSyncError(true);
//         }

//       }

  

//   // Run the handleOAuthCallback function when the component mounts
//   useEffect(() => {
//     handleOAuthCallback();
//   }, []);

//     return <div className='text-light-2 flex justify-center'>
//         <h1>Page</h1>
//         <p>{}</p>
//     </div>;

// } 

// export default Page;