import {useFetchUsersQuery} from "@/generated/hooks";
import {useSelector} from "@/lib/redux";

function Users() {

  const {
    data,
    loading,
  } = useFetchUsersQuery();


  if (loading) return <h1>Loading...</h1>;


  return (
    <div>
      <h1>Users</h1>
      {
        data!.users.length > 0 ?
          <ul>
            {
              data?.users.map(user => {
                return (
                  <li>
                    {user.email}
                  </li>
                )
              })
            }
          </ul>
          :
          <h1>no users</h1>
      }
    </div>
  );
}

export default Users;