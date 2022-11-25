import { useRouter } from "next/router";
import MainContainer from "../../containers/MainContainder/MainContainer";

export async function getServerSideProps({params}) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
  const user = await response.json()
  console.log(user)

  return {
    props: {user},
  }
}

export default function({user}) {
  const {query} = useRouter();
  return (
    <MainContainer title={user.name}>
      <h1>User {query.id}</h1>
      <h2>{user.name}</h2>
    </MainContainer>
  );
}