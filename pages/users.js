import Link from "next/link";
import MainContainer from "../containers/MainContainder/MainContainer";

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await response.json()
  console.log(users)

  return {
    props: {users},
  }
}

const Users = ({users}) => {
  return (
    <MainContainer title='User list page'>
      <h1>Users page</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`} legacyBehavior>
              <a>{user.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </MainContainer>
  );
};
export default Users;
