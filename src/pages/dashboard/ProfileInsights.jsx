import { useAuth } from "../../services/AppContext";

function ProfileInsights() {
  const { user } = useAuth();
  console.log(user);

  return <div></div>;
}

export default ProfileInsights;
