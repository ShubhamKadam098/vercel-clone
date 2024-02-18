import React from "react";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { projectId } = useParams();
  return <div className="text-white">Project Details {projectId}</div>;
};

export default ProjectDetails;
