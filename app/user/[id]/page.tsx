async function getUser(id: string) {
  const response = await fetch(
    `https://656c30c6e1e03bfd572e0a8c.mockapi.io/api/v1/users/${id}`
  );
  if (!response.ok) {
    throw new Error("fetch error");
  }
  return await response.json();
}

export default async function Page({ params }: { params: any }) {
  const user = await getUser(params.id);

  return (
    <div>
      ID : {params.id} <br></br> Name : {user.name} Visa : <br></br>{" "}
      {user.visas}
    </div>
  );
}
