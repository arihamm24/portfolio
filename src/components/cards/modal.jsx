import modals from "../../assets/project-modals.json";
var modal = null;
const Modal = ({projectID, onClose}) => {
    modals.forEach(project => {
    if (project.id = projectID) {
        modal = project;
    }
    });
    return (
      <div></div>
    );
   

}
export default Modal;