"use client";
import useNotesStore from "@/state/store";
import { useGoogleLogin } from "@react-oauth/google";

function Login() {
  const setAccessToken = useNotesStore((state) => state.setAccessToken);
  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log(tokenResponse);
      setAccessToken(tokenResponse.access_token);
      const response = await fetch(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } }
      );

      const userInfo = await response.json();

      console.log(userInfo);
    },
    onError: (errorResponse) => console.log(errorResponse),
  });

  return <button onClick={() => googleLogin()}>Sign in with Google 🚀</button>;
}

export default Login;
