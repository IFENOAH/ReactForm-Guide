import React from "react";
import Card from "../UI/Card";
import styles from "./UsersList.module.css";

function UsersList(props) {
  let content = "";
  if (props.users.length) {
    content = (
      <Card className={styles.users}>
        <ul>
          {props.users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.age} years old)
            </li>
          ))}
        </ul>
      </Card>
    );
  }
  return <div>{content}</div>;
}

export default UsersList;
