export type ProfileProps = {
    name: string
}
 function Profile({name} : ProfileProps ) {
  return <div>User name {name}</div>;
}

export default Profile;
