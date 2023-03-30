import { SECRET_XHASURA_ADMIN, SECRET_BACKEND_URL } from '$env/static/private'



export async function fetchData({query, variables}: {query: string, variables: Record<string, string>}) {


  const res = await fetch(
    SECRET_BACKEND_URL,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-hasura-admin-secret': SECRET_XHASURA_ADMIN
      },
      body: JSON.stringify({query: query, variables: variables})
    }
  );

  const result = await res.json();
  return result
}
