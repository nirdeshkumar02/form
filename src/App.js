import { React, useState } from "react";
import Select from "react-select";
import Form from "@rjsf/antd";
// import "bootstrap/dist/css/bootstrap.css";

const clients = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const CustomSelectComponent = (props) => {
  const onChange = (selectedOptions) => {
    props.onChange(selectedOptions.map((o) => o.value));
  };
  return (
    <Select defaultValue={[]} options={clients} isMulti onChange={onChange} />
  );
};

const schema = {
  type: "object",
  properties: {
    clients: {
      title: "Clients",
      type: "array",
      items: {
        type: "string",
      },
    },
    code: {
      title: "Code",
      type: "string",
    },
    is_global: {
      title: "Is Fetcher Global",
      type: "boolean",
    },
    name: {
      title: "Name",
      type: "string",
    },
    strid: {
      title: "String ID",
      type: "string",
    },
    integration_type: {
      title: "Integration Type",
      enum: ["Integration1", "Integration2", "Integration3"],
    },
    schema: {
      title: "Schema",
      type: "string",
    },
  },
};

const uiSchema = {
  clients: {
    "ui:widget": "CustomSelect",
  },
  code: {
    "ui:autofocus": true,
    "ui:widget": "textarea",
  },
  is_global: {
    "ui:widget": "select",
  },
  name: {
    "ui:autofocus": true,
    "ui:emptyValue": "",
  },
  strid: {
    "ui:autofocus": true,
    "ui:emptyValue": "",
  },
  integration_type: {
    "ui:widget": "select",
  },
  schema: {
    "ui:widget": "textarea",
  },
};

const widgets = {
  CustomSelect: CustomSelectComponent,
};

const onSubmit = ({ formData }) => console.log("Data submitted: ", formData);

export default function App() {
  const [formData, setFormData] = useState("");
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <Form
            schema={schema}
            uiSchema={uiSchema}
            widgets={widgets}
            formData={formData}
            onSubmit={onSubmit}
            onChange={(e) => setFormData(e.formData)}
          />
        </div>
      </div>
    </div>
  );
}
