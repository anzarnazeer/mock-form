import React, { useState } from "react";
import { Row, Col, Label, Input, Table } from "reactstrap";
import Modal from "react-modal";

function Form() {
  const [isRequirementModalOpen, setIsRequirementModalOpen] = useState(false);
  const [isUserDetailsModalOpen, setIsUserDetailsModalOpen] = useState(false);
  const [isGroupModalOpen, setIsGroupModalOpen] = useState(false);
  const [isJobTitleModalOpen, setIsJobTitleModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    learningPlanName: "",
    description: "",
    requirment: "",
    courseType: "",
    dueDate: "",
    expiration: "",
    order: "",
  });

  const [userDetails, setUserDetails] = useState({
    userName: "",
    userEmail: "",
    userRole: "",
    jobTitle: "",
    division: "",
    area: "",
    location: "",
  });
  const [groupDetails, setGroupDetails] = useState({
    groupName: "",
  });

  const [jobTitleDetails, setJobTitleDetails] = useState({
    jobTitleName: "",
  });

  const [savedItems, setSavedItems] = useState([]);
  const [savedUsers, setSavedUsers] = useState([]);
  const [savedGroups, setSavedGroups] = useState([]);
  const [savedJobTitles, setSavedJobTitles] = useState([]);

  const openRequirementModal = () => {
    setIsRequirementModalOpen(true);
  };

  const closeRequirementModal = () => {
    setIsRequirementModalOpen(false);
    setFormData({
      learningPlanName: "",
      description: "",
      requireCompletion: false,
      courseType: "",
      dueDate: "",
      expiration: "",
      order: "",
    });
  };

  const openUserDetailsModal = () => {
    setIsUserDetailsModalOpen(true);
  };

  const closeUserDetailsModal = () => {
    setIsUserDetailsModalOpen(false);
    setUserDetails({
      userName: "",
      userEmail: "",
      userRole: "",
      jobTitle: "",
      division: "",
      area: "",
      location: "",
    });
  };

  const openGroupModal = () => {
    setIsGroupModalOpen(true);
  };

  const closeGroupModal = () => {
    setIsGroupModalOpen(false);
    setGroupDetails({
      groupName: "",
    });
  };

  const openJobTitleModal = () => {
    setIsJobTitleModalOpen(true);
  };

  const closeJobTitleModal = () => {
    setIsJobTitleModalOpen(false);
    setJobTitleDetails({
      jobTitleName: "",
    });
  };
  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;

    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [id]: type === "checkbox" ? checked : value,
    }));
    setGroupDetails((prevDetails) => ({
      ...prevDetails,
      [id]: type === "checkbox" ? checked : value,
    }));
    setJobTitleDetails((prevDetails) => ({
      ...prevDetails,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSaveRequirement = () => {
    const newItem = { ...formData };
    setSavedItems((prevItems) => [...prevItems, newItem]);

    closeRequirementModal();
  };

  const handleSaveUserDetails = () => {
    const newUser = { ...userDetails };
    setSavedUsers((prevUsers) => [...prevUsers, newUser]);

    closeUserDetailsModal();
  };
  const handleSaveGroup = () => {
    const newGroup = { ...groupDetails };
    setSavedGroups((prevGroups) => [...prevGroups, newGroup]);

    closeGroupModal();
  };

  const handleSaveJobTitle = () => {
    const newJobTitle = { ...jobTitleDetails };
    setSavedJobTitles((prevJobTitles) => [...prevJobTitles, newJobTitle]);

    closeJobTitleModal();
  };
  const handleDelete = (index) => {
    const updatedItems = [...savedItems];
    updatedItems.splice(index, 1);
    setSavedItems(updatedItems);
  };

  const handleDeleteUser = (index) => {
    const updatedUsers = [...savedUsers];
    updatedUsers.splice(index, 1);
    setSavedUsers(updatedUsers);
  };
  const handleDeleteGroup = (index) => {
    const updatedGroups = [...savedGroups];
    updatedGroups.splice(index, 1);
    setSavedGroups(updatedGroups);
  };

  const handleDeleteJobTitle = (index) => {
    const updatedJobTitles = [...savedJobTitles];
    updatedJobTitles.splice(index, 1);
    setSavedJobTitles(updatedJobTitles);
  };
  const handleSaveAll = () => {
    console.log("Saved Items:", savedItems);
    console.log("Saved Users:", savedUsers);
    console.log("Saved Groups:", savedGroups);
    console.log("Saved Job Titles:", savedJobTitles);

    setSavedItems([]);
    setSavedUsers([]);
    setSavedGroups([]);
    setSavedJobTitles([]);
  };

  const handleCancel = () => {
    closeRequirementModal();
    closeUserDetailsModal();
    closeGroupModal();
    closeJobTitleModal();
  };

  return (
    <div>
      <form action="">
        <Row>
          <Col>
            <Label htmlFor="learningPlanName">Learning Plan Name</Label>
            <Input
              type="text"
              id="learningPlanName"
              value={formData.learningPlanName}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  learningPlanName: e.target.value,
                }))
              }
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Label htmlFor="description">Description</Label>
            <Input
              type="text"
              id="description"
              value={formData.description}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  description: e.target.value,
                }))
              }
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Input
              type="checkbox"
              id="requireCompletion"
              checked={formData.requireCompletion}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  requireCompletion: e.target.checked,
                }))
              }
            />
            <Label htmlFor="requireCompletion">
              Require User to complete Learning Plan requirement in given order
            </Label>
          </Col>
        </Row>
        <button type="button" onClick={openRequirementModal}>
          Add Requirements
        </button>
      </form>

      {savedItems.length > 0 && (
        <div>
          <Table>
            <thead>
              <tr>
                <th>Requirement</th>
                <th>Course Type</th>
                <th>Due Date</th>
                <th>Expiration</th>
                <th>Order</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {savedItems.map((item, index) => (
                <tr key={index}>
                  <td>{item.requirment}</td>
                  <td>{item.courseType}</td>
                  <td>{item.dueDate}</td>
                  <td>{item.expiration}</td>
                  <td>{item.order}</td>
                  <td>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <button type="button" onClick={openUserDetailsModal}>
            Add User Details
          </button>
          <button type="button" onClick={openGroupModal}>
            Add Group
          </button>
          <button type="button" onClick={openJobTitleModal}>
            Add Job Title
          </button>
        </div>
      )}
      {savedGroups.length > 0 && (
        <div>
          <h3>Saved Groups</h3>
          <Table>
            <thead>
              <tr>
                <th>Group Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {savedGroups.map((group, index) => (
                <tr key={index}>
                  <td>{group.groupName}</td>
                  <td>
                    <button onClick={() => handleDeleteGroup(index)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}

      {savedJobTitles.length > 0 && (
        <div>
          <h3>Saved Job Titles</h3>
          <Table>
            <thead>
              <tr>
                <th>Job Title Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {savedJobTitles.map((jobTitle, index) => (
                <tr key={index}>
                  <td>{jobTitle.jobTitleName}</td>
                  <td>
                    <button onClick={() => handleDeleteJobTitle(index)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}

      <Modal
        isOpen={isRequirementModalOpen}
        onRequestClose={closeRequirementModal}
        contentLabel="Modal"
      >
        <div>
          <h2>Add Requirement</h2>
          <Row>
            <Col>
              <Label htmlFor="requirment">Requirment</Label>
              <Input
                type="text"
                id="requirment"
                value={formData.requirment}
                onChange={(e) =>
                  setFormData((prevData) => ({
                    ...prevData,
                    requirment: e.target.value,
                  }))
                }
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Label htmlFor="courseType">Course Type</Label>
              <Input
                type="text"
                id="courseType"
                value={formData.courseType}
                onChange={(e) =>
                  setFormData((prevData) => ({
                    ...prevData,
                    courseType: e.target.value,
                  }))
                }
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Label htmlFor="dueDate">Due Date</Label>
              <Input
                type="text"
                id="dueDate"
                value={formData.dueDate}
                onChange={(e) =>
                  setFormData((prevData) => ({
                    ...prevData,
                    dueDate: e.target.value,
                  }))
                }
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Label htmlFor="expiration">Expiration</Label>
              <Input
                type="text"
                id="expiration"
                value={formData.expiration}
                onChange={(e) =>
                  setFormData((prevData) => ({
                    ...prevData,
                    expiration: e.target.value,
                  }))
                }
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Label htmlFor="order">Order</Label>
              <Input
                type="text"
                id="order"
                value={formData.order}
                onChange={(e) =>
                  setFormData((prevData) => ({
                    ...prevData,
                    order: e.target.value,
                  }))
                }
              />
            </Col>
          </Row>
          <button onClick={handleSaveRequirement}>Save Requirement</button>
        </div>
      </Modal>

      <Modal
        isOpen={isUserDetailsModalOpen}
        onRequestClose={closeUserDetailsModal}
        contentLabel="Modal"
      >
        <div>
          <h2>Add User Details</h2>
          <Row>
            <Col>
              <Label htmlFor="userName">User Name</Label>
              <Input
                type="text"
                id="userName"
                value={userDetails.userName}
                onChange={(e) =>
                  setUserDetails((prevDetails) => ({
                    ...prevDetails,
                    userName: e.target.value,
                  }))
                }
              />
            </Col>
            <Col>
              <Label htmlFor="userEmail">User Email</Label>
              <Input
                type="email"
                id="userEmail"
                value={userDetails.userEmail}
                onChange={(e) =>
                  setUserDetails((prevDetails) => ({
                    ...prevDetails,
                    userEmail: e.target.value,
                  }))
                }
              />
            </Col>
            <Col>
              <Label htmlFor="userRole">Role</Label>
              <Input
                type="text"
                id="userRole"
                value={userDetails.userRole}
                onChange={handleInputChange}
              />
            </Col>
            <Col>
              <Label htmlFor="jobTitle">Job Title</Label>
              <Input
                type="text"
                id="jobTitle"
                value={userDetails.jobTitle}
                onChange={handleInputChange}
              />
            </Col>
            <Col>
              <Label htmlFor="division">Division</Label>
              <Input
                type="text"
                id="division"
                value={userDetails.division}
                onChange={handleInputChange}
              />
            </Col>
            <Col>
              <Label htmlFor="area">Area</Label>
              <Input
                type="text"
                id="area"
                value={userDetails.area}
                onChange={handleInputChange}
              />
            </Col>
            <Col>
              <Label htmlFor="location">Location</Label>
              <Input
                type="text"
                id="location"
                value={userDetails.location}
                onChange={handleInputChange}
              />
            </Col>
          </Row>
          <button onClick={handleSaveUserDetails}>Save User Details</button>
        </div>
      </Modal>
      <Modal
        isOpen={isGroupModalOpen}
        onRequestClose={closeGroupModal}
        contentLabel="Group Modal"
      >
        <div>
          <Row>
            <Col>
              <Label htmlFor="groupName">Group Name</Label>
              <Input
                type="text"
                id="groupName"
                value={groupDetails.groupName}
                onChange={handleInputChange}
              />
            </Col>
          </Row>
          <button onClick={handleSaveGroup}>Save</button>
        </div>
      </Modal>

      <Modal
        isOpen={isJobTitleModalOpen}
        onRequestClose={closeJobTitleModal}
        contentLabel="Job Title Modal"
      >
        <div>
          <Row>
            <Col>
              <Label htmlFor="jobTitleName">Job Title Name</Label>
              <Input
                type="text"
                id="jobTitleName"
                value={jobTitleDetails.jobTitleName}
                onChange={handleInputChange}
              />
            </Col>
          </Row>
          <button onClick={handleSaveJobTitle}>Save</button>
        </div>
      </Modal>
      {savedUsers.length > 0 && (
        <div>
          <h3>Saved User Details</h3>
          <Table>
            <thead>
              <tr>
                <th>User Name</th>
                <th>User Email</th>
                <th>Role</th>
                <th>Job Title</th>
                <th>Division</th>
                <th>Area</th>
                <th>Location</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {savedUsers.map((user, index) => (
                <tr key={index}>
                  <td>{user.userName}</td>
                  <td>{user.userEmail}</td>
                  <td>{user.userRole}</td>
                  <td>{user.jobTitle}</td>
                  <td>{user.division}</td>
                  <td>{user.area}</td>
                  <td>{user.location}</td>
                  <td>
                    <button onClick={() => handleDeleteUser(index)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}

      {savedJobTitles.length > 0 && (
        <div>
          <button onClick={handleSaveAll}>Save All</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export default Form;
