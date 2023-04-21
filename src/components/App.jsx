import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function createCard(contactCallEachTime) {
  return (
    <Card
      id={contactCallEachTime.id}
      // key={contactCallEachTime.id}
      // key sholuld be uniqe for react -> rules
      name={contactCallEachTime.name}
      img={contactCallEachTime.imgURL}
      tel={contactCallEachTime.phone}
      email={contactCallEachTime.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://media.licdn.com/dms/image/C5603AQFH5BEmfIZjkA/profile-displayphoto-shrink_800_800/0/1660802419492?e=2147483647&v=beta&t=1m1g2nzjKFNMPXqmZA6IjjHdMJjEljKLhfX-DnbOoi4" />
      {
        contacts.map(createCard)
        // only 3 times will be called, contactCallEachTime-> contact

        /* <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      /> */
      }
    </div>
  );
}

export default App;
