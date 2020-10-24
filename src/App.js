import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./App.css";
import MaterialTable from "material-table";

const API_SERVICE_URL =
  "https://books.zoho.com/api/v3/contacts?organization_id=649249007";

const heders = {
  "Content-Type": "application/json",
  Authorization: process.env.AUTH_KEY,
  "Access-Control-Allow-Origin": "*",
};
function App() {
  const initData = { contacts: [] };
  const [state, setstate] = useState(initData);

  useEffect(() => {
    const getData = () => {
      const url = window.location.href;
      if (url !== "http://localhost:3000/") {
        Axios.get(API_SERVICE_URL, { headers: heders }).then((data) =>
          setstate({ ...state, contacts: data.data.contacts })
        );
        console.log(state);
      } else {
        Axios.get("/contacts")
          .then((data) => {
            console.log(data.data.contacts);
            setstate({ ...state, contacts: data.data.contacts });
          })
          .catch((err) => console.log(err));
      }
    };

    getData();
  }, []);

  return (
    <div className="App">
      <MaterialTable
        title="Contacts List"
        columns={[
          { title: "Name", field: "contact_name" },
          { title: "Company Name", field: "company_name" },
          { title: "Type", field: "contact_type_formatted" },
          { title: "Email", field: "email" },
          { title: "Mobile", field: "mobile" },
          { title: "Place of Contact", field: "place_of_contact_formatted" },
          { title: "Created Time", field: "created_time_formatted" },
          { title: "Status", field: "status" },
        ]}
        data={state.contacts}
        options={{
          sorting: true,
          exportButton: true,
          headerStyle: {
            backgroundColor: "#01579b",
            color: "#FFF",
          },

          rowStyle: {
            backgroundColor: "aqua",
          },
        }}
      />
    </div>
  );
}

export default App;
