import React from "react";
import PageContainer from "../Components/PageContainer";
import { getPersonData } from "../utils/API";

const Person = () => {
  return (
    <PageContainer
      title="Person"
      apiFunc={getPersonData}
      typeOptions={["popular"]}
    />
  );
};

export default Person;
