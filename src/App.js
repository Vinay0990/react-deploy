import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./App.css";
import MaterialTable from "material-table";

const API_SERVICE_URL = "https://myft-backend.herokuapp.com/contacts";

function App() {
  const initData = { data: [] };
  const [state, setstate] = useState(initData);

  useEffect(() => {
    const getData = () => {
      Axios.get(API_SERVICE_URL)
        .then((data) => {
          setstate({ ...state, data: data.data.contacts });
          console.log(data.data.contacts);
        })
        .catch((err) => console.log(err));
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
        data={state.data}
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
