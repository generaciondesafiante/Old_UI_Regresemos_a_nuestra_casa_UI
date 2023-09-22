import CloseIcon from '@mui/icons-material/Close';
import './ModalEditPhotoProfile.css';

export const ModalEditPhotoProfile = ({
  children,
  openModalProfile,
  closeModalProfile,
  title = 'Add Profile Photo',
}) => {
  return (
    <>
      {openModalProfile && (
        <div className="modalEditProfile-overlay">
          <div className="modalEditProfile-container">
            <div className="modalEditProfile-title">
              <h3>{title}</h3>
            </div>
            <button onClick={() => closeModalProfile(false)}>
              <CloseIcon className="modalEditProfile-iconClose" />
            </button>
            <div className="modalEditProfile-content">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};
