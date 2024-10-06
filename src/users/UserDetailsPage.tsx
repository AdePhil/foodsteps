import { useEffect, useState } from "react";
import { Spin } from "antd";
import { User } from "../types";
import { useActiveUser } from "../context/ActiveUserContext";

export default function UserDetailsPage() {
  const [userDetails, setUserDetails] = useState<User | null>(null);
  const { activeUser } = useActiveUser();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${activeUser}`)
      .then((response) => response.json())
      .then((json) => {
        setUserDetails(json);
      });
  }, [activeUser]);

  return (
    <>
      {userDetails === null ? (
        <Spin />
      ) : (
        <div>
          <p>
            <b>Name:</b> {userDetails.name}
          </p>
          <p>
            <b>Email:</b> {userDetails.email}
          </p>
          <p>
            <b>Phone:</b> {userDetails.phone}
          </p>
          <p>
            <b>Website:</b> {userDetails.website}
          </p>
        </div>
      )}
    </>
  );
}
